import { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Clubs from "./pages/Clubs";
import SemiPro from "./pages/SemiPro";
import Footer from "./components/Footer";
import "./App.css";

// A newly opened page starts at the top. Back/forward (POP) keeps the position the
// browser restores, so returning to a page lands where the visitor left it.
function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType !== "POP") window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return null;
}

function App() {
  // Load saved preferences (dark/light mode + color theme)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("siteTheme") || "teal"
  );

  // Apply dark mode to the <body> globally
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Apply color theme to the <body> globally
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("siteTheme", theme);
  }, [theme]);

  // Phone browsers tint their toolbar with <meta name="theme-color">; keep it on
  // the page background of the current theme and mode (runs after the two above).
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    const background = getComputedStyle(document.body).getPropertyValue("--bg-color").trim();
    if (meta && background) meta.setAttribute("content", background);
  }, [darkMode, theme]);

  return (
    <Router>
      <ScrollToTop />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        theme={theme}
        setTheme={setTheme}
      />
      {/* Background, text color and min-height come from .App in App.css. */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/semipro" element={<SemiPro />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
