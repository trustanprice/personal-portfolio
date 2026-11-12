# AGENTS.md — src/styles/

## Responsibility

One plain (non-module) global stylesheet per page component, built entirely
on top of the CSS custom-property theme engine defined in `src/App.css`
(`--bg-color`, `--bg-alt`, `--text-color`, `--text-muted`, `--accent-color`,
`--accent-dark-color`, `--accent-solid`, `--accent-contrast`, `--accent-rgb`,
`--border-color`, `--card-shadow`, and `--scrim` for the dim behind the open
mobile menu). Every color rule in this folder should reference one of those
tokens rather than a hardcoded hex value, so the five-theme × light/dark
switcher (see [src/components/AGENTS.md](../components/AGENTS.md)) recolors
it automatically.

## Files

| File | Styles |
|---|---|
| `Home.css` | Hero, `.featured` section, and the **shared card system** (`.feature-card`, `.feature-img`, `.feature-info`, `.feature-links`, `.btn`, `.see-all-container`) reused by `Projects.js` |
| `Projects.css` | Projects hero + `.project-card`/`.project-img`/`.project-info` (the denser card variant used for entries needing multiple paragraphs or a list), `.projects-list .feature-card` (both card types share the list's gap and width), the stacked-card sizes for `ExpandableDetails`, and the `.learn-more` text link (used on Experiences too) |
| `Experiences.css`, `Clubs.css`, `SemiPro.css` | Page-specific hero/layout for those routes |

## Conventions

- Not CSS modules — class names are global. `.feature-card` and friends are
  *intentionally* shared between `Home.css`'s page and `Projects.js` (both
  import `Home.css` transitively/directly enough that the classes are
  available); don't rename them without checking both `Home.js` and
  `Projects.js` for usages. Some names are (unintentionally) defined in more
  than one file — `.section-title`, `.divider`, `.role`, `.date`,
  `.btn.see-all` — and the last stylesheet in the bundle wins (SemiPro.css
  loads after Home/Projects/Experiences/Clubs), so check every definition
  before relying on one.
- `.feature-links` (added 2026-08-16) wraps multiple `.btn.learn-more`
  anchors in one card so they lay out in a row (`display:flex; flex-wrap;
  gap`) instead of stacking — use it any time a card needs more than one
  outbound link.
- Responsive breakpoints are consistent across files: `1024px` (tablet),
  `768px` (stacked/mobile layout, cards go `flex-direction: column`),
  `480px` (font-size reductions). Exceptions already in use: `900px`, where
  `.project-card` and the Projects hero stack and where the navbar tightens
  (769-900px). Match these breakpoints when adding new responsive rules
  rather than introducing new ones.
- Dark-mode-specific overrides are written as `body.dark-mode .selector { }`
  rather than a `prefers-color-scheme` media query, since dark mode here is a
  manual toggle persisted to `localStorage`, not an OS-level preference.
- **Phones** (conventions from the 2026-11-12 phone-view pass):
  - Hover effects (`:hover` transforms, fills, underlines) go inside
    `@media (hover: hover)`; on touch screens a tap leaves `:hover` stuck.
    Larger touch areas for text links go in `@media (pointer: coarse)`.
  - Flex text columns (`.feature-info`, `.project-info`, `.experience-info`,
    `.club-info`, `.semi-info`, `.projects-hero-text`) have `min-width: 0`,
    and stacked cards use `align-items: stretch` (or `align-self: stretch`
    on the text column) rather than `center`, so long words wrap inside the
    card instead of pushing the text past its edges. `body` sets
    `overflow-wrap: break-word` (App.css).
  - Stacked cards (≤768px; `.project-card` ≤900px): titles, roles, dates,
    logos and links stay centered; paragraphs, lists and bullet lines are
    left-aligned (lists get `padding-left: 1.25em`).
  - Spacing: 16px page gutters on phones (`.featured`, `.projects-section`,
    `.experiences-list`, `.clubs-list`, `.semi-list`), 16px card padding,
    smaller hero/section/footer gaps. Stacked Projects cards stop at 600px
    wide so tablet lines stay readable.
  - Tap targets are at least 44px: `.btn` is a 44px-min `inline-flex` on
    phones; plain `.learn-more` links get vertical padding on coarse
    pointers.
  - Hero image containers stretch to the full width when stacked, so the
    `<img>` `width`/`height` attributes can reserve their space before load.
    Stacked `.feature-img`s are capped at `max-height: 60vw` (`object-fit:
    cover`), which only trims the square SAM logo's black margin (its
    lettering stays whole).
  - Prefer listing transitioned properties over `transition: all` on large
    elements (`.feature-card` used to animate its padding and size whenever
    the layout crossed a breakpoint).
  - `App.css` holds the global reduced-motion rule, `-webkit-text-size-adjust`
    and `.App { min-height: 100dvh }` (100vh fallback first).
  - Logo thumbnails that must show whole get `logo-on-white` next to their
    card class (today JimmyChops on Home and Projects, Synchrony on Home):
    `img.logo-on-white` in `App.css` switches them to `object-fit: contain` on
    a white tile, so the cover crop can't cut a wordmark's ends or press a
    mark against the tile's edges, and black lettering on a transparent PNG
    stays visible on dark cards. Light cards are white already, so light mode
    only gains the uncropped logo. Don't use it for a logo whose artwork fills
    its own square edge to edge on a dark background (SAM): contained, it
    would just shrink.

## Current state

Stable. No component-scoped/CSS-in-JS styling anywhere in this repo — every
visual change happens in one of these files or in the plain stylesheets next
to the components in `src/components/`. 2026-11-12: phone-view pass (spacing,
wrapping, text alignment, hover/touch rules, tap targets, image space; see
the root [AGENTS.md](../../AGENTS.md) log). Desktop (≥1024px) renders
pixel-identically to before outside `/projects`.
