import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Clubs from "./pages/Clubs";
import SemiPro from "./pages/SemiPro";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Load saved preference (dark or light)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Apply dark mode to the <body> globally
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="App" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", minHeight: "100vh" }}>
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
    </Router>
  );
}

export default App;
