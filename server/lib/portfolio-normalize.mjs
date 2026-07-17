const portfolioAliasRules = [
  { match: /nivolumab/i, aliases: ["Opdivo"] },
  { match: /pembrolizumab/i, aliases: ["Keytruda"] },
  { match: /gedatolisib|revtorpyk/i, aliases: ["Revtorpyk"] },
  { match: /durvalumab/i, aliases: ["Imfinzi"] },
  { match: /atezolizumab/i, aliases: ["Tecentriq"] },
  { match: /cemiplimab/i, aliases: ["Libtayo"] },
  { match: /tregzi|orca-t/i, aliases: ["Tregzi", "Orca-T"] },
  { match: /selpercatinib|retevmo|retsevmo/i, aliases: ["Retevmo", "Retsevmo"] },
  { match: /palbociclib/i, aliases: ["Ibrance"] },
  { match: /tucatinib/i, aliases: ["Tukysa"] },
  { match: /trastuzumab deruxtecan|t-dxd/i, aliases: ["Enhertu"] },
  { match: /pertuzumab/i, aliases: ["Perjeta"] },
  { match: /pemigatinib/i, aliases: ["Pemazyre"] },
  { match: /amivantamab/i, aliases: ["Rybrevant"] },
  { match: /niraparib/i, aliases: ["Zejula", "Akeega"] },
  { match: /abiraterone/i, aliases: ["Zytiga", "Akeega"] },
  { match: /sacituzumab govitecan|trodelvy/i, aliases: ["Trodelvy"] },
  { match: /rusfertide/i, aliases: ["PTG-300"] },
  { match: /camizestrant/i, aliases: ["AZD9833"] },
  { match: /can-2409/i, aliases: ["aglatimagene besadenovec"] },
  { match: /intismeran autogene cevumeran|personalized mrna neoantigen therapy/i, aliases: ["mRNA-4157", "V940"] }
];

function buildSearchText(...parts) {
  const text = parts.filter(Boolean).join(" ");
  const aliases = portfolioAliasRules
    .filter(rule => rule.match.test(text))
    .flatMap(rule => rule.aliases);
  return `${text} ${aliases.join(" ")}`.trim().toLowerCase();
}

export function normalizePortfolio({ treatments, asco2025Followup, watchlistSignals }) {
  let order = 0;
  const entries = [];

  treatments.forEach(item => {
    entries.push({
      id: `treatment:${item.id}`,
      lane: "treatment",
      laneLabel: "Treatment explorer",
      order: order++,
      title: item.name,
      subtitle: `${item.short} · ${item.cancer} · ${item.setting}`,
      organization: item.company,
      snapshot: `${item.phase} · ${item.impact}`,
      summary: item.benefit,
      headline: `${item.headline} · ${item.headlineNote}`,
      statusLabel: item.indiaLabel,
      badges: [item.phase, item.impact, item.indiaLabel],
      searchText: buildSearchText(item.name, item.short, item.cancer, item.setting, item.company, item.phase, item.impact, item.headline, item.headlineNote, item.benefit, item.safety),
      route: { view: "treatments", kind: "detail", id: item.id, label: "Open treatment dossier" },
      sourceLinks: [
        { label: item.sourceLabel || "Primary study", url: item.source },
        ...(item.supportingSources || [])
      ],
      sections: [
        ["Cancer and setting", `${item.cancer} · ${item.setting}`],
        ["Manufacturer / organization", item.company],
        ...(item.detailSections || []),
        ["Measured effect", `${item.headline}. ${item.headlineNote}`, "wide"],
        ["Clinical meaning", item.benefit, "wide"],
        ["Safety and burden", item.safety, "wide"],
        ["Cost and India access", `${item.cost}. ${item.indiaPrice} ${item.indiaCaveat}`, "wide"],
        ["Launch / market status", `${item.launch}. ${item.indiaLabel}`],
        ["Current limitation", item.limitations, "wide"]
      ]
    });
  });

  asco2025Followup.forEach(item => {
    entries.push({
      id: `followup:${item.id}`,
      lane: "followup",
      laneLabel: "ASCO 2025 follow-up",
      order: order++,
      title: item.program,
      subtitle: `${item.trial} · ${item.cancer}`,
      organization: item.company,
      snapshot: item.currentMilestone,
      summary: item.assessment,
      headline: item.effect,
      statusLabel: item.statusLabel,
      badges: [item.statusLabel, item.cancer],
      searchText: buildSearchText(item.program, item.trial, item.cancer, item.company, item.statusLabel, item.ascoSignal, item.currentMilestone, item.effect, item.assessment, item.safety),
      route: { view: "followup", kind: "followup", id: item.id, label: "Open follow-up dossier" },
      sourceLinks: [
        { label: "ASCO-era evidence", url: item.conferenceSource },
        { label: "Current-status source", url: item.currentSource },
        item.secondarySource ? { label: "Additional verification", url: item.secondarySource } : null
      ].filter(Boolean),
      sections: [
        ["Trial design", item.design],
        ["Population / sample", item.population],
        ["Comparator", item.comparator],
        ["Measured effect", item.effect, "wide"],
        ["Current milestone", item.currentMilestone],
        ["What changed after ASCO", item.evidenceDelta, "wide"],
        ["Regional status", `US: ${item.us} Europe: ${item.eu} India: ${item.india}`, "full"],
        ["Safety and burden", item.safety, "wide"],
        ["Next verifiable decision point", item.nextDecision],
        ["Evidence confidence", item.confidence]
      ]
    });
  });

  watchlistSignals.forEach(item => {
    entries.push({
      id: `watchlist:${item.id}`,
      lane: "watchlist",
      laneLabel: "Watchlist & systems",
      order: order++,
      title: item.title,
      subtitle: `${item.category} · ${item.cancer} · ${item.geography}`,
      organization: item.organization,
      snapshot: `${item.statusLabel} · ${item.date}`,
      summary: item.whyMatters,
      headline: item.effect,
      statusLabel: item.statusLabel,
      badges: [item.statusLabel, item.category, item.geography],
      searchText: buildSearchText(item.title, item.short, item.category, item.cancer, item.geography, item.organization, item.issue, item.effect, item.decisionImpact, item.whyMatters),
      route: { view: "watchlist", kind: "watchlist", id: item.id, label: "Open watchlist dossier" },
      sourceLinks: [
        { label: "Source", url: item.source },
        item.secondarySource ? { label: "Secondary check", url: item.secondarySource } : null
      ].filter(Boolean),
      sections: [
        ["Issue", item.issue],
        ["Population / sample", item.population],
        ["Comparator", item.comparator],
        ["Observed effect", item.effect, "wide"],
        ["Why it matters to care", item.whyMatters, "wide"],
        ["Who and where it affects", item.whoAffected, "wide"],
        ["What decision could change", item.decisionImpact, "wide"],
        ["Evidence strength", item.evidenceStrength],
        ["India relevance", item.indiaImpact, "wide"],
        ["Cost / procurement", item.cost],
        ["Current limitation", item.limitations, "wide"],
        ["Next verification milestone", item.nextMilestone],
        ["Verification note", item.verification, "full"]
      ]
    });
  });

  return entries;
}
