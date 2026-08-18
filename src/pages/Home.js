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

        {/* Forward Data Lab */}
        <div className="feature-card">
          <img
            src="/home/forward-data-lab-thumbnail.png"
            alt="Forward Data Lab Project"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Forward Data Lab — Retrieval's Blind Spot</h3>
            <p>
              Research project for the Forward Data Lab investigating how AI research agents
              like Ai2's Asta retrieve and synthesize academic papers, and where that pipeline
              can quietly fail. Built a minimal, inspectable RAG pipeline with a calibrated
              relevance-confidence threshold and citation-weighted reranking, verified against
              real papers and live queries.
            </p>
            <div className="feature-links">
              <a
                href="https://forward-data-lab.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn learn-more"
              >
                View Live Site →
              </a>
              <a
                href="https://drive.google.com/file/d/1yiZuSyG6jJU_nVv_b1BozBVIGZjfDBit/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn learn-more"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* LedgerOne – FinTech Ledger, Analytics & Credit Risk Platform */}
        <div className="feature-card">
          <img
            src="/home/ledgerone-thumbnail.png"
            alt="LedgerOne FinTech Ledger, Analytics & Credit Risk Platform"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>LedgerOne: FinTech Ledger, Analytics & Credit Risk Platform</h3>
            <p>
              A single-entry, append-only fintech ledger: Python generates immutable financial
              events, and a dbt + DuckDB pipeline (staging → star schema → tested reporting marts)
              turns them into auditable revenue, refund, and payout metrics. A companion credit-risk
              module builds vintage curves, a roll-rate transition matrix, and a CECL-style reserve
              estimate, presented through a live, scroll-driven walkthrough site.
            </p>
            <div className="feature-links">
              <a
                href="https://ledgerone-green.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn learn-more"
              >
                View Walkthrough →
              </a>
              <a
                href="https://github.com/trustanprice/ledgerone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn learn-more"
              >
                View Repository →
              </a>
            </div>
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
            Predicts NBA win totals via walk-forward-validated gradient boosting, powers 
            live player power rankings and coaching evaluations from real NBA.com data, 
            and explains every number's methodology in plain language. Built with Python, 
            FastAPI, and Next.js.
            </p>
            <a
              href="https://basketball-predictions.vercel.app/"
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
            src="/home/caterpillar-thumbnail-2026.png"
            alt="Caterpillar Internship 2026"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Caterpillar Inc. — Chicago, IL (2026)</h3>
            <p>
              Returning as a Software Engineer Intern to build CI/CD pipelines in GitHub Actions
              with reusable workflows, custom actions, and CloudFormation, layered with an
              LLMOps automation system for autonomous remediation and risk prediction. Partnered
              with Security and CloudOps teams to migrate Azure Pipelines to GitHub Actions,
              modernizing CI/CD infrastructure across multiple application teams.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <img
            src="/home/caterpillar-thumbnail.png"
            alt="Caterpillar Internship 2025"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Caterpillar Inc. — Chicago, IL (2025)</h3>
            <p>
              Worked on the Analytics & Executions team under Paul Brown, building CI/CD
              pipelines, developing tests for AWS Lambda functions, integrating AWS CloudWatch
              with Grafana dashboards, and improving audit logging solutions.
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
