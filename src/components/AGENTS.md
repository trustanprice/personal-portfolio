# AGENTS.md — src/components/

## Responsibility

Global chrome rendered around every route by `App.js` (outside `<Routes>`):
the navbar (site nav, dark-mode toggle, color-theme picker, mobile hamburger
menu) and the footer. Nothing here is page-specific.

## Inputs

- `darkMode`, `setDarkMode`, `theme`, `setTheme` — passed down as props from
  `App.js`, which owns the state and persists it to `localStorage`
  (`darkMode`, `siteTheme` keys) and applies it to `<body>` (`dark-mode`
  class + `data-theme` attribute) so every page's CSS variables update
  together. Components here don't touch `localStorage` directly.

## Files

- `Navbar.js` / `Navbar.css` — sticky nav that hides on scroll-down and
  reappears on scroll-up (`isVisible` tracked via `window.scrollY` deltas),
  route links via `react-router-dom`'s `<Link>`, a dark/light toggle button,
  the `ThemeSwitcher` dropdown, and a hamburger menu for mobile (auto-closes
  when the navbar itself hides).
- `ThemeSwitcher.js` / `ThemeSwitcher.css` — small popover listing the five
  color themes (`teal` default, `synchrony`, `illini`, `osu`, `cu`); clicking a
  swatch calls `setTheme(key)`. Closes on outside-click via a `mousedown`
  listener on a `ref`'d wrapper. Adding a new theme means adding an entry to
  the `THEMES` array here **and** the matching `[data-theme="..."]` block in
  `src/App.css` — the two must stay in sync manually, there's no shared
  source of truth.
- `Footer.js` / `Footer.css` — static footer, same on every page.

## Current state

Stable, no open work. Five themes wired end-to-end (switcher UI ↔
`App.css` tokens). The Caterpillar theme (`cat`) was renamed to Synchrony
(`synchrony`) 2026-08-21, gold/near-black colors sampled from the pasted
Synchrony logo — see root [AGENTS.md](../../AGENTS.md) current-state log.
