"use client";

import { useState, useEffect } from "react";
import ProjectBento from "@/components/sections/ProjectBento";
import AboutBento from "@/components/sections/AboutBento";
import SkillsBento from "@/components/sections/SkillsBento";
import ChatBento from "@/components/sections/ChatBento";
import AchievementBento from "@/components/sections/AchievementBento";
import ServicesBento from "@/components/sections/ServicesBento";

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Berganti setiap 3 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 pb-20">
      {/* Hero Header Section */}
      <header className="space-y-2 py-6">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          Ahlul Firdaus
        </h1>
        <div className="flex items-center gap-2 h-8">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <p className="text-lg md:text-xl font-mono text-zinc-400 transition-all duration-500 ease-in-out">
            {roles[roleIndex]}
          </p>
        </div>
      </header>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 md:p-0 auto-rows-fr">
        {/* Row 1 */}
        <div className="md:col-span-2 lg:col-span-3 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6 hover:bg-zinc-900/50 transition-colors duration-500">
          <ProjectBento />
        </div>
        <div className="md:col-span-2 lg:col-span-1 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6">
          <AboutBento />
        </div>
        <div className="md:col-span-4 lg:col-span-2 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6">
          <SkillsBento />
        </div>

        {/* Row 2 */}
        <div className="md:col-span-2 lg:col-span-2 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6">
          <AchievementBento />
        </div>
        <div className="md:col-span-2 lg:col-span-2 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6">
          <ChatBento />
        </div>
        <div className="md:col-span-4 lg:col-span-2 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-6">
          <ServicesBento />
        </div>
      </div>
    </div>
  );
}
