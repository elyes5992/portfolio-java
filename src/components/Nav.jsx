import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "../data/content";
import { OpenToWorkBadge } from "./Hero";

/* ============================================================
   NAV
   ============================================================ */

export function Nav() {
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
        <div className="w-full px-6 md:px-10 h-[76px] flex items-center justify-between">
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
               <OpenToWorkBadge />
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

export default Nav;
