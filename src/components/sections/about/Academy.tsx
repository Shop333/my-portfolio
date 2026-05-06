"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    school: "Self-Taught & Online Bootcamps",
    major: "Full Stack Development",
    period: "2024 - Present",
    location: "Online",
    status: "Active Learner",
    description: "Fokus mendalami ekosistem JavaScript (Next.js), PHP (Laravel), dan Software Engineering melalui platform Dicoding, Coursera, dan BuildWithAngga."
  },
  {
    school: "SMK PGRI 2 Negara",
    major: "Bisnis Daring & Pemasaran",
    period: "2021 - 2024",
    location: "Jembrana, Bali",
    status: "Graduated",
    description: "Mempelajari dasar-dasar bisnis digital dan manajemen pemasaran yang membantu pemahaman dalam membangun aplikasi berorientasi produk."
  }
];

export default function Academy() {
  const container = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    // 1. Animasi garis vertikal
    gsap.fromTo(lineRef.current, 
      { height: 0 }, 
      { 
        height: "100%", 
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1,
        }
      }
    );

    // 2. Animasi Tiap Item
    const items = gsap.utils.toArray(".edu-item");
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "all"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="max-w-3xl mx-auto py-20 px-6 md:px-0 border-t border-white/5 relative bg-transparent z-10">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] italic opacity-40">
          04 // Academy
        </h2>
        <div className="h-[1px] flex-1 bg-white/5" />
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10" />
        
        <div 
          ref={lineRef} 
          className="absolute left-0 top-0 w-[1px] bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] z-0" 
        />

        <div className="space-y-16">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-item relative z-10">
              <div className="absolute -left-[32px] md:-left-[48px] top-1.5 w-3.5 h-3.5 bg-[#030303] border-2 border-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)]" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase italic tracking-tight leading-none text-left">
                    {edu.school}
                  </h3>
                  <span className="text-[10px] font-mono font-black text-sky-500 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 w-fit uppercase tracking-tighter">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <div className="p-1.5 bg-white/5 rounded-lg">
                    {idx === 0 ? <BookOpen size={16} className="text-sky-500/70" /> : <GraduationCap size={16} className="text-sky-500/70" />}
                  </div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-left">{edu.major}</p>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed max-w-xl text-left italic">
                  {edu.description}
                </p>

                <div className="flex items-center gap-5 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-zinc-700" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-zinc-400">{edu.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
