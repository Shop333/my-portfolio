import { ACHIEVEMENTS } from "@/constants/achievements";
import { Award, Code2, Cpu, Globe } from "lucide-react";

export default function StatsGrid() {
  const stats = [
    { 
      label: "Certifications", 
      value: ACHIEVEMENTS.length, 
      icon: Award, 
      color: "text-sky-500",
      bg: "bg-sky-500/10"
    },
    { 
      label: "Total_Projects", 
      value: "14", 
      icon: Globe, 
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    { 
      label: "Tech_Stack", 
      value: "12+", 
      icon: Cpu, 
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      label: "Dev_Level", 
      value: "Jr.", 
      icon: Code2, 
      color: "text-amber-500", 
      bg: "bg-amber-500/10"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-zinc-900/30 border border-white/5 p-5 rounded-2xl group hover:border-white/10 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon size={18} />
            </div>
            <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Live_Data</span>
          </div>
          <p className="text-2xl font-black text-white font-mono tracking-tighter">
            {stat.value}
          </p>
          <p className="text-[10px] font-mono text-zinc-500 uppercase mt-1 tracking-wider">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
