import React, { useState } from 'react';

const SpanishQuiz = () => {
    const initialUserAnswers = {};
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    const questions = [
        {
            id: 1,
            question: 'What is the Spanish equivalent of the English word "Adiós"?',
            options: ['Goodbye', 'Thank you', 'Please', 'Hello'],
            correctAnswer: 'Goodbye',
        },
        {
            id: 2,
            question: 'How do you say "I don\'t understand" in Spanish?',
            options: ['No', 'No entiendo', 'Disculpe', 'Por favor'],
            correctAnswer: 'No entiendo',
        },
        {
            id: 3,
            question: 'Translate the sentence "They are eating lunch" into Spanish.',
            options: [
                'Estoy feliz.',
                'Están comiendo almuerzo.',
                'Vamos al parque.',
                'Me gusta bailar.',
            ],
            correctAnswer: 'Están comiendo almuerzo.',
        },
        {
            id: 4,
            question: 'What is the Spanish translation of "He needs to go to the doctor"?',
            options: [
                'Necesitamos terminar nuestra tarea.',
                'Necesita ir al médico',
                'Eres un buen amigo/a.',
                'Quieres aprender español.',
            ],
            correctAnswer: 'Necesita ir al médico',
        },
        {
            id: 5,
            question: 'In the sentence "Me gusta bailar," which part is conjugated in the first person singular?',
            options: ['"bailar"', '"gustar"', '"yo"', '"Me gusta"'],
            correctAnswer: '"Me gusta"',
        },
        {
            id: 6,
            question: 'What is the grammar explanation for the sentence "Quieres aprender español"?',
            options: [
                'The verb "querer" is conjugated in the third person singular.',
                'The verb "aprender" is conjugated in the second person singular.',
                '"español" is an adverb in this sentence.',
                'The verb "aprender" is followed by the preposition "a."',
            ],
            correctAnswer: 'The verb "aprender" is conjugated in the second person singular.',
        },
        {
            id: 7,
            question: 'What does "Hola" mean in English?',
            options: ['Hello', 'Goodbye', 'Please', 'Thank you'],
            correctAnswer: 'Hello',
        },
        {
            id: 8,
            question: 'How do you say "Thank you" in Spanish?',
            options: ['No', 'Por favor', 'Gracias', 'Disculpe'],
            correctAnswer: 'Gracias',
        },
        {
            id: 9,
            question: 'Translate the phrase "Where is the bathroom?" into Spanish.',
            options: [
                '¿Cuántos años tienes?',
                '¿Cómo te llamas?',
                '¿Dónde está el baño?',
                '¿Qué hora es?',
            ],
            correctAnswer: '¿Dónde está el baño?',
        },
        {
            id: 10,
            question: 'What is the Spanish word for "House"?',
            options: ['Carro', 'Casa', 'Libro', 'Perro'],
            correctAnswer: 'Casa',
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
            <h2 className="quizHeader">Spanish Quiz</h2>
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

export default SpanishQuiz;
