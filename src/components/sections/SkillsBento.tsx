"use client";

import { LayoutGrid, Terminal } from "lucide-react";

export default function SkillsBento() {
  const skillList = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "Angular", icon: "angularjs" },
    { name: "Astro", icon: "astro" },
    { name: "Express", icon: "express" },
    { name: "Fastify", icon: "fastify" },
    { name: "NestJS", icon: "nestjs" },
    { name: "PHP", icon: "php" },
    { name: "Laravel", icon: "laravel" },
    { name: "Python", icon: "python" },
    { name: "Supabase", icon: "supabase" },
    { name: "C", icon: "c" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prisma", icon: "prisma" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Vercel", icon: "vercel" },
    { name: "VS Code", icon: "vscode" },
    { name: "Linux", icon: "linux" },
    { name: "Figma", icon: "figma" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "Dart", icon: "dart" },
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" }
  ];

  const aiTools = ["Claude AI", "Blackbox AI", "Gemini AI", "Termux", "Acode", "Antigravity", "Kimi Ai", ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
          <LayoutGrid size={16} className="text-zinc-400" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Tech Stack</h3>
          <p className="text-[10px] text-zinc-500">Core technologies & tools</p>
        </div>
      </div>

      {/* Grid Icon - Dibuat Auto-Fill tanpa scroll internal */}
      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-8 gap-2 mb-6">
        {skillList.map((skill) => (
          <div 
            key={skill.name} 
            title={skill.name}
            className="aspect-square rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group hover:border-sky-500/50 hover:bg-sky-500/5 transition-all duration-300"
          >
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
              alt={skill.name}
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback jika icon original tidak ditemukan
                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
              }} 
            />
          </div>
        ))}
      </div>

      {/* AI & Environment Section */}
      <div className="mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 mb-3">
          <Terminal size={10} className="text-sky-500" />
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Extended Tools</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {aiTools.map((tool) => (
            <span key={tool} className="text-[9px] px-2 py-1 rounded-md bg-zinc-900 border border-white/5 text-zinc-400 font-mono hover:text-sky-400 transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
