import React from "react";
import "../styles/Home.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";


function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="intro">HI THERE,</p>
          <h1>
            My name is <span className="highlight">Trustan Price</span>
          </h1>
          <p className="description">
            I am currently a Computer Science master’s student at the University of
            Illinois Urbana-Champaign, and I have graduated with a degree in Statistics
            from UIUC. My near-term goal is to become a data scientist focused on
            predictive analytics, risk modeling, fraud detection, and forecasting. Over
            time, I plan to move into building machine learning models end-to-end for
            development and deployment.
          </p>
          <div className="links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=trustanprice@gmail.com&su=Let's%20Connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="/home/trustanprice-cv2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaFileAlt size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/trustan-price-69bb17269/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/trustanprice"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub size={28} />
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src="/home/profile.png" alt="Profile" />
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Featured Section */}
      <section className="featured">
        <h2 className="section-title">Featured Projects</h2>

        {/* LedgerOne – E-commerce Financial Ledger */}
        <div className="feature-card">
          <img
            src="/home/ecommerce-thumbnail.png"
            alt="LedgerOne E-commerce Financial Ledger"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>LedgerOne: E-Commerce Financial Ledger & Analytics</h3>
            <p>
              A fintech-focused e-commerce analytics project centered on building a
              double-entry financial ledger from raw transactional events. LedgerOne
              models orders, payments, refunds, fees, and payouts as immutable financial
              events, transforms them with dbt and DuckDB, and exposes clean,
              auditable metrics for revenue recognition, cash flow, and platform
              performance through BI dashboards.
            </p>
            <a
              href="https://github.com/trustanprice/ledgerone"
              className="btn learn-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* NBA Predictions Project */}
        <div className="feature-card">
          <img
            src="/home/nba-thumbnail.png"
            alt="NBA Predictions Project"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>NBA Predictions Project</h3>
            <p>
              Predicts NBA team win totals using Elastic Net regression for
              feature reduction and KNN regression for performance prediction.
              Built with Streamlit for visualization and Python for the model,
              showcasing machine learning in sports analytics.
            </p>
            <a
              href="https://basketball-predictions-trustanprice.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn learn-more"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* See All Projects */}
        <div className="see-all-container">
          <a href="/projects" className="btn see-all">
            See All Projects →
          </a>
        </div>

        <div className="section-divider"></div>

        {/* Featured Experience */}
        <h2 className="section-title">Featured Experience</h2>

        <div className="feature-card">
          <img
            src="/home/caterpillar-thumbnail.png"
            alt="Caterpillar Internship"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Caterpillar Inc. — Chicago, IL</h3>
            <p>
              Worked on the Analytics & Executions team under Paul Brown,
              building CI/CD pipelines, developing tests for AWS Lambda functions,
              integrating AWS CloudWatch with Grafana dashboards, and improving audit logging solutions.
            </p>
          </div>
        </div>

        {/* See All Experiences */}
        <div className="see-all-container">
          <a href="/experiences" className="btn see-all">
            See All Experiences →
          </a>
        </div>


        <div className="section-divider"></div>

        {/* ✅ Featured Clubs Section */}
        <h2 className="section-title">Featured Clubs</h2>

        {/* SAS */}
        <div className="feature-card">
          <img
            src="/clubs/sas-logo.png"
            alt="Sports Analytics Society"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Sports Analytics Society (SAS)</h3>
            <p>
              Serve as the Lead Machine Learning Engineer for a sports betting
              app project. Develop predictive models, manage the ML pipeline,
              and lead data preprocessing efforts to improve forecast accuracy
              and feature importance insights.
            </p>
            <a href="https://illinoissportsanalytics.com/" className="btn learn-more">
              Learn More →
            </a>
          </div>
        </div>

        {/* SAM */}
        <div className="feature-card">
          <img
            src="/clubs/sam-logo.png"
            alt="Sports Analytics by Minorities"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Sports Analytics by Minorities (SAM)</h3>
            <p>
              Founded and led an organization empowering underrepresented
              students in sports analytics. Managed workshops, collaborative
              projects, and mentorship programs to build data literacy and
              provide professional development in analytics careers.
            </p>
            <a href="/clubs" className="btn learn-more">
              Learn More →
            </a>
          </div>
        </div>

        {/* See All Clubs */}
        <div className="see-all-container">
          <a href="/clubs" className="btn see-all">
            See All Clubs →
          </a>
        </div>

      </section>

    </div>  /* ✅ Close the .home wrapper */
  );
}

export default Home;
