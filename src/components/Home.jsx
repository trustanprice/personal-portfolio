// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Contact Info */}
      <section className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Trustan G Price</h1>
        <p>Email: <a href="mailto:trustanprice@gmail.com" className="text-blue-600">trustanprice@gmail.com</a></p>
        <p>Phone: (217) 954-8537 </p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/in/trustan-price-69bb17269/" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-500">LinkedIn</a>
          <a href="https://github.com/trustanprice" target="_blank" rel="noopener noreferrer" className="text-gray-700">GitHub</a>
        </div>
      </section>

      {/* Resume */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Resume</h2>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View My Resume
        </a>
      </section>

      {/* Featured Project */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
        <div className="border rounded-lg shadow p-4">
          <img 
            src="/nba-thumbnail.png" 
            alt="NBA Predictions Project Thumbnail"
            className="w-full h-48 object-cover rounded mb-2"
          />
          <h3 className="text-xl font-bold">NBA Predictions Project</h3>
          <p className="text-gray-700 mb-2">
            A machine learning project predicting NBA game outcomes using advanced statistical methods and data pipelines.
          </p>
          <a 
            href="https://basketball-predictions-trustanprice.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Project →
          </a>
        </div>
      </section>

      {/* Internships */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Internship Experience</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold">Software Engineering Intern @ State Farm</h3>
            <p>Worked with C# .NET, Kotlin, and Python on backend systems. Explored clustering, regression, and reinforcement learning applications.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold">Other Internship / Experience</h3>
            <p>Describe what you did here. (You can add more cards for each experience.)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
