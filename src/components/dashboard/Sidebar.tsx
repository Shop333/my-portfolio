"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-[#030303] border-r border-white/5 h-screen sticky top-0 z-50">
      {/* Profile Section - Identity Branding */}
      <div className="p-8">
        <div className="flex items-center gap-4 mb-10 group cursor-default">
          <div className="relative">
            {/* FOTO PROFIL BULAT */}
            <div className="w-12 h-12 rounded-full border-2 border-sky-500/20 overflow-hidden bg-zinc-900 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-sky-500/50 shadow-lg shadow-sky-500/10">
              <Image 
                src="/ahlul_profile.webp" 
                alt="Ahlul Firdaus"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-sky-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-sm font-black text-white tracking-wider uppercase italic group-hover:text-sky-400 transition-colors">
              Ahlul Firdaus
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <p className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase">v2.0.26_STABLE</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="space-y-6">
          <div>
            <p className="px-4 text-[9px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4">Core_Navigation</p>
            <nav className="space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isActive 
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" 
                      : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200 border border-transparent"
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-sky-500 rounded-r-full shadow-[0_0_10px_#0ea5e9]" />
                    )}

                    <div className="flex items-center gap-4 relative z-10">
                      <Icon 
                        size={20} 
                        className={`transition-colors duration-300 ${
                          isActive ? "text-sky-400" : "text-zinc-600 group-hover:text-white"
                        }`} 
                      />
                      <div className="flex flex-col text-left">
                        <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${
                          isActive ? "text-white" : "group-hover:text-zinc-200"
                        }`}>
                          {item.label}
                        </span>
                        {/* Deskripsi tipis di bawah label agar sesuai struktur nav kita */}
                        <span className="text-[8px] text-zinc-600 font-mono uppercase tracking-tighter leading-none mt-1 group-hover:text-zinc-400 transition-colors">
                          {item.description}
                        </span>
                      </div>
                    </div>

                    <ChevronRight 
                      size={14} 
                      className={`transition-all duration-300 transform ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0"
                      }`} 
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* System Status Footer */}
      <div className="mt-auto p-8 border-t border-white/5 bg-gradient-to-t from-white/[0.01] to-transparent">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Nodes_Active</span>
            </div>
            <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-tighter italic">Sec_Prot_On</span>
          </div>
          
          <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-sky-500/30 w-3/4 animate-pulse rounded-full" />
          </div>

          <p className="text-[9px] text-zinc-600 font-mono tracking-tighter leading-tight">
            [ROOT] :: AHLUL_DEV_OS <br />
            © 2026 Jembrana, Bali
          </p>
        </div>
      </div>
    </aside>
  );
}
