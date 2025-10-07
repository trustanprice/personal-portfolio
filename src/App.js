import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Clubs from "./pages/Club";
import SemiPro from "./pages/SemiPro";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/club" element={<Clubs />} />
        <Route path="/semipro" element={<SemiPro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
