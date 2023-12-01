import React from 'react';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  return (
    <div className="quiz-page">
      <h1>Welcome to Language Quizzes</h1>
      <div className="quiz-info">
        <div className="quiz-description">
          <h2>Spanish Language Quiz</h2>
          <p>
            Test your Spanish language skills with this quiz. It contains various questions related to vocabulary,
            grammar, and common phrases in Spanish.
          </p>
          <Link to="/learn/quiz/spanish">
            <button className="btn-info">Take Spanish Quiz</button>
          </Link>
        </div>
        <div className="quiz-description">
          <h2>English Language Quiz</h2>
          <p>
            Explore your English language knowledge with this quiz. It includes questions related to grammar,
            vocabulary, and language usage in English.
          </p>
          <Link to="/learn/quiz/english">
            <button className="btn-info">Take English Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
