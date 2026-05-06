"use client";

import ProjectSection from "@/components/sections/projects/ProjectSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectsPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Animasi Label
    tl.from(".intro-text", {
      opacity: 0,
      x: -20,
      duration: 0.8,
      ease: "power2.out",
    })
    // Animasi Judul Utama (Opsional, biar lebih greget)
    .from(".page-title", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
    
  }, { scope: container });

  return (
    <main ref={container} className="relative min-h-screen bg-black overflow-hidden selection:bg-sky-500/30">
      {/* Background Ornaments ala Satria Bahari */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 pt-32 pb-4 px-6 max-w-6xl mx-auto">
        <div className="intro-text">
          <span className="text-sky-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            Portfolio_Archive
          </span>
        </div>
        <h1 className="page-title text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          Projects<span className="text-sky-500">.</span>
        </h1>
      </div>

      {/* The Projects Bento Grid */}
      <div className="relative z-10">
        <ProjectSection />
      </div>
      
      {/* Dekorasi Tambahan: Noise Texture (Opsional untuk vibe Satria Bahari) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[99] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
