import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Konfigurasi khusus ScrollTrigger agar sinkron dengan Lenis
  ScrollTrigger.config({
    ignoreMobileResize: true, // Biar gak kedip-kedip di HP pas address bar muncul/hilang
  });

  // GSAP Defaults - Bagus, tapi pastikan hanya jalan di client
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });
}

// Fungsi helper buat maksa refresh semua trigger (Sangat penting buat Next.js)
export const refreshScroll = () => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  }
};

export { gsap, ScrollTrigger, useGSAP };
