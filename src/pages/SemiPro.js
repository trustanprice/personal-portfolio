import React from "react";
import "../styles/SemiPro.css";

function SemiPro() {
  return (
    <div className="semi-page">
      {/* Hero Section */}
      <section className="semi-hero">
        <div className="semi-hero-content">
          <div className="semi-hero-text">
            <h1>Life Outside of Tech</h1>
            <div className="divider"></div>
            <p>
              The semi-pro side of me! This page contains interests, hobbies, and experiences that shape who I am
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

        {/* Card 1 — MCU: Doomsday Prep */}
        <div className="semi-card">
          <img
            src="/semipro/mcu-doomsday.png"
            alt="MCU Doomsday Prep"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>MCU: Doomsday Prep</h3>
            <p>
              I’m gearing up for <strong>Avengers: Doomsday</strong> by working through a watchlist of
              every MCU movie I need to revisit so I walk in with the right perspective and background
              on the story — no surprises when I hit the theater.
            </p>
          </div>
        </div>

        {/* Card 2 — Recreational Sports */}
        <div className="semi-card">
          <img
            src="/semipro/futbol.png"
            alt="Recreational Sports"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>Recreational Sports</h3>
            <p>
              I’ve been playing more <strong>soccer</strong> since the World Cup sparked my interest,
              on top of <strong>basketball</strong>, which I’ve always loved. It’s my way to stay active,
              clear my head, and fuel my competitive spirit while keeping that teamwork mindset sharp.
            </p>
          </div>
        </div>

        {/* Card 3 — Manga & Comics */}
        <div className="semi-card">
          <img
            src="/semipro/manga.png"
            alt="Manga and Comics"
            className="semi-img"
          />
          <div className="semi-info">
            <h3>Manga & Comics</h3>
            <p>
              In my downtime, I’ve been reading manga and comics, most recently
              <strong> Boruto</strong>, <strong>Invincible</strong>, and <strong>Black Clover</strong>.
              These are a few of the ways I like to unwind in my leisure time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SemiPro;
