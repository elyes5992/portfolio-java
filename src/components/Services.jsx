import React from "react";
import { Reveal } from "./Reveal";
import { SERVICES } from "../data/content";

/* ============================================================
   SERVICES / EXPERTISE
   ============================================================ */

export function Services() {
  return (
    <section id="expertise" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="w-full">
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

export default Services;
