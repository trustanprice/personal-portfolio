import React from "react";
import "../styles/Experiences.css";

function Experiences() {
    return (
        <div className="experiences-page">
            {/* Hero Section */}
            <section className="experiences-hero">
                <div className="experiences-hero-content">
                    <div className="experiences-hero-text">
                        <h1>Professional Experiences</h1>
                        <div className="divider"></div>
                        <p>
                            A collection of my hands-on experiences in software engineering, data science,
                            research, and analytics, where I’ve developed my technical, analytical, and
                            collaborative skills through real-world problem-solving. I am currently seeking
                            full-time opportunities in the data science or DevOps space, where I can apply
                            my skills to build scalable, data-driven solutions that create real impact!

                        </p>
                    </div>

                    <div className="experiences-hero-image">
                        <img
                            src="/experiences/experiences-hero.png"
                            alt="Professional Journey"
                        />
                    </div>
                </div>
            </section>

            {/* Experience Cards */}
            <section className="experiences-list">
                <h2 className="section-title">
                    <span className="section-accent">Highlighted</span> Roles
                </h2>
                <div className="divider"></div>

                {/* Caterpillar */}
                <div className="experience-card">
                    <img
                        src="/experiences/caterpillar-logo.png"
                        alt="Caterpillar Logo"
                        className="experience-logo"
                    />
                    <div className="experience-info">
                        <div className="experience-header">
                            <h3>Caterpillar Inc.</h3>
                            <span className="role">MLOps Intern – Applied Analytics</span>
                            <span className="date">May 2025 – Aug 2025</span>
                        </div>
                        <p className="experience-desc">
                            • Built an end-to-end observability stack using CloudWatch,
                            Prometheus, and Grafana for deployed ML pipelines.<br />
                            • Maintained and expanded Azure DevOps CI/CD pipelines to support
                            scalable model testing and release.<br />
                            • Collaborated with multiple development teams through Git pull
                            requests, Agile sprint reviews, and issue triage.<br />
                            • Developed RESTful APIs and performed microservice integration
                            testing across environments.<br />
                            • Applied feature flagging and testing workflows to mitigate
                            deployment risks and monitor system behavior.
                        </p>
                    </div>
                </div>

                {/* State Farm */}
                <div className="experience-card">
                    <img
                        src="/experiences/statefarm-logo.png"
                        alt="State Farm Logo"
                        className="experience-logo"
                    />
                    <div className="experience-info">
                        <div className="experience-header">
                            <h3>State Farm</h3>
                            <span className="role">Software Engineer Intern – Data Science</span>
                            <span className="date">May 2024 – May 2025</span>
                        </div>
                        <p className="experience-desc">
                            • Developed a CNN to classify car seat photos, enabling real-time
                            safety classification in backend services.<br />
                            • Created, labeled, and validated a balanced photo dataset from
                            scratch to simulate production input streams.<br />
                            • Built data pipelines with Pandas and NumPy for preprocessing and
                            model analysis.<br />
                            • Coordinated feature testing with QA and contributed to internal
                            documentation and usage guidelines.
                        </p>
                    </div>
                </div>

                {/* HXRI Lab */}
                <div className="experience-card">
                    <img
                        src="/experiences/hxri-logo.png"
                        alt="HXRI Lab Logo"
                        className="experience-logo"
                    />
                    <div className="experience-info">
                        <div className="experience-header">
                            <h3>HXRI Lab, University of Illinois Urbana-Champaign</h3>
                            <span className="role">AI & Mixed Reality Research Assistant</span>
                            <span className="date">Feb 2025 - Aug 2025</span>
                        </div>
                        <p className="experience-desc">
                            • Built a data collection pipeline for a Mixed Reality medical training simulator focused
                            on the Neonatal Needle Thoracentesis procedure.<br />
                            • Integrated AI and computer vision models within a HoloLens-compatible Unity/MRTK3
                            application to track and classify procedural steps.<br />
                            • Developed real-time analytics tools to segment and evaluate user interactions for
                            performance feedback and research data.<br />
                            • Collaborated with a multidisciplinary team of researchers and engineers to enhance
                            mixed reality accuracy and simulation realism.
                        </p>
                    </div>
                </div>

                {/* Sports Info Solutions */}
                <div className="experience-card">
                    <img
                        src="/experiences/sis-logo.png"
                        alt="Sports Info Solutions Logo"
                        className="experience-logo"
                    />
                    <div className="experience-info">
                        <div className="experience-header">
                            <h3>Sports Info Solutions</h3>
                            <span className="role">Basketball Scouting Analyst</span>
                            <span className="date">Aug 2023 - Present</span>
                        </div>
                        <p className="experience-desc">
                            • Scouted and tracked live basketball and football data using the company’s proprietary in-game analytics application.<br />
                            • Attended Division I events, including UIUC football and March Madness basketball games, to record real-time player and team performance metrics.<br />
                            • Contributed to high-accuracy datasets used by Sports Info Solutions’ clients for performance evaluation, predictive modeling, and strategic decision-making.
                        </p>

                    </div>
                </div>

                {/* Blackwell Scholars Program */}
                <div className="experience-card">
                    <img
                        src="/experiences/blackwell-logo.png"
                        alt="Blackwell Scholars Logo"
                        className="experience-logo"
                    />
                    <div className="experience-info">
                        <div className="experience-header">
                            <h3>Blackwell Scholars Program</h3>
                            <span className="role">Undergraduate Scholar</span>
                            <span className="date">Summer 2024</span>
                        </div>
                        <p className="experience-desc">
                            • Selected as one of 8–12 undergraduate scholars for an eight-week research program focused on advancing knowledge in statistics, data science, and mathematics.<br />
                            • Conducted faculty-guided research within the Department of Statistics at the University of Illinois Urbana-Champaign, culminating in a final presentation at the Illinois Summer Research Symposium.<br />
                            • Received a $5,000 research scholarship and participated in graduate school preparation workshops, networking events, and professional development sessions.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experiences;
