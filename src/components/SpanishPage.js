import React from 'react';
import { Link } from 'react-router-dom';

const SpanishPage = () => {
  return (
    <div className='container'>
      <h1>Bienvenido a la Enseñanza de Español</h1>
      <p>
        Esta página proporciona recursos e información para aprender español. Aquí puedes encontrar varias lecciones, cuestionarios y más para mejorar tus habilidades en el idioma español.
      </p>
      <div>
        <h2>Explora el Aprendizaje de Español</h2>
        <ul>
          <li>
            <Link to="/learn/lesson/spanish">Lecciones de Español</Link>
          </li>
          <li>
            <Link to="/learn/quiz/spanish">Cuestionario de Español</Link>
          </li>
        </ul>
      </div>

      <div className="additional-content">
        <h2>Por qué Aprender Español</h2>
        <p>
          El español es un idioma hablado por millones de personas en todo el mundo. Aprender español puede brindarte oportunidades para conectarte con personas de diferentes culturas y acceder a una amplia gama de recursos.
        </p>
        <h2>Beneficios de Aprender Español</h2>
        <ul>
          <li>Mejora las oportunidades laborales</li>
          <li>Enriquece las experiencias de viaje</li>
          <li>Acceso a una amplia cantidad de literatura, películas y música</li>
          <li>Mejora las habilidades de comunicación</li>
          <li>Oportunidades de redes internacionales</li>
        </ul>
      </div>
    </div>
  );
};

export default SpanishPage;
