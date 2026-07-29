# Morning Oncology Dashboard Automation Runbook

This repository is the durable handoff source for the Codex automation:

- Automation ID: `weekly-oncology-dashboard-update`
- Name: `Morning Oncology Dashboard Briefing`
- Workspace: `/Users/lavinayadav/Documents/ASCO`
- Schedule: daily at `6:15 AM IST`
- Current recurrence: `RRULE:FREQ=DAILY;BYHOUR=6;BYMINUTE=15`
- Local Codex automation file, when present: `$CODEX_HOME/automations/weekly-oncology-dashboard-update/automation.toml`
- Local Codex automation memory, when present: `$CODEX_HOME/automations/weekly-oncology-dashboard-update/memory.md`

Use this file to recreate or orient the automation on a different laptop. Git preserves repository state, but Codex local automation settings and local memories may not move with the clone.

## Operating Contract

Review worldwide oncology developments published or made officially visible in the past 24 hours before the scheduled `6:15 AM IST` run and update the ASCO interactive dashboard only with verified, material information.

Prioritize primary and authoritative sources: peer-reviewed papers, conference abstract databases, ClinicalTrials.gov or recognized trial registries, FDA, EMA, CDSCO and other national regulators, WHO/IARC, official company releases for regulatory or commercial facts, and official pricing or government procurement sources. Cross-check consequential claims with a second reliable source where feasible.

Do not treat the dashboard's current taxonomy, data fields, cards, tables, filters, scoring model, or page layout as a boundary on what can be included. Begin each run with an open-ended significance review of verified oncology developments, including items that may not fit existing treatment, technology, cost, India-access, evidence-phase, or equity categories. Examples include diagnostics, screening, surgery, radiotherapy, prevention, supportive and palliative care, biomarkers, manufacturing, shortages, safety signals, withdrawals, negative trials, guideline changes, regulatory policy, reimbursement, care delivery, workforce, epidemiology, public health, trial methodology, data infrastructure, and new therapeutic modalities.

For any important nonconforming update, explicitly determine:

- why it matters to cancer care
- who and where it affects
- the decision or outcome it may change
- the strength and limitations of the evidence
- whether the dashboard information architecture needs to evolve

Extend the data model, categories, filters, visualizations, detail panels, navigation, explanatory text, and methodology where needed. Prefer a coherent reusable addition over forcing information into an inaccurate category. Preserve comparability with existing content, avoid unnecessary redesign, and document every structural change in `dashboard/CHANGELOG.md`.

If a finding is important but cannot yet be responsibly represented, add a clearly labeled watchlist or emerging-signal section with the reason, evidence gap, and next verification milestone.

## Data Rules

For every added or changed item, capture these fields where applicable:

- publication or event date
- geography
- cancer type
- intervention or issue
- manufacturer or responsible organization
- study phase and design
- population
- comparator
- endpoints
- effect sizes with confidence intervals when available
- safety
- regulatory status
- cost in original currency and INR where applicable
- India availability
- anticipated India launch only when officially announced

Use `not applicable` when a field genuinely does not apply. Use `not reported`, `not verified`, or `no official date announced` when information is unavailable.

Clearly label estimates, currency conversions, conference-only findings, press-release-only findings, subgroup analyses, immature data, investigational uses, off-label uses, and inference.

Never invent missing values, launch dates, prices, study results, citations, categories, or conclusions. Preserve existing evidence-rating definitions where applicable, introduce new rating logic only with explicit documented rationale, and avoid direct cross-trial superiority claims.

Include negative, neutral, contradictory, withdrawn, or safety-related evidence when material. Novelty and positive results are not prerequisites for inclusion.

Do not modify the detailed Word report unless explicitly requested.

## Repo-Owned Surfaces

Primary dashboard and data files:

- `app.js`
- `styles.css`
- `index.html`
- `dashboard/index.html`
- `data/portfolio.json`
- `data/editions/index.json`
- `data/editions/YYYY-MM-DD.json`
- `server/lib/dashboard-data.mjs`
- `server/lib/portfolio-normalize.mjs`

Required ledgers:

- `dashboard/SOURCES.md`
- `dashboard/CHANGELOG.md`

Build and publish scripts:

- `scripts/build-static-portfolio.mjs`
- `scripts/build-dashboard-editions.mjs`
- `scripts/publish-morning-briefing.mjs`
- `scripts/lib/morning-briefing-release.mjs`

## No-Change Runs

If no material verified update exists, make no content changes to substantive dashboard records. Still do all of the following:

- record the review outcome in `dashboard/SOURCES.md`
- add a dated entry to `dashboard/CHANGELOG.md`
- ensure the visible briefing edition reflects the review date
- rebuild the static portfolio and newsletter archive
- validate locally
- publish the repo-owned briefing changes

Do not leave the visible briefing on an older edition after a completed review.

## Validation Checklist

Before publishing, run syntax/build checks and local browser validation.

Typical commands:

```bash
node --check app.js
node --check server/index.mjs
node scripts/build-static-portfolio.mjs
python3 -m http.server 4173 --bind 127.0.0.1
```

Validate at localhost:

- current visible morning edition
- navigation
- filters
- search aliases
- comparisons
- treatment detail panels
- India access and cost views
- any new structural components
- source links
- responsive behavior, including mobile width around `390x844`
- browser console warnings and errors
- accessibility basics such as readable labels and keyboard-reachable controls

If `server/index.mjs` cannot bind because of local sandbox permissions, use the static HTTP server fallback above.

## Publish Rule

After verification, rebuild the static hosted assets and archive, then publish in the same run.

Primary publish command:

```bash
node scripts/publish-morning-briefing.mjs
```

That helper rebuilds assets, stages briefing-owned allowlisted paths, commits with a date-based message, and pushes to `origin/<current-branch>`.

Do not rely on the helper as the only release path. If it fails at git staging, `.git/index.lock`, permissions, or push/network, immediately finish the release in the same run with direct git commands, staging only the briefing-owned paths covered by `scripts/lib/morning-briefing-release.mjs`.

Fallback shape:

```bash
git add <briefing-owned allowlisted paths>
git commit -m "Morning briefing refresh YYYY-MM-DD"
git push origin HEAD:refs/heads/main
git ls-remote origin refs/heads/main
```

After fallback publishing, verify that `origin/main` advanced. Never leave the dashboard locally rebuilt but unpublished.

If every publish path fails, report the exact blocker and the exact command that failed.

## New Laptop Handoff

On a new laptop:

1. Clone or pull the repository.
2. Open this runbook first.
3. Recreate the Codex automation using:
   - ID: `weekly-oncology-dashboard-update`
   - kind: heartbeat
   - schedule: daily `6:15 AM IST`
   - prompt: the operating contract in this runbook
4. Confirm Git remotes and branch:

```bash
git status
git branch --show-current
git remote -v
git log --oneline -5
```

5. Before the first run, verify the publish path using the current branch and confirm the account has push access to `origin/main`.

## Latest Local Notes Before Handoff

As of July 29, 2026, the automation prompt was corrected to `6:15 AM IST`, and the unattended direct-git publish fallback was added. The local automation memory was also cleaned so historical entries no longer repeat the older schedule wording.
