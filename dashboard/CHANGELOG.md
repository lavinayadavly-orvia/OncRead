# Dashboard Changelog

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
- Adapted the briefing cards toward a more decision-structured pattern: plain-language interpretation, visible decision pressure, and explicit constraints before the user drills into detailed evidence.
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
