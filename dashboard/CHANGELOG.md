# Dashboard Changelog

## 2026-07-01 - Newsletter Archive And Monthly Headlines

- Added a new `Newsletters & headlines` view that preserves weekly dashboard states as dated newsletter editions instead of letting each refresh overwrite the prior storytelling layer.
- Added a `Headlines of the month` section to the live morning briefing so accumulated monthly themes are visible without leaving the current edition.
- Added a static archive data pipeline under `data/editions/`, including an index file for monthly rollups and one JSON file per retained edition, so the Pages deployment can reopen dated editions without a backend.
- Seeded the archive with retained June and July 2026 editions, including a reopenable 15 June 2026 edition representing the original watchlist-and-briefing-era state.
- Extended `scripts/build-static-portfolio.mjs` so the same static build step now refreshes both the searchable portfolio snapshot and the weekly newsletter archive.

## 2026-07-01 - Hematologic Transplant Approval Added

- Reviewed oncology developments published after the 2026-06-30 pass with emphasis on directly verifiable regulator and sponsor sources, including the FDA oncology approval notifications index and current EMA medicine-status pages.
- Added a new `Tregzi Transplant Cell Therapy` treatment dossier after the FDA's 30 June 2026 approval of allogeneic regulatory T cell-based immunotherapy with HSPC and T cells-vldq for matched-donor myeloablative HSCT in adults with hematologic malignancies.
- Structured the new dossier around transplant-specific decision fields including population, comparator, endpoint, geography and regulatory context because this approval is materially important to cancer care but does not fit cleanly into the dashboard's original solid-tumor efficacy-card pattern.
- Extended treatment normalization to accept optional structured detail sections and supporting source links so future regulator-driven oncology items can be represented without forcing key evidence into generic prose.
- Updated `dashboard/SOURCES.md`, added `Tregzi` / `Orca-T` portfolio alias coverage, and rebuilt `data/portfolio.json` so the static site and backend-derived portfolio stay aligned.
- Omissions considered: additional post-2026-06-30 FDA, EMA, India-access, diagnostics and systems/public-health signals. None were added because no other primary publication, regulator action or equally authoritative milestone was retrieved strongly enough for responsible promotion in this run, and the EMA Etcamah page still showed opinion rather than Commission-decision status.

## 2026-06-30 - Verified Review With No Material Dashboard Change

- Reviewed oncology developments published after the 2026-06-28 dashboard pass, with emphasis on authoritative, directly verifiable sources that could justify a same-day dashboard update, including signals published on 29-30 June 2026 and the current FDA oncology approval notifications index and EMA medicine-status pages for existing dashboard-adjacent programs.
- Made no dashboard content, taxonomy, scoring, filter, layout, dossier, or source-link changes because no newly published item in the review window cleared the bar for being both materially decision-relevant and responsibly verifiable from primary or otherwise authoritative sources.
- Confirmed that the FDA oncology approval notifications page still listed the 24 June 2026 sacituzumab govitecan and palbociclib breast-cancer approvals as the latest oncology actions in this pass, with no newer 29-30 June 2026 oncology approval posted there.
- Rechecked the EMA Etcamah page and confirmed it still displayed `Opinion` status with no European Commission decision posted in this pass.
- Updated `dashboard/SOURCES.md` to record the 30 June 2026 review outcome and the authoritative pages checked.
- Omissions considered: additional post-2026-06-28 treatment, regulatory, India-access, and systems/public-health signals. None were added because no primary publication, regulator action, or equally authoritative milestone was retrieved strongly enough for responsible promotion in this run.

## 2026-06-28 - Verified Review With No Material Dashboard Change

- Reviewed oncology developments published after the 2026-06-27 pass with emphasis on authoritative, directly verifiable sources that could justify a same-day dashboard update, including the FDA oncology approval notifications index and current EMA medicine-status pages for existing dashboard-adjacent programs.
- Made no dashboard content, taxonomy, scoring, filter, layout, dossier, or source-link changes because no newly published item in the review window cleared the bar for being both materially decision-relevant and responsibly verifiable from primary or otherwise authoritative sources.
- Confirmed that the FDA oncology approval notifications page still listed the 24 June 2026 sacituzumab govitecan and palbociclib breast-cancer approvals as the latest oncology actions in this pass, with no newer 28 June 2026 oncology approval posted there.
- Rechecked the EMA Etcamah page and confirmed it still displayed `Opinion` status with no European Commission decision posted in this pass.
- Updated `dashboard/SOURCES.md` to record the 28 June 2026 review outcome and the authoritative pages checked.
- Omissions considered: additional post-2026-06-27 treatment, regulatory, India-market, and systems/public-health signals. None were added because no primary publication, regulator action, or equally authoritative milestone was retrieved strongly enough for responsible promotion in this run.

## 2026-06-27 - Verified Review With No Material Dashboard Change

