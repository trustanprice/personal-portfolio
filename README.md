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
- Displays my key technical projects such as:
  - **E-Commerce BI Warehouse (Coming Soon)** — a dbt + DuckDB + Metabase project exploring fintech analytics.  
  - **NBA Win Predictions App** — machine learning model using Elastic Net & KNN for team win predictions.  
  - **AI Academic Advisor** — NLP-based React + Flask app for student major and schedule recommendations.
- Each project card includes a description, thumbnail, and direct link to either a deployed demo or GitHub repo.

### 🧰 Experiences
- Features my professional roles including:
  - **Caterpillar Inc.** – MLOps & Applied Analytics Intern (CI/CD pipelines, Grafana dashboards, AWS monitoring).  
  - **State Farm** – Software Engineer Intern (CNN model for image classification and data pipeline development).  
  - **HXRI Lab** – AI & Mixed Reality Research Assistant (Unity, MRTK3, computer vision for procedural tracking).
- Consistent formatting across all roles, including logos, dates, and descriptive bullet points.

### 🏫 Clubs & Organizations
- Highlights campus involvement and leadership roles:
  - **Sports Analytics by Minorities** – Founder & President, promoting minority engagement in sports analytics through podcasts and athlete interviews.  
  - **B[U]ILT Tech Committee** – Member supporting UIUC’s Black and Latinx engineers in tech initiatives.  
  - **Sigpwny** – Participant in UIUC’s ethical hacking and cybersecurity organization.

### ⚾ Semi-Pro
- A creative section focused on life outside of work.  
- Highlights hobbies such as **sports storytelling, fitness, mentorship, and community engagement** — reflecting how personal growth enhances professional success.

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript (ES6+) |
| **Deployment** | Vercel |
| **Data Visualization** | Streamlit, Grafana, Power BI |
| **Analytics/ML Tools** | Python, Pandas, NumPy, Scikit-learn, TensorFlow |
| **DevOps & Infra** | Azure DevOps, AWS CloudWatch, Docker, CI/CD Pipelines |
| **Version Control** | Git + GitHub |

---

## 📁 Folder Structure

personal-portfolio/
├── src/
│ ├── components/
│ │ └── Navbar.js
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
│ └── App.js
├── public/
│ └── images/
│ ├── home/
│ ├── projects/
│ ├── experiences/
│ ├── clubs/
│ └── semipro/
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

## 📬 Contact

Trustan Price
📧 Email: trustanprice@gmail.com
💼 LinkedIn: linkedin.com/in/trustan-price-69bb17269
🐙 GitHub: github.com/trustanprice