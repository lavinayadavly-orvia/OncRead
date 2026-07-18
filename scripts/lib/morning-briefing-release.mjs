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

export function preparedLabelForEdition(editionId) {
  return `Prepared ${formatEditionLabel(editionId)}`;
}

export async function readLatestChangelogDate(rootDir) {
  const changelogPath = path.join(rootDir, "dashboard", "CHANGELOG.md");
  const changelog = await readFile(changelogPath, "utf8");
  const match = changelog.match(/^## (\d{4}-\d{2}-\d{2}) - /m);
  if (!match) {
    throw new Error("Could not determine latest dated dashboard changelog entry");
  }
  return match[1];
}

export async function syncPreparedDateLabels(rootDir, editionId) {
  const indexPath = path.join(rootDir, "index.html");
  const source = await readFile(indexPath, "utf8");
  const preparedLabel = preparedLabelForEdition(editionId);
  const next = source.replace(/Prepared\s+\d{1,2}\s+[A-Za-z]+\s+\d{4}/g, preparedLabel);

  if (next === source) {
    throw new Error("Could not locate prepared date labels in index.html");
  }

  await writeFile(indexPath, next, "utf8");
  return preparedLabel;
}
