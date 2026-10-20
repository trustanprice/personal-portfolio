# Trustan Price — Personal Portfolio

This repository contains the source code for my **personal portfolio website**, built using **React.js**.  
It showcases my **projects, professional experiences, club leadership roles, and semi-professional interests** — all designed to provide a clear, interactive view of my journey as a developer and data scientist.

---

## 🧠 Overview

The portfolio consists of five primary sections:

### 🏠 Home
- Serves as the main landing page with a short introduction, hero image, and quick contact links.  
- Highlights featured projects and professional experiences.  
- Includes consistent “See All” and “Back to Home” navigation buttons for seamless routing.

### 💻 Projects
- Eight highlighted projects (newest/featured first on the full Projects page):
  - **Roster & Revenue Optimization Dashboard** — interactive analytics dashboard built for the University of Illinois Division of Intercollegiate Athletics, visualizing how the NCAA's House v. NCAA revenue-sharing cap is allocated across football and basketball and whether player pay tracks on-field production; a multi-agent Python pipeline (orchestrated by a project-internal "Fleet Manager") joins internal contract/grading data for 117 players with scraped stats across all 68 Power 4 teams (3,750 players), validated by nine automated test suites. Built during the UIUC Data & Business Intelligence internship.
  - **LedgerOne** — a single-entry, append-only fintech ledger (Python + dbt + DuckDB, staging → star schema → tested reporting marts) with a companion credit-risk module (vintage curves, roll-rate transition matrix, CECL reserve estimate) validated within 0.19pp of real Freddie Mac mortgage outcomes, genuinely deployed to AWS via CloudFormation and OIDC-secured CI/CD to MotherDuck (136/136 dbt tests passing in the cloud, plus a 16-test frontend suite), and presented through a multi-tab [live site](https://ledgerone-green.vercel.app/) · [repo](https://github.com/trustanprice/ledgerone) — teaching walkthrough, data-engineering reference, forecasting dashboard, infrastructure writeup, and an emerging-techniques roadmap.
  - **Forward Data Lab — Retrieval's Blind Spot** — a systematic, criteria-scored comparison of Ai2's Asta against Google Scholar across five query archetypes (every citation independently verified), which surfaced that Asta never weights its synthesis by citation impact; ships a minimal, inspectable RAG pipeline with a calibrated relevance-confidence threshold and citation-weighted reranking to fix exactly that gap. [Live site](https://forward-data-lab.vercel.app/) · [demo walkthrough](https://drive.google.com/file/d/1yiZuSyG6jJU_nVv_b1BozBVIGZjfDBit/view?usp=sharing) · [repo](https://github.com/trustanprice/forward-data-lab).
  - **UIUC Statistics Datathon 2026** — 2nd place out of 200+ teams: led a minority-student team building a LightGBM time-series forecasting system (call volume, customer care time, abandon rate at 30-minute intervals), presented to industry leaders at Synchrony.
  - **NBA Predictions Application** — walk-forward-validated win-total model (gradient boosting vs. KNN, refined by a schedule-aware Monte Carlo simulation), player power rankings, and coaching evaluations from real NBA.com data; every number ships with its own formula and backtest accuracy. Python/FastAPI/Next.js, [live app](https://basketball-predictions.vercel.app/) · [repo](https://github.com/trustanprice/basketball-predictions).
  - **JimmyChops — Barber Booking Platform** — solo-built, full-stack booking platform for a local barbershop serving 300+ monthly customers: React Native/Expo customer and admin apps, a React/Vite admin dashboard, and a Supabase/Postgres backend with row-level security, transactional double-booking prevention, real-time chat, and time-zone-safe scheduling.
  - **AI Academic Advisor** — NLP-based React + Flask app for student major and schedule recommendations.
  - **ML Dementia Diagnosis via MRI** — CNN with a full preprocessing pipeline for 4-class dementia staging from brain MRI scans, 95% classification accuracy.
- Each project card includes a description, thumbnail, and (where one exists) a direct link to a deployed demo or GitHub repo.

### 🧰 Experiences
- Eight roles, most recent first:
  - **Synchrony** – Data Scientist Intern, Forecasting & Advanced Modeling team (AWS dashboard, forecast modeling).
  - **University of Illinois Urbana-Champaign** – Data & Business Intelligence Intern (the Roster & Revenue Optimization Dashboard above).
  - **Caterpillar Inc.** (2026) – Software Engineer Intern (CI/CD in GitHub Actions, LLMOps automation, RAG-based observability).
  - **Caterpillar Inc.** (2025) – MLOps Intern, Applied Analytics (observability stack, Azure DevOps CI/CD).
  - **State Farm** – Software Engineer Intern, Data Science (CNN model for image classification, data pipeline development).
  - **HXRI Lab** – AI & Mixed Reality Research Assistant (Unity, MRTK3, computer vision for procedural tracking).
  - **Sports Info Solutions** – Basketball Scouting Analyst.
  - **Blackwell Scholars Program** – Undergraduate Scholar.
- Consistent formatting across all roles, including logos, dates, and descriptive bullet points.

### 🏫 Clubs & Organizations
- Highlights campus involvement and leadership roles:
  - **Sports Analytics by Minorities** – Founder & President, promoting minority engagement in sports analytics through podcasts and athlete interviews.
  - **Sports Analytics Society** – Lead Machine Learning Engineer, predictive modeling for a sports betting app project.
  - **National Society of Black Engineers (NSBE)** – Member.
  - **B[U]ILT (Black, Indigenous, and Latino in Tech)** – Tech Committee Member.

### ⚾ Semi-Pro
- A creative section focused on life outside of work: MCU movie-watchlist prep, recreational soccer/basketball, and manga/comics (Boruto, Invincible, Black Clover) — reflecting how personal growth enhances professional success.

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript (ES6+), React Router |
| **Theming** | Five-theme/light-dark CSS-variable engine (Teal default, Synchrony, Illini, Buckeyes, CU Boulder), toggled via a navbar `ThemeSwitcher` and persisted to `localStorage` |
| **Analytics** | Vercel Analytics (visitor/page-view tracking) |
| **Deployment** | Vercel |
| **Data Visualization** | Streamlit, Grafana, Power BI, Recharts |
| **Analytics/ML Tools** | Python, Pandas, NumPy, Scikit-learn, TensorFlow |
| **DevOps & Infra** | Azure DevOps, AWS CloudWatch, Docker, CI/CD Pipelines |
| **Version Control** | Git + GitHub |

---

## 📁 Folder Structure

personal-portfolio/
├── src/
│ ├── components/
│ │ ├── Navbar.js (sticky nav, dark-mode toggle, hamburger menu)
│ │ ├── ThemeSwitcher.js (color-theme picker)
│ │ └── Footer.js
│ ├── pages/
│ │ ├── Home.js
│ │ ├── Projects.js
│ │ ├── Experiences.js
│ │ ├── Clubs.js
│ │ └── SemiPro.js
│ ├── styles/
│ │ ├── Home.css
│ │ ├── Projects.css
│ │ ├── Experiences.css
│ │ ├── Clubs.css
│ │ └── SemiPro.css
│ ├── App.js (routes, dark-mode/theme state)
│ └── App.css (the theme engine: CSS variables per theme × light/dark)
├── public/
│ ├── home/
│ ├── projects/
│ ├── experiences/
│ ├── clubs/
│ └── semipro/
├── resume/
│ ├── resume.tex (base résumé source)
│ ├── trustanprice-resume.pdf (tracked, compiled output)
│ ├── swe-roles/ (job-tailored variants, gitignored)
│ ├── ds-roles/ (job-tailored variants, gitignored)
│ └── AGENTS.md
├── AGENTS.md (fleet-manager docs — see below)
└── README.md


---

## 🚀 Running Locally

### Clone the Repository
```bash
git clone https://github.com/trustanprice/personal-portfolio.git
cd personal-portfolio
```

### Install Dependencies
```bash
npm install
```

### Start the Developmet Server
```bash
npm start
```
Open http://localhost:3000
 to view it in your browser.
The app will reload when you make edits.

---

## 🧱 Build for Production

### To build an optimized production version:
```bash
npm run build
```
This creates a /build directory containing minified, optimized static assets ready for deployment to platforms like Vercel or Netlify.

---

## 🌐 Deployment

This portfolio is deployed using Vercel.
For manual deployment, follow Vercel’s React deployment guide:
👉 https://vercel.com/docs/deploying-react

---

## Features

✅ Fully responsive layout (mobile, tablet, desktop)
✅ Unified color scheme & typography across all sections
✅ Smooth navigation using React Router
✅ “Back to Home” and “See All” buttons for consistent UX
✅ Modular and easily extensible design for adding new projects or experiences

---

## 📄 Resume

`resume/resume.tex` is the LaTeX source for the downloadable CV linked from
Home (compiles to `public/home/trustanprice-cv2026.pdf`). It's a curated,
length-capped subset of the Experiences/Projects pages — **always exactly
one page, never more than 4 experiences or 3 projects** — kept in sync by
hand whenever those pages change. See [resume/AGENTS.md](resume/AGENTS.md)
for the compile command and the sync/cap rules.

**Applying for a job?** Paste the full job description in chat and ask for
a resume — that builds a tailored variant (different project/experience
selection and emphasis, same one-page/4-experience/3-project caps) saved as
its own `resume/swe-roles/trustanprice-<company>.tex` or
`resume/ds-roles/trustanprice-<company>.tex` (by role flavor) rather than
overwriting this base resume. These variants are gitignored — working files
for one application, not portfolio content. See resume/AGENTS.md's
"Job-tailored resume workflow."

```bash
cd resume
pdflatex resume.tex && pdflatex resume.tex   # run twice for hyperref refs
```

---

## 🤖 For Future Me (or an Agent)

This repo has no data layer — every project/experience/club entry is
hardcoded JSX. See [AGENTS.md](AGENTS.md) (and the per-folder AGENTS.md files
it links to) for a fleet-manager-style breakdown of what lives where and the
conventions to follow when adding something new.

---

## 📬 Contact

Trustan Price
📧 Email: trustanprice@gmail.com
💼 LinkedIn: linkedin.com/in/trustan-price-69bb17269
🐙 GitHub: github.com/trustanprice