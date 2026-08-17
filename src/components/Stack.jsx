import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { STACK } from "../data/content";

/* ============================================================
   STACK MARQUEE
   ============================================================ */

export function Stack() {
  const row = [...STACK, ...STACK];
  return (
    <section id="stack" className="py-24 md:py-28 border-t border-white/10 overflow-hidden">
      <Reveal className="px-6 md:px-10 w-full mb-12">
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

export default Stack;
