import React from 'react';

const SpanishLanguageLessons = () => {

  return (
    <div className="container">
      <h1>Spanish Language Lessons</h1>

      <div className="lesson">
        <h2>30 Daily Used English Words to Spanish Conversion</h2>
        <table className="word-table">
          <thead>
            <tr>
              <th>English</th>
              <th>Spanish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello</td>
              <td>Hola</td>
            </tr>
            <tr>
              <td>Goodbye</td>
              <td>Adiós</td>
            </tr>
            <tr>
              <td>Thank you</td>
              <td>Gracias</td>
            </tr>
            <tr>
              <td>Please</td>
              <td>Por favor</td>
            </tr>
            <tr>
              <td>You're welcome</td>
              <td>De nada</td>
            </tr>
            <tr>
              <td>Yes</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Excuse me</td>
              <td>Disculpe</td>
            </tr>
            <tr>
              <td>I don't understand</td>
              <td>No entiendo</td>
            </tr>
            <tr>
              <td>How much is this?</td>
              <td>¿Cuánto cuesta esto?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lesson">
        <h2>10 Sentences Conversions</h2>
        <table className="sentence-table">
          <thead>
            <tr>
              <th>English</th>
              <th>Spanish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I am happy.</td>
              <td>Estoy feliz.</td>
            </tr>
            <tr>
              <td>You are a good friend.</td>
              <td>Eres un buen amigo/a.</td>
            </tr>
            <tr>
              <td>We are going to the park.</td>
              <td>Vamos al parque.</td>
            </tr>
            <tr>
              <td>They are eating lunch.</td>
              <td>Están comiendo almuerzo.</td>
            </tr>
            <tr>
              <td>I like to dance.</td>
              <td>Me gusta bailar.</td>
            </tr>
            <tr>
              <td>You want to learn Spanish.</td>
              <td>Quieres aprender español.</td>
            </tr>
            <tr>
              <td>He needs to go to the doctor.</td>
              <td>Necesita ir al médico.</td>
            </tr>
            <tr>
              <td>She wants to buy a new dress.</td>
              <td>Quiere comprar un vestido nuevo.</td>
            </tr>
            <tr>
              <td>We need to finish our homework.</td>
              <td>Necesitamos terminar nuestra tarea.</td>
            </tr>
            <tr>
              <td>They want to go to the beach.</td>
              <td>Quieren ir a la playa.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lesson">
        <h2>5 Sentences with Detailed Instruction of How Grammar Works in Spanish</h2>
        <table className="grammar-table">
          <thead>
            <tr>
              <th>Sentence</th>
              <th>Grammar Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Me gusta bailar.</td>
              <td>The verb "gustar" (to like) is conjugated in the first person singular (me) and followed by the infinitive "bailar" (to dance).</td>
            </tr>
            <tr>
              <td>Quieres aprender español.</td>
              <td>The verb "querer" (to want) is conjugated in the second person singular (quieres) and followed the infinitive "aprender" (to learn).</td>
            </tr>
            <tr>
              <td>Necesita ir al médico.</td>
              <td>The verb "necesitar" (to need) is conjugated in the third person singular (necesita) and followed by the preposition "a" and the article "el" before the noun "médico" (doctor).</td>
            </tr>
            <tr>
              <td>Quiere comprar un vestido nuevo.</td>
              <td>The verb "querer" (to want) is conjugated in the third person singular (quiere) and followed by the infinitive "comprar" (to buy) and the definite article "un" before the noun "vestido" (dress) and the adjective "nuevo" (new).</td>
            </tr>
            <tr>
              <td>Necesitamos terminar nuestra tarea.</td>
              <td>The verb "necesitar" (to need) is conjugated in the first person plural (necesitamos) and followed by the infinitive "terminar" (to finish) and the possessive pronoun "nuestra" (our) before the noun "tarea" (homework).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpanishLanguageLessons;
