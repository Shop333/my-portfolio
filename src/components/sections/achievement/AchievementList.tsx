"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ExternalLink, Award } from "lucide-react";
import { ACHIEVEMENTS } from "@/constants/achievements";

export default function AchievementList() {
  const [search, setSearch] = useState("");

  const filtered = ACHIEVEMENTS.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.issuer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative mb-12 max-w-md mx-auto md:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
        <input
          type="text"
          placeholder="Cari sertifikat atau instansi..."
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-sky-500/50 transition-all font-mono"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={item.id <= 3} // Priority load untuk item pertama
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>

              {/* Info Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-sky-500/10 rounded-md text-sky-500">
                    <Award size={14} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-white font-bold text-sm leading-tight uppercase mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-[11px] text-zinc-500 font-mono mb-6">
                  {item.issuer}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                  Verify_Credential <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
            <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.3em]">
              Data_Tidak_Ditemukan
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
