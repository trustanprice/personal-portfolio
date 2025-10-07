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
            I’m a Statistics major with minors in Computer Science and Data
            Science at the University of Illinois Urbana-Champaign. My near-term
            goal is to become a data scientist focused on predictive analytics,
            risk modeling, fraud detection, and forecasting. Over time, I plan
            to move into building machine learning models end-to-end for
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
              href="/home/trustanprice-resume2025.pdf"
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

        {/* E-commerce BI Warehouse Project */}
        <div className="feature-card">
          <img
            src="/home/ecommerce-thumbnail.png"
            alt="E-commerce BI Warehouse Project"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>E-Commerce BI Warehouse (Coming Soon)</h3>
            <p>
              An upcoming project to explore fintech analytics by building a data warehouse for e-commerce data using dbt, DuckDB, and Metabase.
            </p>
            <a
              href="https://github.com/trustanprice/ecom-bi-duckdb-dbt"
              className="btn learn-more"
              target="_blank"
              rel="noopener noreferrer"
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
      </section>

    </div>  /* ✅ Close the .home wrapper */
  );
}

export default Home;
