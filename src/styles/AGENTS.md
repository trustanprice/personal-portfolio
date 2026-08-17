# AGENTS.md — src/styles/

## Responsibility

One plain (non-module) global stylesheet per page component, built entirely
on top of the CSS custom-property theme engine defined in `src/App.css`
(`--bg-color`, `--bg-alt`, `--text-color`, `--text-muted`, `--accent-color`,
`--accent-dark-color`, `--accent-solid`, `--accent-contrast`, `--accent-rgb`,
`--border-color`, `--card-shadow`). Every color rule in this folder should
reference one of those tokens rather than a hardcoded hex value, so the
five-theme × light/dark switcher (see
[src/components/AGENTS.md](../components/AGENTS.md)) recolors it
automatically.

## Files

| File | Styles |
|---|---|
| `Home.css` | Hero, `.featured` section, and the **shared card system** (`.feature-card`, `.feature-img`, `.feature-info`, `.feature-links`, `.btn`, `.see-all-container`) reused by `Projects.js` |
| `Projects.css` | Projects hero + `.project-card`/`.project-img`/`.project-info` (the denser card variant used for entries needing multiple paragraphs or a list) |
| `Experiences.css`, `Clubs.css`, `SemiPro.css` | Page-specific hero/layout for those routes |

## Conventions

- Not CSS modules — class names are global. `.feature-card` and friends are
  *intentionally* shared between `Home.css`'s page and `Projects.js` (both
  import `Home.css` transitively/directly enough that the classes are
  available); don't rename them without checking both `Home.js` and
  `Projects.js` for usages.
- `.feature-links` (added 2026-08-16) wraps multiple `.btn.learn-more`
  anchors in one card so they lay out in a row (`display:flex; flex-wrap;
  gap`) instead of stacking — use it any time a card needs more than one
  outbound link.
- Responsive breakpoints are consistent across files: `1024px` (tablet),
  `768px` (stacked/mobile layout, cards go `flex-direction: column`),
  `480px` (font-size reductions). Match these breakpoints when adding new
  responsive rules rather than introducing new ones.
- Dark-mode-specific overrides are written as `body.dark-mode .selector { }`
  rather than a `prefers-color-scheme` media query, since dark mode here is a
  manual toggle persisted to `localStorage`, not an OS-level preference.

## Current state

Stable. No component-scoped/CSS-in-JS styling anywhere in this repo — every
visual change happens in one of these files.
