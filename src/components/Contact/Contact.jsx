import React, { useState } from 'react';
import './Contact.css';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaTwitter,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'chavajorge5@gmail.com',
      link: 'mailto:tu.email@ejemplo.com'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      value: '67916435',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      value: 'Bolivia, Potosi',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tuusuario',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/tuusuario',
      color: '#333'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/tuusuario',
      color: '#1da1f2'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contáctame</h2>
          <div className="contact-divider"></div>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
          </p>
        </div>

        <div className="contact-content">
          
          <div className="contact-info">
            <h3>¡Hablemos!</h3>
            <p>
              Estoy siempre interesado en nuevos proyectos y oportunidades. 
              No dudes en contactarme para discutir cómo podemos trabajar juntos.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <a href={item.link}>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-social">
              <h4>Sígueme en</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Describe tu proyecto o consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;