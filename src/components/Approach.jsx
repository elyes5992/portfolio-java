import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* ============================================================
   DONNÉES DU PORTFOLIO (Intégrées ici pour inclure le Backend)
   ============================================================ */
const MY_EXPERTISE = [
  {
    title: "Front-end\nModerne.",
    text: "Création d'interfaces fluides et ultra-réactives avec React, Angular et Node.js. Je traduis des designs complexes en une expérience utilisateur sans aucune friction.",
    color: "#F5C518" // Jaune
  },
  {
    title: "Intelligence\nArtificielle.",
    text: "Intégration de modèles de Machine Learning, NLP, et RAG directement en production. Je rends vos applications plus intelligentes, autonomes et capables d'exploiter les LLMs.",
    color: "#8B5CF6" // Violet
  },
  {
    title: "Logique\nBackend.", // LA NOUVELLE SLIDE BACKEND
    text: "Je construis le moteur sous le capot. Conception d'architectures robustes et développement d'APIs RESTful performantes avec PHP, Java et .NET. Une logique métier impénétrable, sécurisée et prête à scaler.",
    color: "#38BDF8" // Bleu clair/Cyan
  },
  {
    title: "Déploiement\n& Fiabilité.",
    text: "Des systèmes conçus pour tenir la charge. De la conception de l'architecture jusqu'au déploiement, je m'assure que le produit final est résilient et optimisé.",
    color: "#F97316" // Orange
  }
];

/* ============================================================
   APPROACH / EXPERTISE — scrollytelling coloré
   ============================================================ */

function ApproachSlide({ data, progress, start, mid, end, index }) {
  // Ajustement de l'opacité pour 4 slides (0.06 au lieu de 0.08 pour éviter les chevauchements)
  const opacity = useTransform(progress, [start, start + 0.06, end - 0.06, end], [0, 1, 1, 0]);
  
  // PARALLAXE
  const numY = useTransform(progress, [start, mid, end], [30, 0, -30]);
  const titleY = useTransform(progress, [start, mid, end], [80, 0, -80]);
  const titleScale = useTransform(progress, [start, mid, end], [0.9, 1, 0.95]);
  const textY = useTransform(progress, [start, mid, end], [140, 0, -140]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 w-full"
    >
      <div className="w-full flex flex-col h-full justify-center mt-12 md:mt-0">
        
        {/* Nouveau label : Expertise au lieu de Étape */}
        <motion.div style={{ y: numY }} className="mb-6 md:mb-10">
          <span className="font-mono text-sm md:text-base text-white/40 tracking-widest uppercase border border-white/10 px-4 py-2 rounded-full shadow-sm bg-white/[0.02] backdrop-blur-sm">
            Expertise 0{index + 1} / 0{MY_EXPERTISE.length}
          </span>
        </motion.div>

        {/* Titre Massive */}
        <motion.h3
          style={{ 
            y: titleY, 
            scale: titleScale,
            fontFamily: "var(--font-display)", 
            color: data.color 
          }}
          className="text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-[-0.03em] mb-8 w-full origin-left whitespace-pre-line font-medium"
        >
          {data.title}
        </motion.h3>

        {/* Texte */}
        <motion.div 
          style={{ y: textY }}
          className="md:w-2/3 md:ml-auto md:pr-12"
        >
          <p className="text-[20px] md:text-[32px] text-white/70 leading-[1.4] font-light">
            {data.text}
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export function Approach() {
  const sectionRef = useRef(null);
  const progress = useMotionValue(0);
  const [pinStyle, setPinStyle] = useState({ position: "absolute", top: 0, left: 0, right: 0 });

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinnableRange = el.offsetHeight - vh; 

      const p = pinnableRange > 0 ? Math.min(1, Math.max(0, -rect.top / pinnableRange)) : 0;
      progress.set(p);

      if (rect.top > 0) {
        setPinStyle({ position: "absolute", top: 0, left: 0, right: 0 });
      } else if (rect.bottom <= vh) {
        setPinStyle({ position: "absolute", bottom: 0, top: "auto", left: 0, right: 0 });
      } else {
        setPinStyle({ position: "fixed", top: 0, left: 0, right: 0 });
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [progress]);

  // Recalcul des couleurs d'arrière-plan pour 4 sections au lieu de 3
  // 0-25% : Noir/Jaune | 25-50% : Noir/Violet | 50-75% : Bleu Nuit (Backend) | 75-100% : Noir/Rouge
  const bg = useTransform(
    progress,
    [0, 0.25, 0.26, 0.50, 0.51, 0.75, 0.76, 1],
    ["#171305", "#171305", "#150F22", "#150F22", "#0A151E", "#0A151E", "#1E0F0A", "#1E0F0A"]
  );

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative"
      // On multiplie par le nouveau nombre de slides (4) pour la hauteur du scroll
      style={{ height: `${MY_EXPERTISE.length * 100}vh` }}
    >
      <motion.div
        style={{ background: bg, ...pinStyle }}
        className="h-screen w-full overflow-hidden flex items-center"
      >
        {MY_EXPERTISE.map((a, i) => {
          // Calcul dynamique des points de départ et de fin pour 4 slides
          const start = i / MY_EXPERTISE.length;
          const end = (i + 1) / MY_EXPERTISE.length;
          const mid = (start + end) / 2;
          return (
            <ApproachSlide key={a.title} data={a} progress={progress} start={start} mid={mid} end={end} index={i} />
          );
        })}
        
        {/* Nouveau label en bas à gauche */}
        <div className="absolute bottom-8 left-4 md:left-8 font-mono text-[12px] uppercase tracking-widest text-white/40 flex items-center gap-3">
          <span className="w-10 h-[1px] bg-white/30 block"></span>
          Savoir-faire technique
        </div>
      </motion.div>
    </section>
  );
}

export default Approach;