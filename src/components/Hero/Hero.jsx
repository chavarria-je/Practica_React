import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">¡Hola! Soy</div>
            <h1 className="hero-title">
              <span className="hero-name">Jorge Chavarria Condori</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">Desarrollador </span>
            </h2>
            <p className="hero-description">
              Apasionado por crear soluciones web innovadoras con
              <span className="tech-highlight"> React</span>,
              <span className="tech-highlight"> Node.js</span> y las últimas tecnologías.
              Transformo ideas en experiencias digitales excepcionales.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                Ver Mis Proyectos
              </button>
              <button className="btn btn-secondary" onClick={scrollToContact}>
                Contáctame
              </button>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:tu.email@ejemplo.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-container">
              <img
                src="/assets/avatar.png"
                alt="Avatar de Jorge Chavarria"
                className="hero-avatar"
                onError={(e) => {
                  
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.avatar-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback">
                <span>JC</span>
              </div>
            </div>
            <div className="hero-decoration"></div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <span>Scroll Down</span>
          <FaArrowDown className="bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;