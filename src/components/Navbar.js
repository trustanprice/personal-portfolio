import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode, theme, setTheme }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close the mobile menu whenever the navbar hides (user scrolled away)
  useEffect(() => {
    if (!isVisible) setMenuOpen(false);
  }, [isVisible]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isVisible ? "show" : "hide"}`}>
      <Link to="/" className="logo" onClick={closeMenu}>
        trustanprice.io
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/experiences" onClick={closeMenu}>Experiences</Link></li>
        <li><Link to="/clubs" onClick={closeMenu}>Clubs</Link></li>
        <li><Link to="/semipro" onClick={closeMenu}>SemiPro</Link></li>
      </ul>

      <div className="navbar-controls">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
