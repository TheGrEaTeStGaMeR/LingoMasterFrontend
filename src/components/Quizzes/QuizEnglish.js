import React, { useState } from 'react';

const EnglishQuiz = () => {
    const initialUserAnswers = {};
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    const questions = [
        {
          id: 1,
          question: 'What is the past tense of the verb "eat"?',
          options: ['Ate', 'Eaten', 'Eated', 'Eating'],
          correctAnswer: 'Ate',
        },
        {
          id: 2,
          question: 'What is the plural form of "child"?',
          options: ['Childrens', 'Childs', 'Childs', 'Children'],
          correctAnswer: 'Children',
        },
        {
          id: 3,
          question: 'Which word means the opposite of "old"?',
          options: ['Ancient', 'New', 'Mature', 'Elderly'],
          correctAnswer: 'New',
        },
        {
          id: 4,
          question: 'What part of speech is the word "quickly"?',
          options: ['Adjective', 'Adverb', 'Noun', 'Verb'],
          correctAnswer: 'Adverb',
        },
        {
          id: 5,
          question: 'What is the comparative form of the adjective "good"?',
          options: ['Goodest', 'Gooder', 'Better', 'Best'],
          correctAnswer: 'Better',
        },
        {
          id: 6,
          question: 'Which word is a pronoun in the sentence: "She loves to read."?',
          options: ['She', 'Loves', 'Read', 'To'],
          correctAnswer: 'She',
        },
        {
          id: 7,
          question: 'What is the superlative form of the adjective "beautiful"?',
          options: ['Beautifullest', 'Most beautiful', 'Beautifulest', 'Beautifuler'],
          correctAnswer: 'Most beautiful',
        },
        {
          id: 8,
          question: 'Identify the verb in the sentence: "They are swimming in the pool."?',
          options: ['They', 'Are', 'Swimming', 'In'],
          correctAnswer: 'Swimming',
        },
        {
          id: 9,
          question: 'Which word is an article: "A", "The", or "To"?',
          options: ['A', 'The', 'To', 'None of these'],
          correctAnswer: 'The',
        },
        {
          id: 10,
          question: 'What is the adverb form of the adjective "serious"?',
          options: ['Seriouser', 'Most seriously', 'Seriouslest', 'More seriously'],
          correctAnswer: 'More seriously',
        },
      ];

    const handleAnswer = (questionId, selectedAnswer) => {
        setUserAnswers({ ...userAnswers, [questionId]: selectedAnswer });
    };

    const submitQuiz = () => {
        let totalScore = 0;
        questions.forEach((question) => {
            if (userAnswers[question.id] === question.correctAnswer) {
                totalScore += 1;
            }
        });
        setScore(totalScore);
        setShowAnswers(true);
    };

    const resetQuiz = () => {
        setUserAnswers(initialUserAnswers);
        setScore(0);
        setShowAnswers(false);
    };

    return (
        <div>
            <h2 className="quizHeader">English Quiz</h2>
            <table style={{ width: '1000px' }}>
                <tbody>
                    {questions.map((question) => (
                        <tr key={question.id}>
                            <td>
                                <div>
                                    <p className="question">{question.question}</p>
                                    <ul>
                                        {question.options.map((option, index) => (
                                            <React.Fragment key={index}>
                                                <input
                                                    className="answer"
                                                    type="radio"
                                                    name={`q${question.id}`}
                                                    value={option}
                                                    onChange={() => handleAnswer(question.id, option)}
                                                    disabled={showAnswers}
                                                />
                                                <label>{option}</label>
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                    {showAnswers && (
                                        <div>
                                            Correct Answer: {question.correctAnswer}
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            {!showAnswers && (
                <div className="submitter">
                    <button className="quizSubmit" onClick={submitQuiz}>
                        Submit
                    </button>
                </div>
            )}
            {showAnswers && (
                <div className="resetter">
                    <button className="quizReset" onClick={resetQuiz}>
                        Reset
                    </button>
                </div>
            )}
            <div>
                <h2 className="quizScore">Your score: {score}</h2>
            </div>
        </div>
    );
};

export default EnglishQuiz;
