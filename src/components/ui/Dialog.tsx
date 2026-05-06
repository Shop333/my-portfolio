"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { X } from "lucide-react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Pakai callback dari Radix 'onOpenAutoFocus' untuk trigger GSAP
  // Ini lebih stabil daripada onAnimationEnd di React 19
  const handleOpen = () => {
    gsap.fromTo(overlayRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.4 }
    );
    gsap.fromTo(contentRef.current, 
      { scale: 0.95, opacity: 0, y: 30 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
    );
  };

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
      />
      <DialogPrimitive.Content
        ref={contentRef}
        onOpenAutoFocus={handleOpen}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-2xl bg-[#080808] border border-white/10 p-8 md:p-12 z-[60] rounded-[2rem] focus:outline-none shadow-2xl"
      >
        {children}
        
        <DialogPrimitive.Close className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
          <X size={20} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
