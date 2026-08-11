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

        {/* UIUC Statistics Datathon – Call Center Forecasting */}
        <div className="feature-card">
          <img
            src="/home/datathon-thumbnail.png"
            alt="UIUC Statistics Datathon 2026 Project"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>UIUC Statistics Datathon 2026 – 2nd Place (200+ Teams)</h3>
            <p>
              Served as Project Lead for a team competing in the UIUC Statistics Datathon 2026, where we
              built a forecasting solution to support call center operations. Our work placed 2nd out of 200+ teams and
              was presented to industry leaders at Synchrony.
            </p>
            <a
              href="https://github.com/trustangabrielprice/illinois-datathon-team015"
              className="btn learn-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Presentation →
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
