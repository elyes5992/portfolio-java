// src/translations.js
export const translations = {
  fr: {
    nav: { home: "Accueil", experience: "Parcours", projects: "Projets", wordpress: "WordPress", about: "À propos" },
    hero: {
      title: "Elyes BOUGHRARA",
      subtitle: "Ingénieur Fullstack & IA",
      description: "Spécialisé en PHP, IA & Développement d'applications robustes.",
      quote: "Le code est comme une blague : si vous devez l'expliquer, ce n'est pas bon."
    },
    experience: {
      title: "Mon Parcours",
      subtitle: "Mon évolution professionnelle et académique.",
      items: [
        { titre: "Développeur Full Stack (PHP) & IA", entreprise: "SMART CONSEIL", lieu: "Tunis, Ariana", periode: "Juillet 2025 - Présent", tags: ["Laravel 10", "Machine Learning", "Odoo", "Agile"], description: "Développement d'une plateforme de lutte contre le harcèlement scolaire..." },
        { titre: "Stage PFE", entreprise: "SEE ENGINEERING", lieu: "Sousse", periode: "Fév 2024 - Juin 2024", tags: ["Python", "LayoutLMv3", "AWS", "Docker"], description: "Mise en place d'un pipeline d'extraction de données..." },
        { titre: "Développeur Full-Stack", entreprise: "INNOVIBE", lieu: "Sousse", periode: "Été 2023", tags: ["React", "Laravel", "Microservices"], description: "Architecture microservices pour une plateforme d'emploi." },
        { titre: "Diplôme d'Ingénieur", entreprise: "ENISo", lieu: "Sousse", periode: "2022 - 2025", tags: ["Systèmes Distribués", "Architecture"], description: "Spécialisation en Systèmes Distribués." }
      ]
    },
    projects: {
      ai: {
        title: "Projets d'Intelligence Artificielle",
        subtitle: "Machine Learning, LLMs et pipelines RAG.",
        items: [
          { titre: "Meeting Intelligence (RAG)", description: "Analyse de réunions en temps réel avec OpenAI Whisper.", technologies: ["RAG", "Whisper", "LangChain"] },
          { titre: "RH Chatbot", description: "Assistant IA pour les politiques d'entreprise.", technologies: ["RAG", "LLM", "VectorDB"] },
          { titre: "Extraction de Factures", description: "Pipeline LayoutLMv3 pour l'extraction automatique.", technologies: ["Python", "ML", "PHP"] }
        ]
      },
      dev: {
        title: "Développement Logiciel",
        subtitle: "Applications web et mobiles robustes.",
        items: [
          { titre: "Feedback Analysis (SaaS)", description: "Analyse NLP des retours clients avec Laravel/React.", technologies: ["Laravel", "React", "Docker"] },
          { titre: "E-commerce 3D", description: "Boutique Next.js avec rendu SSR.", technologies: ["Next.js", "MongoDB", "Stripe"] },
          { titre: "Alzheimer Tracking", description: "Suivi temps réel avec Flutter et WebSockets.", technologies: ["Flutter", "WebSockets", "Mobile"] },
          { titre: "Plateforme Emploi", description: "Solution MERN full-stack.", technologies: ["MERN", "Node.js"] },
          { titre: "Recrutement LEONI", description: "Portail dynamique Angular/Java.", technologies: ["Angular", "Java", "REST"] }
        ]
      }
    },
    wordpress: {
      title: "Créations WordPress",
      subtitle: "Design et performance sur-mesure.",
      visitButton: "Visiter le site",
      items: [
        { titre: "Merkat Déco", description: "E-commerce spécialisé décoration.", url: "https://merkatdeco.com/" },
        { titre: "Hera Labs", description: "Vente de veilleuses 3D de luxe.", url: "https://heralabs.tn/" },
        { titre: "Webdo", description: "Portail d'actualités tunisien.", url: "https://www.webdo.tn/fr/" }
      ]
    },
    about: {
      title: "À Propos de Moi",
      content: [
    "Ingénieur Fullstack & IA passionné, je transforme des idées complexes en applications web performantes et innovantes (Laravel, React, Angular).",
    "Fort d'une expérience concrète sur des projets à fort impact, je conçois des architectures robustes (Microservices, API RESTful) enrichies par des solutions d'Intelligence Artificielle (NLP, RAG, Machine Learning).",
    "Orienté résultats, je maîtrise les pratiques DevOps (Docker, AWS, CI/CD) et la méthode Agile pour livrer des produits scalables, sécurisés et à haute valeur ajoutée."
  ]
    },
    skills: {
      title: "Compétences Techniques",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        db: "Bases de Données",
        mobile: "Mobile",
        tools: "Fondamentaux & Outils"
      }
    }
  },
  en: {
    nav: { 
      home: "Home", 
      experience: "Experience", 
      projects: "Projects", 
      wordpress: "WordPress", 
      about: "About" 
    },
    hero: {
      title: "Elyes BOUGHRARA",
      subtitle: "Fullstack & AI Engineer",
      description: "Specialized in PHP, AI & Robust Application Development.",
      quote: "Code is like a joke: if you have to explain it, it's not good."
    },
    experience: {
      title: "My Journey",
      subtitle: "My professional and academic evolution.",
      items: [
        { titre: "Full Stack & AI Developer", entreprise: "SMART CONSEIL", lieu: "Tunis, Ariana", periode: "July 2025 - Present", tags: ["Laravel 10", "Machine Learning", "Odoo", "Agile"], description: "Developing a school bullying prevention platform (Laravel 10). Designing an AI module for proactive behavioral analysis." },
        { titre: "PFE Internship", entreprise: "SEE ENGINEERING", lieu: "Sousse", periode: "Feb 2024 - June 2024", tags: ["Python", "LayoutLMv3", "AWS", "Docker"], description: "Implementation of an invoice data extraction pipeline via fine-tuned LayoutLMv3. Reduced manual entry time by 74%." },
        { titre: "Full-Stack Developer", entreprise: "INNOVIBE", lieu: "Sousse", periode: "Summer 2023", tags: ["React", "Laravel", "Microservices"], description: "Microservices architecture for a job offers platform. REST API optimization and multi-user management." },
        { titre: "Engineering Degree", entreprise: "ENISo", lieu: "Sousse", periode: "2022 - 2025", tags: ["Distributed Systems", "Architecture"], description: "Specialized in Distributed Systems. In-depth training in software architecture and robust development." }
      ]
    },
    projects: {
      ai: {
        title: "Artificial Intelligence Projects",
        subtitle: "Machine Learning, LLMs and RAG pipelines.",
        items: [
          { titre: "Meeting Intelligence (RAG)", description: "Real-time meeting analysis using OpenAI Whisper and RAG conversational assistant.", technologies: ["RAG", "Whisper", "LangChain"] },
          { titre: "RH Chatbot", description: "AI assistant for company policies, leaves and FAQs using a LangChain pipeline.", technologies: ["RAG", "LLM", "VectorDB"] },
          { titre: "Invoice Extraction", description: "LayoutLMv3 pipeline for automated extraction of complex data.", technologies: ["Python", "ML", "PHP"] }
        ]
      },
      dev: {
        title: "Software Development",
        subtitle: "Robust web and mobile applications.",
        items: [
          { titre: "Feedback Analysis (SaaS)", description: "NLP analysis of customer feedback with Laravel backend and React dashboard.", technologies: ["Laravel", "React", "Docker"] },
          { titre: "3D Printing E-commerce", description: "High-performance Next.js store with SSR rendering for 3D printing.", technologies: ["Next.js", "MongoDB", "Stripe"] },
          { titre: "Alzheimer Tracking", description: "Real-time tracking with Flutter and WebSockets for patient safety.", technologies: ["Flutter", "WebSockets", "Mobile"] },
          { titre: "Job Platform", description: "Full-stack MERN solution aggregating job and internship offers.", technologies: ["MERN", "Node.js"] },
          { titre: "LEONI Recruitment", description: "Dynamic recruitment portal using Angular and Java/Express.", technologies: ["Angular", "Java", "REST"] }
        ]
      }
    },
    wordpress: {
      title: "WordPress Creations",
      subtitle: "Custom design and high performance.",
      visitButton: "Visit site",
      items: [
        { titre: "Merkat Déco", description: "E-commerce specialized in decoration with polished UX.", url: "https://merkatdeco.com/" },
        { titre: "Hera Labs", description: "Sales of luxury 3D printed custom night lights.", url: "https://heralabs.tn/" },
        { titre: "Webdo", description: "Tunisian news portal optimized for high traffic.", url: "https://www.webdo.tn/fr/" }
      ]
    },
    about: {
      title: "About Me",
      content: [
    "Passionate Fullstack & AI Engineer, I transform complex ideas into high-performance, innovative web applications (Laravel, React, Angular).",
    "Backed by solid hands-on experience on high-impact projects, I design robust architectures (Microservices, RESTful APIs) empowered by Artificial Intelligence solutions (NLP, RAG, Machine Learning).",
    "Results-driven, I leverage DevOps practices (Docker, AWS, CI/CD) and Agile methodologies to deliver scalable, secure, and value-driven products."
  ]
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        db: "Databases",
        mobile: "Mobile",
        tools: "Fundamentals & Tools"
      }
    }
  }
};