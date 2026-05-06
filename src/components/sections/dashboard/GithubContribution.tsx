"use client";

import { useState, useEffect } from 'react';
import { GitHubCalendar} from 'react-github-calendar'; // Pastikan import tanpa kurung kurawal jika default export

export default function GithubContribution() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Warna hijau GitHub yang lebih menyala agar kontras dengan background gelap kamu
  const githubTheme = {
    dark: ['#161b22', '#00441b', '#006d32', '#26a641', '#39d353'],
  };

  if (!mounted) {
    return (
      <div className="w-full h-[300px] bg-zinc-900/20 border border-white/5 rounded-3xl animate-pulse flex items-center justify-center">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Initialising_Heatmap_Protocol...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-3xl group hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden">
      
      {/* Header Heatmap */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-sky-500 rounded-full shadow-[0_0_8px_#0ea5e9]" />
             <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] font-mono">
                Contribution_Log
             </h3>
          </div>
          <p className="text-[9px] text-zinc-500 font-mono uppercase pl-3">
            Identity: @Shop333 // Node: Production
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                Uptime_Active
              </p>
            </div>
        </div>
      </div>

      {/* Kontainer Utama Heatmap - Ditambahkan scrollbar-hide agar tetap bersih */}
      <div className="flex justify-start md:justify-center overflow-x-auto py-6 no-scrollbar github-calendar-container">
        <div className="min-w-[800px] md:min-w-full flex justify-center scale-[0.9] md:scale-100 origin-left md:origin-center">
            <GitHubCalendar 
              username="Shop333" 
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={githubTheme}
              colorScheme="dark"
              loading={false}
              labels={{
                totalCount: '{{count}} System Activities in the last year',
              }}
            />
        </div>
      </div>

      {/* Footer Stats: Bento Style */}
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
        <div className="group/stat relative p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all overflow-hidden">
          <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1 tracking-widest group-hover/stat:text-sky-400 transition-colors">
            Efficiency
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-black text-white tracking-tighter uppercase">High_Grade</p>
          </div>
        </div>

        <div className="group/stat relative p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all overflow-hidden">
          <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1 tracking-widest group-hover/stat:text-emerald-400 transition-colors">
            Status
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-black text-white tracking-tighter uppercase">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
