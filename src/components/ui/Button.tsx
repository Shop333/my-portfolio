"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    // QuickSetter untuk performa tinggi
    const xTo = gsap.quickTo(buttonRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(buttonRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
    
    // Kita buat teks di dalamnya juga sedikit bergerak (Parallax Effect)
    const textXTo = gsap.quickTo(innerRef.current, "x", { duration: 1, ease: "power3.out" });
    const textYTo = gsap.quickTo(innerRef.current, "y", { duration: 1, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = buttonRef.current!.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Outer button bergerak lebih jauh
      xTo(x * 0.35);
      yTo(y * 0.35);

      // Inner text bergerak berlawanan sedikit (efek 3D)
      textXTo(x * 0.1);
      textYTo(y * 0.1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
    };

    const currentRef = buttonRef.current;
    currentRef?.addEventListener("mousemove", handleMouseMove);
    currentRef?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentRef?.removeEventListener("mousemove", handleMouseMove);
      currentRef?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: buttonRef });

  return (
    <div ref={buttonRef} className="inline-block p-8 cursor-pointer group">
      <button 
        ref={innerRef}
        className="px-12 py-5 bg-sky-500 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-colors duration-300 group-hover:bg-white group-hover:shadow-white/20 active:scale-90"
      >
        {children}
      </button>
    </div>
  );
}
