import React from "react";
import { Circle } from "lucide-react";
import { Reveal } from "./Reveal";
import { CERTS } from "../data/content";

/* ============================================================
   CERTIFICATIONS
   ============================================================ */

export function Certs() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-white/10">
      <div className="w-full">
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

export default Certs;
