"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Code2, Globe } from "lucide-react"; // Tambahkan Globe
import { PROJECTS } from "@/constants/projects";

export default function ProjectSection() {
  const [search, setSearch] = useState("");

  const filtered = PROJECTS.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full space-y-12">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto md:mx-0">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Code2 className="text-zinc-500" size={18} />
        </div>
        <input
          type="text"
          placeholder="Cari teknologi atau nama proyek..."
          className="w-full bg-zinc-900/40 border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-sm text-zinc-400 focus:outline-none focus:border-sky-500/30 transition-all font-mono backdrop-blur-md"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid Proyek */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <div 
              key={project.id} 
              className={`group relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden hover:border-sky-500/30 transition-all duration-700 shadow-2xl ${
                project.featured ? "md:col-span-2" : "col-span-1"
              }`}
            >
              {/* Image Preview Area */}
              <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gradient Overlay - Dibuat lebih pekat di bawah agar teks kontras */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-10" />

                {/* Info Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20 uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-sky-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-[11px] font-mono leading-relaxed line-clamp-2 max-w-sm mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  {/* New Action Buttons Section */}
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
                    >
                      <Globe size={14} /> Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 text-white border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300 backdrop-blur-md"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center border border-dashed border-white/5 rounded-[2rem]">
            <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-[0.4em]">
              Project_Not_Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
