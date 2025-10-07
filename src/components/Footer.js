import React from "react";
import "./Footer.css";

function Footer() {
  return (

    <footer className="footer">

      <div className="back-home-container">
        <a href="/" className="btn see-all">
          ← Back to Home
        </a>
      </div>
      <p>© {new Date().getFullYear()} Trustan Price | Built with React</p>
    </footer>
  );
}

export default Footer;
