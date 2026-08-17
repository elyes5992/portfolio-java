import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowUpRight, ChevronDown } from "lucide-react";
import { TypedLine } from "./TypedLine";

/* ============================================================
   COMPOSANT : OPEN TO WORK TOOLTIP (À utiliser dans Nav.jsx)
   ============================================================ */
export function OpenToWorkBadge() {
  return (
    <div className="group relative flex items-center gap-3 bg-[#1A1A1C] border border-[#333] px-4 py-2.5 rounded-full cursor-pointer hover:bg-[#222] transition-all duration-300 shadow-lg">
      <div className="relative flex h-3 w-3 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
      <span className="text-[12px] font-mono text-[#F2F0EA] uppercase tracking-widest font-medium mt-[1px]">
        Open to work
      </span>

      <div className="absolute top-full right-0 mt-4 w-72 p-5 bg-[#121212]/95 backdrop-blur-md border border-[#333] rounded-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 pointer-events-none transition-all duration-400 z-[100] shadow-2xl">
        <h4 className="text-[15px] text-[#F2F0EA] font-semibold mb-2">Disponible pour de nouveaux défis</h4>
        <p className="text-[13px] text-[#8A887F] leading-relaxed">
          Ouvert aux missions freelance ou opportunités à temps plein. Discutons de vos besoins en développement Web & IA.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   COMPOSANT : TEXT SCRAMBLE EFFECT
   ============================================================ */
const ScrambleBadge = ({ word, trigger = false, delay = 0, onDone }) => {
  const [display, setDisplay] = useState(word.replace(/./g, "\u00A0"));
  const [isActive, setIsActive] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      setIsActive(true);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#";
      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const lockedCount = Math.floor(frame / 3);
        let currentText = "";

        for (let i = 0; i < word.length; i++) {
          if (i < lockedCount) {
            currentText += word[i];
          } else {
            currentText += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setDisplay(currentText);

        if (lockedCount >= word.length) {
          clearInterval(interval);
          setIsActive(false);
          setIsDone(true);
          setDisplay(word);
          if (onDone) onDone();
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [trigger, word, delay, onDone]);

  if (!trigger) {
    return <span className="opacity-0">{word}</span>;
  }

  return (
    <span
      className={`inline-block px-3 py-1 mx-1 rounded-xl transition-all duration-500 ${
        isActive || isDone 
          ? "bg-[#252527] text-[#F2F0EA] shadow-lg" 
          : "bg-transparent text-transparent"
      }`}
    >
      <span className={isActive ? "font-mono tracking-tighter text-[#A09E96]" : "font-normal"}>
        {display}
      </span>
    </span>
  );
};

/* ============================================================
   HERO
   ============================================================ */
export function Hero() {
  const [step, setStep] = useState(0);

  return (
    // J'ai réduit le padding de px-12 à px-4 md:px-8 pour que le contenu touche quasiment les bords
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-center px-4 md:px-8 pt-32 pb-24 overflow-hidden">
      
      <div className="absolute inset-0 -z-10 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(#F2F0EA 1px, transparent 1px), linear-gradient(90deg, #F2F0EA 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 -z-10" style={{ background: "#8B5CF6" }} />
      <div className="absolute bottom-10 left-[5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 -z-10" style={{ background: "#F5C518" }} />

      {/* Suppression du max-w-[1600px] et mx-auto pour un effet pleine largeur total */}
      <div className="w-full">
        
        <div className="font-mono text-[14px] md:text-base text-[#8B5CF6] mb-8 flex items-center gap-3">
          <Terminal size={18} />
          <TypedLine text="$ whoami" speed={55} onDone={() => setStep(1)} />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setStep(2)}
          className="text-[13vw] md:text-[8.5vw] leading-[0.9] tracking-[-0.03em] text-[#F2F0EA] font-medium mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Boughrara Elyes<span className="text-[#F5C518]">.</span>
        </motion.h1>

        <div className="h-6 mb-12">
          {step >= 2 && (
            <p className="font-mono text-base md:text-lg text-[#8B5CF6]">
              <TypedLine
                text="> Fullstack & AI Engineer — certifié Nvidia."
                speed={15}
                onDone={() => setStep(3)}
              />
            </p>
          )}
        </div>

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <p 
              // Augmentation à text-[4.8vw] pour prendre l'écran. Changement vers font-normal
              className="text-[7.5vw] md:text-[4.4vw] leading-[1.25] font-normal tracking-[-0.01em] text-[#B8B6AE]"
              // C'est ici que l'on force GT Walsheim !
              style={{ fontFamily: "'GT Walsheim', sans-serif" }} 
            >
              Je conçois des produits web 
              <ScrambleBadge word="modernes" trigger={step >= 3} delay={200} /> 
              React, Angular, Node.js et j'y intègre de l'
              <ScrambleBadge word="intelligence artificielle" trigger={step >= 3} delay={1000} /> 
              qui tient debout en 
              <ScrambleBadge word="production" trigger={step >= 3} delay={1800} /> : 
              <span className="text-[#6B6B6E]"> Machine Learning, NLP, RAG, LLMs.</span>
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="mt-16 flex flex-wrap items-center gap-5"
            >
              <a
                href="#projets"
                className="inline-flex items-center gap-2 bg-[#F2F0EA] text-black text-[15px] font-mono uppercase tracking-wider rounded-full px-8 py-4 hover:bg-[#F5C518] transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Voir les projets <ArrowUpRight size={18} />
              </a>
              <a
                href="mailto:elyes.boughrara50@gmail.com"
                className="inline-flex items-center gap-2 border border-white/20 text-[#F2F0EA] text-[15px] font-mono uppercase tracking-wider rounded-full px-8 py-4 hover:border-white/50 hover:bg-white/5 transition-all active:scale-95"
              >
                elyes.boughrara50@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B6B6E]"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

export default Hero;