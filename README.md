# OncTree - Onco updates made easy

Interactive oncology evidence dashboard tracking ASCO 2026 advances and the subsequent status of selected ASCO 2025 programs.

## Run locally

### Backend + frontend together

```bash
node server/index.mjs
```

Open `http://127.0.0.1:8766/`.

The backend serves the static app and exposes:

- `/api/portfolio`: normalized portfolio records for the global search page
- `/api/source-health`: scraped authoritative-source metadata for the curated source ledger
- `/api/health`: backend health summary

### Static site / Pages mode

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765/`.

In static-only mode the portfolio page loads the generated hosted snapshot at `/data/portfolio.json`. Live source-health checks still require the local backend.

The static build also generates a dated newsletter archive under `/data/editions/`, including:

- `index.json` for the archive index and monthly-headline rollups
- one JSON file per retained edition, for example `2026-07-01.json`

## Cloudflare Pages

This is a static site served directly from the repository root.

- Build command: leave empty
- Build output directory: `.`
- Regenerate the hosted portfolio snapshot before deploy with `node scripts/build-static-portfolio.mjs`
- That build also refreshes the edition archive and monthly-headline data used by the `Newsletters & headlines` view
