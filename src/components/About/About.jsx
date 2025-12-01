
import React from 'react';
import './About.css';
import { FaCode, FaGraduationCap, FaHeart, FaDownload } from 'react-icons/fa';

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
          
          <div className="about-info">

            <div className="avatar-section">
              <img 
                src={AvatarImage} 
                alt="Avatar de Jorge Chavarria" 
                className="about-avatar"
              />
            </div>

            <div className="about-text">
              {}
              <h3>¡Hola! Soy Jorge Chavarria 👋</h3> 
              <p>
                Soy un apasionado desarrollador con más de 1 año de experiencia
                creando aplicaciones web modernas y escalables. Me especializo en el ecosistema 
                JavaScript y me encanta resolver problemas complejos con código elegante.
              </p>
              <p>
                Cuando no estoy programando, me gusta [tus hobbies,  aprender nuevas tecnologías, 
                contribuir a proyectos open source, o hacer hiking]. Creo firmemente en el aprendizaje 
                continuo y en compartir conocimiento con la comunidad.
              </p>

              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">+10</div>
                  <div className="stat-label">Proyectos Completados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+3</div>
                  <div className="stat-label">Años de Experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+1</div>
                  <div className="stat-label">Clientes Satisfechos</div>
                </div>
              </div>

             
              <button className="btn-cv" onClick={downloadCV}>
                <FaDownload className="btn-icon" />
                Descargar CV
              </button>
            </div>
          </div>

          
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