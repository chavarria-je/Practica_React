
import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce React',
      description: 'Plataforma de e-commerce completa con carrito de compras, pasarela de pago y panel administrativo.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/chavarria-je/flor',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicación de gestión de tareas con drag & drop, notificaciones y sincronización en tiempo real.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'frontend',
      github: 'https://github.com/Ditmar/api-leetcode',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con pronósticos extendidos, mapas interactivos y alertas meteorológicas.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com/Ditmar/leetcode-spa',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'REST API Blog',
      description: 'API RESTful para sistema de blog con autenticación JWT, comentarios y upload de imágenes.',
      image: '/api/placeholder/400/250',
      technologies: ['Express.js', 'JWT', 'Cloudinary', 'MySQL'],
      category: 'backend',
      github: 'https://github.com/Ditmar/api-leetcode',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portafolio Personal',
      description: 'Sitio web personal responsive construido con React y mejores prácticas de desarrollo moderno.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'CSS3', 'Git', 'Responsive'],
      category: 'frontend',
      github: 'https://github.com/chavarria-je/Practica_React',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Chat en Tiempo Real',
      description: 'Aplicación de mensajería instantánea con salas, emojis y notificaciones push.',
      image: '/api/placeholder/400/250',
      technologies: ['Socket.io', 'React', 'Node.js', 'Redis'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Mis Proyectos</h2>
          <div className="projects-divider"></div>
          <p className="projects-subtitle">
            Una colección de mis trabajos más recientes y destacados
          </p>
        </div>
        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && (
                <div className="featured-badge">Destacado</div>
              )}
              
              <div className="project-image">
                <div className="image-placeholder">
                  <FaCode className="placeholder-icon" />
                  <span>Imagen del Proyecto</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;