# AGENTS.md — src/pages/

## Responsibility

One component per route, rendered by the `<Routes>` table in `src/App.js`.
Each page is a self-contained JSX file: hero section up top, then one or more
card sections below. There is no shared data layer — every project,
experience, club, and hobby entry is hardcoded directly in its page's JSX.

## Inputs

- Static imagery/PDFs from the matching `public/<page>/` subfolder (see
  [public/AGENTS.md](../../public/AGENTS.md)).
- Shared CSS-variable theme tokens from `src/App.css` (via each page's own
  stylesheet in `src/styles/`).
- `darkMode`/`theme` state lives in `App.js`, not here — pages don't consume
  it directly, they just render markup styled by the CSS variables it sets
  on `<body>`.

## Outputs / files

| File | Route | Content |
|---|---|---|
| `Home.js` | `/`, `/home` | Hero intro + Featured Projects, Featured Experience, Featured Clubs (abridged cards, each with a "See All →" link to its full page) |
| `Projects.js` | `/projects` | Hero + full Highlighted Projects list (fuller descriptions than Home's abridged versions) |
| `Experiences.js` | `/experiences` | Hero + full professional experience list |
| `Clubs.js` | `/clubs` | Hero + full club/leadership list |
| `SemiPro.js` | `/semipro` | Hero + hobbies/interests outside of work |

## Conventions

- **Card markup pattern** (defined in `src/styles/Home.css`, reused
  everywhere): `<div className="feature-card"><img className="feature-img"/>
  <div className="feature-info"><h3/><p/><a className="btn learn-more"/>...
  </div></div>`. When a card needs more than one outbound link (e.g. a live
  site *and* a demo/write-up), wrap them in `<div className="feature-links">`
  so they lay out side-by-side instead of stacking — see the Forward Data Lab
  card in both `Home.js` and `Projects.js` for the reference example.
- `Projects.js` also uses a denser `.project-card`/`.project-info` variant
  (see `src/styles/Projects.css`) for entries that need multiple paragraphs
  or an inline `<ul>` (e.g. NBA Predictions' three-model breakdown) — prefer
  `.feature-card` unless the content genuinely needs that extra structure.
- Home's version of a project entry is intentionally shorter than the
  Projects-page version of the same entry — keep both in sync when the
  underlying project changes, but don't just copy-paste the long version onto
  Home.
- External links always get `target="_blank" rel="noopener noreferrer"`.
- To add a new project: add an abridged `.feature-card` to `Home.js`'s
  Featured Projects (before the "See All Projects" `see-all-container`), add
  the full version to `Projects.js`'s `projects-list`, drop its thumbnail in
  `public/home/`, and add a line to the root `README.md` project bullet list.

## Current state

All five pages implemented and building cleanly (`npm run build`, CRA/
`react-scripts`). Most recently updated: Home and Experiences both gained a
Synchrony card (2026-08-20, upcoming Fall 2026 internship) — see the root
[AGENTS.md](../../AGENTS.md) "Current state" section for the full log,
including which entries are deliberately excluded from `resume/resume.tex`.
