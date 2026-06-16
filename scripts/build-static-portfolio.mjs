import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadDashboardSeeds } from "../server/lib/dashboard-data.mjs";
import { normalizePortfolio } from "../server/lib/portfolio-normalize.mjs";
import { buildSourceCatalog } from "../server/lib/source-health.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "data");
const outputPath = path.join(outputDir, "portfolio.json");

const seeds = await loadDashboardSeeds(rootDir);
const entries = normalizePortfolio(seeds);
const sources = buildSourceCatalog(entries);

const payload = {
  generatedAt: new Date().toISOString(),
  snapshotType: "static-site",
  entries,
  sourceSummary: {
    sourcesChecked: sources.length,
    healthySources: null,
    failedSources: null,
    checkedAt: null,
    note: "Static hosted snapshot: source links are attached, but live source-health checks require the local backend."
  }
};

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`Wrote ${outputPath}`);
