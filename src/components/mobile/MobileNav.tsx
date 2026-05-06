"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Floating Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center text-black shadow-xl shadow-sky-500/30 active:scale-90 transition-all duration-300 group"
      >
        <Menu size={24} className="group-hover:rotate-12 transition-transform" />
      </button>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 z-[70] bg-[#030303]/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* PERBAIKAN: Gunakan flex flex-col h-full agar footer tetap di bawah tapi area tengah bisa scroll */}
        <div className="flex flex-col h-full relative z-10">
          
          {/* 1. Header (Tetap di atas) */}
          <div className="p-8 pb-4">
            <div className="flex items-center justify-between relative">
              <div className="relative group">
                <div className="w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 relative z-10">
                  <Image 
                    src="/ahlul_profile.webp" 
                    alt="Ahlul Firdaus"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-sky-500 rounded-full blur-md opacity-20" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full max-w-[150px]">
                <span className="font-black text-white tracking-[0.2em] text-lg uppercase italic">Firdaus_OS</span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active_Session</span>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all border border-white/5"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* 2. Navigation Area (BAGIAN YANG BISA DI-SCROLL) */}
          <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center justify-between p-5 rounded-3xl transition-all duration-300 border ${
                      isActive 
                        ? "bg-sky-500/10 border-sky-500/20" 
                        : "bg-white/[0.02] border-white/5 active:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                        isActive ? "bg-sky-500 text-black shadow-lg shadow-sky-500/30" : "bg-zinc-900 text-zinc-600 group-hover:text-sky-400"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className={`text-lg font-black uppercase tracking-tighter ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}>
                          {item.label}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className={`transition-all duration-300 ${
                      isActive ? "text-sky-500 opacity-100" : "text-zinc-800 opacity-0 group-hover:opacity-100"
                    }`} />
                  </Link>
                );
              })}
              
              {/* Spacer tambahan di bawah item terakhir agar menu Contact tidak terhalang footer */}
              <div className="h-12" />
            </nav>
          </div>

          {/* 3. Footer (Tetap di bawah) */}
          <div className="p-8 border-t border-white/5 bg-[#030303]/50 backdrop-blur-md">
            <div className="flex justify-between items-end">
              <div className="text-left">
                <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1 font-bold">Location_Origin</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">Bali — Indonesia — 2026</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[8px] font-mono text-emerald-500 font-bold uppercase tracking-tighter italic">System_V.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
