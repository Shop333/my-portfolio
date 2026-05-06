"use client";

import { Laptop, Smartphone, Palette, Zap, CheckCircle2 } from "lucide-react";

export default function ServicesBento() {
  const serviceList = [
    {
      title: "Web Development",
      desc: "High-performance Next.js & React apps.",
      icon: <Laptop size={14} className="text-sky-400" />,
      tag: "Fullstack"
    },
    {
      title: "Mobile App",
      desc: "Cross-platform Android & iOS solutions.",
      icon: <Smartphone size={14} className="text-emerald-400" />,
      tag: "Native/Hybrid"
    },
    {
      title: "UI/UX Design",
      desc: "Pixel perfect & conversion oriented.",
      icon: <Palette size={14} className="text-purple-400" />,
      tag: "Figma"
    }
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 shadow-inner">
              <Zap size={16} className="text-yellow-500 fill-yellow-500/20" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Expertise</h3>
              <p className="text-[10px] text-zinc-500">Premium Solutions</p>
            </div>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
            <span className="text-[8px] font-mono text-sky-500 uppercase tracking-tighter font-bold">Available_for_Hire</span>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-2.5 mb-6">
          {serviceList.map((service, i) => (
            <div 
              key={i} 
              className="group relative flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-sky-500/30 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[9px] text-zinc-500 leading-tight">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 relative z-10">
                <CheckCircle2 size={10} className="text-zinc-800 group-hover:text-sky-500 transition-colors" />
                <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-widest">{service.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GIF Decorative Area (Mengisi Ruang Kosong Bawah) */}
      <div className="mt-auto pt-6 border-t border-white/5 relative flex items-center justify-center overflow-hidden h-32 rounded-2xl bg-zinc-950">
        {/* GIF Asli (Kemerahan) - Ukuran 700KB aman */}
        <img 
          src="/image_14.png" // Ganti path sesuai tempat kamu menyimpan GIF di folder public
          alt="Topographic Line Animation"
          className="absolute inset-0 w-full h-full object-cover scale-150 grayscale-0 opacity-80"
        />
        
        {/* Overlay Teks Premium */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex flex-col items-center justify-center z-10">
          <p className="text-[10px] font-mono text-sky-500 uppercase tracking-[0.3em]"></p>
          <span className="text-[8px] font-medium text-zinc-600 mt-1"></span>
        </div>
      </div>
    </div>
  );
}
