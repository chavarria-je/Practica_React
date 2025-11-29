// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo de Hexágono y Brillo (REEMPLAZADO) */}
        <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <div className="hexagon-logo">
            <span className="logo-letter">J</span> {/* La letra de tu logo */}
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="nav-desktop">
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')}>Sobre Mí</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Habilidades</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
          </ul>
        </nav>

        {/* Botón Menú Móvil */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navegación Móvil */}
        <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Inicio</button></li>
            <li><button onClick={() => scrollToSection('about')}>Sobre Mí</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Proyectos</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Habilidades</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;