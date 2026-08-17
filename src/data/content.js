/* ============================================================
   DATA
   ============================================================ */

export const NAV = [
  { label: "Profil", href: "#profil" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projets" },
  { label: "Approche", href: "#approche" },
   { label: "Sites en ligne", href: "#sites" },
  { label: "Contact", href: "#contact" },
];

export const LIVE_SITES = [
  {
    id: "hera-labs",
    name: "Hera Labs",
    tagline: "Lampes PLA imprimées en 3D",
    desc: "Boutique en ligne dédiée à des luminaires imprimés en 3D, minimalistes et éco-responsables — du concept à la commande.",
    url: "https://heralabs.tn/",
    domain: "heralabs.tn",
    accent: "#F5C518",
    icon: "lightbulb",
    tags: ["E-commerce", "Next.js", "Design produit"],
    status: "live",
  },
  {
    id: "vellure-store",
    name: "Vellure Store",
    tagline: "Prêt-à-porter féminin & burkinis",
    desc: "Plateforme e-commerce pour une marque de mode pudique — catalogue, panier et paiement pensés pour la clientèle tunisienne.",
    url: "https://www.vellure-store.tn/",
    domain: "vellure-store.tn",
    accent: "#E8A0BF",
    icon: "shirt",
    tags: ["E-commerce", "React", "UI/UX"],
    status: "live",
  },
  {
    id: "data-extraction",
    name: "Extraction Automatisée",
    tagline: "Pipeline IA de traitement documentaire",
    desc: "Système d'extraction de données par IA (LayoutLMv3) pour automatiser la saisie de factures — projet interne, accès restreint.",
    url: null,
    domain: "private · accès sur demande",
    accent: "#8B5CF6",
    icon: "database",
    tags: ["IA", "Python", "LayoutLMv3"],
    status: "private",
  },
];

export const SERVICES = [
  {
    tag: "01",
    accent: "#F5C518",
    title: "Frontend Engineering",
    desc: "Des interfaces réactives, accessibles et pensées pour l'utilisateur final, du prototype au produit livré.",
    items: ["React & Next.js", "Angular", "TypeScript", "Redux / RxJS"],
  },
  {
    tag: "02",
    accent: "#FF5A36",
    title: "Backend & APIs",
    desc: "Des architectures robustes, sécurisées et documentées, prêtes à encaisser la charge en production.",
    items: ["Node.js / Express", "Java Spring Boot", "Laravel / PHP", "REST, JWT, Swagger"],
  },
  {
    tag: "03",
    accent: "#8B5CF6",
    title: "IA & Data",
    desc: "De la donnée brute au modèle déployé : NLP, RAG, LLMs et pipelines de machine learning en production.",
    items: ["Python & ML", "NLP / RAG", "LangChain", "LayoutLMv3"],
  },
  {
    tag: "04",
    accent: "#E8E6DF",
    title: "DevOps & Cloud",
    desc: "Des livraisons continues, conteneurisées et monitorées, pour que chaque déploiement soit un non-événement.",
    items: ["Docker", "AWS", "CI/CD (GitHub Actions)", "Git / GitLab"],
  },
];

export const STACK = [
  "React", "Angular", "Node.js", "TypeScript",
  "Python", "Laravel", "Next.js", "MongoDB",
  "PostgreSQL", "Docker", "AWS", "LangChain",
];

export const EXPERIENCE = {
  hash: "a3f9c1e",
  role: "Développeur Full Stack JS & IA",
  company: "Smart Conseil",
  location: "Tunis · Ariana",
  period: "Juillet 2025 — Présent",
  bullets: [
    "Fonctionnalités modernes JavaScript ES6+ (destructuring, async/await, modules ESM) pour un code maintenable et performant.",
    "Conception d'un module de Machine Learning identifiant de façon proactive les contenus et comportements à risque dans les communications signalées.",
    "Développement d'une plateforme interne de lutte contre le harcèlement scolaire (jQuery, Node.js).",
    "Cycle Agile Scrum : tickets Redmine, versioning Git, livraisons itératives.",
    "APIs RESTful Node.js/Express avec un temps de réponse moyen inférieur à 200 ms.",
  ],
};

export const PROJECTS = [
  {
    id: "01",
    title: "Extraction automatisée de factures",
    client: "SEE Engineering — Projet de Fin d'Études",
    accent: "#F5C518",
    stack: ["MERN", "Python", "LayoutLMv3", "Docker", "AWS"],
    desc: "Pipeline d'extraction de données automatisé à partir d'un modèle LayoutLMv3 affiné, déployé en micro-service sur AWS.",
    metrics: [
      { value: "−74%", label: "temps de saisie manuelle" },
      { value: "78%", label: "précision clé-valeur" },
    ],
  },
  {
    id: "02",
    title: "Suivi des patients Alzheimer",
    client: "Proxym",
    accent: "#FF5A36",
    stack: ["Flutter", "WebSocket"],
    desc: "Application mobile de géolocalisation temps réel pour les aidants, avec géorepérage (geo-fencing) et historique de localisation.",
    metrics: [
      { value: "<500ms", label: "latence du flux temps réel" },
      { value: "5+", label: "fonctionnalités clés" },
    ],
  },
  {
    id: "03",
    title: "Plateforme d'offres d'emploi & stages",
    client: "Innovibe",
    accent: "#8B5CF6",
    stack: ["React", "Express", "Microservices", "Redux"],
    desc: "Plateforme full-stack multi-utilisateurs, architecture microservices, tableaux de bord distincts candidats / recruteurs.",
    metrics: [
      { value: "2", label: "espaces utilisateurs sécurisés" },
      { value: "REST", label: "API + Context API + Axios" },
    ],
  },
  {
    id: "04",
    title: "Meeting Intelligence",
    client: "Projet académique",
    accent: "#E8E6DF",
    stack: ["Angular", "Laravel", "RAG", "Whisper", "LangChain"],
    desc: "Transcription automatique des réunions (OpenAI-Whisper) et interrogation du contenu via une IA conversationnelle RAG.",
    metrics: [
      { value: "Speech-to-Text", label: "transcription auto" },
      { value: "RAG", label: "interface conversationnelle" },
    ],
  },
  {
    id: "05",
    title: "Analyse intelligente de feedback",
    client: "Projet académique",
    accent: "#F5C518",
    stack: ["React", "Node.js", "NLP", "Docker"],
    desc: "Micro-service Python d'analyse de sentiment consommé par un dashboard React, déploiement Docker orchestré sur AWS via CI/CD.",
    metrics: [
      { value: "92%", label: "précision de classification" },
      { value: "CI/CD", label: "GitHub Actions" },
    ],
  },
  {
    id: "06",
    title: "Plateforme de recrutement SaaS",
    client: "Leoni",
    accent: "#FF5A36",
    stack: ["Angular", "Java", "Spring Boot", "Express"],
    desc: "Architecture microservices : API REST sécurisée en Java/Spring Boot, BFF en Node.js/Express, interface Angular.",
    metrics: [
      { value: "BFF", label: "Backend For Frontend" },
      { value: "2", label: "tableaux de bord" },
    ],
  },
];

export const APPROACH = [
  {
    color: "#F5C518",
    title: "Formé sur le terrain,\npas seulement sur les bancs.",
    text:
      "Ingénieur en Informatique Appliquée (Systèmes Distribués) de l'ENISo, j'ai passé mes années d'école à construire, casser et reconstruire — au Club Robotique et à la tête du Club Informatique en tant que Vice-Président.",
  },
  {
    color: "#8B5CF6",
    title: "De la donnée brute\nau modèle en production.",
    text:
      "Certifié AI Engineer chez Nvidia, je ne m'arrête pas au notebook. LayoutLMv3, NLP, RAG : mes modèles finissent en micro-service, conteneurisés, avec un vrai taux de précision mesuré en conditions réelles.",
  },
  {
    color: "#FF5A36",
    title: "Un ingénieur\nqui vulgarise.",
    text:
      "Formateur dans l'âme, j'ai accompagné mes pairs durant tout mon parcours académique et associatif. Je préfère un schéma clair à un jargon impressionnant — pour l'équipe comme pour le client.",
  },
];

export const CERTS = [
  "Applications of AI for Predictive Maintenance — NVIDIA",
  "Nvidia-Certified Professional (AI Engineering)",
  "ISC2 Cybersecurity Certification",
  "Fondamentaux de l'Industrie 4.0",
];
