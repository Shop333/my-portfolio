"use client";

import { useEffect, useState } from "react";
import { Cpu, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  const [time, setTime] = useState("--:--:--");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const SOCIAL_LINKS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/moh-ahlul-firdaus-5b95b33ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin, color: "text-[#0077B5]" },
    { name: "GitHub", href: "https://github.com/Shop333", icon: Github, color: "text-white group-hover:text-sky-400" },
    { name: "Instagram", href: "https://instagram.com/acyyc777", icon: Instagram, color: "text-[#E4405F]" },
    { name: "WhatsApp", href: "https://wa.me/6283867279174", icon: MessageCircle, color: "text-[#25D366]" },
  ];

  return (
    <header className="h-16 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl flex items-center justify-between px-6 lg:px-10 shrink-0 z-40 relative overflow-hidden">
      
      {/* Glow Effect Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      {/* Left: System Status */}
      <div className="flex items-center gap-4 group cursor-default">
        <div className="w-8 h-8 rounded-lg bg-sky-500/5 border border-sky-500/10 flex items-center justify-center transition-colors group-hover:border-sky-500/30">
          <Cpu size={14} className="text-sky-500 animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] italic">Ahlul_Dev_Env</span>
          <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Status: Optimization_On</span>
        </div>
      </div>

      {/* Right: Time, Socials & Profile */}
      <div className="flex items-center gap-4 lg:gap-8">
        
        {/* Real-time Clock Section - Hidden on Mobile */}
        <div className="hidden md:flex flex-col items-end leading-none border-r border-white/5 pr-6 lg:pr-8">
          <span className="text-[8px] font-mono text-zinc-600 mb-1.5 uppercase tracking-[0.2em]">Local_Node_Time</span>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-xs font-black text-zinc-200 font-mono tracking-[0.15em]">
              {mounted ? time : "--:--:--"}
            </span>
          </div>
        </div>
        
        {/* Socials & Profile Group */}
        <div className="flex items-center gap-4 lg:gap-7 border-l border-white/5 pl-4 lg:pl-8">
          
          {/* 4 COLORED ICONS SECTION */}
          <div className="flex items-center gap-3 lg:gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:scale-125 ${social.color}`}
                title={social.name}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* FOTO PROFIL - HIDDEN ON MOBILE (sm:block) */}
          <div className="hidden sm:flex items-center gap-3 group cursor-default">
            <div className="relative">
              <div className="w-9 h-9 rounded-full border border-white/10 overflow-hidden bg-zinc-900 group-hover:border-sky-500/50 transition-all duration-300 shadow-lg shadow-black">
                <Image 
                  src="/ahlul_profile.webp" 
                  alt="Ahlul Profile"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#030303]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
