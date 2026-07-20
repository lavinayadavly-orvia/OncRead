import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const releaseAllowlist = [
  "app.js",
  "index.html",
  "styles.css",
  "_headers",
  "_redirects",
  "dashboard/SOURCES.md",
  "dashboard/CHANGELOG.md",
  "data/portfolio.json",
  "data/editions",
  "scripts/build-static-portfolio.mjs",
  "scripts/build-dashboard-editions.mjs",
  "scripts/publish-morning-briefing.mjs",
  "scripts/lib/morning-briefing-release.mjs",
  "server/index.mjs",
  "server/lib/dashboard-data.mjs",
  "server/lib/portfolio-normalize.mjs",
  "server/lib/source-health.mjs"
];

export function formatEditionLabel(editionId) {
  const [year, month, day] = editionId.split("-").map(Number);
  return `${day} ${MONTH_NAMES[month - 1]} ${year}`;
}

export function morningEditionLabelForEdition(editionId) {
  const [, month, day] = editionId.split("-").map(Number);
  return `${MONTH_NAMES[month - 1]} ${day} Morning Edition`;
}

export function preparedLabelForEdition(editionId) {
  return morningEditionLabelForEdition(editionId);
}

function assetVersionForEdition(editionId) {
  return `${editionId.replace(/-/g, "")}-morning-edition`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function replaceElementText(source, id, value) {
  const pattern = new RegExp(`(<[^>]+id="${id}"[^>]*>)([\\s\\S]*?)(</[^>]+>)`);
  return source.replace(pattern, `$1${escapeHtml(value)}$3`);
}

export async function readLatestChangelogEntry(rootDir) {
  const changelogPath = path.join(rootDir, "dashboard", "CHANGELOG.md");
  const changelog = await readFile(changelogPath, "utf8");
  const matches = [...changelog.matchAll(/^## (\d{4}-\d{2}-\d{2}) - (.+)$/gm)];
  if (!matches.length) {
    throw new Error("Could not determine latest dated dashboard changelog entry");
  }
  const [current, previous] = matches;
  return {
    date: current[1],
    title: current[2],
    previousDate: previous?.[1] || null,
    previousTitle: previous?.[2] || null
  };
}

export async function readLatestChangelogDate(rootDir) {
  const entry = await readLatestChangelogEntry(rootDir);
  return entry.date;
}

export async function syncPreparedDateLabels(rootDir, editionId) {
  const indexPath = path.join(rootDir, "index.html");
  const source = await readFile(indexPath, "utf8");
  const preparedLabel = preparedLabelForEdition(editionId);
  const assetVersion = assetVersionForEdition(editionId);
  const next = source
    .replace(
      /(Prepared\s+\d{1,2}\s+[A-Za-z]+\s+\d{4}|[A-Za-z]+\s+\d{1,2}\s+Morning Edition)/g,
      preparedLabel
    )
    .replace(
      /(<button id="briefing-primary-action"[^>]*>)([^<]*)(<\/button>)/,
      `$1Read Dossier$3`
    )
    .replace(/styles\.css\?v=[^"]+/g, `styles.css?v=${assetVersion}`)
    .replace(/app\.js\?v=[^"]+/g, `app.js?v=${assetVersion}`);

  if (next === source) {
    if (source.includes(preparedLabel)) {
      return preparedLabel;
    }
    throw new Error("Could not locate prepared date labels in index.html");
  }

  await writeFile(indexPath, next, "utf8");
  return preparedLabel;
}

export async function syncMorningBriefingShell(rootDir, editionId) {
  const editionPath = path.join(rootDir, "data", "editions", `${editionId}.json`);
  const indexPath = path.join(rootDir, "index.html");
  const [editionSource, indexSource] = await Promise.all([
    readFile(editionPath, "utf8"),
    readFile(indexPath, "utf8")
  ]);

  const edition = JSON.parse(editionSource);
  const headline = edition.headlines?.[0]?.title || "Morning briefing";
  const summary = edition.summary || "Current morning edition";
  const preparedLabel = edition.preparedLabel || preparedLabelForEdition(editionId);
  const pulseSummary = `${edition.monthLabel || "Current month"} stays visible as the monthly headline view, and ${edition.editionLabel || "today's edition"} remains available as the dated weekly briefing.`;

  const next = replaceElementText(
    replaceElementText(
      replaceElementText(
        replaceElementText(indexSource, "briefing-headline", headline),
        "briefing-summary",
        summary
      ),
      "briefing-date-label",
      preparedLabel
    ),
    "briefing-pulse-summary",
    pulseSummary
  );

  if (next !== indexSource) {
    await writeFile(indexPath, next, "utf8");
  }
}
