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
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="/home/trustanprice-cv2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Résumé (PDF)"
            >
              <FaFileAlt size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/trustan-price-69bb17269/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/trustanprice"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src="/home/profile.png" alt="Profile" width="818" height="1024" />
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Featured Section */}
      <section className="featured">
        <h2 className="section-title">Featured Projects</h2>

        {/* JimmyChops – Barber Booking Platform */}
        <div className="feature-card">
          <img
            src="/projects/jimmychops-thumbnail.png"
            alt="JimmyChops Barber Booking Platform"
            width="2168"
            height="992"
            className="feature-img logo-on-white"
          />
          <div className="feature-info">
            <h3>JimmyChops — Barber Booking Platform</h3>
            <p>
              Solo-built, full-stack booking platform for a local barbershop that replaced the
              owner's outdated, paid Wix site. Live on the App Store with 300+ monthly customers
              and a validated 10% increase in new clientele, a confirmed 0% double-booking rate,
              and an estimated 5 hours a week saved via in-app calendar sync and messaging that
              cuts out manual scheduling between cuts.
            </p>
            <div className="feature-links">
              <a
                href="https://apps.apple.com/us/app/id6823379884"
                target="_blank"
                rel="noopener noreferrer"
                className="btn learn-more"
              >
                View on App Store →
              </a>
            </div>
          </div>
        </div>

        {/* UIUC Statistics Datathon – Call Center Forecasting */}
        <div className="feature-card">
          <img
            src="/home/datathon-thumbnail.png"
            alt="UIUC Statistics Datathon 2026 Project"
            width="3024"
            height="1702"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>UIUC Statistics Datathon 2026 – 2nd Place (200+ Teams)</h3>
            <p>
              Led a team of minority students to 2nd place out of 200+ teams. We engineered
              time-series features (lag variables, rolling statistics, calendar effects) and
              built LightGBM ensemble models that forecast call volume, customer care time, and
              abandon rate at 30-minute intervals across multiple portfolios, then presented the
              solution to industry leaders at Synchrony.
            </p>
            <a
              href="https://github.com/DarylOkeke/datathon-final-submission/blob/main/datathon_team015_v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn learn-more"
            >
              View Presentation →
            </a>
          </div>
        </div>

        {/* Roster & Revenue Optimization Dashboard – Illinois Division of Intercollegiate Athletics */}
        <div className="feature-card">
          <img
            src="/projects/roster-revenue-thumbnail.png"
            alt="Roster & Revenue Optimization Dashboard"
            width="2990"
            height="1668"
            className="feature-img"
          />
          <div className="feature-info">
            <h3>Roster & Revenue Optimization Dashboard — Illinois Athletics</h3>
            <p>
              Interactive analytics dashboard built for the University of Illinois Division of
              Intercollegiate Athletics, showing how the NCAA's House v. NCAA revenue-sharing
              cap is allocated across football and basketball and whether player pay tracks
              on-field production. Now integrated into the department's internal backplane
              platform and confirmed for production rollout in January 2027, with an
              API-fed pipeline that auto-populates the dashboard immediately after every game.
            </p>
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
            src="/home/synchrony-thumbnail.png"
            alt="Synchrony"
            width="240"
            height="238"
            className="feature-img logo-on-white"
          />
          <div className="feature-info">
            <h3>Synchrony — Data Scientist Intern (2026)</h3>
            <p>
              Data Scientist Intern on Synchrony's Forecasting & Advanced Modeling team, developing and
              deploying an interactive AWS dashboard that consolidates BI insights alongside
              advanced forecast modeling.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <img
            src="/home/caterpillar-thumbnail-2026.png"
            alt="Caterpillar Internship 2026"
            width="684"
            height="292"
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
            width="960"
            height="720"
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
            width="338"
            height="156"
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
            width="348"
            height="348"
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
