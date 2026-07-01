function extractTag(html, tag) {
  const match = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? match[1].replace(/\s+/g, " ").trim() : null;
}

function extractMeta(html, name) {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["']`, "i")
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1].trim();
  }
  return null;
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return match ? match[1].trim() : null;
}

function textSnippet(html) {
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.slice(0, 240) || null;
}

function authorityFromUrl(url) {
  const hostname = new URL(url).hostname;
  if (hostname.includes("fda.gov")) return "FDA";
  if (hostname.includes("ema.europa.eu")) return "EMA";
  if (hostname.includes("clinicaltrials.gov")) return "ClinicalTrials.gov";
  if (hostname.includes("ascopubs.org")) return "ASCO / JCO";
  if (hostname.includes("asco.org")) return "ASCO";
  if (hostname.includes("nejm.org")) return "NEJM";
  return hostname.replace(/^www\./, "");
}

async function fetchWithTimeout(url, timeoutMs = 9000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent": "OncReadSourceMonitor/1.0 (+http://127.0.0.1 local review backend)"
      }
    });
  } finally {
    clearTimeout(timer);
  }
}

async function inspectSource(source) {
  const startedAt = new Date().toISOString();
  try {
    const response = await fetchWithTimeout(source.url);
    const contentType = response.headers.get("content-type") || "unknown";
    const body = contentType.includes("text") || contentType.includes("json") || contentType.includes("xml")
      ? await response.text()
      : "";
    return {
      url: source.url,
      authority: source.authority,
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      contentType,
      fetchedAt: startedAt,
      lastModified: response.headers.get("last-modified"),
      etag: response.headers.get("etag"),
      title: extractTag(body, "title"),
      canonical: extractCanonical(body),
      description: extractMeta(body, "description") || extractMeta(body, "og:description"),
      snippet: body ? textSnippet(body) : null,
      records: source.records
    };
  } catch (error) {
    return {
      url: source.url,
      authority: source.authority,
      ok: false,
      status: 0,
      finalUrl: source.url,
      contentType: null,
      fetchedAt: startedAt,
      lastModified: null,
      etag: null,
      title: null,
      canonical: null,
      description: null,
      snippet: null,
      records: source.records,
      error: error.message
    };
  }
}

export function buildSourceCatalog(entries) {
  const byUrl = new Map();
  entries.forEach(entry => {
    entry.sourceLinks.forEach(link => {
      if (!link?.url || !/^https?:\/\//.test(link.url)) return;
      if (!byUrl.has(link.url)) {
        byUrl.set(link.url, {
          url: link.url,
          authority: authorityFromUrl(link.url),
          records: []
        });
      }
      byUrl.get(link.url).records.push({
        id: entry.id,
        title: entry.title,
        lane: entry.lane,
        label: link.label
      });
    });
  });
  return [...byUrl.values()];
}

export async function refreshSourceHealth(entries) {
  const sources = buildSourceCatalog(entries);
  const results = await Promise.all(sources.map(inspectSource));
  const healthySources = results.filter(item => item.ok).length;
  return {
    sources: results,
    summary: {
      sourcesChecked: results.length,
      healthySources,
      failedSources: results.length - healthySources,
      checkedAt: new Date().toISOString()
    }
  };
}
