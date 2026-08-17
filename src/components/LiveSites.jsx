import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Globe, Lock, Lightbulb, Shirt, Database } from "lucide-react";
import { Reveal } from "./Reveal";
import { LIVE_SITES } from "../data/content";

const ICONS = { lightbulb: Lightbulb, shirt: Shirt, database: Database };

/* ============================================================
   SITE CARD — browser mockup with mouse-tilt
   ============================================================ */

function SiteCard({ site, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Icon = ICONS[site.icon] ?? Globe;
  const isLive = site.status === "live";

  const cardInner = (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative border border-white/10 rounded-2xl overflow-hidden bg-[#0E0E0F] h-full flex flex-col cursor-pointer"
    >
      {/* ambient glow on hover */}
      <div
        className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-25 blur-[90px] transition-opacity duration-700"
        style={{ background: site.accent }}
      />

      {/* browser chrome */}
      <div className="relative flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 flex items-center gap-1.5 font-mono text-[11px] text-[#6B6B6E] bg-black/30 rounded-full px-3 py-1 truncate">
          {isLive ? <Globe size={11} className="shrink-0" /> : <Lock size={11} className="shrink-0" />}
          <span className="truncate">{site.domain}</span>
        </div>
      </div>

      {/* visual */}
      <div
        className="relative h-40 md:h-48 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${site.accent}22, transparent 70%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#F2F0EA 1px, transparent 1px), linear-gradient(90deg, #F2F0EA 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
          style={{ background: `${site.accent}1A`, border: `1px solid ${site.accent}55` }}
        >
          <Icon size={28} style={{ color: site.accent }} />
        </motion.div>

        <span
          className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide"
          style={{ color: isLive ? "#4ADE80" : "#F5C518" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: isLive ? "#4ADE80" : "#F5C518" }}
            />
            <span
              className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ background: isLive ? "#4ADE80" : "#F5C518" }}
            />
          </span>
          {isLive ? "En ligne" : "En développement"}
        </span>
      </div>

      {/* content */}
      <div className="relative p-6 md:p-7 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl text-[#F2F0EA] mb-1" style={{ fontFamily: "var(--font-display)" }}>
          {site.name}
        </h3>
        <p className="font-mono text-xs mb-3" style={{ color: site.accent }}>
          {site.tagline}
        </p>
        <p className="text-sm text-[#8A887F] leading-relaxed mb-5">{site.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {site.tags.map((t) => (
            <span key={t} className="font-mono text-[11px] text-[#B8B6AE] border border-white/10 rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
          <span className="text-[#B8B6AE] group-hover:text-[#F2F0EA] transition-colors">
            {isLive ? "Visiter le site" : "Demander une démo"}
          </span>
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: site.accent }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <Reveal delay={(index % 3) * 0.08}>
      {isLive ? (
        <a href={site.url} target="_blank" rel="noreferrer" className="block h-full">
          {cardInner}
        </a>
      ) : (
        <a href="#contact" className="block h-full">
          {cardInner}
        </a>
      )}
    </Reveal>
  );
}

/* ============================================================
   LIVE SITES SECTION
   ============================================================ */

export function LiveSites() {
  return (
    <section id="sites" className="px-6 md:px-10 py-28 md:py-36 border-t border-white/10">
      <div className="w-full">
        <Reveal className="mb-14 flex items-end justify-between flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl text-[#F2F0EA]" style={{ fontFamily: "var(--font-display)" }}>
            Sites déployés
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6B6B6E] max-w-xs">
            Produits conçus, développés et mis en ligne de bout en bout.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {LIVE_SITES.map((s, i) => (
            <SiteCard key={s.id} site={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveSites;