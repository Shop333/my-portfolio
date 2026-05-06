"use client";

import { useState, useEffect } from "react";
import { User, Terminal } from "lucide-react";

export default function AboutBento() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "/foto-profil-1.webp", 
    "/foto-profil-2.webp", 
    "/foto-profil-3.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="flex flex-col h-full items-center text-center">
      {/* Icon & Header */}
      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
        <User size={16} className="text-zinc-400" />
      </div>
      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">About Me</h3>
      <p className="text-[10px] text-zinc-500 mb-6">Identity_Database_v1</p>
      
      {/* Photo Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 mb-6">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent z-10" />
        
        {photos.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Ahlul Firdaus Photo ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === photoIndex ? "opacity-100 scale-105 blur-0" : "opacity-0 scale-100 blur-sm"
            }`}
          />
        ))}

        {/* Indikator Titik */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1">
          {photos.map((_, i) => (
            <div 
              key={i} 
              className={`w-1 h-1 rounded-full transition-all duration-500 ${i === photoIndex ? "bg-sky-500 w-3" : "bg-white/20"}`} 
            />
          ))}
        </div>
      </div>

      {/* Bio / Deskripsi Singkat */}
      <div className="w-full text-left bg-black/20 rounded-xl p-3 border border-white/5 relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={10} className="text-sky-500" />
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Bio_Data</span>
        </div>
        <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
          Saya adalah seorang <span className="text-zinc-200">Junior Full Stack Developer</span> asal Jembrana, Bali. 
          Fokus pada pembuatan web & mobile yang efisien dan <span className="text-sky-400 italic">pixel-perfect</span>.
        </p>
      </div>
    </div>
  );
}
