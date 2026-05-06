"use client";

import { useState, useEffect } from "react";
import { Award, ShieldCheck, Terminal, Sparkles } from "lucide-react";

export default function AchievementBento() {
  const [certIndex, setCertIndex] = useState(0);

  const achievements = [
    {
      title: "Introduction to Software Engineering",
      issuer: "HKUST - Coursera",
      desc: "Metodologi pengembangan perangkat lunak, lifecycle, dan manajemen proyek skala besar.",
      color: "text-purple-400",
      image: "/cert-hkust-se.webp", 
      verifyUrl: "https://coursera.org/verify/6TJSV9S8Z9S8"
    },
    {
      title: "IT Security: Defense against digital dark arts",
      issuer: "Google - Coursera",
      desc: "Implementasi sistem keamanan jaringan, enkripsi, dan pertahanan terhadap ancaman digital.",
      color: "text-blue-400",
      image: "/cert-google-security.webp",
      verifyUrl: "https://coursera.org/verify/91XZ7RIY8RL0"
    },
    {
      title: "Share Data Through the Art of Visualization",
      issuer: "Google - Coursera",
      desc: "Analisis data kompleks dan penyajian informasi melalui visualisasi yang interaktif.",
      color: "text-red-400",
      image: "/cert-google-data.webp",
      verifyUrl: "https://coursera.org/verify/9WFBWZ8BFYP0"
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "IBM - Coursera",
      desc: "Fondasi pengembangan web modern dengan standar industri dan clean code practices.",
      color: "text-emerald-400",
      image: "/cert-ibm-core.webp",
      verifyUrl: "https://coursera.org/verify/Y9V7FSL3JMD2"
    },
    {
      title: "Fintech: Foundations & Applications",
      issuer: "Wharton (UPenn) - Coursera",
      desc: "Analisis ekosistem finansial, blockchain, dan strategi investasi digital modern.",
      color: "text-amber-400",
      image: "/cert-wharton-fintech.webp",
      verifyUrl: "https://coursera.org/verify/specialization/1E5P1ESFQ9DZ"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta - Coursera",
      desc: "Pengembangan antarmuka responsif menggunakan workflow dan alat modern Meta.",
      color: "text-sky-400",
      image: "/cert-meta-frontend.webp",
      verifyUrl: "https://coursera.org/verify/78BON2FY2LT7"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % achievements.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <div className="flex flex-col h-full justify-between group cursor-pointer overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5">
              <Award size={16} className="text-zinc-400" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Achievements</h3>
              <p className="text-[10px] text-zinc-500 font-mono">Verified_Cert_v2.1</p>
            </div>
          </div>
          <ShieldCheck size={14} className="text-emerald-500 animate-pulse" />
        </div>

        {/* Info Box Dinamis */}
        <div className="bg-zinc-900/40 rounded-xl p-4 border border-white/5 min-h-[135px] flex flex-col justify-between transition-all duration-500 hover:border-white/10 relative overflow-hidden backdrop-blur-sm">
          <div className="space-y-2 relative z-10">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Sparkles size={10} className={`${achievements[certIndex].color}`} />
                <span className={`text-[9px] font-mono uppercase tracking-widest font-bold ${achievements[certIndex].color}`}>
                  {achievements[certIndex].issuer}
                </span>
              </div>
              <a href={achievements[certIndex].verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group/link bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                 <Terminal size={8} className="text-zinc-500 group-hover/link:text-sky-500" />
                 <span className="text-[8px] font-mono text-zinc-500 group-hover/link:text-zinc-300">Verify</span>
              </a>
            </div>
            <h4 className="text-[11px] font-bold text-white leading-tight">
              {achievements[certIndex].title}
            </h4>
            <p className="text-[10px] text-zinc-400 leading-relaxed line-clamp-3">
              {achievements[certIndex].desc}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Certificate Preview Stack */}
      <div className="relative mt-6 h-40 md:h-44 w-full">
        {/* Layer Belakang (Stacked effect) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full bg-zinc-900 rounded-2xl border border-white/5 shadow-2xl rotate-2 translate-y-3 group-hover:rotate-0 transition-all duration-700" />
        
        {/* Container Gambar Utama */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-full bg-zinc-950 rounded-2xl border border-white/10 shadow-2xl -rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
          {achievements.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              // loading="eager" untuk memastikan gambar siap tampil saat slide berganti
              loading="eager"
              className={`absolute inset-0 w-full h-full object-contain object-top transition-all duration-700 ease-in-out ${
                index === certIndex 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 translate-y-2"
              }`}
            />
          ))}
          
          {/* Overlay Gradient halus */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Status Label */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
             <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/5 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[8px] font-mono text-white/50 uppercase tracking-[0.2em]">Verified_Authentic</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
