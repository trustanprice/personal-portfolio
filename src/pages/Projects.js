import React from "react";
import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projects-page">
            {/* HERO SECTION */}
            <section className="projects-hero">
                <div className="projects-hero-content">
                    {/* Left: Text */}
                    <div className="projects-hero-text">
                        <h1>
                            PERSONAL <br /> PROJECTS
                        </h1>
                        <div className="underline"></div>
                        <p>
                            Explore my collection of data-driven and software engineering projects!
                            From predictive modeling and data engineering to front-end development
                            and machine learning applications, each project showcases my passion for
                            transforming data into actionable insights and building end-to-end
                            solutions that make an impact.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="projects-hero-image">
                        <img src="/projects/projects-hero.png" alt="Personal Projects" />
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTED PROJECTS SECTION */}
            <section className="projects-section">
                <h2 className="highlighted-title">
                    HIGHLIGHTED <span>PROJECTS</span>
                </h2>
                <div className="underline teal"></div>

                <div className="projects-list">
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
                    <div className="project-card">
                        <img
                            src="/home/nba-thumbnail.png"
                            alt="NBA Predictions"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h3>NBA Predictions Application</h3>
                            <p>
                                A predictive modeling app that forecasts NBA team win totals using
                                Elastic Net and KNN regression. Includes an interactive Streamlit UI
                                to explore season forecasts, feature weights, and team statistics.
                            </p>
                            <a
                                href="https://basketball-predictions-trustanprice.streamlit.app/"
                                className="learn-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Live App →
                            </a>
                        </div>
                    </div>

                    {/* AI Academic Advisor */}
                    <div className="project-card">
                        <img
                            src="/home/ai-advisor-thumbnail.png"
                            alt="AI Academic Advisor"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h3>AI Academic Advisor</h3>
                            <p>
                                An intelligent advising tool that helps students explore majors and
                                build schedules through natural language inputs. Built with React and
                                Flask, it uses keyword extraction and rule-based reasoning to match
                                students with real course data from UIUC’s catalog.
                            </p>
                            <a
                                href="https://github.com/trustanprice/AI-Advisor"
                                className="learn-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Repository →
                            </a>
                        </div>
                    </div>

                    {/* Dementia Diagnosis Project */}
                    <div className="project-card">
                        <img
                            src="/home/dementia-diagnosis-thumbnail.png"
                            alt="Dementia Diagnosis"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h3>ML Dementia Diagnosis via MRI</h3>
                            <p>
                                A deep learning research project developing CNN architectures to
                                classify MRI scans by dementia stage. Combines image preprocessing,
                                class balancing, and interpretability analysis for early detection.
                            </p>
                            <a
                                href="/home/ml-dementia-diagnosis.pdf"
                                className="learn-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Paper →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Projects;
