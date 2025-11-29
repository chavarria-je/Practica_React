// src/components/About/About.jsx
import React from 'react';
import './About.css';
import { FaCode, FaGraduationCap, FaHeart, FaDownload } from 'react-icons/fa';
// ❗ ASEGÚRATE DE QUE ESTA RUTA SEA CORRECTA PARA TU IMAGEN DE AVATAR ❗
import AvatarImage from '../../assets/avatar.png'; 

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/HTML', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 }
  ];

  const downloadCV = () => {
    // Aquí puedes agregar la lógica real para descargar CV
    alert('Funcionalidad de descarga de CV - Agrega el archivo real a tu carpeta public/ o assets/ y actualiza esta función.');
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Sobre Mí</h2>
          <div className="about-divider"></div>
          <p className="about-subtitle">
            Conoce más sobre mi journey como desarrollador
          </p>
        </div>

        <div className="about-content">
          {/* Columna izquierda - Información personal y Avatar */}
          <div className="about-info">

            {/* Sección del Avatar (NUEVO) */}
            <div className="avatar-section">
              <img 
                src={AvatarImage} 
                alt="Avatar de Jorge Chavarria" 
                className="about-avatar"
              />
            </div>

            <div className="about-text">
              {/* Hemos reemplazado [Tu Nombre] por Jorge Chavarria */}
              <h3>¡Hola! Soy Jorge Chavarria 👋</h3> 
              <p>
                Soy un apasionado desarrollador full stack con más de [X] años de experiencia 
                creando aplicaciones web modernas y escalables. Me especializo en el ecosistema 
                JavaScript y me encanta resolver problemas complejos con código elegante.
              </p>
              <p>
                Cuando no estoy programando, me gusta [tus hobbies, ej: aprender nuevas tecnologías, 
                contribuir a proyectos open source, o hacer hiking]. Creo firmemente en el aprendizaje 
                continuo y en compartir conocimiento con la comunidad.
              </p>

              {/* Estadísticas */}
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">+20</div>
                  <div className="stat-label">Proyectos Completados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+3</div>
                  <div className="stat-label">Años de Experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+15</div>
                  <div className="stat-label">Clientes Satisfechos</div>
                </div>
              </div>

              {/* Botón Descargar CV */}
              <button className="btn-cv" onClick={downloadCV}>
                <FaDownload className="btn-icon" />
                Descargar CV
              </button>
            </div>
          </div>

          {/* Columna derecha - Habilidades técnicas */}
          <div className="about-skills">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Intereses */}
            <div className="interests">
              <h4>Mis Intereses</h4>
              <div className="interests-grid">
                <div className="interest-item">
                  <FaCode className="interest-icon" />
                  <span>Desarrollo Web</span>
                </div>
                <div className="interest-item">
                  <FaGraduationCap className="interest-icon" />
                  <span>Aprendizaje Continuo</span>
                </div>
                <div className="interest-item">
                  <FaHeart className="interest-icon" />
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;