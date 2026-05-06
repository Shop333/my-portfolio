"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMousePosition } from "@/hooks/use-mouse-position";

export default function Cursor() {
  const mouse = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pakai quickTo daripada gsap.to biasa di dalam render loop
    // Ini jauh lebih ringan buat CPU karena tidak membuat objek animasi baru terus-menerus
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

    xTo(mouse.x);
    yTo(mouse.y);
  }, { dependencies: [mouse] });

  return (
    <>
      {/* Kursor Utama (Titik Fokus) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Opsional: Efek Aura/Outer Ring kalau mau lebih OS-like */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{ left: mouse.x, top: mouse.y }}
      />
    </>
  );
}
