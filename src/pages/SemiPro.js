import React from "react";
import "../styles/SemiPro.css";

function SemiPro() {
  return (
    <div className="semi-page">
      {/* Hero Section */}
      <section className="semi-hero">
        <div className="semi-hero-content">
          <div className="semi-hero-text">
            <h1>Life Outside of Work</h1>
            <div className="divider"></div>
            <p>
              The semi-pro side of me — interests, hobbies, and experiences that shape who I am 
              beyond coding and data. Whether it’s sports, creativity, or community, these moments 
              remind me that personal growth fuels professional growth.
            </p>
          </div>

          <div className="semi-hero-image">
            <img src="/semipro/semipro-hero.png" alt="Semi-Pro Life" />
          </div>
        </div>
      </section>

      {/* Semi-Pro Highlights Section */}
      <section className="semi-list">
        <h2 className="section-title">
          <span className="section-accent">Highlights</span> & Interests
        </h2>
        <div className="divider"></div>

        {/* Example Card 1 */}
        <div className="semi-card">
          <img
            src="/logo192.png"
            alt="Podcasting"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>TBA</h3>
            <p>
              ...
            </p>
          </div>
        </div>

        {/* Example Card 2 */}
        <div className="semi-card">
          <img
            src="/logo192.png"
            alt="Fitness and Team Sports"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>TBA</h3>
            <p>
             ...
            </p>
          </div>
        </div>

        {/* Example Card 3 */}
        <div className="semi-card">
          <img
            src="/logo192.png"
            alt="Community Work"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>TBA</h3>
            <p>
              ...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SemiPro;