- Reviewed oncology developments published after the 2026-06-26 pass with emphasis on authoritative, directly verifiable sources that could justify a same-day dashboard update, including the FDA oncology approval notifications index and current EMA medicine-status pages for existing dashboard-adjacent programs.
- Made no dashboard content, taxonomy, scoring, filter, layout, dossier, or source-link changes because no newly published item in the review window cleared the bar for being both materially decision-relevant and responsibly verifiable from primary or otherwise authoritative sources.
- Confirmed that the FDA oncology approval notifications page still listed the 24 June 2026 sacituzumab govitecan and palbociclib breast-cancer approvals as the latest oncology actions in this pass, with no newer 27 June 2026 oncology approval posted there.
- Rechecked the EMA Etcamah page and confirmed it still displayed `Opinion` status with no European Commission decision posted in this pass.
- Updated `dashboard/SOURCES.md` to record the 27 June 2026 review outcome and the authoritative pages checked.
- Omissions considered: additional post-2026-06-26 treatment, regulatory, India-market, and systems/public-health signals. None were added because no primary publication, regulator action, or equally authoritative milestone was retrieved strongly enough for responsible promotion in this run.

## 2026-06-26 - Verified Review With No Material Dashboard Change

- Reviewed post-2026-06-25 oncology developments with emphasis on authoritative, directly verifiable sources that could justify a same-day dashboard update, including the FDA oncology approval notifications index and current EMA medicine-status pages for existing dashboard-adjacent programs.
- Made no dashboard content, taxonomy, scoring, filter, layout, dossier, or source-link changes because no newly published item in the review window cleared the bar for being both materially decision-relevant and responsibly verifiable from primary or otherwise authoritative sources.
- Confirmed that the FDA oncology approval notifications page still listed the 24 June 2026 sacituzumab govitecan and palbociclib breast-cancer approvals as the latest oncology actions in this pass, with no newer 25-26 June 2026 oncology approval posted there.
- Rechecked the EMA Etcamah page and confirmed it still displayed `Opinion` status with no European Commission decision posted in this pass.
- Updated `dashboard/SOURCES.md` to record the 26 June 2026 review outcome and the authoritative pages checked.
- Aligned the local Node backend to bind explicitly to `127.0.0.1`, matching the documented local URL and avoiding wildcard-bind failures during sandboxed validation.
- Omissions considered: additional late-June conference or media follow-up items, India-market or CDSCO status changes, and broader systems/public-health signals. None were added because no post-2026-06-25 primary publication, regulator action, or equally authoritative milestone was retrieved strongly enough for responsible promotion in this run.

## 2026-06-25 - Breast Cancer Approval Refresh

- Added a new `Palbociclib HER2 Maintenance` treatment dossier for the 24 June 2026 FDA approval of palbociclib with trastuzumab, with or without pertuzumab, and endocrine therapy after induction treatment in HR-positive, HER2-positive advanced breast cancer.
- Updated the `ASCENT-04 / KEYNOTE-D19` follow-up program from `Published; filing expected` to `FDA approved` after the 24 June 2026 FDA action for sacituzumab govitecan plus pembrolizumab in PD-L1 CPS >=10 first-line advanced TNBC.
- Updated the ASCENT-04 dossier language to reflect the FDA-reviewed effect sizes and the same-day creation of a separate first-line Trodelvy monotherapy pathway for patients not eligible for PD-1/PD-L1-based therapy based on ASCENT-03.
- Refreshed the visible dashboard snapshot date to 25 June 2026 and changed the follow-up modal from a hardcoded verification stamp to item-level verification dates so later spot-refreshes do not overstate recency for untouched programs.
- Expanded portfolio alias coverage with `Ibrance` so brand-name searches resolve to the new palbociclib dossier across the hosted portfolio and backend search payload.
- Updated `dashboard/SOURCES.md` with the new FDA source pages, retained the peer-reviewed ASCENT-04 publication as supporting verification, and documented the official checks that did not result in additional dashboard entries.
- Omissions considered: promotion of the separate ASCENT-03 monotherapy approval into its own standalone treatment card, and further status changes for camizestrant or watchlist items. These were not added because the combined TNBC approval is already represented through the ASCENT-04 dossier, the EMA Etcamah page still showed opinion rather than Commission-decision status in this pass, and no stronger primary-source upgrade was retrieved for the existing watchlist signals.

## 2026-06-16 - Global Portfolio Search Page

