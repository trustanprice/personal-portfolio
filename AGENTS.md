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
| `resume/` | LaTeX source (`resume.tex`) for the downloadable CV linked from Home — the curated, capped-length counterpart to the full-detail portfolio pages | [resume/AGENTS.md](resume/AGENTS.md) |
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
- **Resume sync**: `resume/resume.tex` is a curated, length-capped subset of
  `src/pages/Experiences.js` and `src/pages/Projects.js`, not an independent
  source of claims. Whenever a new experience or project lands on those
  pages (a new internship, a new highlighted project) — or an existing
  entry's description changes in a way that would change how it reads on a
  resume — review and update `resume/resume.tex` too. See
  [resume/AGENTS.md](resume/AGENTS.md) for the hard caps (≤4 experiences,
  ≤3 projects, always 1 page) and what to drop when a new entry would
  exceed them.
- **Job-application resumes**: when the user pastes a job description in
  chat and asks for a resume from it, that's a request to build a
  *job-tailored variant* of `resume.tex` (different experience/project
  selection and bullet emphasis, same hard caps, saved as a separate
  `resume/resume-<slug>.tex` rather than overwriting the base) — see
  [resume/AGENTS.md](resume/AGENTS.md)'s "Job-tailored resume workflow"
  section for the full process.
- No test suite is actively maintained beyond the CRA-default
  `src/App.test.js` smoke test.
- Deployed via Vercel from this repo's `main` branch (no custom build config
  beyond CRA's default `npm run build`).

## Current state

- Five routes live: Home, Projects, Experiences, Clubs, SemiPro.
- Home's Featured Projects: **Forward Data Lab**, **LedgerOne**, NBA
  Predictions — Datathon was swapped out for LedgerOne here (2026-08-18) now
  that LedgerOne has a live demo (walkthrough site) worth featuring; it's
  still on the full Projects-page list.
- The Projects page's Highlighted Projects list has all six: Forward Data
  Lab, LedgerOne, UIUC Datathon, NBA Predictions, AI Academic Advisor, and
  Dementia Diagnosis.
