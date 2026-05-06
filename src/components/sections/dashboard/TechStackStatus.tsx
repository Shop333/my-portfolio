"use client";

import { useEffect, useState } from "react";

interface LanguageStats {
  name: string;
  level: number;
  color: string;
}

export default function TechStackStatus() {
  const [stacks, setStacks] = useState<LanguageStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubLanguages() {
      try {
        // Headers dengan Token biar sisa limit kamu aman (5000 requests)
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        };

        // 1. Ambil semua repositori publik milik Shop333
        const repoRes = await fetch("https://api.github.com/users/Shop333/repos?per_page=100", { headers });
        const repos = await repoRes.json();

        const langData: { [key: string]: number } = {};

        // 2. Ambil statistik bahasa dari tiap repo (recent 10)
        const recentRepos = repos.slice(0, 10);
        
        await Promise.all(recentRepos.map(async (repo: any) => {
          const res = await fetch(repo.languages_url, { headers });
          const languages = await res.json();
          
          Object.keys(languages).forEach(lang => {
            langData[lang] = (langData[lang] || 0) + languages[lang];
          });
        }));

        // 3. Hitung persentase
        const totalValue = Object.values(langData).reduce((a, b) => a + b, 0);
        const colorMap: { [key: string]: string } = {
          TypeScript: "bg-blue-500",
          JavaScript: "bg-yellow-400",
          HTML: "bg-orange-500",
          CSS: "bg-sky-500",
          PHP: "bg-indigo-400",
          Python: "bg-emerald-500"
        };

        const formatted = Object.keys(langData)
          .map(lang => ({
            name: lang,
            level: Math.round((langData[lang] / totalValue) * 100),
            color: colorMap[lang] || "bg-zinc-500"
          }))
          .sort((a, b) => b.level - a.level) 
          .slice(0, 4); 

        setStacks(formatted);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data bahasa:", error);
        setLoading(false);
      }
    }

    fetchGithubLanguages();
  }, []);

  return (
    <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-2xl">
      <h3 className="text-xs font-bold font-mono uppercase text-zinc-400 tracking-widest mb-6">
        Capabilities_Matrix
      </h3>
      
      {loading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-4 bg-white/5 rounded w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {stacks.map((stack, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase">{stack.name}</span>
                <span className="text-[9px] font-mono text-zinc-400">{stack.level}%</span>
              </div>
              <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${stack.color} transition-all duration-1000`} 
                  style={{ width: `${stack.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 p-3 bg-sky-500/5 border border-sky-500/10 rounded-xl">
        <p className="text-[8px] font-mono text-sky-400 text-center uppercase tracking-tighter">
          Analysis: Based_On_Public_Repositories
        </p>
      </div>
    </div>
  );
}
