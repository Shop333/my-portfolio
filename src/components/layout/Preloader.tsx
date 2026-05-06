"use client";

import { useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Preloader() {
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    // Kunci scroll saat loading biar gak bocor ke konten belakang
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true);
        // Buka kembali scroll setelah loading selesai
        document.body.style.overflow = "auto";
      }
    });

    tl.to(".preloader-bar", {
      width: "100%",
      duration: 1.8, // Sedikit lebih lambat biar kerasa "loading" data berat
      ease: "expo.inOut"
    })
    .to(".preloader-text", {
      opacity: 0,
      y: -10,
      duration: 0.4
    })
    .to(".preloader-bg", {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    });
  });

  if (complete) return null;

  return (
    <div className="preloader-bg fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center">
      {/* Visual Indicator */}
      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <div className="preloader-bar absolute top-0 left-0 h-full w-0 bg-sky-500 shadow-[0_0_15px_#0ea5e9]" />
      </div>
      
      {/* Branding / Status */}
      <div className="preloader-text mt-6 flex flex-col items-center gap-2">
        <p className="text-[9px] uppercase tracking-[0.8em] font-black text-white/40">
          Firdaus_OS
        </p>
        <span className="text-[8px] font-mono text-sky-500/50 animate-pulse uppercase">
          System.Initialize_v1.0
        </span>
      </div>
    </div>
  );
}
