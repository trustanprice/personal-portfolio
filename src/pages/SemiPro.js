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

        {/* Card 1 — 7Brew Work */}
        <div className="semi-card">
          <img
            src="/semipro/7brew-logo.png"
            alt="7Brew Barista"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>Barista at 7Brew</h3>
            <p>
              I currently work at <strong>7Brew Coffee</strong> in between classes, serving up drinks 
              and good energy every shift. It’s a fast-paced environment that keeps me grounded, helps 
              me keep my mind in a professional space, and upholds my sense of responsibility.
            </p>
          </div>
        </div>

        {/* Card 2 — Basketball */}
        <div className="semi-card">
          <img
            src="/semipro/basketball.png"
            alt="Basketball"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>Recreation Basketball</h3>
            <p>
              In my free time I love playing <strong>basketball</strong> at the campus rec center. 
              It’s my way to stay active, clear my head, and fuel my competitive spirit while keeping 
              that teamwork mindset sharp.
            </p>
          </div>
        </div>

        {/* Card 3 — Anime */}
        <div className="semi-card">
          <img
            src="/semipro/anime.png"
            alt="Anime"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>Anime</h3>
            <p>
              In my downtime, I’ve been keeping up with <strong>My Hero Academia</strong>, 
              <strong> Dan Da Dan</strong>, and <strong>Dr. Stone</strong>. These are a few of the 
              shows I enjoy watching in my leisure time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SemiPro;
