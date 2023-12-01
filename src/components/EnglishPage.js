import React from 'react';
import { Link } from 'react-router-dom';

const EnglishPage = () => {
  return (
    <div className='container'>
      <h1>Welcome to English Teaching</h1>
      <p>
        This page provides resources and information for learning English. Here you can find various lessons,
        quizzes, and more to improve your English language skills.
      </p>
      <div>
        <h2>Explore English Learning</h2>
        <ul>
          <li>
            <Link to="/learn/lesson/english">English Lessons</Link>
          </li>
          <li>
            <Link to="/learn/quiz/english">English Quiz</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>Why Learn English?</h2>
        <p>
          English is a global language spoken by millions of people worldwide. It opens up opportunities for
          communication, education, and career advancement. Learning English can help you connect with people from
          diverse cultures and access a wide range of resources.
        </p>
      </div>

      <div>
        <h2>Benefits of Learning English</h2>
        <ul>
          <li>Better job prospects</li>
          <li>Enhanced travel experiences</li>
          <li>Access to a vast amount of literature, movies, and music</li>
          <li>Improved communication skills</li>
          <li>International networking opportunities</li>
        </ul>
      </div>
    </div>
  );
};

export default EnglishPage;
