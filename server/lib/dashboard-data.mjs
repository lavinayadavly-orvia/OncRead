import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

export async function loadDashboardSeeds(rootDir) {
  const appPath = path.join(rootDir, "app.js");
  const source = await readFile(appPath, "utf8");
  const boundary = source.indexOf("const viewTitles =");
  if (boundary === -1) {
    throw new Error("Could not locate dashboard data boundary in app.js");
  }

  const context = {};
  vm.createContext(context);
  const script = `${source.slice(0, boundary)}\nthis.__dashboardSeeds = { treatments, asco2025Followup, watchlistSignals };`;
  vm.runInContext(script, context, { filename: "app.js" });
  return JSON.parse(JSON.stringify(context.__dashboardSeeds));
}
