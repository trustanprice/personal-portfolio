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
- All project thumbnails live in `home/` regardless of which page(s)
  reference them — there is no separate `projects/` thumbnail folder; only
  `projects/projects-hero.png` lives under `projects/`. Don't be surprised
  finding a `Projects.js`-only image inside `home/`.
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
