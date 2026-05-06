"use client";

import Image from "next/image";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecentAchievements() {
  // Ambil 3 sertifikat terbaru
  const latest = ACHIEVEMENTS.slice(0, 3);

  return (
    <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold font-mono uppercase text-zinc-400 tracking-widest flex items-center gap-2">
          <Award size={14} className="text-sky-500" /> Recent_Activity
        </h3>
        <Link href="/achievements" className="text-[9px] font-mono text-zinc-600 hover:text-sky-400 transition-colors uppercase italic">
          View_All
        </Link>
      </div>

      <div className="space-y-4">
        {latest.map((item) => (
          <div key={item.id} className="group flex gap-3 items-center p-2 rounded-xl hover:bg-white/5 transition-all">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white font-bold truncate uppercase">{item.title}</p>
              <p className="text-[8px] text-zinc-500 font-mono uppercase mt-0.5">{item.issuer}</p>
            </div>
            <ArrowRight size={12} className="text-zinc-700 group-hover:text-sky-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
