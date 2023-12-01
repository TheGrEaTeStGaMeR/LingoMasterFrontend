import React from 'react';
import { Link } from 'react-router-dom';
import grammar from '../images/grammar.jpg';
import quiz from '../images/quiz.png'

const LanguageLearningPage = () => {
  return (
    <div className="language-learning-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Start Your Language Learning Journey</h1>
          <p>Choose a language and dive into an immersive learning experience.</p>
        </div>
        <div className="language-selection">
          <h2>Start Learning</h2>
          <div className="language-buttons">
            <Link to="/learn/english" className="language-button">
              English
            </Link>
            <Link to="/learn/spanish" className="language-button">
              Spanish
            </Link>
          </div>
        </div>
      </section>
        <hr />
      <section className="resources-section">
        <div className="learning-resources">
          <h2>Learning Resources</h2>
          <div className="resource-cards">
            <Link to="/learn/lesson" className="resource-card">
              <img src={grammar} alt="Lesson Guide" className='grammar-img'/>
              <h3>Grammar Guides</h3>
            </Link>
            <Link to="/learn/quiz" className="resource-card">
              <img src={quiz} alt="Quizzes" className='quiz-img' />
              <h3>Quizzes</h3>
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <section className="community-section">
        <div className="community">
          <h2>Community</h2>
          <p>Join our vibrant community to practice and interact with fellow learners!</p>
          <Link to="/learn" className="community-link">
            Coming Soon
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LanguageLearningPage;
