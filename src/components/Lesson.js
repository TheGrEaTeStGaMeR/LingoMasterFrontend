import React from 'react';
import { Link } from 'react-router-dom';

const LessonPage = () => {
  return (
    <div className="quiz-page">
      <h1>Welcome to Language Lessons</h1>
      <div className="quiz-info">
        <div className="quiz-description">
          <h2>Spanish Language Lessons</h2>
          <p>
            Explore Spanish language lessons to enhance your skills. Discover vocabulary, common phrases, grammar, and more.
          </p>
          <Link to="/learn/lesson/spanish">
            <button className="btn-info">Spanish Lessons</button>
          </Link>
        </div>
        <div className="quiz-description">
          <h2>English Language Lessons</h2>
          <p>
            Improve your English language abilities through various lessons. Explore vocabulary, grammar, and sentence structures.
          </p>
          <Link to="/learn/lesson/english">
            <button className="btn-info">English Lessons</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