- **LedgerOne** (2026-08-18): description corrected — it's a *single-entry*,
  append-only ledger, not double-entry (the portfolio copy previously said
  double-entry; fixed to match the actual repo). Links out to both the live
  site and the GitHub repo via `.feature-links` on both Home and Projects.
  The live-site link points at the Vercel deploy
  (https://ledgerone-green.vercel.app/) — that repo also deploys the same
  build to GitHub Pages (https://trustanprice.github.io/ledgerone/walkthrough/)
  at a `/ledgerone/walkthrough/` subpath, so don't mix the two base paths up
  if the URL ever needs touching again. Updated again same day once the
  underlying app was rebuilt from a single scrollytelling page into a
  5-tab site (Overview, Day in the Life walkthrough, Database & Data
  Engineering reference, Forecasting dashboard, Infrastructure/
  Productionization writeup) — portfolio copy now describes it as a
  multi-tab live site, not just a walkthrough. Before touching this copy
  again, re-check `ledgerone/README.md` and `ledgerone/AGENTS.md` (and
  `ledgerone/apps/walkthrough/README.md` for the live-site copy
  specifically) rather than assuming this description is still current —
  it's an actively evolving sibling project.
- **LedgerOne (2026-08-25)**: the sibling repo shipped a real AWS deployment
  — CloudFormation-managed `ledgerone-dev`/`ledgerone-prod` stacks (S3 raw
  bucket + GitHub OIDC deploy role, no long-lived AWS credentials), with
  GitHub Actions running the same dbt pipeline against MotherDuck instead
  of a local file, verified end-to-end by real CI runs (136/136 dbt tests
  passing, both environments). The Infrastructure tab used to describe this
  as a hypothetical "what productionizing would look like" design writeup —
  it doesn't anymore, it documents what's actually running. Portfolio copy
  (Home, Projects, README) updated to lead with the real-deployment claim
  rather than the old "cloud productionization writeup" framing. Note:
  `ledgerone/README.md` (root) is itself stale on this — it still describes
  the walkthrough as a single-scene scrollytelling site — so this update
  was sourced from `ledgerone/AGENTS.md` and
  `ledgerone/apps/walkthrough/README.md` instead, which are current; worth
  flagging to the user next time this comes up rather than trusting
  ledgerone's own README at face value.
- The walkthrough site also gained a sixth tab, **Emerging Techniques**
  (2026-08-25) — explicitly scaffolding only (structure + placeholder
  cards for planned stochastic-process work and a SAS exercise, no real
  content yet, per its own on-page banner). Portfolio copy mentions it only
  as "a roadmap tab for upcoming techniques" — don't describe it as
  delivered content until ledgerone's own docs say the scaffolding phase is
  done.
- Five color themes available via `ThemeSwitcher` (Teal default, Synchrony,
  Illini, Buckeyes, CU Boulder), each with a light and dark variant. The
  Caterpillar theme (`data-theme="cat"`) was renamed to Synchrony
  (`data-theme="synchrony"`) on 2026-08-21 — gold `#f3c844` / near-black
  `#1c1f23`, colors sampled directly from the pasted Synchrony logo (see
  `public/experiences/synchrony-logo.png`), not guessed.
- **Synchrony interview presentation** (2026-08-25): an "Interview
  Presentation →" link was added to the Synchrony `experience-card` on
  `Experiences.js`, pointing at
  `public/home/synchrony-interview-presentation.pdf` (the user's actual
  RAG-explainer deck from the Synchrony interview process). This is the
  first `experience-card` on the whole page with a link — reused the
  globally-available `.learn-more` class from `Projects.css` rather than
  inventing new styling, since it's loaded on every page regardless of
  where it's defined (see `src/styles/AGENTS.md`'s "not CSS modules" note).
  If more experience entries get their own presentation/writeup links
  later, follow this same pattern rather than introducing a new one.
- **2026-08-21**: fixed a real layout bug on Projects — `.feature-card` and
  `.project-card` used `align-items: center`, so each card's image position
  depended on that card's own height (short cards vs. long ones), making
  images look inconsistently placed down the page. Changed to
  `align-items: flex-start` (top-aligned) in both `src/styles/Home.css` and
  `src/styles/Projects.css`, with `align-items: center` restored inside
  each file's mobile breakpoint (768px/900px) where cards stack into a
  single column and `align-items` switches to controlling horizontal
  centering instead. Also split several run-on project-description
  paragraphs (LedgerOne, Forward Data Lab, Datathon, NBA) into properly
  separated `<p>` tags at natural topic breaks — one NBA paragraph in
  particular had a blank line *inside* a single `<p>` in the JSX source,
  which JSX collapses to nothing at render time, so it read as one run-on
  paragraph despite looking separated in the source.
- Fleet-manager AGENTS.md structure added 2026-08-16 to make it faster to
  pick this project back up later — mirrors the pattern used in the
  `forward-data-lab` repo. When the underlying project (e.g. `ledgerone`)
  evolves, check its own README/AGENTS.md for what actually changed before
  updating this portfolio's copy — don't assume the portfolio text is
  current.
- **2026-08-19 accuracy pass**: walked the actual workflows of NBA
  Predictions, LedgerOne, and Forward Data Lab (their own READMEs/AGENTS.md/
  commit history, not memory) and corrected the portfolio copy where the
  sibling repos had moved on without it:
  - **Forward Data Lab**: the write-up (`REPORT.md`) was revised to answer
    PI rejection feedback — Q1 is now a systematic, criteria-scored
    comparison of Asta vs. Google Scholar across five query archetypes with
    every citation independently verified, not a single anecdotal query.
    Portfolio copy (Home, Projects, README) updated to lead with that,
    since it's the stronger and now-accurate claim.
  - **LedgerOne**: the credit-risk module gained a real-data validation
    layer (`notebooks/03_credit_risk_validation_backtest.ipynb`) — a
    time-based holdout backtest against a real Freddie Mac mortgage panel,
    landing within 0.19 percentage points on the cumulative delinquency
    forecast, with an honestly-reported gap (the roll-rate transition
    matrix isn't perfectly time-stable). This wasn't mentioned anywhere in
    the portfolio before; added to Home, Projects, and README.
  - **NBA Predictions**: checked against `Basketball-Predictions/README.md`
    and `AGENTS.md` — already accurate, no changes needed.
  - Per explicit instruction, portfolio copy for all projects describes
    *functionality only* — no visual/UI language (no "glass," "dark
    theme," specific layout, etc.). Multi-tab/multi-view apps get "a modern
    interactive dashboard," nothing more specific about appearance.
- `resume/resume.tex` added 2026-08-19 as the LaTeX source for Trustan's
  downloadable CV (the icon-link on Home currently points at
  `public/home/trustanprice-cv2026.pdf`, compiled from this source). See
  [resume/AGENTS.md](resume/AGENTS.md) for the compile step and the
  hard caps that keep it at one page.
- **2026-08-20**: resume projects refreshed — NBA Predictions and ML
  Dementia Classification swapped out for LedgerOne and Forward Data Lab
  (more recent, better fit for the stated risk/fraud/forecasting career
  direction). Added the job-tailored resume workflow (see the "Resume sync"
  bullet above and [resume/AGENTS.md](resume/AGENTS.md)) so a pasted job
  description turns into a tailored `resume-<slug>.tex` variant on request.
- **Synchrony — Machine Learning Intern, Forecasting & Analytics (Fall
  2026)** added 2026-08-20: a Featured Experience card on Home (before the
  Caterpillar 2026 card, as the most upcoming role) and the top entry on
  `Experiences.js`. Logo pasted by the user via clipboard image, saved to
  both `public/experiences/synchrony-logo.png` (Experiences card) and
  `public/home/synchrony-thumbnail.png` (Home card) — same file, two
  conventional locations, per the naming pattern in
  [public/AGENTS.md](public/AGENTS.md). **Deliberately not added to
  `resume/resume.tex`** per explicit instruction — see the "Deliberate
  exceptions" note in [resume/AGENTS.md](resume/AGENTS.md) before adding it
  there in a future pass.
