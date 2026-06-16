import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadDashboardSeeds } from "./lib/dashboard-data.mjs";
import { normalizePortfolio } from "./lib/portfolio-normalize.mjs";
import { refreshSourceHealth } from "./lib/source-health.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 8766);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml"
};

let portfolioCache = null;
let sourceHealthCache = null;
let sourceRefreshPromise = null;

async function getPortfolioPayload() {
  if (!portfolioCache) {
    const seeds = await loadDashboardSeeds(rootDir);
    const entries = normalizePortfolio(seeds);
    portfolioCache = {
      generatedAt: new Date().toISOString(),
      entries
    };
  }
  return portfolioCache;
}

async function ensureSourceHealth({ force = false, awaitRefresh = false } = {}) {
  const payload = await getPortfolioPayload();
  const stale = !sourceHealthCache || (Date.now() - sourceHealthCache.timestamp) > 15 * 60 * 1000;
  if ((force || stale) && !sourceRefreshPromise) {
    sourceRefreshPromise = refreshSourceHealth(payload.entries)
      .then(result => {
        sourceHealthCache = {
          timestamp: Date.now(),
          payload: result
        };
        return sourceHealthCache;
      })
      .finally(() => {
        sourceRefreshPromise = null;
      });
  }
  if (awaitRefresh && sourceRefreshPromise) {
    await sourceRefreshPromise;
  }
  return sourceHealthCache?.payload || {
    sources: [],
    summary: { sourcesChecked: 0, healthySources: 0, failedSources: 0, checkedAt: null }
  };
}

function sendJson(res, payload, status = 200) {
  res.writeHead(status, {
    "access-control-allow-origin": "*",
    "cache-control": "no-store",
    "content-type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(payload, null, 2));
}

function safeJoin(root, pathname) {
  const target = path.normalize(path.join(root, pathname));
  return target.startsWith(root) ? target : null;
}

async function serveFile(res, pathname) {
  const normalizedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = safeJoin(rootDir, normalizedPath);
  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "cache-control": ext === ".html" ? "no-store" : "public, max-age=60",
      "content-type": mimeTypes[ext] || "application/octet-stream"
    });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "127.0.0.1"}`);

  if (requestUrl.pathname === "/api/health") {
    const health = await ensureSourceHealth();
    sendJson(res, {
      ok: true,
      app: "OncTree backend",
      portfolioRecords: (await getPortfolioPayload()).entries.length,
      sourceSummary: health.summary,
      endpoints: ["/api/health", "/api/portfolio", "/api/source-health"]
    });
    return;
  }

  if (requestUrl.pathname === "/api/portfolio") {
    const payload = await getPortfolioPayload();
    const health = await ensureSourceHealth();
    sendJson(res, {
      generatedAt: payload.generatedAt,
      entries: payload.entries,
      sourceSummary: health.summary
    });
    return;
  }

  if (requestUrl.pathname === "/api/source-health") {
    const force = requestUrl.searchParams.get("refresh") === "1";
    const health = await ensureSourceHealth({ force, awaitRefresh: true });
    sendJson(res, health);
    return;
  }

  await serveFile(res, requestUrl.pathname);
});

server.listen(port, () => {
  console.log(`OncTree backend listening on http://127.0.0.1:${port}`);
});
