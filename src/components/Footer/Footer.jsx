
import React from 'react';
import './Footer.css';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tuusuario',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub', 
      url: 'https://github.com/',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/tuusuario',
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Jorge Chavarria</h3>
            <p>Desarrollador Full Stack apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.</p>
            <div className="footer-contact">
              <p>📧 chavajorge5@gmail.com</p>
              <p>📱 67916435</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
              <li><button onClick={() => scrollToSection('about')}>Sobre Mí</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Habilidades</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Conectemos</h4>
            <p>Sígueme en mis redes sociales</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Hecho con <FaHeart className="heart-icon" /> Jorge Chavarria
            </p>
            <button className="back-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;