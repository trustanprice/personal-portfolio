import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Navbar.css";

// The navbar is always shown this close to the top of the page...
const SHOW_NEAR_TOP = 50;
// ...and ignores scroll movements smaller than this (px), so a wobbling finger
// or iOS rubber-banding doesn't make it flicker.
const SCROLL_THRESHOLD = 8;
// Matches the mobile breakpoint in Navbar.css (hamburger menu at or below it).
const MOBILE_QUERY = "(max-width: 768px)";

function Navbar({ darkMode, setDarkMode, theme, setTheme }) {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);
  const hamburgerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const focusMenuOnOpen = useRef(false);
  const { pathname } = useLocation();

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Navbar hide on scroll down / show on scroll up. One passive listener,
  // throttled to one update per frame; positions are clamped to the real scroll
  // range because iOS reports values below 0 and past the end while bouncing.
  useEffect(() => {
    let lastY = Math.max(window.scrollY, 0);
    let ticking = false;

    const update = () => {
      ticking = false;
      const maxY = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const y = Math.min(Math.max(window.scrollY, 0), maxY);
      if (y < SHOW_NEAR_TOP) {
        setIsVisible(true);
        lastY = y;
        return;
      }
      const delta = y - lastY;
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      lastY = y;
      if (!menuOpenRef.current) setIsVisible(delta < 0);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the navbar hides (user scrolled away)
  useEffect(() => {
    if (!isVisible) setMenuOpen(false);
  }, [isVisible]);

  // ...and on every route change, including back/forward, not only link taps.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: the page behind it doesn't scroll, Escape
  // closes it, and widening past the mobile breakpoint closes it.
  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (!menuOpen) return undefined;

    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    if (focusMenuOnOpen.current && firstLinkRef.current) firstLinkRef.current.focus();
    focusMenuOnOpen.current = false;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        if (hamburgerRef.current) hamburgerRef.current.focus();
      }
    };
    const mobile = window.matchMedia(MOBILE_QUERY);
    const handleBreakpoint = () => {
      if (!mobile.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    // Safari before 14 only has the older addListener/removeListener.
    if (mobile.addEventListener) mobile.addEventListener("change", handleBreakpoint);
    else mobile.addListener(handleBreakpoint);

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
      if (mobile.removeEventListener) mobile.removeEventListener("change", handleBreakpoint);
      else mobile.removeListener(handleBreakpoint);
    };
  }, [menuOpen]);

  const toggleMenu = (e) => {
    // e.detail is 0 when the button was pressed from the keyboard: then move
    // focus into the menu so Tab continues through its links.
    focusMenuOnOpen.current = !menuOpen && e.detail === 0;
    setMenuOpen((o) => !o);
  };

  return (
    <>
      {/* Mobile only: dims the page behind the open menu; a tap on it closes the menu. */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav className={`navbar ${isVisible ? "show" : "hide"}${menuOpen ? " menu-open" : ""}`}>
        <Link to="/" className="logo" onClick={closeMenu}>
          trustanprice.io
        </Link>

        <ul id="site-nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu} ref={firstLinkRef}>Home</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/experiences" onClick={closeMenu}>Experiences</Link></li>
          <li><Link to="/clubs" onClick={closeMenu}>Clubs</Link></li>
          <li><Link to="/semipro" onClick={closeMenu}>SemiPro</Link></li>
        </ul>

        <div className="navbar-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <ThemeSwitcher
            theme={theme}
            setTheme={setTheme}
            onOpen={closeMenu}
            navHidden={!isVisible}
          />

          <button
            ref={hamburgerRef}
            className="hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-nav-links"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
