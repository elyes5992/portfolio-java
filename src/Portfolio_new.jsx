import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Terminal,
  ChevronDown,
  Menu,
  X,
  Circle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ============================================================
   DATA
   ============================================================ */

const NAV = [
  { label: "Profil", href: "#profil" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projets" },
  { label: "Approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
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

const STACK = [
  "React", "Angular", "Node.js", "TypeScript",
  "Python", "Laravel", "Next.js", "MongoDB",
  "PostgreSQL", "Docker", "AWS", "LangChain",
];

const EXPERIENCE = {
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

const PROJECTS = [
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

const APPROACH = [
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

const CERTS = [
  "Applications of AI for Predictive Maintenance — NVIDIA",
  "Nvidia-Certified Professional (AI Engineering)",
  "ISC2 Cybersecurity Certification",
  "Fondamentaux de l'Industrie 4.0",
];

/* ============================================================
   TERMINAL TYPE EFFECT
   ============================================================ */

function TypedLine({ text, delay = 0, speed = 32, className = "", onDone }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone && onDone();
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <span className={className}>{shown}</span>;
}

/* ============================================================
   REVEAL WRAPPER
   ============================================================ */

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   NAV
   ============================================================ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-black/60 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-tight text-[#F2F0EA] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C518] inline-block" />
            eb<span className="text-[#6B6B6E]">.dev</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] font-mono uppercase tracking-wider text-[#B8B6AE] hover:text-[#F2F0EA] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider border border-white/20 rounded-full px-4 py-2 text-[#F2F0EA] hover:bg-[#F2F0EA] hover:text-black transition-colors"
          >
            Me contacter <ArrowUpRight size={14} />
          </a>

          <button className="lg:hidden text-[#F2F0EA]" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-[#F2F0EA]" aria-label="Fermer le menu">
                <X size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-6 px-10">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-4xl font-medium text-[#F2F0EA]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {n.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero() {
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(#F2F0EA 1px, transparent 1px), linear-gradient(90deg, #F2F0EA 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      <div className="absolute top-1/3 right-[8%] w-[420px] h-[420px] rounded-full blur-[140px] opacity-25 -z-10" style={{ background: "#8B5CF6" }} />
      <div className="absolute bottom-0 left-[10%] w-[320px] h-[320px] rounded-full blur-[140px] opacity-20 -z-10" style={{ background: "#F5C518" }} />

      <div className="max-w-[1400px] mx-auto w-full">
        <div className="font-mono text-[13px] md:text-sm text-[#8B5CF6] mb-8 flex items-center gap-2">
          <Terminal size={15} />
          <TypedLine text="$ whoami" speed={55} onDone={() => setLine2(true)} />
        </div>

        <h1
          className="text-[13vw] md:text-[7.2vw] leading-[0.92] tracking-[-0.03em] text-[#F2F0EA] font-medium"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Boughrara
          <br />
          Elyes<span className="text-[#F5C518]">.</span>
        </h1>

        {line2 && (
          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-sm md:text-base text-[#B8B6AE]">
              <TypedLine
                text="> Fullstack JS/Python & AI Engineer — certifié Nvidia."
                speed={16}
                onDone={() => setLine3(true)}
              />
            </p>
          </div>
        )}

        {line3 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-xl text-[15px] md:text-base text-[#8A887F] leading-relaxed"
          >
            Je conçois des produits web modernes — React, Angular, Node.js — et j'y intègre de l'intelligence
            artificielle qui tient debout en production : Machine Learning, NLP, RAG, LLMs.
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: line3 ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projets"
            className="inline-flex items-center gap-2 bg-[#F2F0EA] text-black text-sm font-mono uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[#F5C518] transition-colors"
          >
            Voir les projets <ArrowUpRight size={16} />
          </a>
          <a
            href="mailto:elyes.boughrara50@gmail.com"
            className="inline-flex items-center gap-2 border border-white/20 text-[#F2F0EA] text-sm font-mono uppercase tracking-wider rounded-full px-6 py-3 hover:border-white/50 transition-colors"
          >
            elyes.boughrara50@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#6B6B6E]"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

/* ============================================================
   SERVICES / EXPERTISE
   ============================================================ */

function Services() {
  return (
    <section id="expertise" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <h2
              className="text-4xl md:text-6xl leading-[0.98] text-[#F2F0EA] max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quatre disciplines,
              <br />
              un seul produit fini.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E] max-w-xs">
              Du composant React au modèle déployé — je couvre la chaîne complète.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={i * 0.08}>
              <div className="bg-[#0B0B0C] h-full p-7 flex flex-col gap-6 group hover:bg-[#121213] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#6B6B6E]">{s.tag}</span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.accent }} />
                </div>
                <div>
                  <h3 className="text-xl text-[#F2F0EA] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#8A887F] leading-relaxed">{s.desc}</p>
                </div>
                <ul className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="font-mono text-[12px] text-[#B8B6AE] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full" style={{ background: s.accent }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STACK MARQUEE
   ============================================================ */

function Stack() {
  const row = [...STACK, ...STACK];
  return (
    <section id="stack" className="py-24 md:py-28 border-t border-white/10 overflow-hidden">
      <Reveal className="px-6 md:px-10 max-w-[1400px] mx-auto mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E]">Stack technique</p>
      </Reveal>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10" />
        <motion.div
          className="flex gap-6 md:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
        >
          {row.map((t, i) => (
            <div
              key={t + i}
              className="border border-white/10 rounded-2xl px-8 md:px-12 py-8 md:py-10 text-2xl md:text-4xl text-[#F2F0EA] whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE — style "git log"
   ============================================================ */

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="mb-14">
          <h2 className="text-4xl md:text-6xl text-[#F2F0EA]" style={{ fontFamily: "var(--font-display)" }}>
            Expérience
          </h2>
        </Reveal>

        <Reveal>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#0E0E0F]">
            <div className="flex flex-wrap items-center gap-3 px-6 md:px-8 py-5 border-b border-white/10 font-mono text-xs text-[#6B6B6E]">
              <span className="text-[#F5C518]">●</span>
              commit <span className="text-[#B8B6AE]">{EXPERIENCE.hash}</span>
              <span className="hidden md:inline">—</span>
              <span>{EXPERIENCE.period}</span>
            </div>

            <div className="px-6 md:px-8 py-8 grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl text-[#F2F0EA] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {EXPERIENCE.role}
                </h3>
                <p className="font-mono text-sm text-[#8B5CF6]">{EXPERIENCE.company}</p>
                <p className="font-mono text-xs text-[#6B6B6E] mt-1">{EXPERIENCE.location}</p>
              </div>
              <ul className="flex flex-col gap-4">
                {EXPERIENCE.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#B8B6AE] leading-relaxed">
                    <span className="font-mono text-[#F5C518] shrink-0">+</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="border border-white/10 rounded-2xl px-6 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4 bg-[#0E0E0F]">
            <div>
              <p className="font-mono text-xs text-[#6B6B6E] mb-1">Formation</p>
              <p className="text-[#F2F0EA]">
                Diplôme d'Ingénieur en Informatique Appliquée — Systèmes Distribués
              </p>
              <p className="font-mono text-xs text-[#8A887F] mt-1">
                École Nationale d'Ingénieurs de Sousse (ENISo) · Juin 2025
              </p>
            </div>
            <span className="font-mono text-xs text-[#6B6B6E] whitespace-nowrap">Bac — Mention Bien (15.50)</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */

function ProjectCard({ p, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative border border-white/10 rounded-2xl p-7 md:p-8 h-full flex flex-col bg-[#0E0E0F] overflow-hidden transition-transform duration-500"
        style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)" }}
      >
        <div
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[80px] transition-opacity duration-500"
          style={{ background: p.accent, opacity: hovered ? 0.28 : 0.1 }}
        />
        <div className="relative flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-[#6B6B6E]">{p.id}</span>
          <ArrowUpRight
            size={16}
            className="text-[#6B6B6E] transition-transform duration-300"
            style={{ transform: hovered ? "translate(2px,-2px)" : "translate(0,0)" }}
          />
        </div>

        <h3 className="relative text-xl md:text-2xl text-[#F2F0EA] mb-1" style={{ fontFamily: "var(--font-display)" }}>
          {p.title}
        </h3>
        <p className="relative font-mono text-xs mb-4" style={{ color: p.accent }}>
          {p.client}
        </p>
        <p className="relative text-sm text-[#8A887F] leading-relaxed mb-6">{p.desc}</p>

        <div className="relative flex flex-wrap gap-2 mb-6">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-[#B8B6AE] border border-white/10 rounded-full px-3 py-1">
              {s}
            </span>
          ))}
        </div>

        <div className="relative mt-auto pt-5 border-t border-white/10 flex gap-8">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-lg md:text-xl text-[#F2F0EA]" style={{ fontFamily: "var(--font-display)" }}>
                {m.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wide text-[#6B6B6E]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projets" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="mb-14 flex items-end justify-between flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl text-[#F2F0EA]" style={{ fontFamily: "var(--font-display)" }}>
            Projets sélectionnés
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E] max-w-xs">
            Stages, PFE et projets académiques — 2023 à 2025.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APPROACH — scrollytelling coloré
   ============================================================ */

function Approach() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const bg = useTransform(
    scrollYProgress,
    [0, 0.33, 0.34, 0.66, 0.67, 1],
    ["#171305", "#171305", "#150F22", "#150F22", "#1E0F0A", "#1E0F0A"]
  );

  return (
    <section id="approche" ref={ref} className="relative" style={{ height: `${APPROACH.length * 100}vh` }}>
      <motion.div style={{ background: bg }} className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {APPROACH.map((a, i) => {
          const start = i / APPROACH.length;
          const end = (i + 1) / APPROACH.length;
          const mid = (start + end) / 2;
          return (
            <ApproachSlide key={a.title} data={a} progress={scrollYProgress} start={start} mid={mid} end={end} index={i} />
          );
        })}
        <div className="absolute bottom-10 left-6 md:left-10 font-mono text-[11px] uppercase tracking-widest text-white/30">
          Approche
        </div>
      </motion.div>
    </section>
  );
}

function ApproachSlide({ data, progress, start, mid, end, index }) {
  const opacity = useTransform(progress, [start, start + 0.06, end - 0.06, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [40, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <span className="font-mono text-xs text-white/40 mb-6 block">0{index + 1} / 0{APPROACH.length}</span>
        <h3
          className="text-4xl md:text-6xl leading-[1.05] mb-8 max-w-3xl whitespace-pre-line"
          style={{ fontFamily: "var(--font-display)", color: data.color }}
        >
          {data.title}
        </h3>
        <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">{data.text}</p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */

function Certs() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E] mb-10">Certifications</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {CERTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="bg-[#0B0B0C] px-7 py-6 flex items-center gap-4 h-full">
                <Circle size={7} className="fill-[#F5C518] text-[#F5C518] shrink-0" />
                <p className="text-sm text-[#D9D7CE]">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT — mad-lib
   ============================================================ */

function Contact() {
  const [need, setNeed] = useState("un poste de développeur fullstack");

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.12]" style={{ background: "#8B5CF6" }} />
      <div className="max-w-[1400px] mx-auto relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E] mb-8">Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);
              const name = data.get("name") || "quelqu'un";
              const company = data.get("company") || "une entreprise";
              const email = data.get("email") || "";
              const subject = encodeURIComponent(`Opportunité — ${need}`);
              const body = encodeURIComponent(
                `Bonjour Elyes,\n\nJe m'appelle ${name}, je travaille pour ${company} et j'aimerais échanger au sujet de ${need}.\n\nVous pouvez me joindre à ${email}.`
              );
              window.location.href = `mailto:elyes.boughrara50@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="text-3xl sm:text-4xl md:text-6xl leading-[1.35] md:leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <p className="text-[#F2F0EA]">
              Bonjour, je m'appelle{" "}
              <input
                name="name"
                required
                placeholder="votre nom"
                className="bg-transparent border-b-2 border-white/20 focus:border-[#F5C518] outline-none w-[7ch] sm:w-[9ch] placeholder:text-white/20 text-[#F5C518]"
              />
              . Je travaille pour{" "}
              <input
                name="company"
                required
                placeholder="votre société"
                className="bg-transparent border-b-2 border-white/20 focus:border-[#8B5CF6] outline-none w-[7ch] sm:w-[10ch] placeholder:text-white/20 text-[#8B5CF6]"
              />{" "}
              et j'aimerais discuter de{" "}
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="bg-transparent border-b-2 border-white/20 focus:border-[#FF5A36] outline-none text-[#FF5A36] appearance-none"
              >
                <option className="bg-[#0B0B0C]" value="un poste de développeur fullstack">un poste fullstack</option>
                <option className="bg-[#0B0B0C]" value="un projet d'IA / ML">un projet d'IA</option>
                <option className="bg-[#0B0B0C]" value="une mission freelance">une mission freelance</option>
                <option className="bg-[#0B0B0C]" value="autre chose">autre chose</option>
              </select>
              . Vous pouvez me joindre à{" "}
              <input
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className="bg-transparent border-b-2 border-white/20 focus:border-[#F2F0EA] outline-none w-[10ch] sm:w-[14ch] placeholder:text-white/20 text-[#F2F0EA]"
              />
              .
            </p>

            <button
              type="submit"
              className="mt-12 inline-flex items-center gap-2 bg-[#F2F0EA] text-black text-sm font-mono uppercase tracking-wider rounded-full px-7 py-4 hover:bg-[#F5C518] transition-colors"
            >
              Envoyer <ArrowUpRight size={16} />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="mt-24 flex flex-wrap gap-x-16 gap-y-6 font-mono text-sm text-[#8A887F]">
          <div>
            <p className="text-[#6B6B6E] text-xs uppercase tracking-widest mb-2">Email</p>
            <a href="mailto:elyes.boughrara50@gmail.com" className="text-[#F2F0EA] hover:text-[#F5C518] transition-colors">
              elyes.boughrara50@gmail.com
            </a>
          </div>
          <div>
            <p className="text-[#6B6B6E] text-xs uppercase tracking-widest mb-2">Téléphone</p>
            <a href="tel:+21692523742" className="text-[#F2F0EA] hover:text-[#F5C518] transition-colors">
              +216 92 523 742
            </a>
          </div>
          <div>
            <p className="text-[#6B6B6E] text-xs uppercase tracking-widest mb-2">Localisation</p>
            <p className="text-[#F2F0EA]">Monastir, Tunisie</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#6B6B6E]">© 2026 Boughrara Elyes</p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/elyes-boughrara-10b8a0256"
            target="_blank"
            rel="noreferrer"
            className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
          <a href="mailto:elyes.boughrara50@gmail.com" className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors" aria-label="Email">
            <Mail size={17} />
          </a>
          <a href="#" className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors" aria-label="Github">
            <FaGithub size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   ROOT — SANS LERP SCROLL (natif)
   ============================================================ */

export default function Portfolio() {
  return (
    <div className="bg-[#0B0B0C] text-[#F2F0EA] relative w-full min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
        * { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
        h1, h2, h3, .font-display, button, select, input { font-family: var(--font-display); }
        .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace !important; }
      `}</style>

      <Nav />
      <Hero />
      <Services />
      <Stack />
      <Experience />
      <Projects />
      <Approach />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}