- Replaced the former overview screen with a dedicated `Global portfolio` page that unifies the dashboard's verified treatment dossiers, ASCO 2025 follow-up programs, and watchlist/system signals into one searchable master-detail workspace.
- Wired the topbar search and a page-local search box into the portfolio page so users can search a drug, company, program, or cancer type and immediately read the corresponding verified record without hunting across sections.
- Expanded the portfolio search index to include common brand-name and development-code aliases such as `Opdivo`, `Keytruda`, `Imfinzi`, `Enhertu`, `Trodelvy`, and `AZD9833`, so branded queries resolve to the verified generic/program records.
- Kept the new page grounded in the existing evidence base only: no new oncology claims, source URLs, prices, approvals, or inferred launch dates were introduced for this feature.
- Added lane filtering, result counts, inline source ledgers, and one-click routing back to the original treatment, follow-up, or watchlist dossier for deeper context.
- Added a new Node backend under `server/` that serves the app, exposes `/api/portfolio`, `/api/source-health`, and `/api/health`, and scrapes authoritative source metadata from the curated record source URLs.
- Wired the portfolio page to hydrate from `/api/portfolio` when the backend is available and fall back to the local verified registry when it is not.

## 2026-06-16 - Verified Review With No Material Dashboard Change

- Reviewed post-2026-06-15 oncology developments with priority on official and primary-source pathways, including FDA oncology approval notifications, EMA medicine-status pages, and targeted checks for ASCO-era signals that were already on the dashboard watchlist.
- Made no dashboard content, taxonomy, scoring, filter, layout, or dossier changes because no newly published item in the review window cleared the bar for being both material and responsibly verifiable.
- Confirmed that the FDA oncology approval notification page showed no oncology approval newer than 12 June 2026 during this pass, so there was no new FDA action to add after the previous run.
- Confirmed that the EMA Etcamah page still reflected the 21 May 2026 CHMP positive opinion without a newer European Commission decision during this pass.
- Updated `dashboard/SOURCES.md` with the 16 June 2026 review outcome and the authoritative pages checked.
- Omissions considered: promotion of already-tracked watchlist items such as Galleri-NHS and the global oncology workforce warning from secondary coverage into stronger primary-source dossiers, and addition of further ASCO 2026 conference signals such as daraxonrasib and ivonescimab. These were not added because no post-2026-06-15 primary publication, regulator action, or comparably authoritative milestone was retrieved strongly enough for responsible promotion in this run.

## 2026-06-15 - Watchlist And Systems Expansion

- Added a new `Morning briefing` landing page that summarizes high-signal insights across treatments, follow-up, India access, and watchlist/system updates.
- Added double-click routing from briefing cards into the relevant detailed pages and dossier modals, so the landing page stays concise while preserving the existing evidence surfaces.
- Fixed the morning briefing grid layout by restoring the intended `span-8` and `span-4` dashboard column classes.
- Reshaped the briefing cards to lead with the plain-language takeaway, then the decision it could change and the constraint that still matters.
- Added a new `Watchlist & systems` view for material oncology developments that do not fit the treatment explorer or ASCO 2025 follow-up register without distortion.
- Added four new dossiers: OPTIMA genomic chemotherapy de-escalation, Galleri-NHS negative MCED screening result, durvalumab-enabled bladder-preservation signal, and the global oncology workforce warning.
- Added explicit evidence-state labels for conference-only, negative/cautionary, and system-level items instead of forcing them into treatment-style impact categories.
- Added a full dashboard source ledger in `dashboard/SOURCES.md`, including existing treatment/follow-up sources and the new watchlist entries.
- Updated the visible dashboard snapshot date to 15 June 2026 while preserving the ASCO 2025 follow-up register's stated verification horizon of 9 June 2026.
- Kept the existing treatment explorer and ASCO 2025 follow-up content unchanged in this pass because no additional item was promoted into those sections without stronger direct-source capture.
- Omissions considered: additional ASCO 2026 conference signals, post-9 June 2026 regulator actions, and broader commercialization changes were reviewed, but no extra item was added without sufficiently retrievable source quality for this pass.
- Source quality note: all new watchlist entries are clearly marked when direct primary abstract/report capture was still pending; they were added because the signals are decision-relevant and would otherwise be lost from the dashboard.

## 2026-06-09 - ASCO 2025 Follow-up Tracker

- Expanded the longitudinal view to eleven selected, practice-shaping ASCO 2025 programs.
- Added C-POST cemiplimab, AMPLITUDE niraparib/abiraterone, and CAN-2409.
- Added a detailed program register with trial design, population, comparator, endpoint, effect, regulatory pathway, regional status, and next catalyst.
- Added full program dossiers covering safety, evidence evolution, adoption constraints, confidence, US/EU/India status, and a source ledger.
- Separated verified pathways into FDA approval, regulatory review, guideline-led adoption, and ongoing development.
- Added direct links to ASCO-era evidence and current FDA, EMA, ASCO/JCO, ClinicalTrials.gov, NEJM, or official sponsor sources.
- Recorded regulatory divergence for camizestrant rather than presenting one global approval status.
- Distinguished ATOMIC's reported NCCN incorporation from FDA labeling.
- Marked rusfertide as under priority review, not approved.
- Marked ASCENT-04 and NIVOPOSTOP as continuing development despite evidence maturation.
- Scope is explicitly selected rather than exhaustive; inclusion prioritizes major phase III/plenary or practice-shaping 2025 signals with a verifiable subsequent milestone.
