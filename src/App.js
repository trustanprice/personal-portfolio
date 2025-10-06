import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Club from "./pages/Club";
import SemiPro from "./pages/SemiPro";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/club" element={<Club />} />
        <Route path="/semipro" element={<SemiPro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
