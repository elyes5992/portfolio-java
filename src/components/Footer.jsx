import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ============================================================
   FOOTER
   ============================================================ */

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-white/10">
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#6B6B6E]">© 2026 Boughrara Elyes</p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/elyes-boughrara-10b8a0256"
            target="_blank"
            rel="noreferrer"
            className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
          <a href="mailto:elyes.boughrara50@gmail.com" className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors" aria-label="Email">
            <Mail size={17} />
          </a>
          <a href="#" className="text-[#8A887F] hover:text-[#F2F0EA] transition-colors" aria-label="Github">
            <FaGithub size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
