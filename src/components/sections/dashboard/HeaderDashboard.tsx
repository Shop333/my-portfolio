"use client";

import { useEffect, useState } from "react";

export default function HeaderDashboard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
      <div>
        <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
          Dasbor<span className="text-sky-500">_</span>Utama
        </h1>
        <p className="text-[10px] text-zinc-500 font-mono mt-1 tracking-[0.2em] uppercase">
          Operator: Moh Ahlul Firdaus // Secure_Connection_Established
        </p>
      </div>
      
      <div className="flex items-center gap-6 bg-zinc-900/40 border border-white/5 px-6 py-4 rounded-2xl">
        <div className="text-right">
          <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">System_Clock</p>
          <p className="text-sm font-mono text-white font-bold">{time || "00:00:00"}</p>
        </div>
        <div className="h-8 w-[1px] bg-white/10" />
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute opacity-75" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
          </div>
          <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.2em] font-bold">Node_Active</span>
        </div>
      </div>
    </div>
  );
}
