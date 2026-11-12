import React, { useId, useLayoutEffect, useRef, useState } from "react";
import "./ExpandableDetails.css";

/*
 * ExpandableDetails: wraps a card's description (its <p>/<ul> elements, never the
 * <h3> title or the links) and, when that text is clearly taller than fits beside
 * the thumbnail, shows it collapsed with a fade and a "Show more ▾ / Show less ▴"
 * disclosure button.
 *
 * - How tall the collapsed text is, and how much text must be hidden before it is
 *   worth collapsing at all, come from the CSS custom properties --expandable-collapsed
 *   and --expandable-slack (px). Defaults live in ExpandableDetails.css; pages override
 *   them per breakpoint (Projects.css does for stacked phone cards). The actual cut is
 *   moved to the middle of the nearest text line (--expandable-cut), so the fade
 *   always covers a half-shown line, never the blank gap between two paragraphs.
 * - The text renders in full with no button until it is measured. Measuring happens in
 *   useLayoutEffect (before the first paint, so there is no flash) and again whenever
 *   the text's box changes size (ResizeObserver: width changes, rotation, font loads).
 *   If anything goes wrong while measuring, the text simply stays in full.
 * - Collapsing a card whose top has scrolled above the viewport scrolls back to it.
 */

const DURATION = 350; // ms; matches the max-height transition in ExpandableDetails.css

function readPx(el, name, fallback) {
  const value = parseFloat(getComputedStyle(el).getPropertyValue(name));
  return Number.isFinite(value) ? value : fallback;
}

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Where to cut the collapsed text (px from the text's top), near `target` but
// never in the blank gap between two paragraphs: through the middle of the line
// at the target (a half-shown line under the fade), or, when the target falls in
// a gap, just under the last full line above it.
function lineSnappedCut(inner, target) {
  const top = inner.getBoundingClientRect().top;
  const range = document.createRange();
  const walker = document.createTreeWalker(inner, NodeFilter.SHOW_TEXT);
  let lastFullLineBottom = 0;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!node.nodeValue.trim()) continue;
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (rect.width === 0) continue;
      const lineTop = rect.top - top;
      const lineBottom = rect.bottom - top;
      if (lineBottom <= target) {
        lastFullLineBottom = Math.max(lastFullLineBottom, lineBottom);
      } else if (lineTop <= target + 8) {
        return Math.round(lineTop + rect.height * 0.55);
      } else {
        return Math.round(lastFullLineBottom + 3);
      }
    }
  }
  return target;
}

function ExpandableDetails({
  children,
  // Element brought back into view after collapsing (closest ancestor matching this).
  anchor = ".feature-card, .project-card",
  // Space left above that element for the sticky navbar, which reappears on scroll-up.
  scrollOffset = 80,
}) {
  const contentId = `${useId()}-details`;
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const innerRef = useRef(null);
  const timerRef = useRef(0);
  const [collapsible, setCollapsible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner) return undefined;

    const measure = () => {
      try {
        const full = inner.getBoundingClientRect().height;
        const collapsed = readPx(root, "--expandable-collapsed", 150);
        const slack = readPx(root, "--expandable-slack", 50);
        let canCollapse = false;
        if (full > collapsed) {
          // Collapse only if more than `slack` px would be hidden; a card that is
          // just slightly long keeps all its text.
          const cut = lineSnappedCut(inner, collapsed);
          canCollapse = full - cut > slack;
          // The exact collapsed height, used by the CSS in place of --expandable-collapsed.
          if (canCollapse) root.style.setProperty("--expandable-cut", `${cut}px`);
        }
        setCollapsible(canCollapse);
      } catch (err) {
        setCollapsible(false);
      }
    };

    measure();
    if (typeof ResizeObserver === "function") {
      const observer = new ResizeObserver(measure);
      observer.observe(inner);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useLayoutEffect(() => () => window.clearTimeout(timerRef.current), []);

  const toggle = () => {
    const root = rootRef.current;
    const content = contentRef.current;
    const inner = innerRef.current;
    if (!root || !content || !inner) return;

    window.clearTimeout(timerRef.current);
    const reduce = prefersReducedMotion();
    // After the animation the inline max-height goes away, so the resting state is
    // pure CSS (collapsed: --expandable-cut; expanded: no limit).
    const settle = () => {
      content.style.maxHeight = "";
    };

    if (!expanded) {
      setExpanded(true);
      if (reduce) {
        settle();
        return;
      }
      // Animate from the collapsed height up to the full text height.
      content.style.maxHeight = `${inner.getBoundingClientRect().height}px`;
      timerRef.current = window.setTimeout(settle, DURATION + 50);
      return;
    }

    if (!reduce) {
      // Pin the current height first so the transition has a numeric start value.
      content.style.maxHeight = `${content.getBoundingClientRect().height}px`;
      void content.offsetHeight;
      const cut = readPx(root, "--expandable-cut", readPx(root, "--expandable-collapsed", 150));
      content.style.maxHeight = `${cut}px`;
      timerRef.current = window.setTimeout(settle, DURATION + 50);
    } else {
      settle();
    }
    setExpanded(false);

    // Don't leave the reader far down the page: if the card's top is above the
    // viewport, bring it back (the card's top doesn't move as its text collapses).
    const card = root.closest(anchor) || root;
    const top = card.getBoundingClientRect().top;
    if (top < 0) {
      window.scrollTo({
        top: Math.max(0, window.scrollY + top - scrollOffset),
        behavior: reduce ? "auto" : "smooth",
      });
    }
  };

  const className = [
    "expandable",
    collapsible && "is-collapsible",
    collapsible && expanded && "is-expanded",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} ref={rootRef}>
      <div className="expandable-content" id={contentId} ref={contentRef}>
        <div className="expandable-inner" ref={innerRef}>
          {children}
        </div>
      </div>
      {collapsible && (
        <button
          type="button"
          className="expandable-toggle"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={toggle}
        >
          <span className="expandable-toggle-label">{expanded ? "Show less" : "Show more"}</span>
          <span className="expandable-toggle-caret" aria-hidden="true">
            {expanded ? "▴" : "▾"}
          </span>
        </button>
      )}
    </div>
  );
}

export default ExpandableDetails;
