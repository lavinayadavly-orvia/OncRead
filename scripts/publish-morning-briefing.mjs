import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  preparedLabelForEdition,
  readLatestChangelogDate,
  releaseAllowlist,
  syncMorningBriefingShell,
  syncPreparedDateLabels
} from "./lib/morning-briefing-release.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const args = new Set(process.argv.slice(2));

if (args.has("--help")) {
  console.log("Usage: node scripts/publish-morning-briefing.mjs [--dry-run] [--no-push]");
  process.exit(0);
}

const dryRun = args.has("--dry-run");
const noPush = args.has("--no-push");

function run(cmd, cmdArgs, options = {}) {
  return execFileSync(cmd, cmdArgs, {
    cwd: rootDir,
    encoding: "utf8",
    stdio: options.stdio || "pipe"
  });
}

function hasStagedChanges() {
  try {
    execFileSync("git", ["diff", "--cached", "--quiet", "--exit-code"], { cwd: rootDir, stdio: "ignore" });
    return false;
  } catch {
    return true;
  }
}

function readPublishTargetBranch() {
  const override = process.env.ONCREAD_PUBLISH_BRANCH?.trim();
  if (override) return override;

  for (const args of [
    ["symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
    ["rev-parse", "--abbrev-ref", "origin/HEAD"]
  ]) {
    try {
      const ref = run("git", args).trim();
      const branch = ref.replace(/^origin\//, "");
      if (branch && branch !== "HEAD") {
        return branch;
      }
    } catch {
      // Fall through to the next resolver.
    }
  }

  return "main";
}

const editionId = await readLatestChangelogDate(rootDir);
const branch = run("git", ["rev-parse", "--abbrev-ref", "HEAD"]).trim();
const publishBranch = readPublishTargetBranch();
const preparedLabel = preparedLabelForEdition(editionId);

if (dryRun) {
  console.log(`Would sync current edition label to ${preparedLabel}.`);
  console.log("Dry run: skipping rebuild, git add, commit, and push.");
  console.log(`Would rebuild assets from ${branch} and publish briefing-owned paths to origin/${publishBranch}.`);
  console.log(`Allowlisted paths: ${releaseAllowlist.join(", ")}`);
  process.exit(0);
}

execFileSync("node", ["scripts/build-static-portfolio.mjs"], {
  cwd: rootDir,
  stdio: "inherit"
});

await syncPreparedDateLabels(rootDir, editionId);
await syncMorningBriefingShell(rootDir, editionId);

console.log(`Synced current edition shell to ${preparedLabel}`);

execFileSync("git", ["add", "--", ...releaseAllowlist], {
  cwd: rootDir,
  stdio: "inherit"
});

if (!hasStagedChanges()) {
  console.log("No staged briefing-owned changes to publish.");
  process.exit(0);
}

const commitMessage = `Morning briefing refresh ${editionId}`;
execFileSync("git", ["commit", "-m", commitMessage], {
  cwd: rootDir,
  stdio: "inherit"
});

if (noPush) {
  console.log(`Created local release commit on ${branch}; push to origin/${publishBranch} skipped by --no-push.`);
  process.exit(0);
}

execFileSync("git", ["push", "origin", `HEAD:refs/heads/${publishBranch}`], {
  cwd: rootDir,
  stdio: "inherit"
});

console.log(`Published ${commitMessage} from ${branch} to origin/${publishBranch}`);
