"use client";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import MobileNav from "../mobile/MobileNav";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#030303] text-zinc-200 overflow-hidden font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Sidebar Desktop - Hidden on Mobile */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-white/5 bg-[#030303] relative z-20">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full z-10">
        
        {/* TopBar & Mobile Navigation */}
        <header className="relative z-30">
          <TopBar />
          <MobileNav />
        </header>

        {/* Scrollable Content dengan Smooth Transition */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-[#050505]/50 backdrop-blur-3xl">
          <div className="max-w-[1400px] mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-700 ease-out">
            
            {/* Breadcrumb atau Status Indicator (Opsional Decor) */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 bg-sky-500 rounded-full" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em]">
                System_Node_Active
              </span>
            </div>

            {/* Konten Halaman (Children) */}
            <div className="relative">
              {children}
            </div>

            {/* Footer Dashboard Ringkas */}
            <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                Built with precision — Bali 2026
              </p>
              <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-tighter">
                <span>Next.js 14</span>
                <span className="w-1 h-1 rounded-full bg-zinc-800" />
                <span>Tailwind CSS</span>
                <span className="w-1 h-1 rounded-full bg-zinc-800" />
                <span>TypeScript</span>
              </div>
            </footer>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #18181b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #27272a;
        }
      `}</style>
    </div>
  );
}
