"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMousePosition } from "@/hooks/use-mouse-position";

interface TooltipProps {
  text: string;
  isVisible: boolean;
}

export default function Tooltip({ text, isVisible }: TooltipProps) {
  const mouse = useMousePosition();
  const tooltipRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Handle Muncul & Hilang (Scale & Opacity)
    gsap.to(tooltipRef.current, {
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.5, // Start dari lebih kecil biar efek pop-up nya kerasa
      y: isVisible ? 0 : 10, // Ada sedikit gerakan naik pas muncul
      duration: 0.4,
      ease: "back.out(1.7)", // Efek sedikit bounce biar lebih playful
    });
  }, { dependencies: [isVisible] });

  useGSAP(() => {
    // 2. Handle Pergerakan (QuickSetter agar enteng)
    // Jarak 15px-20px sudah pas biar nggak nutupin kursor utamanya
    const xTo = gsap.quickTo(tooltipRef.current, "x", { duration: 0.7, ease: "power3" });
    const yTo = gsap.quickTo(tooltipRef.current, "y", { duration: 0.7, ease: "power3" });

    xTo(mouse.x + 15);
    yTo(mouse.y + 15);
  }, { dependencies: [mouse] });

  return (
    <div
      ref={tooltipRef}
      className="fixed top-0 left-0 z-[10000] pointer-events-none opacity-0 will-change-transform"
    >
      <div className="bg-sky-500 text-black px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(14,165,233,0.3)]">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] leading-none whitespace-nowrap">
          {text}
        </p>
      </div>
      {/* Ekor Tooltip Kecil (Opsional) */}
      <div className="w-2 h-2 bg-sky-500 rotate-45 -mt-1 ml-4 shadow-lg" />
    </div>
  );
}
