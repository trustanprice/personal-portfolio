# AGENTS.md — public/

## Responsibility

Static assets served as-is by CRA (no build processing) — one subfolder per
page, matching the routes in `src/pages/` and referenced by absolute path
(e.g. `/home/nba-thumbnail.png`) directly in each page's JSX. Also the CRA
boilerplate (`index.html`, `manifest.json`, `robots.txt`, favicons).

## Folders

| Folder | Used by | Contents |
|---|---|---|
| `home/` | `Home.js` *and* `Projects.js` (project thumbnails are shared across both cards) | Project thumbnails, experience thumbnails, profile photo, résumé PDF (`trustanprice-cv2026.pdf`), presentation PDFs |
| `projects/` | `Projects.js` | Hero image only (`projects-hero.png`) |
| `experiences/` | `Experiences.js` | Hero image + per-employer/lab logos |
| `clubs/` | `Clubs.js` | Hero image + per-club logos |
| `semipro/` | `SemiPro.js` | Hero image + hobby images |

## Conventions

- Naming: `<subject>-thumbnail.png` for project/experience cards,
  `<page>-hero.png` for each page's hero image, `<org>-logo.png` for
  clubs/experiences logos.
- Historically, all project thumbnails lived in `home/` regardless of which
  page(s) referenced them, with only `projects/projects-hero.png` under
  `projects/` — **no longer universally true as of 2026-10-12**:
  `jimmychops-thumbnail.png` and `roster-revenue-thumbnail.png` both live
  under `projects/` instead, since those two projects aren't featured on
  Home (see root [AGENTS.md](../AGENTS.md)). Older thumbnails shared
  between Home and Projects (LedgerOne, Forward Data Lab, Datathon, NBA,
  etc.) are still under `home/` — don't assume a thumbnail's folder from
  its name alone, check both pages' JSX for the actual `src`.
- No image optimization/pipeline — files are dropped in as delivered
  (screenshots, exported PNGs). Keep an eye on file size manually (existing
  thumbnails range roughly 2 KB–900 KB); there's no CI check for this.
- `.DS_Store` files show up here (macOS) — harmless, already untracked by
  `.gitignore` conventions elsewhere in the repo; don't worry about them.

## Current state

`home/forward-data-lab-thumbnail.png` added 2026-08-16 for the Forward Data
Lab project card on both `Home.js` and `Projects.js`.

`home/synchrony-thumbnail.png` and `experiences/synchrony-logo.png` added
2026-08-20 for the new Synchrony experience (Home's Featured Experience +
`Experiences.js`) — same source image (a user-pasted clipboard PNG) saved
under both conventional names, same pattern as the thumbnail/logo split
above.

`experiences/uiuc-logo.png` added 2026-09-21 for the UIUC Data & Business
Intelligence Intern `experience-card` (Block I logo, user-pasted).

`projects/jimmychops-thumbnail.png` and `projects/roster-revenue-thumbnail.png`
added 2026-10-12 — a deliberate break from the `home/`-for-everything
convention above, since these two projects are featured only on
`Projects.js`-adjacent cards (JimmyChops is also on Home, but Roster &
Revenue's Home card still points at its `projects/` copy rather than being
duplicated into `home/`). JimmyChops' image is the business's own wordmark
logo (dark gothic lettering on black); Roster & Revenue's is a real
dashboard screenshot the user confirmed contains no actual player names —
just position-label placeholders — on its "Sample data" basketball tab,
safe to use despite the dashboard handling real contract data elsewhere.
