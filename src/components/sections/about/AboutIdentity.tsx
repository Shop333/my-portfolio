"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function AboutIdentity() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".about-title", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    })
    .from(".about-para", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(".about-sig", {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full max-w-3xl mx-auto py-24 px-6 md:px-0 z-10">
      <div className="flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="about-title border-b border-white/5 pb-10">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none text-left">
            About<span className="text-sky-500">.</span>
          </h1>
          <p className="mt-4 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.6em] text-left">
            Digital_Architect_Profile.v1
          </p>
        </div>

        {/* Narrative Content */}
        <div className="flex flex-col gap-8 text-zinc-400 text-lg md:text-xl leading-relaxed text-left">
          <p className="about-para">
            Halo! Terima kasih sudah mampir. Saya <span className="text-white font-bold">Moh. Ahlul Firdaus</span>, 
            seorang <span className="text-white italic">Junior Fullstack Developer</span> yang punya ambisi besar dalam membangun produk digital yang berdampak.
          </p>
          
          <p className="about-para">
            Perjalanan saya di dunia koding dimulai dari kecintaan pada detail. Untuk urusan tampilan, saya mengandalkan 
            <span className="text-sky-400"> HTML, CSS, JavaScript,</span> dan <span className="text-sky-400"> React/Next.js</span> yang diperkuat dengan <span className="text-sky-400">TypeScript</span>. 
          </p>

          <p className="about-para italic border-l-2 border-sky-500/30 pl-6 my-2">
            "Bagi saya, koding bukan hanya soal fungsionalitas, tapi tentang bagaimana menciptakan pengalaman yang intuitif dan berestetika tinggi."
          </p>

          <p className="about-para">
            Di sisi backend, saya terbiasa menggunakan <span className="text-sky-400">Node.js</span> dan <span className="text-sky-400 font-bold">PHP/Laravel</span> untuk merancang sistem yang kokoh. 
            Selain web, saya juga mengeksplorasi dunia mobile development menggunakan <span className="text-sky-400">Kotlin</span> dan <span className="text-sky-400">Dart (Flutter)</span>.
          </p>

          <p className="about-para">
            Meskipun belajar secara mandiri lewat berbagai bootcamp dan kursus online, saya selalu haus akan tantangan baru. 
            Saya percaya bahwa kolaborasi dan komunikasi yang baik adalah kunci untuk melahirkan solusi digital yang luar biasa.
          </p>
        </div>

        {/* Footer / Signature */}
        <div className="about-sig pt-12 text-left">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4 font-bold">
            Salam hangat,
          </p>
          <h2 className="text-5xl md:text-7xl font-serif italic text-sky-500/70 tracking-tighter select-none hover:text-sky-400 transition-colors duration-500">
            ahlul.
          </h2>
        </div>
      </div>

      {/* Decorative element background */}
      <div className="absolute -top-20 -left-40 w-80 h-80 bg-sky-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
