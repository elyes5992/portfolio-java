// Fichier : src/components/Portfolio.jsx

import { useState } from 'react';

// --- Importation des fichiers CSS modulaires ---
import './components/styles/global.css';
import './components/styles/hero.css';
import './components/styles/projects.css';
import './components/styles/about.css';

// --- Importation du fichier de traduction ---
import { translations } from './translation';  // ✅ Fixed: removed .js extension, added ./

// --- Importation de votre image de profil ---
import profileImage from './assets/face.jpg';

// --- Importation des icônes ---
import {
  FaRobot, FaFileInvoice, FaMobileAlt, FaBriefcase, FaBuilding,
  FaBrain, FaCube, FaChartBar, FaHome, FaUser, FaCode, FaWordpress,
  FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaGlobe
} from 'react-icons/fa';

// --- Tableaux d'icônes (mappés par index avec les traductions) ---
const expIcons = [<FaBriefcase />, <FaFileInvoice />, <FaCode />, <FaGraduationCap />];
const aiIcons = [<FaBrain />, <FaRobot />, <FaFileInvoice />];
const devIcons = [<FaChartBar />, <FaCube />, <FaMobileAlt />, <FaBriefcase />, <FaBuilding />];

// --- Données Techniques (ne changent pas avec la langue) ---
const competences = {
  frontend: ["React", "Angular", "Vue.js", "Next.js"],
  backend: [
    { name: "PHP", highlight: true }, { name: "Laravel", highlight: true }, 
    { name: "Symfony", highlight: true }, { name: "Node.js" }, 
    { name: "Spring Boot" }, { name: "Express" }, { name: "Java" }, { name: "Python" }
  ],
  db: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  mobile: ["Flutter", "React Native"],
  tools: ["IA/ML", "LLM", "RAG", "Python", "WebSockets", "REST API", "CI/CD", "Docker", "Junit"]
};

function Portfolio() {
  const [lang, setLang] = useState('fr');
  
  // Raccourci vers les traductions
  const t = translations[lang];

  // Fonction pour changer de langue
  const toggleLanguage = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

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
        {/* IA */}
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

        {/* LOGICIEL */}
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

export default Portfolio;