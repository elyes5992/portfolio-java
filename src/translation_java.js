// src/translations_java.js
export const translations = {
  fr: {
    nav: { home: "Accueil", experience: "Parcours", projects: "Projets", wordpress: "WordPress", about: "À propos" },
    hero: {
      title: "Elyes BOUGHRARA",
      subtitle: "Ingénieur Fullstack Java & IA",
      description: "Spécialisé en Java, Spring Boot, Angular & Intégration d'IA en production.",
      quote: "Un bon système est celui qu'on peut maintenir, faire évoluer et comprendre sans douleur."
    },
    experience: {
      title: "Mon Parcours",
      subtitle: "Mon évolution professionnelle et académique.",
      items: [
        {
          titre: "Ingénieur Fullstack Java / Angular & IA",
          entreprise: "SMART CONSEIL",
          lieu: "Tunis, Ariana",
          periode: "Juillet 2025 - Présent",
          tags: ["Java", "Spring Boot", "Angular", "Machine Learning", "Odoo", "Scrum"],
          description: "Développement backend d'une plateforme de lutte contre le harcèlement scolaire avec Java & Spring Boot (APIs RESTful sécurisées). SPA Angular réactive pour le module de signalement. Module IA/ML pour l'analyse proactive des comportements à risque. Synchronisation avec l'ERP Odoo via API."
        },
        {
          titre: "Stage PFE — Extraction Automatisée de Données",
          entreprise: "SEE ENGINEERING",
          lieu: "Sousse",
          periode: "Fév 2024 - Juin 2024",
          tags: ["Java", "Spring Boot", "Python", "LayoutLMv3", "AWS", "Docker"],
          description: "Pipeline d'extraction automatisé via LayoutLMv3 fine-tuné, réduisant le temps de saisie manuelle de 74%. Déployé en tant que microservice Java/Spring Boot conteneurisé sur AWS. Précision clé-valeur de 78%."
        },
        {
          titre: "Développeur Fullstack Java",
          entreprise: "INNOVIBE",
          lieu: "Sousse",
          periode: "Été 2023",
          tags: ["MERN", "Node.js", "Microservices", "REST API"],
          description: "Plateforme centralisée d'offres d'emploi (MERN stack, architecture microservices). 15+ endpoints RESTful conçus et développés. Performances API optimisées (temps de réponse < 200ms)."
        },
        {
          titre: "Diplôme d'Ingénieur en Informatique Appliquée",
          entreprise: "ENISo",
          lieu: "Sousse",
          periode: "2022 - Juin 2025",
          tags: ["Systèmes Distribués", "Architecture Logicielle", "Java"],
          description: "Spécialisation en Systèmes Distribués. Formation approfondie en architecture logicielle, développement robuste et écosystème Java/Spring."
        }
      ]
    },
    projects: {
      ai: {
        title: "Projets d'Intelligence Artificielle",
        subtitle: "Machine Learning, NLP, LLMs et pipelines RAG couplés à Java/Spring Boot.",
        items: [
          {
            titre: "Meeting Intelligence (Java + RAG)",
            description: "Backend Java/Spring Boot avec pipeline RAG et analyse NLP des réunions via OpenAI Whisper. Déployé sur AWS avec CI/CD GitHub Actions.",
            technologies: ["Java", "Spring Boot", "RAG", "Whisper", "Docker", "AWS"]
          },
          {
            titre: "Analyse Intelligente de Feedback (SaaS)",
            description: "Backend Java/Spring Boot avec microservice Python NLP (précision 92%). Tableau de bord React interactif. Déploiement Docker/AWS avec pipeline CI/CD.",
            technologies: ["Java", "Spring Boot", "Python", "NLP", "React", "Docker"]
          },
          {
            titre: "Extraction de Factures (LayoutLMv3)",
            description: "Microservice Java/Spring Boot pour l'extraction automatisée via LayoutLMv3 fine-tuné. Réduction du temps de saisie manuelle de 74%.",
            technologies: ["Java", "Spring Boot", "Python", "ML", "Docker", "AWS"]
          }
        ]
      },
      dev: {
        title: "Développement Logiciel",
        subtitle: "Applications web robustes avec Java, Spring Boot, Angular et architectures Microservices.",
        items: [
          {
            titre: "Plateforme Anti-Harcèlement Scolaire",
            description: "APIs RESTful sécurisées avec Java/Spring Boot & Spring Security. SPA Angular réactive. Intégration Odoo ERP. Module IA/ML couplé au backend Java.",
            technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "Odoo"]
          },
          {
            titre: "Plateforme Recrutement LEONI (SaaS)",
            description: "Architecture Microservices Java/Spring Boot. API REST sécurisée avec Spring Security. Interface Angular avec microservice BFF Node.js.",
            technologies: ["Java", "Spring Boot", "Angular", "Microservices", "Node.js"]
          },
          {
            titre: "Alzheimer Tracking",
            description: "Application mobile Flutter avec WebSockets pour le suivi et la géolocalisation en temps réel. Latence < 500ms pour des alertes instantanées.",
            technologies: ["Flutter", "WebSockets", "Mobile", "Temps réel"]
          },
          {
            titre: "Plateforme Emploi & Stage (MERN)",
            description: "Application MERN full-stack avec 15+ endpoints RESTful. Architecture microservices. Temps de réponse API optimisé < 200ms.",
            technologies: ["MERN", "Node.js", "REST API", "Microservices"]
          },
          {
            titre: "E-commerce 3D (Next.js)",
            description: "Boutique haute performance Next.js avec rendu SSR pour l'impression 3D.",
            technologies: ["Next.js", "MongoDB", "Stripe", "SSR"]
          }
        ]
      }
    },
    wordpress: {
      title: "Créations WordPress",
      subtitle: "Design et performance sur-mesure.",
      visitButton: "Visiter le site",
      items: [
        { titre: "Merkat Déco", description: "E-commerce spécialisé décoration avec UX soignée.", url: "https://merkatdeco.com/" },
        { titre: "Hera Labs", description: "Vente de veilleuses 3D de luxe personnalisées.", url: "https://heralabs.tn/" },
        { titre: "Webdo", description: "Portail d'actualités tunisien optimisé pour fort trafic.", url: "https://www.webdo.tn/fr/" }
      ]
    },
    about: {
      title: "À Propos de Moi",
      content: [
        "Ingénieur Fullstack Java & IA, je conçois et déploie des applications web robustes et évolutives en m'appuyant sur l'écosystème Java (Spring Boot, Spring Security, Spring Data JPA, Hibernate) et des frameworks frontend modernes comme Angular et React.",
        "Spécialisé dans les architectures Microservices et les API RESTful sécurisées, j'intègre des solutions d'Intelligence Artificielle (NLP, RAG, Machine Learning) directement couplées au backend Java pour créer des produits à forte valeur ajoutée.",
        "Certifié NVIDIA (IA pour la Maintenance Prédictive) et ISC2 (Cybersécurité), je maîtrise les pratiques DevOps (Docker, AWS, CI/CD) et la méthode Agile/Scrum pour livrer des solutions scalables, sécurisées et performantes."
      ]
    },
    skills: {
      title: "Compétences Techniques",
      categories: {
        java: "Écosystème Java",
        frontend: "Frontend",
        backend: "Backend",
        db: "Bases de Données",
        mobile: "Mobile",
        tools: "Fondamentaux & Outils"
      }
    }
  },
  en: {
    nav: { home: "Home", experience: "Experience", projects: "Projects", wordpress: "WordPress", about: "About" },
    hero: {
      title: "Elyes BOUGHRARA",
      subtitle: "Fullstack Java & AI Engineer",
      description: "Specialized in Java, Spring Boot, Angular & Production-Grade AI Integration.",
      quote: "A good system is one you can maintain, evolve, and understand without pain."
    },
    experience: {
      title: "My Journey",
      subtitle: "My professional and academic evolution.",
      items: [
        {
          titre: "Fullstack Java / Angular & AI Engineer",
          entreprise: "SMART CONSEIL",
          lieu: "Tunis, Ariana",
          periode: "July 2025 - Present",
          tags: ["Java", "Spring Boot", "Angular", "Machine Learning", "Odoo", "Scrum"],
          description: "Backend development of a school bullying prevention platform using Java & Spring Boot (secure RESTful APIs). Reactive Angular SPA for the reporting interface. AI/ML module for proactive risk behavior analysis. Synchronized with Odoo ERP via API calls."
        },
        {
          titre: "PFE Internship — Automated Data Extraction",
          entreprise: "SEE ENGINEERING",
          lieu: "Sousse",
          periode: "Feb 2024 - June 2024",
          tags: ["Java", "Spring Boot", "Python", "LayoutLMv3", "AWS", "Docker"],
          description: "Automated extraction pipeline using fine-tuned LayoutLMv3, reducing manual entry time by 74%. Deployed as a containerized Java/Spring Boot microservice on AWS. Key-value extraction accuracy of 78%."
        },
        {
          titre: "Fullstack Java Developer",
          entreprise: "INNOVIBE",
          lieu: "Sousse",
          periode: "Summer 2023",
          tags: ["MERN", "Node.js", "Microservices", "REST API"],
          description: "Centralized job offers platform (MERN stack, microservices architecture). Designed and built 15+ RESTful endpoints. API performance optimized to < 200ms response time."
        },
        {
          titre: "Engineering Degree in Applied Computer Science",
          entreprise: "ENISo",
          lieu: "Sousse",
          periode: "2022 - June 2025",
          tags: ["Distributed Systems", "Software Architecture", "Java"],
          description: "Specialized in Distributed Systems. In-depth training in software architecture, robust development, and the Java/Spring ecosystem."
        }
      ]
    },
    projects: {
      ai: {
        title: "Artificial Intelligence Projects",
        subtitle: "Machine Learning, NLP, LLMs and RAG pipelines powered by Java/Spring Boot.",
        items: [
          {
            titre: "Meeting Intelligence (Java + RAG)",
            description: "Java/Spring Boot backend with RAG pipeline and NLP meeting analysis via OpenAI Whisper. Deployed on AWS with CI/CD via GitHub Actions.",
            technologies: ["Java", "Spring Boot", "RAG", "Whisper", "Docker", "AWS"]
          },
          {
            titre: "Intelligent Feedback Analysis (SaaS)",
            description: "Java/Spring Boot backend with Python NLP microservice (92% accuracy). Interactive React dashboard. Docker/AWS deployment with CI/CD pipeline.",
            technologies: ["Java", "Spring Boot", "Python", "NLP", "React", "Docker"]
          },
          {
            titre: "Invoice Extraction (LayoutLMv3)",
            description: "Java/Spring Boot microservice for automated extraction via fine-tuned LayoutLMv3. Reduced manual data entry time by 74%.",
            technologies: ["Java", "Spring Boot", "Python", "ML", "Docker", "AWS"]
          }
        ]
      },
      dev: {
        title: "Software Development",
        subtitle: "Robust web applications with Java, Spring Boot, Angular and Microservices architectures.",
        items: [
          {
            titre: "Anti-Bullying Platform",
            description: "Secure RESTful APIs with Java/Spring Boot & Spring Security. Reactive Angular SPA. Odoo ERP integration. AI/ML module coupled to the Java backend.",
            technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "Odoo"]
          },
          {
            titre: "LEONI Recruitment Platform (SaaS)",
            description: "Java/Spring Boot Microservices architecture. Secure REST API with Spring Security. Angular UI with Node.js BFF microservice.",
            technologies: ["Java", "Spring Boot", "Angular", "Microservices", "Node.js"]
          },
          {
            titre: "Alzheimer Tracking",
            description: "Flutter mobile app with WebSockets for real-time tracking and geolocation. Latency < 500ms for instant caregiver alerts.",
            technologies: ["Flutter", "WebSockets", "Mobile", "Real-time"]
          },
          {
            titre: "Job & Internship Platform (MERN)",
            description: "Full-stack MERN app with 15+ RESTful endpoints. Microservices architecture. API response time optimized to < 200ms.",
            technologies: ["MERN", "Node.js", "REST API", "Microservices"]
          },
          {
            titre: "3D Printing E-commerce (Next.js)",
            description: "High-performance Next.js store with SSR rendering for 3D printing products.",
            technologies: ["Next.js", "MongoDB", "Stripe", "SSR"]
          }
        ]
      }
    },
    wordpress: {
      title: "WordPress Creations",
      subtitle: "Custom design and high performance.",
      visitButton: "Visit site",
      items: [
        { titre: "Merkat Déco", description: "E-commerce specialized in decoration with polished UX.", url: "https://merkatdeco.com/" },
        { titre: "Hera Labs", description: "Sales of luxury custom 3D-printed night lights.", url: "https://heralabs.tn/" },
        { titre: "Webdo", description: "Tunisian news portal optimized for high traffic.", url: "https://www.webdo.tn/fr/" }
      ]
    },
    about: {
      title: "About Me",
      content: [
        "Fullstack Java & AI Engineer, I design and deploy robust, scalable web applications leveraging the Java ecosystem (Spring Boot, Spring Security, Spring Data JPA, Hibernate) alongside modern frontend frameworks like Angular and React.",
        "Specialized in Microservices architectures and secure RESTful APIs, I integrate Artificial Intelligence solutions (NLP, RAG, Machine Learning) directly coupled to the Java backend to create high-value products.",
        "NVIDIA-certified (AI for Predictive Maintenance) and ISC2-certified (Cybersecurity), I leverage DevOps practices (Docker, AWS, CI/CD) and Agile/Scrum methodologies to deliver scalable, secure, and value-driven solutions."
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: {
        java: "Java Ecosystem",
        frontend: "Frontend",
        backend: "Backend",
        db: "Databases",
        mobile: "Mobile",
        tools: "Fundamentals & Tools"
      }
    }
  }
};