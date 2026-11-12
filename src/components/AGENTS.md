# AGENTS.md — src/components/

## Responsibility

Global chrome rendered around every route by `App.js` (outside `<Routes>`):
the navbar (site nav, dark-mode toggle, color-theme picker, mobile hamburger
menu) and the footer. Nothing here is page-specific, with one shared
building block: `ExpandableDetails`, the "Show more" wrapper used by the
cards on `/projects`.

## Inputs

- `darkMode`, `setDarkMode`, `theme`, `setTheme` — passed down as props from
  `App.js`, which owns the state and persists it to `localStorage`
  (`darkMode`, `siteTheme` keys) and applies it to `<body>` (`dark-mode`
  class + `data-theme` attribute) so every page's CSS variables update
  together. Components here don't touch `localStorage` directly. (`App.js`
  also keeps `<meta name="theme-color">` on the current `--bg-color`, and
  its `ScrollToTop` sends every newly opened page to the top while
  back/forward keeps the browser's restored position.)

## Files

- `Navbar.js` / `Navbar.css` — sticky nav that hides on scroll-down and
  reappears on scroll-up, route links via `react-router-dom`'s `<Link>`, a
  dark/light toggle button, the `ThemeSwitcher` dropdown, and a hamburger
  menu for mobile (≤768px).
  - Scrolling: one passive `scroll` listener, throttled with
    `requestAnimationFrame`, positions clamped to the real scroll range (iOS
    rubber-banding reports values below 0 and past the end), always shown
    within 50px of the top, and movements under 8px ignored
    (`SCROLL_THRESHOLD`) so a wobbling finger doesn't make it flicker.
  - Mobile menu: the links open as an absolutely positioned panel under the
    bar (it overlays the page, nothing moves), with a `.nav-backdrop` dimming
    the page (`--scrim` token in `App.css`). While open, `body` overflow is
    hidden (scroll lock) and the panel scrolls by itself if taller than the
    screen. It closes on a link tap, any route change (incl. back/forward),
    a tap on the backdrop, Escape (focus returns to the hamburger), when the
    navbar hides, and when the window widens past 768px. Closed, its links
    are `visibility: hidden`, so they're out of the tab order; opened from
    the keyboard, focus moves to the first link. The bar takes the panel's
    opaque background while the menu is open (`.navbar.menu-open`).
  - 44px touch targets on phones: the 34px circle buttons get an invisible
    `::before` touch area, the menu links are full-width 45px rows, the logo
    has extra vertical padding offset by a negative margin.
  - 769-900px wide (narrow tablets, e.g. iPad Air portrait) the bar is
    tightened (padding, logo size, gaps); the full desktop bar needs 824px
    and used to push the whole page sideways there.
  - Hover effects are inside `@media (hover: hover)` (they stuck after taps
    on touch screens), and the dark-mode hover color of the hamburger and
    the theme-switcher button is restated there (the icon used to disappear
    into its own hover fill).
- `ThemeSwitcher.js` / `ThemeSwitcher.css` — small popover listing the five
  color themes (`teal` default, `synchrony`, `illini`, `osu`, `cu`); clicking a
  swatch calls `setTheme(key)`. While open it closes on a `pointerdown`
  outside its wrapper (reacts to touch right away) and on Escape (focus
  returns to its button); the button has `aria-expanded`/`aria-controls` and
  each swatch `aria-pressed`. Props `onOpen` (the navbar closes its mobile
  menu) and `navHidden` (closes the popover when the navbar slides away).
  The panel stays within the screen (`max-width`/`max-height`, scrolls by
  itself) and its swatch rows are 44px tall on phones. Adding a new theme
  means adding an entry to the `THEMES` array here **and** the matching
  `[data-theme="..."]` block in `src/App.css` — the two must stay in sync
  manually, there's no shared source of truth.
- `Footer.js` / `Footer.css` — static footer, same on every page. Footer.css
  owns `.back-home-container` (the "← Back to Home" wrapper), which used to
  be redefined in four page stylesheets; tighter margins on phones.
- `ExpandableDetails.js` / `ExpandableDetails.css` (+ `ExpandableDetails.test.js`)
  — wraps a card's description (`<p>`/`<ul>` only; the `<h3>` and the links
  stay outside). Markup: `.expandable > .expandable-content#id >
  .expandable-inner > children`, plus a `.expandable-toggle` button when
  collapsed. Behavior:
  - Until measured it's plain, unstyled `<div>`s, so short descriptions look
    exactly as if unwrapped (margins still collapse through; the clip uses
    `overflow: clip`, which doesn't create a formatting context).
  - Measures in `useLayoutEffect` (before the first paint) and again on every
    size change of the text (`ResizeObserver`; window `resize` as a
    fallback). Collapses only when more than `--expandable-slack` px would be
    hidden; then shows `--expandable-collapsed` px, moved to the middle of the
    nearest text line (set as `--expandable-cut` on the element) so the fade
    never sits over an empty gap between paragraphs. Any measuring error
    leaves the text in full.
  - Defaults (ExpandableDetails.css): 150px shown / 50px slack for cards with
    the thumbnail beside the text. `src/styles/Projects.css` overrides them
    for stacked cards: 240px / 160px (≤768px for `.feature-card`, ≤900px for
    `.project-card`, matching where each card type stacks).
  - Collapsed: a fade into `--expandable-fade` (defaults to `var(--bg-alt)`,
    the card background, so it works in every theme and dark mode) and a
    "Show more ▾" / "Show less ▴" button styled like the accent links
    (`aria-expanded`, `aria-controls`, 44px tall, `:focus-visible` ring).
    Height animates over 350ms (`DURATION` in the JS must match the CSS
    transition); no animation under `prefers-reduced-motion`. Collapsing
    scrolls back to the card (`anchor` prop, default
    `.feature-card, .project-card`) when its top is above the viewport,
    leaving `scrollOffset` (80px) for the navbar. Printing shows everything.

## Current state

Five themes wired end-to-end (switcher UI ↔ `App.css` tokens). The
Caterpillar theme (`cat`) was renamed to Synchrony (`synchrony`) 2026-08-21,
gold/near-black colors sampled from the pasted Synchrony logo — see root
[AGENTS.md](../../AGENTS.md) current-state log. 2026-11-12: navbar scroll
handling, the overlay mobile menu, ThemeSwitcher touch/keyboard handling and
tap targets reworked for phones, and `ExpandableDetails` added for the
Projects page (phone-view pass; details in the root log). No open work.
