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
                                An end-to-end fintech analytics platform built around a single-entry,
                                append-only ledger: Python generates synthetic events, and a dbt-core/DuckDB
                                pipeline transforms them into a star schema and five reporting marts, gated
                                end-to-end by <code>dbt test</code>. A credit-risk module (vintage analysis,
                                roll-rate matrices, CECL estimates) is validated within 0.19 percentage
                                points of real Freddie Mac mortgage outcomes.
                            </p>
                            <p>
                                The platform is also genuinely deployed to AWS: CloudFormation-managed
                                stacks with GitHub OIDC auth (no long-lived credentials) run the pipeline on
                                a real daily schedule against MotherDuck in dev and prod, verified by 136/136
                                dbt tests plus a 16-test frontend suite. A six-tab dashboard — now showing
                                live AWS cost data on its Infrastructure tab — spans methodology, data
                                engineering, forecasting, infrastructure, and emerging techniques, deployed
                                to Vercel and GitHub Pages.
                            </p>
                            <div className="feature-links">
                                <a
                                    href="https://ledgerone-green.vercel.app/"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Live Site →
                                </a>
                                <a
                                    href="https://github.com/trustanprice/ledgerone"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Repository →
                                </a>
                            </div>
                        </div>
                    </div>

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
                                Independent research project for the Forward Data Lab: a systematic,
                                criteria-scored comparison of Ai2's Asta against Google Scholar across five
                                query archetypes, every citation independently verified. That surfaced
                                Asta's central gap: it displays each source's citation count but never
                                weights its synthesis by it, treating a 3-citation paper and a
                                16,950-citation seminal paper as equally strong evidence.
                            </p>
                            <p>
                                Built a minimal, inspectable RAG pipeline over 18 real papers that mirrors
                                Asta's retrieve → rerank → cap → generate flow, then added two fixes: a
                                relevance-confidence threshold that blocks synthesis when nothing clears a
                                similarity bar, and citation-weighted reranking so well-established work
                                outranks obscure preprints. Verified against six live queries, three
                                on-topic and three off-topic.
                            </p>
                            <div className="feature-links">
                                <a
                                    href="https://forward-data-lab.vercel.app/"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Live Site →
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1yiZuSyG6jJU_nVv_b1BozBVIGZjfDBit/view?usp=sharing"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn More →
                                </a>
                                <a
                                    href="https://github.com/trustanprice/forward-data-lab"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Repository →
                                </a>
                            </div>
                        </div>
                    </div>

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
                                A competitive analytics project where I served as Project Lead, bringing together
                                a team of minority students to compete in the UIUC Statistics Datathon. Our goal
                                was not only to perform at a high level, but to represent students who are often
                                underrepresented in spaces like this.
                            </p>
                            <p>
                                Over a fast-paced development cycle, we engineered time-series features
                                (lag variables, rolling statistics, calendar effects) and deployed LightGBM
                                ensemble models to forecast call volume, customer care time, and abandon
                                rate at 30-minute intervals, generating accurate workload forecasts across
                                multiple portfolios. Our work earned 2nd place out of 200+ teams and gave us
                                the opportunity to present our solution to industry leaders at Synchrony.
                            </p>
                            <div className="feature-links">
                                <a
                                    href="https://github.com/DarylOkeke/datathon-final-submission/blob/main/datathon_team015_v1.pdf"
                                    className="btn learn-more"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Presentation →
                                </a>
                            </div>
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
                                An NBA analytics platform built around one core idea: every number should come with its own explanation, not just a value.
                            </p>

                            <p>Three connected models:</p>

                            <ul>
                                <li><strong>Win-total predictor:</strong> benchmarks gradient boosting against KNN under honest walk-forward validation, refined by a schedule-aware Monte Carlo simulation — the one of five tested feature ideas that actually held up under a stacked test.</li>
                                <li><strong>Player power rankings:</strong> transparent, z-scored composite ratings computed from real NBA.com data.</li>
                                <li><strong>Coaching evaluation:</strong> measures actual win percentage against roster-talent expectation.</li>
                            </ul>

                            <p>
                                Every prediction ships with its full methodology inline — the formula, the raw inputs, and the honest accuracy (recent backtests land in the same range as Vegas and ESPN's BPI), including where a technique doesn't help. Built with Python and FastAPI (a custom NBA.com data client with its own retry, caching, and schema-validation layer) and Next.js, deployed on Vercel and Render.
                            </p>

                            <a
                                href="https://basketball-predictions.vercel.app/"
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
                                An intelligent academic advising tool that helps students explore majors
                                and build class schedules through natural-language input — describe your
                                interests and goals in plain English instead of filling out a form. Built
                                with a React frontend and a Flask backend, it parses each query with
                                keyword extraction and rule-based reasoning, then matches the result
                                against real course data from UIUC's catalog to generate concrete
                                recommendations.
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
                                A deep learning research project focused on early dementia detection:
                                built a CNN with a full preprocessing pipeline for 4-class dementia
                                staging from brain MRI scans, achieving 95% classification accuracy. The
                                pipeline combines class balancing to handle imbalanced stage distributions
                                with interpretability analysis, so predictions come with an explanation,
                                not just a label.
                            </p>
                            <a
                                href="/home/ml-dementia-diagnosis.pdf"
                                className="learn-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Presentation →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Projects;
