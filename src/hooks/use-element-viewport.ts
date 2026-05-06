"use client";

import { useState, useEffect, RefObject } from "react";

interface Options extends IntersectionObserverInit {
  once?: boolean; // Opsi tambahan: mau animasinya sekali aja atau bolak-balik?
}

export const useElementViewport = (
  ref: RefObject<HTMLElement | null>,
  options: Options = { threshold: 0.1, once: true } // Default: cuma sekali deteksi
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIntersecting(isElementVisible);

        // Jika opsi 'once' true dan elemen sudah terlihat, stop observasi (hemat memori)
        if (isElementVisible && options.once) {
          observer.unobserve(element);
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};
