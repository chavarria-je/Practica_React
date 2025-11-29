// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Estas secciones son temporales para probar la navegación */}
      <section id="home" style={{height: '100vh', paddingTop: '70px', background: '#f8f9fa'}}>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1>Sección Home - Hero irá aquí</h1>
          <p>Esta es una sección temporal para probar la navegación</p>
        </div>
      </section>

      <section id="about" style={{height: '100vh', paddingTop: '70px', background: '#e9ecef'}}>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1>Sección Sobre Mí</h1>
          <p>Esta es una sección temporal para probar la navegación</p>
        </div>
      </section>

      <section id="projects" style={{height: '100vh', paddingTop: '70px', background: '#dee2e6'}}>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1>Sección Proyectos</h1>
          <p>Esta es una sección temporal para probar la navegación</p>
        </div>
      </section>

      <section id="skills" style={{height: '100vh', paddingTop: '70px', background: '#ced4da'}}>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1>Sección Habilidades</h1>
          <p>Esta es una sección temporal para probar la navegación</p>
        </div>
      </section>

      <section id="contact" style={{height: '100vh', paddingTop: '70px', background: '#adb5bd'}}>
        <div style={{textAlign: 'center', padding: '2rem'}}>
          <h1>Sección Contacto</h1>
          <p>Esta es una sección temporal para probar la navegación</p>
        </div>
      </section>
    </div>
  );
}

export default App;