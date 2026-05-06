"use client";

import { useState, useEffect } from "react";
import { FolderGit2, ArrowUpRight, CheckCircle2, Terminal, Sparkles } from "lucide-react";

export default function ProjectBento() {
  const [projectIndex, setProjectIndex] = useState(0);

  // Penjelasan mendalam untuk setiap kategori agar ruang kosong terisi
  const projectDetails = [
    {
      title: "Company Profile",
      desc: "Transformasi identitas bisnis ke digital dengan desain yang premium, clean, dan spacious.",
      status: "Production_Ready"
    },
    {
      title: "E-Commerce Platform",
      desc: "Sistem belanja online yang responsif dengan fokus pada kecepatan performa dan konversi.",
      status: "Payment_Integrated"
    },
    {
      title: "Professional Portfolio",
      desc: "Showcase karya personal dengan standar pixel-perfect untuk membangun branding yang kuat.",
      status: "Personal_Branding"
    },
    {
      title: "Dashboard Admin",
      desc: "Manajemen data yang kompleks jadi lebih sederhana dengan visualisasi data yang informatif.",
      status: "Data_Visualization"
    }
  ];

  const previews = [
    "/project-1.webp",
    "/project-2.webp",
    "/project-3.webp",
    "/project-4.webp" // Tambahkan satu lagi agar pas 4 sesuai kategori
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projectDetails.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [projectDetails.length]);

  return (
    <div className="flex flex-col h-full justify-between group cursor-pointer">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
              <FolderGit2 size={16} className="text-zinc-400" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Projects Showcase</h3>
              <p className="text-[10px] text-zinc-500">System_Deployment_Log</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-sky-500 transition-colors" />
        </div>

        {/* Box Penjelasan Dinamis - Mengisi Ruang Kosong */}
        <div className="bg-black/20 rounded-xl p-4 border border-white/5 min-h-[110px] flex flex-col justify-between transition-all duration-500 hover:border-sky-500/20">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={12} className="text-sky-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  {projectDetails[projectIndex].title}
                </span>
              </div>
              <span className="text-[8px] font-mono text-zinc-600">[{projectDetails[projectIndex].status}]</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed italic">
              "{projectDetails[projectIndex].desc}"
            </p>
          </div>
          
          <div className="flex gap-1.5 mt-3">
            {projectDetails.map((_, i) => (
              <div 
                key={i} 
                className={`h-0.5 rounded-full transition-all duration-500 ${i === projectIndex ? "w-4 bg-sky-500" : "w-1 bg-white/10"}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Card Preview Stack */}
      <div className="relative mt-4 h-40 md:h-48 w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full bg-zinc-900 rounded-2xl border border-white/5 shadow-2xl rotate-2 translate-y-4 group-hover:rotate-0 group-hover:translate-y-2 transition-all duration-700" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full bg-zinc-800 rounded-2xl border border-white/10 shadow-2xl -rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
          {previews.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Project ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                index === projectIndex ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
              }`}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none">
            <div className="absolute bottom-3 left-4 flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[9px] font-mono text-white uppercase tracking-[0.2em]">Deploy_Status: Success</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
