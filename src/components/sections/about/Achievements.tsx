"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import Tooltip from "@/components/ui/Tooltip";
import { Award, ShieldCheck, ChevronRight, BookOpen, Clock } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";

const certifications = [
  {
    title: "Software Engineering Specialization",
    platform: "The Hong Kong University of Science and Technology",
    year: "2026",
    status: "Verified",
    skills: ["UML Modeling", "Testing", "Project Management"],
    description: "Spesialisasi ini mencakup metodologi, teknik, dan alat rekayasa perangkat lunak untuk perencanaan, desain, implementasi, dan pengujian sistem skala besar.",
    details: [
      "Modeling Software Systems menggunakan UML.",
      "Software Design dan Project Management.",
      "Implementation and Testing dalam lingkungan pengembangan realistis.",
      "Penerapan konsep Object-Oriented Programming (OOP) tingkat lanjut."
    ]
  },
  {
    title: "Fintech: Foundations & Applications",
    platform: "The Wharton School of the University of Pennsylvania",
    year: "2026",
    status: "Verified",
    skills: ["Blockchain", "Cryptocurrency", "InsurTech"],
    description: "Memahami blok bangunan fundamental teknologi keuangan dan aplikasi dunia nyata terbaru termasuk regulasi dan optimalisasi portofolio.",
    details: [
      "Cryptocurrency dan Blockchain: Pengenalan mata uang digital.",
      "Lending, Crowdfunding, dan Modern Investing.",
      "Aplikasi AI, InsurTech, dan Real Estate Technology.",
      "Foundations, Payments, dan Regulations dalam ekosistem Fintech."
    ]
  },
  {
    title: "Prompt Engineering for Software Dev",
    platform: "Dicoding Indonesia",
    year: "2026",
    status: "Verified",
    skills: ["Generative AI", "Prompt Patterns", "AI Ethics"],
    duration: "16 Jam",
    description: "Mempelajari pola-pola prompt, praktik terbaik, dan penerapannya untuk mengoptimalkan aktivitas software development menggunakan Generative AI.",
    details: [
      "Memahami cara kerja model Generative AI dalam memahami bahasa.",
      "Penerapan berbagai pola prompt untuk hasil yang adaptif dan konsisten.",
      "Optimasi aktivitas koding dan debugging menggunakan AI.",
      "Etika dan batasan penggunaan AI dalam pengembangan perangkat lunak."
    ]
  },
  {
    title: "Dasar Pemrograman JavaScript",
    platform: "Dicoding Indonesia",
    year: "2026",
    status: "Verified",
    skills: ["Node.js", "ESM", "Asynchronous"],
    duration: "46 Jam",
    description: "Menguasai dasar-dasar JavaScript modern dengan standar industri yang divalidasi oleh AWS, mencakup paradigma OOP dan Functional Programming.",
    details: [
      "Struktur data kompleks (Map, Set, Object, Array).",
      "Pemrograman berbasis objek (OOP) dan Functional Programming.",
      "Proses Asynchronous menggunakan Promise dan Async-Await.",
      "Modularisasi kode menggunakan ECMAScript Module (ESM)."
    ]
  }
];

export default function Achievements() {
  const container = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    const items = gsap.utils.toArray(".ach-card");
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
        scale: 0.95,
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.2)",
        immediateRender: false,
        clearProps: "all"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="max-w-3xl mx-auto py-20 px-6 md:px-0 border-t border-white/5 relative bg-transparent z-10">
      <Tooltip isVisible={hoveredIndex !== null} text="Klik untuk Detail" />

      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] italic opacity-40">
          03 // Achievements
        </h2>
        <div className="h-[1px] flex-1 bg-white/5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((item, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <div 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="ach-card group relative p-6 bg-zinc-950/50 border border-white/5 rounded-[2rem] hover:border-sky-500/50 hover:bg-sky-500/[0.02] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-sky-500 group-hover:text-black transition-all duration-500">
                    <Award size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-sky-500/50 transition-colors uppercase tracking-widest">
                    {item.year}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-tight uppercase italic text-left">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-tighter italic text-left leading-tight">
                    {item.platform}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[9px] font-black px-2 py-1 bg-white/5 text-zinc-500 rounded-lg border border-white/5 uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-sky-500" />
                    <span className="text-[8px] font-black text-sky-500 uppercase tracking-[0.2em]">Verified</span>
                  </div>
                  <ChevronRight size={14} className="text-zinc-700 group-hover:text-sky-500 transition-colors" />
                </div>
              </div>
            </DialogTrigger>

            <DialogContent>
              <div className="space-y-6 text-left">
                <div>
                  <DialogTitle className="text-2xl font-black text-white uppercase italic tracking-tighter text-left leading-none">
                    {item.title}
                  </DialogTitle>
                  <p className="text-sky-500 font-bold text-[10px] sm:text-xs uppercase italic mt-2">
                    {item.platform}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-mono border-y border-white/5 py-4 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-sky-500" /> Issued {item.year}
                  </div>
                  {item.duration && (
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-sky-500" /> {item.duration}
                    </div>
                  )}
                </div>

                <DialogDescription className="text-zinc-400 leading-relaxed text-sm md:text-base text-left">
                  {item.description}
                </DialogDescription>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest italic">
                    <BookOpen size={14} className="text-sky-500" /> Materi Pembelajaran:
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex gap-3 text-xs text-zinc-300 leading-snug">
                        <span className="text-sky-500 font-bold">/</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
