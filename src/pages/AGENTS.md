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
- **On `Projects.js` the description goes inside `<ExpandableDetails>`**:
  `<h3/>` first, then `<ExpandableDetails><p/>…<ul/>…</ExpandableDetails>`,
  then the links (`.feature-links` or a bare `a.learn-more`) outside it. Wrap
  every card, even short ones: the component measures the text and only
  collapses it ("Show more ▾") when it is clearly longer than fits beside the
  thumbnail; short ones render exactly as before. Home's cards are short and
  don't use it. See [src/components/AGENTS.md](../components/AGENTS.md).
- **Images get their intrinsic size as attributes** (`width="…" height="…"`,
  the file's real pixel size, e.g. from `sips -g pixelWidth -g pixelHeight`)
  on hero and card `<img>`s. CSS still sets the rendered size; the
  attributes only let the browser reserve the space before the file loads,
  so phones don't jump while scrolling. Fixed-size logos (Experiences, Clubs)
  don't need them.
- External links always get `target="_blank" rel="noopener noreferrer"`.
- Icon-only links (Home's hero email/résumé/LinkedIn/GitHub icons) carry an
  `aria-label` naming where they go; the icon alone gives screen readers
  nothing to read.
- A logo thumbnail that must show whole (JimmyChops, Synchrony) gets
  `logo-on-white` next to its card class; see
  [src/styles/AGENTS.md](../styles/AGENTS.md).
- To add a new project: add an abridged `.feature-card` to `Home.js`'s
  Featured Projects (before the "See All Projects" `see-all-container`), add
  the full version to `Projects.js`'s `projects-list` (description wrapped in
  `<ExpandableDetails>`), drop its thumbnail in `public/home/` (with its
  `width`/`height` on the `<img>`), and add a line to the root `README.md`
  project bullet list.

## Current state

All five pages implemented and building cleanly (`npm run build`, CRA/
`react-scripts`). Most recently updated (2026-11-12): Home's Featured
Projects are JimmyChops, UIUC Statistics Datathon 2026 (call center
forecasting) and Roster & Revenue Optimization Dashboard, in that order
(LedgerOne left Home; it stays on `Projects.js`), and `Projects.js`'s
eight entries are in order of when each project happened, most recent first
(JimmyChops, Roster & Revenue, Forward Data Lab, Datathon, NBA Predictions,
LedgerOne, AI Academic Advisor, Dementia Diagnosis). Earlier (2026-10-12),
`Experiences.js` gained a UIUC Data & Business Intelligence Intern card
(Aug 2026 – Present) describing the Roster & Revenue project in detail. See
the root [AGENTS.md](../../AGENTS.md) "Current state" section for the full
log, including which entries are deliberately excluded from
`resume/resume.tex`, why Roster & Revenue has no external links on its card
(undeployed + real athlete data), and why JimmyChops links only to its App
Store page (added 2026-11-12; no live booking page or private repo links).

Also 2026-11-12 (phone-view pass, no wording changes): every `Projects.js`
description is wrapped in `<ExpandableDetails>` (at 1280px six collapse; AI
Academic Advisor and Dementia Diagnosis stay whole), and hero/card `<img>`s
on all five pages got `width`/`height` attributes. Everything else in that
pass was CSS (see [src/styles/AGENTS.md](../styles/AGENTS.md)).
