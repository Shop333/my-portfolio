"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface WidgetWrapperProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function WidgetWrapper({
  children,
  title,
  subtitle,
  icon: Icon,
  className = "",
}: WidgetWrapperProps) {
  return (
    <div className={`group relative p-6 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-sky-500/20 transition-all duration-500 overflow-hidden ${className}`}>
      
      {/* Glow Effect on Hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/5 blur-[80px] group-hover:bg-sky-500/10 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Header Widget */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-sky-400 group-hover:scale-110 transition-transform duration-500">
                <Icon size={20} />
              </div>
            )}
            <div className="flex flex-col">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] italic">
                {title}
              </h3>
              {subtitle && (
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mt-1">
                  {subtitle}
                </span>
              )}
            </div>
          </div>
          
          {/* Decorative Corner Element */}
          <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="w-1 h-1 rounded-full bg-sky-500" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}
