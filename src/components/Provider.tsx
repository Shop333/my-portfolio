"use client";

import { useEffect, ReactNode, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Provider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2, // Sedikit lebih cepat agar sinkronisasi trigger lebih instan
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // 2. Sinkronkan dengan ScrollTrigger
    // Update posisi trigger setiap kali scroll terjadi
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // 3. GSAP Ticker
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // 4. Update ScrollTrigger saat refresh (PENTING!)
    // Ini memaksa GSAP menghitung ulang koordinat section bawah
    ScrollTrigger.defaults({ scroller: document.documentElement }); 

    // 5. Tambahkan listener untuk refresh otomatis
    // Kadang Next.js butuh waktu buat render konten bawah
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    // Initial Refresh setelah 500ms (saat preloader biasanya selesai)
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
      resizeObserver.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return <>{children}</>;
}
