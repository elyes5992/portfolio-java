// Fichier : src/components/PortfolioJava.jsx
// Version Java — même CSS classes que Portfolio.jsx original
// Dans App.jsx : import Portfolio from './components/PortfolioJava';

import { useState } from 'react';

// --- Importation des fichiers CSS modulaires (identiques à l'original) ---
import './components/styles/global.css';
import './components/styles/hero.css';
import './components/styles/projects.css';
import './components/styles/about.css';

// --- Importation du fichier de traduction Java ---
import { translations } from './translation_java';

// --- Importation de votre image de profil ---
import profileImage from './assets/face.jpg';

// --- Importation des icônes ---
import {
  FaJava, FaFileInvoice, FaMobileAlt, FaBriefcase, FaBuilding,
  FaBrain, FaCube, FaChartBar, FaHome, FaUser, FaCode, FaWordpress,
  FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaShieldAlt
} from 'react-icons/fa';

// --- Tableaux d'icônes (mappés par index avec les traductions) ---
const expIcons = [<FaJava />, <FaFileInvoice />, <FaCode />, <FaGraduationCap />];
const aiIcons  = [<FaBrain />, <FaChartBar />, <FaFileInvoice />];
const devIcons = [<FaShieldAlt />, <FaBuilding />, <FaMobileAlt />, <FaBriefcase />, <FaCube />];

// --- Données Techniques Java ---
const competences = {
  java: [
    { name: "Java 11/17+",     highlight: true },
    { name: "Spring Boot",     highlight: true },
    { name: "Spring Security", highlight: true },
    { name: "Spring MVC",      highlight: true },
    { name: "Spring Data JPA" },
    { name: "Hibernate / ORM" },
    { name: "Maven / Gradle" },
    { name: "JUnit / Mockito" },
    { name: "Microservices" },
    { name: "REST API" }
  ],
  frontend: ["Angular", "React", "Vue.js", "Next.js"],
  backend:  ["Node.js", "Express", "PHP / Laravel", "Symfony", "Python"],
  db:       ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  mobile:   ["Flutter", "React Native"],
  tools:    ["IA/ML", "NLP", "LLM", "RAG Pipeline", "WebSockets", "CI/CD", "Docker", "AWS", "GitHub Actions", "Odoo ERP", "Scrum/Agile"]
};

function PortfolioJava() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];
  const toggleLanguage = () => setLang(prev => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <div className="portfolio-container">

      {/* HEADER / NAV */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-section">
            <span className="logo-name">EB.</span>
          </div>
          <nav className="top-nav">
            <a href="#home"><FaHome /> <span>{t.nav.home}</span></a>
            <a href="#experience"><FaGraduationCap /> <span>{t.nav.experience}</span></a>
            <a href="#projects"><FaCode /> <span>{t.nav.projects}</span></a>
            <a href="#wordpress"><FaWordpress /> <span>{t.nav.wordpress}</span></a>
            <a href="#about"><FaUser /> <span>{t.nav.about}</span></a>
            <button onClick={toggleLanguage} className="lang-toggle">
              <FaGlobe /> {lang.toUpperCase()}
            </button>
          </nav>
        </div>
      </header>

      {/* ============== SECTION HÉROS ============== */}
      <section className="hero-section" id="home">
        <div className="hero-text">
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p className="hero-subtitle">{t.hero.description}</p>
          <p className="hero-quote">"{t.hero.quote}"</p>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="Portrait" className="hero-image" />
        </div>
      </section>

      {/* ============== SECTION PARCOURS ============== */}
      <section className="experience-section" id="experience">
        <div className="portfolio-header">
          <h1>{t.experience.title}</h1>
          <p>{t.experience.subtitle}</p>
        </div>

        <div className="timeline">
          {t.experience.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                {expIcons[index]}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.titre}</h3>
                  <span className="timeline-date"><FaCalendarAlt /> {item.periode}</span>
                </div>
                <h4 className="timeline-company">
                  {item.entreprise} <span className="timeline-location"><FaMapMarkerAlt /> {item.lieu}</span>
                </h4>
                <p>{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="experience-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== SECTION PROJETS ============== */}
      <div id="projects">

        {/* --- Projets IA --- */}
        <section className="main-projects-section">
          <div className="portfolio-header">
            <h1>{t.projects.ai.title}</h1>
            <p>{t.projects.ai.subtitle}</p>
          </div>
          <div className="main-projects-grid">
            {t.projects.ai.items.map((projet, index) => (
              <div key={index} className="main-project-card">
                <div className="project-icon-wrapper">
                  {aiIcons[index]}
                </div>
                <div className="project-details">
                  <h3>{projet.titre}</h3>
                  <p>{projet.description}</p>
                  <div className="project-tech-tags">
                    {projet.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Projets Logiciel --- */}
        <section className="main-projects-section">
          <div className="portfolio-header">
            <h1>{t.projects.dev.title}</h1>
            <p>{t.projects.dev.subtitle}</p>
          </div>
          <div className="main-projects-grid">
            {t.projects.dev.items.map((projet, index) => (
              <div key={index} className="main-project-card">
                <div className="project-icon-wrapper">
                  {devIcons[index]}
                </div>
                <div className="project-details">
                  <h3>{projet.titre}</h3>
                  <p>{projet.description}</p>
                  <div className="project-tech-tags">
                    {projet.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ============== SECTION À PROPOS & COMPÉTENCES ============== */}
      <section className="about-skills-section" id="about">
        <div className="about-column">
          <h3>{t.about.title}</h3>
          {t.about.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="skills-column">
          <h3>{t.skills.title}</h3>
          <div className="skills-grid">
            {Object.entries(competences).map(([key, list]) => (
              <div key={key} className="skill-category">
                <h4>{t.skills.categories[key]}</h4>
                <div className="tags-container">
                  {list.map((skill, i) => (
                    <span
                      key={i}
                      className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                    >
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SECTION GALERIE WORDPRESS ============== */}
      <section className="projects-section" id="wordpress">
        <div className="portfolio-header">
          <h1>{t.wordpress.title}</h1>
          <p>{t.wordpress.subtitle}</p>
        </div>
        <div className="projects-grid">
          {t.wordpress.items.map((projet, index) => (
            <div key={index} className="project-card">
              <div className="project-preview-wrapper">
                <div className="project-browser-bar">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <iframe
                  src={projet.url}
                  className="project-iframe"
                  title={`Aperçu de ${projet.titre}`}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
              <div className="project-info">
                <h3>{projet.titre}</h3>
                <p>{projet.description}</p>
                <a href={projet.url} target="_blank" rel="noopener noreferrer" className="visit-button">
                  {t.wordpress.visitButton} <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default PortfolioJava;