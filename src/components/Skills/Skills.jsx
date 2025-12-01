import React from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaMobile,
  FaCloud
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices, 
  SiFirebase,
  SiTailwindcss
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="category-icon" />,
      skills: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "JavaScript", level: 95, icon: <FaJs /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "HTML/CSS", level: 95, icon: <FaJs /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="category-icon" />,
      skills: [
        { name: "Node.js", level: 88, icon: <FaNodeJs /> },
        { name: "Express.js", level: 85, icon: <SiExpress /> },
        { name: "Python", level: 75, icon: <FaPython /> },
        { name: "RESTful APIs", level: 90, icon: <FaDatabase /> }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "MongoDB", level: 82, icon: <SiMongodb /> },
        { name: "PostgreSQL", level: 78, icon: <SiPostgresql /> },
        { name: "Firebase", level: 80, icon: <SiFirebase /> },
        { name: "AWS", level: 70, icon: <SiAmazonwebservices /> } // CORREGIDO
      ]
    },
    {
      title: "Herramientas & Otros",
      icon: <FaGitAlt className="category-icon" />,
      skills: [
        { name: "Git/GitHub", level: 92, icon: <FaGitAlt /> },
        { name: "Docker", level: 75, icon: <SiDocker /> },
        { name: "Figma", level: 80, icon: <FaFigma /> },
        { name: "Responsive Design", level: 90, icon: <FaMobile /> }
      ]
    }
  ];
  const softSkills = [
    { name: "Trabajo en Equipo", level: 95 },
    { name: "Resolución de Problemas", level: 90 },
    { name: "Comunicación", level: 88 },
    { name: "Gestión de Tiempo", level: 85 },
    { name: "Adaptabilidad", level: 92 },
    { name: "Aprendizaje Continuo", level: 95 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Mis Habilidades</h2>
          <div className="skills-divider"></div>
          <p className="skills-subtitle">
            Tecnologías y herramientas que utilizo para crear soluciones increíbles
          </p>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3 className="skills-section-title">Habilidades Técnicas</h3>
            <div className="skills-categories">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category">
                  <div className="category-header">
                    {category.icon}
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <div className="skill-icon">
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                            data-level={skill.level}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-skills">
            <h3 className="skills-section-title">Habilidades Blandas</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-info">
                    <span className="soft-skill-name">{skill.name}</span>
                    <span className="soft-skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="soft-skill-bar">
                    <div 
                      className="soft-skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-number">+50</div>
            <div className="stat-label">Proyectos Completados</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+10</div>
            <div className="stat-label">Tecnologías Dominadas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+3</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;