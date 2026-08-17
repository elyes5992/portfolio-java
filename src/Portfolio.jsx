import React from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Approach } from "./components/Approach";
import { Certs } from "./components/Certs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LiveSites } from "./components/LiveSites";

/* ============================================================
   ROOT — full width edge-to-edge, sans lerp scroll (natif)
   ============================================================ */

export default function Portfolio() {
  return (
    <div className="bg-[#0B0B0C] text-[#F2F0EA] relative w-full min-h-screen">
      <style>{`
  @font-face {
    font-family: 'GT Walsheim';
    src: url('/fonts/GT-Walsheim-Regular-Trial-BF651b7fc71a47d.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'GT Walsheim';
    src: url('/fonts/GT-Walsheim-Medium-Trial-BF651b7fc728fb3.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'GT Walsheim';
    src: url('/fonts/GT-Walsheim-Bold-Trial-BF651b7fc737c57.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  :root { --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
  html, body { overflow-x: hidden; }
  html, body, #root { width: 100%; margin: 0; padding: 0; }
  * { font-family: 'GT Walsheim', ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; }
  h1, h2, h3, .font-display, button, select, input { font-family: var(--font-display); }
  .font-mono { font-family: 'JetBrains Mono', ui-monospace, monospace !important; }
`}</style>

      <Nav />
      <Hero />
      <Services />
      <Stack />
      <Experience />
      <Projects />
      <Approach />
      <LiveSites />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}