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
                    {/* E-commerce BI Warehouse */}
                    <div className="project-card">
                        <img
                            src="/home/ecommerce-thumbnail.png"
                            alt="E-commerce BI Warehouse"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h3>E-Commerce BI Warehouse (Coming Soon)</h3>
                            <p>
                                A business intelligence pipeline designed to explore the intersection
                                of data analytics and fintech. This project will model marketplace
                                data with dbt + DuckDB and visualize KPIs in Metabase. I’m building it
                                to learn about data modeling, warehouse design, and fintech analytics.
                            </p>
                            <a
                                href="https://github.com/trustanprice/ecom-bi-duckdb-dbt"
                                className="learn-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Repository →
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
