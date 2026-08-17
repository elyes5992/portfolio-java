import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "../data/content";

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

export function Projects() {
  return (
    <section id="projets" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="w-full">
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

export default Projects;
