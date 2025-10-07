import React from "react";
import "../styles/Clubs.css";

function Clubs() {
  return (
    <div className="clubs-page">
      {/* ------------------------------
          HERO SECTION
      ------------------------------ */}
      <section className="clubs-hero">
        <div className="clubs-hero-content">
          <div className="clubs-hero-text">
            <h1>Campus Involvement & Leadership</h1>
            <div className="divider"></div>
            <p>
              A showcase of my technical and leadership involvement at the University of Illinois Urbana-Champaign.
              These organizations have helped me grow as a developer, mentor, and community contributor in both
              data science and engineering spaces.
            </p>
          </div>

          <div className="clubs-hero-image">
            <img
              src="/clubs/clubs-hero.png"
              alt="Campus Involvement"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------
          CLUBS SECTION
      ------------------------------ */}
      <section className="clubs-list">
        <h2 className="section-title">
          <span className="section-accent">Highlighted</span> Organizations
        </h2>
        <div className="divider"></div>

        {/* Sports Analytics Society */}
        <div className="club-card">
          <div className="club-logo">
            <img
              src="/clubs/sas-logo.png"
              alt="Sports Analytics Society Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="club-info">
            <div className="club-header">
              <h3>Sports Analytics Society</h3>
              <span className="role">Lead Machine Learning Engineer</span>
              <span className="date">Fall 2025 – Present</span>
            </div>
            <p className="club-desc">
              • Lead predictive modeling initiatives and data engineering pipelines for sports data projects.<br />
              • Mentor students on implementing regression, clustering, and ML-based forecasting models.<br />
              • Support the development of interactive dashboards for an NFL Sports Betting Predictions project.
            </p>
          </div>
        </div>

        {/* B[U]ILT */}
        <div className="club-card">
          <div className="club-logo">
            <img
              src="/clubs/built-logo.png"
              alt="B[U]ILT Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="club-info">
            <div className="club-header">
              <h3>B[U]ILT (Black, Indigenous, and Latino in Tech)</h3>
              <span className="role">Tech Committee Member</span>
              <span className="date">Fall 2024 – Present</span>
            </div>
            <p className="club-desc">
              • Engage with peers to promote diversity and mentorship in technology and engineering fields.<br />
              • Participate in networking sessions and technical workshops hosted by top tech companies.<br />
              • Collaborate with the Tech Committee on initiatives bridging software development and DEI outreach.
            </p>
          </div>
        </div>

        {/* NSBE */}
        <div className="club-card">
          <div className="club-logo">
            <img
              src="/clubs/nsbe-logo.png"
              alt="National Society of Black Engineers Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="club-info">
            <div className="club-header">
              <h3>National Society of Black Engineers (NSBE)</h3>
              <span className="role">Member</span>
              <span className="date">Fall 2022 – Present</span>
            </div>
            <p className="club-desc">
              • Collaborate with fellow Black engineers to enhance representation and access to professional opportunities.<br />
              • Attend conferences and technical talks focused on engineering innovation and career development.<br />
              • Participate in mentorship programs and community outreach to support underrepresented students in STEM.
            </p>
          </div>
        </div>

        {/* Sports Analytics by Minorities */}
        <div className="club-card">
          <div className="club-logo">
            <img
              src="/clubs/sam-logo.png"
              alt="Sports Analytics by Minorities Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
          <div className="club-info">
            <div className="club-header">
              <h3>Sports Analytics by Minorities</h3>
              <span className="role">Founder & President</span>
              <span className="date">Fall 2022 – Spring 2024</span>
            </div>
            <p className="club-desc">
              • Founded an organization dedicated to increasing minority representation in sports analytics and journalism.<br />
              • Conduct interviews with collegiate and professional athletes to combine storytelling with statistical insights.<br />
              • Produce podcasts and written features that communicate advanced sports metrics in an accessible and engaging way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clubs;
