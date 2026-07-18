import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { loadDashboardSeeds, loadDashboardSeedsFromSource } from "../server/lib/dashboard-data.mjs";
import { normalizePortfolio } from "../server/lib/portfolio-normalize.mjs";
import { formatEditionLabel, MONTH_NAMES, readLatestChangelogDate } from "./lib/morning-briefing-release.mjs";

const editionBlueprints = [
  {
    id: "2026-06-15",
    mode: "git",
    ref: "79f77f1",
    summary: "Morning briefing mode launched with the first watchlist-and-systems expansion, giving the dashboard a plain-language front page and explicit room for nonconforming oncology signals.",
    provenance: "Seeded from the 15 June 2026 briefing-era git commit.",
    headlines: [
      {
        tag: "New briefing surface",
        title: "Morning briefing becomes the front door",
        summary: "The dashboard shifted from a static review page to a decision-first morning briefing that routes users into the underlying dossiers."
      },
      {
        tag: "Watchlist expansion",
        title: "Screening, de-escalation and workforce signals gain a home",
        summary: "OPTIMA, Galleri, bladder-preservation, and oncology workforce warnings were retained as explicit system-level records rather than being forced into treatment cards."
      },
      {
        tag: "Why it matters",
        title: "Non-drug developments now stay visible",
        summary: "The dashboard began preserving cautionary and operational oncology developments that shape care even when they are not treatment approvals."
      }
    ]
  },
  {
    id: "2026-06-25",
    mode: "derived-current",
    transform: "removeTregzi",
    summary: "The late-June edition captured two breast-cancer regulatory upgrades: a new palbociclib maintenance dossier and the FDA approval of ASCENT-04 / KEYNOTE-D19.",
    provenance: "Derived from the current working tree with the July 2026 Tregzi addition removed to recreate the 25 June 2026 dashboard state.",
    headlines: [
      {
        tag: "New FDA dossier",
        title: "Palbociclib HER2 maintenance enters the tracker",
        summary: "The dashboard added a dedicated PATINA-driven treatment record for the 24 June 2026 FDA maintenance approval in HR-positive, HER2-positive advanced breast cancer."
      },
      {
        tag: "Follow-up becomes approval",
        title: "ASCENT-04 completes the conference-to-label path",
        summary: "Sacituzumab govitecan plus pembrolizumab moved from ASCO evidence to FDA-approved first-line TNBC therapy."
      },
      {
        tag: "Search upgrade",
        title: "Brand-name search now resolves newer dossiers",
        summary: "Portfolio aliasing was expanded so users could find the new palbociclib entry through the `Ibrance` brand name."
      }
    ]
  },
  {
    id: "2026-06-30",
    mode: "derived-current",
    transform: "removeTregzi",
    summary: "The 30 June 2026 review published as a no-material-change edition: the dashboard held its late-June breast-cancer approvals while official-source checks did not justify a new promotion.",
    provenance: "Derived from the current working tree with the July 2026 Tregzi addition removed to recreate the 30 June 2026 no-change review edition.",
    headlines: [
      {
        tag: "Verified hold",
        title: "No new material dashboard item cleared the bar",
        summary: "Official-source checks did not surface a post-28 June development strong enough for responsible inclusion."
      },
      {
        tag: "Newest approval then",
        title: "ASCENT-04 remained the most recent verified approval",
        summary: "The shortcut rail still pointed to the 24 June 2026 TNBC approval as the latest regulator-confirmed milestone in the dashboard."
      },
      {
        tag: "What stayed important",
        title: "Workforce and screening caution signals remained active",
        summary: "The dashboard preserved system-level warnings and negative screening evidence rather than dropping them on quiet regulatory days."
      }
    ]
  }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function monthKeyFromEditionId(editionId) {
  return editionId.slice(0, 7);
}

function monthLabel(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

function loadSeedsFromGitRef(rootDir, ref) {
  const source = execFileSync("git", ["show", `${ref}:app.js`], {
    cwd: rootDir,
    encoding: "utf8"
  });
  return loadDashboardSeedsFromSource(source, `git:${ref}:app.js`);
}

function applyTransform(seeds, transform) {
  const next = clone(seeds);
  if (transform === "removeTregzi") {
    next.treatments = next.treatments.filter(item => item.id !== "tregzi");
  }
  return next;
}

function newestApproval(seeds) {
  const treatmentApproval = seeds.treatments
    .filter(item => item.eventDate)
    .map(item => ({
      route: { view: "treatments", kind: "detail", targetId: item.id },
      title: item.name,
      subtitle: item.launch,
      date: Date.parse(item.eventDate) || 0
    }))
    .sort((a, b) => b.date - a.date)[0];

  const followupApproval = seeds.asco2025Followup
    .filter(item => item.status === "approved")
    .map(item => {
      const parsed = item.currentMilestone.split("·").pop()?.trim() || "";
      return {
        route: { view: "followup", kind: "followup", targetId: item.id },
        title: item.program,
        subtitle: item.currentMilestone,
        date: Date.parse(parsed) || 0
      };
    })
    .sort((a, b) => b.date - a.date)[0];

  return [treatmentApproval, followupApproval].filter(Boolean).sort((a, b) => b.date - a.date)[0] || null;
}

function defaultHeadlinesForEdition(seeds) {
  const approval = newestApproval(seeds);
  const topTreatment = [...seeds.treatments]
    .sort((a, b) => (b.impactScore + b.maturity) - (a.impactScore + a.maturity))[0];
  const caution = seeds.watchlistSignals.find(item => item.status === "negative") || seeds.watchlistSignals[0];

  return [
    approval ? {
      tag: "Latest verified approval",
      title: approval.title,
      summary: approval.subtitle
    } : null,
    topTreatment ? {
      tag: "Highest-impact treatment pool",
      title: topTreatment.name,
      summary: topTreatment.benefit
    } : null,
    caution ? {
      tag: caution.statusLabel,
      title: caution.title,
      summary: caution.whyMatters
    } : null
  ].filter(Boolean);
}

function spotlightCards(seeds) {
  const items = [];
  const approval = newestApproval(seeds);
  if (approval) items.push(approval);

  const treatmentLead = [...seeds.treatments]
    .sort((a, b) => (b.impactScore + b.maturity) - (a.impactScore + a.maturity))[0];
  if (treatmentLead) {
    items.push({
      route: { view: "treatments", kind: "detail", targetId: treatmentLead.id },
      title: treatmentLead.name,
      subtitle: `${treatmentLead.phase} · ${treatmentLead.indiaLabel}`,
      date: 0
    });
  }

  const followupLead = seeds.asco2025Followup.find(item => item.status === "approved") || seeds.asco2025Followup[0];
  if (followupLead) {
    items.push({
      route: { view: "followup", kind: "followup", targetId: followupLead.id },
      title: followupLead.program,
      subtitle: followupLead.currentMilestone,
      date: 0
    });
  }

  const watchLead = seeds.watchlistSignals.find(item => item.status === "systems")
    || seeds.watchlistSignals.find(item => item.status === "negative")
    || seeds.watchlistSignals[0];
  if (watchLead) {
    items.push({
      route: { view: "watchlist", kind: "watchlist", targetId: watchLead.id },
      title: watchLead.title,
      subtitle: watchLead.statusLabel,
      date: 0
    });
  }

  return items
    .filter((item, index, list) => list.findIndex(candidate => candidate.title === item.title) === index)
    .slice(0, 4);
}

function buildEditionSnapshot({ id, seeds, summary, provenance, headlines }) {
  const entries = normalizePortfolio(seeds);
  const approvals = seeds.asco2025Followup.filter(item => item.status === "approved").length;
  const indiaMarketed = seeds.treatments.filter(item => item.indiaStatus === "available").length;

  return {
    id,
    editionLabel: formatEditionLabel(id),
    preparedLabel: `Prepared ${formatEditionLabel(id)}`,
    monthKey: monthKeyFromEditionId(id),
    monthLabel: monthLabel(monthKeyFromEditionId(id)),
    summary,
    provenance,
    metrics: {
      insights: 4,
      treatments: seeds.treatments.length,
      followupApprovals: approvals,
      indiaMarketed,
      watchlistSignals: seeds.watchlistSignals.length,
      verifiedRecords: entries.length
    },
    headlines: headlines?.length ? headlines : defaultHeadlinesForEdition(seeds),
    spotlight: spotlightCards(seeds),
    sourceCount: entries.length,
    routeSummary: {
      approval: newestApproval(seeds)
    }
  };
}

function editionCard(snapshot) {
  return {
    id: snapshot.id,
    editionLabel: snapshot.editionLabel,
    preparedLabel: snapshot.preparedLabel,
    monthKey: snapshot.monthKey,
    monthLabel: snapshot.monthLabel,
    summary: snapshot.summary,
    file: `/data/editions/${snapshot.id}.json`,
    metrics: snapshot.metrics
  };
}

export async function buildDashboardEditions(rootDir) {
  const currentEditionId = await readLatestChangelogDate(rootDir);
  const currentSeeds = await loadDashboardSeeds(rootDir);
  const currentBlueprint = currentEditionId === "2026-07-01"
    ? {
        id: currentEditionId,
        mode: "current",
        summary: "The 1 July 2026 weekly edition added FDA-approved Tregzi as a new hematologic-malignancy transplant dossier and refreshed the latest-approval logic around that regulator action.",
        provenance: "Generated from the current working tree.",
        headlines: [
          {
            tag: "New FDA dossier",
            title: "Tregzi becomes the newest verified approval in the dashboard",
            summary: "The dashboard added a transplant-cell-therapy dossier for the 30 June 2026 FDA approval in matched-donor myeloablative HSCT."
          },
          {
            tag: "Archive-ready state",
            title: "Current edition now carries enough structure to be archived weekly",
            summary: "The same weekly pass can now be retained as a dated newsletter edition instead of being overwritten in place."
          },
          {
            tag: "Systems context",
            title: "Regulatory change is still framed alongside access and caution signals",
            summary: "The live edition keeps Tregzi beside affordability, workforce, and screening constraints rather than treating approvals as the whole story."
          }
        ]
      }
    : {
        id: currentEditionId,
        mode: "current",
        summary: `Weekly newsletter edition captured for ${formatEditionLabel(currentEditionId)}.`,
        provenance: "Generated from the current working tree."
      };

  const blueprints = [...editionBlueprints];
  if (!blueprints.find(item => item.id === currentEditionId)) {
    blueprints.push(currentBlueprint);
  } else {
    const idx = blueprints.findIndex(item => item.id === currentEditionId);
    blueprints[idx] = { ...blueprints[idx], ...currentBlueprint };
  }

  const editions = [];
  for (const blueprint of blueprints.sort((a, b) => a.id.localeCompare(b.id))) {
    let seeds;
    if (blueprint.mode === "git") {
      seeds = loadSeedsFromGitRef(rootDir, blueprint.ref);
    } else if (blueprint.mode === "derived-current") {
      seeds = applyTransform(currentSeeds, blueprint.transform);
    } else {
      seeds = clone(currentSeeds);
    }

    const snapshot = buildEditionSnapshot({
      id: blueprint.id,
      seeds,
      summary: blueprint.summary,
      provenance: blueprint.provenance,
      headlines: blueprint.headlines
    });
    editions.push(snapshot);
  }

  const currentSnapshot = editions.find(item => item.id === currentEditionId) || buildEditionSnapshot({
    id: currentEditionId,
    seeds: clone(currentSeeds),
    summary: "Current weekly edition snapshot.",
    provenance: "Generated from the current working tree."
  });

  const editionsDir = path.join(rootDir, "data", "editions");
  await mkdir(editionsDir, { recursive: true });

  for (const snapshot of editions) {
    const outputPath = path.join(editionsDir, `${snapshot.id}.json`);
    await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  }

  const groupedMonths = new Map();
  editions
    .slice()
    .sort((a, b) => b.id.localeCompare(a.id))
    .forEach(snapshot => {
      const month = snapshot.monthKey;
      if (!groupedMonths.has(month)) {
        groupedMonths.set(month, {
          monthKey: month,
          monthLabel: snapshot.monthLabel,
          leadEditionId: snapshot.id,
          highlights: []
        });
      }
      const bucket = groupedMonths.get(month);
      bucket.highlights.push(...snapshot.headlines.map(item => ({
        editionId: snapshot.id,
        editionLabel: snapshot.editionLabel,
        tag: item.tag,
        title: item.title,
        summary: item.summary
      })));
    });

  const monthlyHeadlines = [...groupedMonths.values()].map(bucket => ({
    ...bucket,
    highlights: bucket.highlights.slice(0, 6)
  }));

  const indexPayload = {
    generatedAt: new Date().toISOString(),
    currentEditionId,
    currentEditionLabel: formatEditionLabel(currentEditionId),
    editions: editions
      .slice()
      .sort((a, b) => b.id.localeCompare(a.id))
      .map(editionCard),
    monthlyHeadlines
  };

  const indexPath = path.join(editionsDir, "index.json");
  await writeFile(indexPath, `${JSON.stringify(indexPayload, null, 2)}\n`, "utf8");

  return {
    currentEditionId,
    editionCount: editions.length,
    monthlyHeadlineCount: monthlyHeadlines.length,
    currentSnapshot
  };
}
