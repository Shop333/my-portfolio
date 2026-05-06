"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import Button from "@/components/ui/Button"; 
import { Download, FileText } from "lucide-react";
import Image from "next/image"; // Import Image

export default function ResumeDownload() {
  const container = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    // 1. Animasi melayang (Floating)
    gsap.to(cardRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // 2. Reveal animation saat scroll
    gsap.from(".resume-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      immediateRender: false,
      clearProps: "all"
    });
  }, { scope: container });

  return (
    <section ref={container} className="max-w-3xl mx-auto py-32 px-6 md:px-0 border-t border-white/5 relative overflow-hidden bg-transparent z-10">
      <div className="resume-content flex flex-col items-center text-center gap-10">
        
        {/* Visual Element: CV Preview Image */}
        <div 
          ref={cardRef}
          className="relative w-40 h-56 md:w-48 md:h-64 bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group mb-4"
        >
          {/* Ganti '/cv-preview.png' dengan path foto CV yang kamu upload nanti */}
          <Image 
            src="/path-ke-foto-cv-kamu.webp" 
            alt="Resume Preview"
            fill
            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* Overlay Gradient agar gambar menyatu */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          
          {/* Icon Badge */}
          <div className="absolute bottom-4 right-4 p-2 bg-sky-500 rounded-lg shadow-lg">
            <FileText size={18} className="text-black" />
          </div>

          {/* Glow Effect di belakang kartu */}
          <div className="absolute inset-0 bg-sky-500/10 blur-2xl -z-10" />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
            Curriculum <span className="text-sky-500">Vitae</span>
          </h2>
          <p className="text-zinc-500 max-w-sm mx-auto text-xs md:text-sm font-medium leading-relaxed uppercase tracking-wider">
            Tertarik untuk bekerja sama? Unduh resume terbaru saya untuk melihat detail keahlian teknis dan pengalaman saya.
          </p>
        </div>

        {/* Action: Button */}
        <div className="mt-2">
          <Button>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-3 px-2 font-black uppercase italic text-sm tracking-widest"
            >
              Get Resume <Download size={18} className="text-sky-500" />
            </a>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="pt-12 flex items-center gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.4em]">
          <span className="w-12 h-[1px] bg-white/5" />
          Available for new opportunities
          <span className="w-12 h-[1px] bg-white/5" />
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-96 bg-radial-gradient from-sky-500/5 to-transparent -z-10 opacity-50" />
    </section>
  );
}
