import React from "react";
import "./Home.css";

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
          I’m a Statistics major with minors in Computer Science and Data Science at the University of Illinois Urbana-Champaign. My near-term goal is to become a data scientist focused on predictive analytics, risk modeling, fraud detection, and forecasting. Over time, I plan to move into building machine learning models end-to-end for development and deployment.
          </p>
          <div className="buttons">
            <a href="mailto:trustanprice@gmail.com" className="btn primary">
              trustanprice@gmail.com
            </a>
            <a href="/home/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">
              View Resume
            </a>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/trustan-price-69bb17269/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" | "}
            <a href="https://github.com/trustanprice" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/home/profile.png" alt="Profile" />
        </div>
      </section>

      {/* NBA Predictions Project */}
      <section className="featured">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <img src="/home/nba-thumbnail.png" alt="NBA Predictions Project" />
          <div className="project-info">
            <h3>NBA Predictions Project</h3>
            <p>
            This project uses Elastic Net regression for feature reduction and a KNN Regressor to predict NBA team win totals based on data scraped and preprocessed from Basketball Reference and NBA.com. Built with Streamlit for the frontend and Python for the backend, it showcases the application of machine learning in sports analytics.            </p>
            <a href="https://basketball-predictions-trustanprice.streamlit.app/" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* AI Advisor Project Project */}
      <section className="featured">
        <div className="project-card">
          <img src="/home/ai-advisor-thumbnail.png" alt="AI Academic Advisor Project" />
          <div className="project-info">
            <h3>AI Academic Advisor Project</h3>
            <p>
            An AI-powered academic advising tool that recommends college majors and course schedules based on student interests using NLP and machine learning. Built with React and Flask, with integrated UIUC course data and personalized recommendation logic.
            </p>
            <a href="https://github.com/trustanprice/AI-Advisor" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Dementia Diagnosis Project */}
      <section className="featured">
        <div className="project-card">
          <img src="/home/dementia-diagnosis-thumbnail.png" alt="ML Dementia Diagnosis Project" />
          <div className="project-info">
            <h3>ML Dementia Diagnosis Project</h3>
            <p>
            Developed and trained machine learning models, including CNNs and Reinforcement Learning, for early detection and classification of dementia using MRI scans. Integrated statistical datasets to improve diagnosis and enhance understanding of Alzheimer's disease.            </p>
            <a href="/home/ml-dementia-diagnosis.pdf" target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
