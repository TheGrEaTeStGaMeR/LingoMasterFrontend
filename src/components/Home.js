import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Language Academy</h1>
        <p>Start your language learning journey today!</p>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-card">
            <h3>Interactive Lessons</h3>
            <p>Engaging lessons to enhance your learning experience.</p>
          </div>
          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>Track your progress and see how far you've come.</p>
          </div>
          <div className="feature-card">
            <h3>Practice Anywhere</h3>
            <p>Access lessons on any device, anywhere you go.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
