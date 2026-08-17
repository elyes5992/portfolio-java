import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

/* ============================================================
   CONTACT — mad-lib
   ============================================================ */

export function Contact() {
  const [need, setNeed] = useState("un poste de développeur fullstack");

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.12]" style={{ background: "#8B5CF6" }} />
      <div className="w-full relative">
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

export default Contact;
