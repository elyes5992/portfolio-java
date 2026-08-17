import React from "react";
import { Reveal } from "./Reveal";
import { EXPERIENCE } from "../data/content";

/* ============================================================
   EXPERIENCE — style "git log"
   ============================================================ */

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="w-full">
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

export default Experience;
