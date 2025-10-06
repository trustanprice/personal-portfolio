import React from "react";
import "./Projects.css";

function Projects() {
    return (
        <div className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="projects-hero-content">
                    <div className="projects-hero-text">
                        <h1>Projects Portfolio</h1>
                        <div className="divider"></div>
                        <p>
                            Explore my collection of data-driven and software engineering projects! From predictive
                            modeling and data engineering to front-end development and machine learning applications,
                            each project showcases my passion for transforming data into actionable insights and
                            building end-to-end solutions that make an impact.
                        </p>
                    </div>

                    <div className="projects-hero-image">
                        <img
                            src="/projects/projetcs-header.png"
                            alt="Projects Overview"
                        />
                    </div>
                </div>
            </section>



            {/* Projects Section */}
            <section className="projects-list">
                <h2 className="section-title">Highlighted Projects</h2>

                {/* E-commerce BI Warehouse */}
                <div className="feature-card">
                    <img
                        src="/home/ecommerce-thumbnail.png"
                        alt="E-commerce BI Warehouse"
                        className="feature-img"
                    />
                    <div className="feature-info">
                        <h3>E-Commerce BI Warehouse (Coming Soon)</h3>
                        <p>
                            A business intelligence pipeline designed to explore the intersection of
                            data analytics and fintech. This project will model Olist marketplace data
                            using dbt and DuckDB, with dashboards built in Metabase to analyze metrics
                            like retention, lifetime value, and delivery performance.
                        </p>
                        <a
                            href="https://github.com/trustanprice/ecom-bi-duckdb-dbt"
                            className="btn learn-more"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Repository →
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
                            Built a predictive model to forecast NBA team win totals using Elastic Net
                            regression for feature selection and K-Nearest Neighbors for final prediction.
                            This project combines data scraping, preprocessing, and statistical modeling,
                            with an interactive Streamlit dashboard for visualization.
                        </p>
                        <a
                            href="https://basketball-predictions-trustanprice.streamlit.app/"
                            className="btn learn-more"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore Live App →
                        </a>
                    </div>
                </div>

                {/* AI Academic Advisor Project*/}
                <div className="feature-card">
                    <img
                        src="/home/ai-advisor-thumbnail.png"
                        alt="AI Academic Advisor Project"
                        className="feature-img"
                    />
                    <div className="feature-info">
                        <h3>AI Academic Advisor Project</h3>
                        <p>
                            An AI-powered academic advising tool that recommends college
                            majors and course schedules based on student interests using NLP
                            and machine learning. Built with React and Flask, with integrated
                            UIUC course data and personalized recommendation logic.
                        </p>
                        <a
                            href="https://github.com/trustanprice/AI-Advisor"
                            className="btn learn-more"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Repository →
                        </a>
                    </div>
                </div>

                {/* ML Dementia Diagnosis */}
                <div className="feature-card">
                    <img
                        src="/home/dementia-diagnosis-thumbnail.png"
                        alt="Dementia Detection Project"
                        className="feature-img"
                    />
                    <div className="feature-info">
                        <h3>ML Dementia Diagnosis via MRI Scans</h3>
                        <p>
                            Developed convolutional neural networks (CNNs) and reinforcement learning
                            models for early detection of dementia using MRI scan data. This project
                            focused on differentiating stages of cognitive decline and integrating
                            additional datasets to improve diagnostic accuracy and model interpretability.
                        </p>
                        <a
                            href="/home/ml-dementia-diagnosis.pdf"
                            className="btn learn-more"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Paper →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
