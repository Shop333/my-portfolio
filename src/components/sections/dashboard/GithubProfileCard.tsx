"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Users, Code, Star, ExternalLink } from "lucide-react";

interface GithubData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

export default function GithubProfileCard() {
  const [user, setUser] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // KEMBALI KE LOGIC ASLI: Tapi tambah Headers Token
    async function getProfile() {
      try {
        const response = await fetch("https://api.github.com/users/Shop333", {
          headers: {
            // Ini satu-satunya yang saya tambahkan biar limit kamu jadi 5000
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[300px] bg-zinc-900/20 border border-white/5 rounded-3xl animate-pulse flex flex-col items-center justify-center gap-4 text-zinc-600 font-mono text-[10px] tracking-[0.2em]">
        <div className="w-12 h-12 bg-white/5 rounded-full animate-spin border-t-sky-500 border-2" />
        ESTABLISHING_GITHUB_HANDSHAKE...
      </div>
    );
  }

  return (
    /* KEMBALI KE CLASS ASLI KAMU */
    <div className="w-full bg-zinc-900/20 border border-white/5 p-8 rounded-3xl group hover:border-white/10 transition-all duration-500 relative overflow-hidden">
      {/* Efek Glow Background */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Profil Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:border-sky-500/50 transition-all duration-500 shadow-2xl">
            <Image 
              src={user?.avatar_url || ""} 
              alt="Profile" 
              fill 
              priority
              sizes="(max-width: 768px) 64px, 64px" 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                {user?.name || "Moh Ahlul Firdaus"}
              </h3>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
            </div>
            <p className="text-[10px] text-zinc-500 font-mono tracking-widest lowercase italic">
              @{user?.login}
            </p>
          </div>
        </div>
        <div className="p-2.5 bg-white/5 rounded-xl text-zinc-500 group-hover:text-white group-hover:bg-sky-500/20 transition-all duration-300 border border-white/5">
          <Github size={18} strokeWidth={1.5} />
        </div>
      </div>

      {/* Bio Section */}
      <div className="relative mb-8 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
        <p className="text-[11px] text-zinc-400 leading-relaxed font-mono italic">
          "{user?.bio || "Active developer focused on modern web ecosystems and high-performance UI/UX."}"
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-center hover:border-sky-500/20 transition-all group/stat">
          <Code size={14} className="mx-auto mb-2 text-sky-500 opacity-50 group-hover/stat:opacity-100" />
          <p className="text-sm font-bold text-white mb-0.5">{user?.public_repos || 0}</p>
          <p className="text-[8px] text-zinc-600 uppercase font-mono tracking-tighter">Repos</p>
        </div>
        
        <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-center hover:border-emerald-500/20 transition-all group/stat">
          <Users size={14} className="mx-auto mb-2 text-emerald-500 opacity-50 group-hover/stat:opacity-100" />
          <p className="text-sm font-bold text-white mb-0.5">{user?.followers || 0}</p>
          <p className="text-[8px] text-zinc-600 uppercase font-mono tracking-tighter">Followers</p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-2xl text-center hover:border-amber-500/20 transition-all group/stat">
          <Star size={14} className="mx-auto mb-2 text-amber-500 opacity-50 group-hover/stat:opacity-100" />
          <p className="text-sm font-bold text-white mb-0.5 tracking-tighter">LIVE</p>
          <p className="text-[8px] text-zinc-600 uppercase font-mono tracking-tighter">Uptime</p>
        </div>
      </div>

      {/* Action Button */}
      <a 
        href={user?.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-sky-500 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
      >
        <span>Access_Remote_Repo</span>
        <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
}
