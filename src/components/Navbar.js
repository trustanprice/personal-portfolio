import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode, theme, setTheme }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${isVisible ? "show" : "hide"} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <Link to="/" className="logo">
        trustanprice.io
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/semipro">SemiPro</Link></li>
      </ul>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>

      <ThemeSwitcher theme={theme} setTheme={setTheme} />
    </nav>
  );
}

export default Navbar;
