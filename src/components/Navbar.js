import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Dark Mode Toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.body.classList.toggle("dark-mode", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
    localStorage.setItem("darkMode", newTheme);
  };

  // Hide Navbar on Scroll Down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "show" : "hide"}`}>
      <a href="/" className="logo">
        trustanprice.io
      </a>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/semipro">SemiPro</Link></li>
      </ul>

      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </nav>
  );
}

export default Navbar;
