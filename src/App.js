import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import LanguageLearningPage from './components/Learner';
import QuizPage from './components/Quiz';
import LessonPage from './components/Lesson';
import SpanishQuiz from './components/Quizzes/QuizSpanish';
import EnglishQuiz from './components/Quizzes/QuizEnglish';
import SpanishLanguageLessons from './components/Lessons/LessonSpanish';
import EnglishLanguageLessons from './components/Lessons/LessonEnglish';
import EnglishPage from './components/EnglishPage';
import SpanishPage from './components/SpanishPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import Footer from './components/Footer';
import { AuthContext } from './components/AuthContext';
import { useContext } from 'react';
import Protected from './components/Protected';


function App() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LanguageLearningPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/learn/quiz" element={<QuizPage />} />
          <Route path="/learn/lesson" element={<LessonPage />} />
          <Route path='/learn/english' element={<EnglishPage />} />
          <Route path='/learn/spanish' element={<SpanishPage />} />
          <Route path='/learn/lesson/english' element={
            <Protected isLoggedIn={isLoggedIn}>
              <EnglishLanguageLessons />
            </Protected>
          }
          />
           <Route path='/learn/lesson/spanish' element={
            <Protected isLoggedIn={isLoggedIn}>
              <SpanishLanguageLessons />
            </Protected>
          }
          />
          <Route path="/learn/quiz/spanish" element={
            <Protected isLoggedIn={isLoggedIn}>
              <SpanishQuiz />
            </Protected>
          }
          />
          <Route path="/learn/quiz/english" element={
            <Protected isLoggedIn={isLoggedIn}>
              <EnglishQuiz />
            </Protected>
          }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
