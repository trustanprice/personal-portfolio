# AGENTS.md — Fleet Manager (root)

This file is the fleet manager for this repository. It describes the overall
goal, how the pieces fit together, who (which folder) is responsible for
what, and the current state of the site. **Update this file, and the local
AGENTS.md in whichever subfolder changed, immediately after finishing any
non-trivial change** — this document should always reflect reality, not a
plan.

## Project goal

`trustanprice.io` — a single-page React portfolio site (Create React App +
React Router) presenting Trustan Price's projects, professional experience,
club leadership, and semi-pro interests. No backend: it's a static SPA
deployed to Vercel, with all content hardcoded directly into the page
components (no CMS, no data files) and all imagery served from `public/`.

## Folder structure / fleet roster

| Folder | Responsibility | AGENTS.md |
|---|---|---|
| `src/pages/` | One component per route (`/`, `/projects`, `/experiences`, `/clubs`, `/semipro`) — hero + card content for each section | [src/pages/AGENTS.md](src/pages/AGENTS.md) |
| `src/components/` | Global chrome shared across every route: Navbar (incl. dark-mode toggle + hamburger menu), ThemeSwitcher (color-theme picker), Footer | [src/components/AGENTS.md](src/components/AGENTS.md) |
| `src/styles/` | Per-page global CSS (plain stylesheets, not CSS modules) built on the CSS-variable theme engine defined in `src/App.css` | [src/styles/AGENTS.md](src/styles/AGENTS.md) |
| `public/` | Static assets — one image subfolder per page (`home/`, `projects/`, `experiences/`, `clubs/`, `semipro/`), plus resume/presentation PDFs | [public/AGENTS.md](public/AGENTS.md) |
| `src/App.js` | Route table, dark-mode + color-theme state (persisted to `localStorage`, applied to `<body>` as a class/attribute) — shared root, not a sub-agent folder | — |
| `src/App.css` | The theme engine itself: CSS custom properties per `[data-theme]` × light/dark combination. Every color across the site should read from these tokens | — |

## Conventions

- Create React App (`react-scripts`), no TypeScript, no CSS modules — every
  file in `src/styles/` is a global stylesheet loaded once its page component
  is imported anywhere in the bundle (CRA doesn't code-split by route here),
  so class names must stay unique across pages or be intentionally shared
  (e.g. `.feature-card` is shared between `Home.js` and `Projects.js` on
  purpose).
- Two recurring card patterns, both styled in `src/styles/Home.css` and
  reused elsewhere: `.feature-card` (image + title + prose + one-or-more
  `.btn.learn-more` links, wrapped in `.feature-links` when there's more than
  one) for featured/highlighted items, and `.project-card` (denser, supports
  inline lists) for the full project grid on `/projects`.
- All content is hardcoded JSX — no markdown/JSON data files to update when
  adding a project or experience. To add something new: edit the relevant
  page component directly, drop its thumbnail in the matching `public/`
  subfolder, and update `README.md`'s project list if it's a new project.
- No test suite is actively maintained beyond the CRA-default
  `src/App.test.js` smoke test.
- Deployed via Vercel from this repo's `main` branch (no custom build config
  beyond CRA's default `npm run build`).

## Current state

- Five routes live: Home, Projects, Experiences, Clubs, SemiPro.
- Home's Featured Projects and the Projects page's Highlighted Projects both
  now include the **Forward Data Lab** project (live site:
  https://forward-data-lab.vercel.app/, demo video linked as "Learn More"),
  alongside the UIUC Datathon, LedgerOne, NBA Predictions, AI Academic
  Advisor, and Dementia Diagnosis projects.
- Five color themes available via `ThemeSwitcher` (Teal default, Caterpillar,
  Illini, Buckeyes, CU Boulder), each with a light and dark variant.
- Fleet-manager AGENTS.md structure added 2026-08-16 (this pass) to make it
  faster to pick this project back up later — mirrors the pattern used in
  the `forward-data-lab` repo.
