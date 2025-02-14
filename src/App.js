import React, { useState } from 'react';
import './App.css';
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUser,
  FaCheckCircle,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import profileImg from './assets/profile.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cierra el menú al hacer click en un enlace
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="cv-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a onClick={closeMenu} href="#contacto">Contacto</a></li>
            <li><a onClick={closeMenu} href="#perfil">Perfil Profesional</a></li>
            <li><a onClick={closeMenu} href="#aptitudes">Aptitudes</a></li>
            <li><a onClick={closeMenu} href="#experiencia">Experiencia</a></li>
            <li><a onClick={closeMenu} href="#educacion">Educación</a></li>
            <li><a onClick={closeMenu} href="#cursos">Cursos</a></li>
          </ul>
        </div>
      </nav>

      {/* Encabezado */}
      <header className="header-section" id="header">
        <div className="header-content">
          <img src={profileImg} alt="Carolina Calles" className="profile-img" />
          <h1>Carolina Calles</h1>
          <h3>Profesional de Recursos Humanos</h3>
        </div>
      </header>

      {/* Sección de Contacto */}
      <section id="contacto" className="section">
        <h2><FaEnvelope /> Contacto</h2>
        <ul className="contact-list">
          <li><FaEnvelope /> <strong>Correo:</strong> CCc162003@gmail.com</li>
          <li>
            <FaLinkedin /> <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/carolina-calles-414206119" target="_blank" rel="noopener noreferrer">
              Carolina Calles
            </a>
          </li>
          <li><FaMapMarkerAlt /> <strong>Ubicación:</strong> Chile</li>
        </ul>
      </section>

      {/* Sección de Perfil Profesional */}
      <section id="perfil" className="section">
        <h2><FaUser /> Perfil Profesional</h2>
        <p>
          Profesional de Recursos Humanos con más de 15 años de experiencia en la transformación digital y optimización de procesos. Especializada en <strong>People Analytics</strong>, <strong>Employer Branding</strong>, <strong>Compensaciones y Beneficios</strong> y <strong>Desarrollo Organizacional</strong>, he implementado soluciones estratégicas que han reducido los tiempos de contratación en un 30% y aumentado la retención de talento en un 25%. Mi enfoque innovador y analítico, combinado con habilidades interpersonales y tecnológicas, me permite crear entornos laborales colaborativos y eficientes que impulsan el crecimiento y la competitividad.
        </p>
      </section>

      {/* Sección de Aptitudes y Habilidades */}
      <section id="aptitudes" className="section">
        <h2><FaCheckCircle /> Aptitudes y Habilidades</h2>
        <ul>
          <li>Coordinación y optimización de procesos en RR. HH.</li>
          <li>Comunicación efectiva y relaciones interpersonales</li>
          <li>Gestión del Cambio e Inteligencia Emocional</li>
          <li>Trabajo en entornos ágiles y resolución de conflictos complejos</li>
          <li>Manejo avanzado de software de RR. HH. y herramientas de analítica</li>
        </ul>
      </section>

      {/* Sección de Experiencia Laboral */}
      <section id="experiencia" className="section">
        <h2><FaBriefcase /> Experiencia Laboral</h2>
        <div className="experience-item">
          <h3>C al Cuadrado Arquitectos Consultores Ltda.</h3>
          <p className="position">Asistente Administrativa (enfocado en RR. HH.)</p>
          <p className="date">Mayo 2018 - Julio 2019 (1 año 3 meses)</p>
          <p className="location">Gran Santiago, Región Metropolitana, Chile</p>
          <ul>
            <li>Lideré la digitalización de procesos administrativos, reduciendo el tiempo de contratación en un 30%.</li>
            <li>Implementé herramientas digitales que mejoraron la coordinación interdepartamental en un 20%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Hotel Suite Ucaima (Sumper Ventuari)</h3>
          <p className="position">Coordinador de RR. HH.</p>
          <p className="date">Octubre 2008 - Septiembre 2017 (9 años)</p>
          <p className="location">Valencia, Estado Carabobo, Venezuela</p>
          <ul>
            <li>Diseñé e implementé estrategias de desarrollo organizacional que incrementaron la retención de talento en un 25%.</li>
            <li>Optimicé procesos internos, aumentando la eficiencia en un 15%.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Ford Motor Company</h3>
          <p className="position">Practicante Universitaria</p>
          <p className="date">Marzo 2010 - Octubre 2010 (8 meses)</p>
          <p className="location">Valencia, Venezuela</p>
          <ul>
            <li>Contribuí en proyectos de mejora de procesos y aporté ideas innovadoras para optimizar el área de RR. HH.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Deportes Ka C.A</h3>
          <p className="position">Asistente Administrativa de Ventas</p>
          <p className="date">Mayo 2001 - Marzo 2010 (8 años 11 meses)</p>
          <p className="location">Valencia, Venezuela</p>
          <ul>
            <li>Optimicé la gestión administrativa, mejorando la eficiencia de los procesos comerciales.</li>
          </ul>
        </div>
      </section>

      {/* Sección de Educación */}
      <section id="educacion" className="section">
        <h2><FaGraduationCap /> Educación</h2>
        <div className="education-item">
          <h3>Universidad de Carabobo</h3>
          <p className="degree">Licenciatura en Relaciones Laborales Industriales (2002 - 2008)</p>
          <p className="postgrado">Postgrado en Administración del Trabajo y Relaciones Laborales</p>
        </div>
      </section>

      {/* Sección de Cursos y Formación Adicional */}
      <section id="cursos" className="section">
        <h2><FaCertificate /> Cursos y Formación Adicional</h2>
        <div className="course-item">
          <h3>SERCOTEC (2024)</h3>
          <ul>
            <li>Curso de Legislación Laboral 1 - Contratos y Beneficios (Mayo 2024)</li>
            <li>Curso de Gestión de Personas (Marzo 2024)</li>
            <li>Curso de Riesgos Psicosociales (Febrero 2024)</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Carolina Calles. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
