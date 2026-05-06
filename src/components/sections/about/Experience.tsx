"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Junior Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2025 - Present",
    description: "Membangun aplikasi web modern menggunakan Next.js dan Laravel. Fokus pada performa UI/UX yang tinggi dan integrasi API yang solid.",
    details: [
      "Mengembangkan platform dengan Next.js, Tailwind CSS, dan TypeScript.",
      "Membangun sistem backend menggunakan PHP (Laravel) untuk manajemen data.",
      "Implementasi database PostgreSQL/MySQL untuk penyimpanan data yang scalable.",
      "Optimasi frontend menggunakan GSAP untuk animasi yang smooth."
    ]
  },
  {
    id: "02",
    role: "Sales Representative",
    company: "Customer Business Network (CBN)",
    period: "2024",
    description: "Bertanggung jawab dalam akuisisi customer baru dan melakukan analisis area cakupan jaringan layanan internet.",
    details: [
      "Mencari dan mengakuisisi customer potensial untuk layanan network.",
      "Menganalisis area cakupan (coverage) untuk perluasan jaringan.",
      "Melakukan dokumentasi dan manajemen form pendaftaran klien.",
      "Membangun hubungan baik dengan prospek untuk mencapai target sales."
    ]
  }
];

export default function Experience() {
  const container = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    const cards = gsap.utils.toArray(".exp-card");

    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 92%", // Sedikit lebih rendah agar pas di mobile
          toggleActions: "play none none none",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "all"
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="max-w-3xl mx-auto py-20 px-6 md:px-0 border-t border-white/5 bg-transparent relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] italic opacity-40">
          02 // Experience
        </h2>
        <div className="h-[1px] flex-1 bg-white/5" />
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <Dialog key={exp.id}>
            <DialogTrigger asChild>
              <div className="exp-card group cursor-pointer flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 hover:border-sky-500/30 hover:bg-zinc-900/50 transition-all duration-500 relative overflow-hidden">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors uppercase italic leading-none">{exp.role}</h3>
                  <p className="text-zinc-500 text-sm mt-1 uppercase tracking-tighter font-medium italic">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0 p-3 rounded-full bg-white/5 group-hover:bg-sky-500 group-hover:text-black transition-all transform group-hover:rotate-[-45deg]">
                  <ChevronRight size={18} />
                </div>
              </div>
            </DialogTrigger>

            <DialogContent>
              <div className="space-y-6 text-left">
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl font-black text-white uppercase italic tracking-tighter">
                      {exp.role}
                    </DialogTitle>
                    <p className="text-sky-500 font-bold uppercase italic text-sm">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-mono border-y border-white/5 py-4 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-sky-500" /> {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-emerald-500/80">
                    <Briefcase size={14} /> Profesional
                  </div>
                </div>

                <DialogDescription className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </DialogDescription>

                <ul className="space-y-4">
                  {exp.details.map((detail, index) => (
                    <li key={index} className="flex gap-3 text-sm text-zinc-300">
                      <span className="text-sky-500 font-bold">/</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
