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
                                append-only ledger where financial events are immutable and account balances
                                are dynamically derived. The platform utilizes Python to generate realistic
                                synthetic events, alongside a dbt-core and dbt-duckdb pipeline that transforms
                                raw data into a star schema and five target reporting marts. The pipeline is
                                gated end-to-end by <code>dbt test</code> schema checks and custom singular
                                validations, including an exact purchase-to-refund reconciliation check.
                                A dedicated credit-risk module calculates vintage analysis, roll-rate transition
                                matrices, and simplified CECL reserve estimations on the same stack, then
                                backtests that methodology against a real Freddie Mac mortgage panel with a
                                time-based holdout split — landing within 0.19 percentage points on the
                                cumulative delinquency forecast, while honestly surfacing that the roll-rate
                                transition matrix isn't perfectly stable over time. Insights are served through
                                an interactive dashboard covering a methodology walkthrough,
                                a data engineering reference, a forecasting tool, and a cloud productionization
                                writeup (S3 &rarr; MotherDuck &rarr; GitHub Actions &rarr; CloudFormation)
                                deployed to Vercel and GitHub Pages. The entire pipeline reproduces with
                                one command:{" "}<code>make all</code>.
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
                                query archetypes (broad conceptual, narrow technical, comparative,
                                recent/emerging-topic, and ambiguous), with every cited paper independently
                                verified against its real publication. That investigation surfaced Asta's
                                central gap: it displays each source's citation count but never weights its
                                synthesis by it, treating a 3-citation paper and a 16,950-citation seminal
                                paper as equally strong evidence. Built a minimal, inspectable RAG pipeline
                                over 18 real papers pulled live from the Semantic Scholar API that mirrors
                                Asta's retrieve → rerank → cap → generate flow, then added two concrete
                                fixes: a calibrated relevance-confidence threshold that refuses to force a
                                synthesis when nothing clears a similarity bar, and citation-weighted reranking
                                that blends embedding similarity with real citation counts so well-established
                                work outranks obscure preprints. Verified against six live queries (three
                                on-topic, three off-topic) with results and reasoning documented end-to-end.
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
                                underrepresented in spaces like this. Over a fast-paced development cycle, we
                                built a forecasting solution to help predict call center demand and support
                                better operational decision-making. Our work earned 2nd place out of 200+ teams
                                and gave us the opportunity to present our solution to industry leaders at
                                Synchrony.
                            </p>
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
                                <li><strong>Win-total predictor:</strong> benchmarks gradient boosting against KNN under honest walk-forward validation (never random cross-validation, since this is time-dependent data).</li>
                                <li><strong>Player power rankings:</strong> transparent, z-scored composite ratings computed live from real-time NBA.com data.</li>
                                <li><strong>Coaching evaluation:</strong> measures actual win percentage against roster-talent expectation.</li>
                            </ul>

                            <p>
                                Every prediction ships with its full methodology inline: the formula, the raw inputs, and the honest accuracy, including where a technique doesn't help and says so plainly.

                                Built with Python and FastAPI on the backend, including a custom NBA.com data client (on top of <code>nba_api</code>, with its own retry, caching, and schema-validation layer). Frontend in Next.js, deployed on Vercel and Render.
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
