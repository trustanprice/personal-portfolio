import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">trustanprice.io</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">All Projects</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/club">Club</Link></li>
        <li><Link to="/semipro">Semi-Pro</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
