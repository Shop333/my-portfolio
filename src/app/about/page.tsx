"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import AboutIdentity from "@/components/sections/about/AboutIdentity";
import Experience from "@/components/sections/about/Experience";
import Achievements from "@/components/sections/about/Achievements";
import Academy from "@/components/sections/about/Academy";
import ResumeDownload from "@/components/sections/about/ResumeDownload";

export default function AboutPage() {
  
  useEffect(() => {
    // Memastikan koordinat GSAP dihitung ulang setelah render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#030303] selection:bg-sky-500/30">
      {/* Container utama */}
      <div className="relative z-10 flex flex-col pb-20 md:pb-0">
        <AboutIdentity />
        <Experience />
        <Achievements />
        <Academy />
        <ResumeDownload />
      </div>

      {/* Decorative Global Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.03),transparent)] pointer-events-none -z-10" />
    </main>
  );
}
