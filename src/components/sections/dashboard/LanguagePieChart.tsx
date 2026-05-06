"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface LanguageData {
  name: string;
  value: number;
  color: string;
}

export default function LanguagePieChart() {
  const [data, setData] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        };

        // 1. Ambil daftar repo
        const repoRes = await fetch("https://api.github.com/users/Shop333/repos?per_page=50&sort=updated", { headers });
        const repos = await repoRes.json();
        
        if (!Array.isArray(repos)) throw new Error("Invalid Response");

        const langCounts: { [key: string]: number } = {};
        const colorMap: { [key: string]: string } = {
          TypeScript: "#3178c6",
          JavaScript: "#f1e05a",
          HTML: "#e34c26",
          CSS: "#563d7c",
          PHP: "#4F5D95",
          Python: "#3572A5",
          React: "#61dafb",
          Nextjs: "#ffffff",
          Kotlin: "#7F52FF", // Tambahkan Kotlin karena kamu tertarik
          Java: "#b07219"
        };

        // Ambil 10 repo terbaru saja biar fetching gak terlalu lama
        const topRepos = repos.slice(0, 10);
        
        // 2. Ambil detail bahasa dari tiap repo secara paralel
        await Promise.all(topRepos.map(async (repo: any) => {
          const res = await fetch(repo.languages_url, { headers });
          const langs = await res.json();
          Object.keys(langs).forEach(lang => {
            langCounts[lang] = (langCounts[lang] || 0) + langs[lang];
          });
        }));

        // 3. Format data untuk PieChart
        const formattedData = Object.keys(langCounts).map((name) => ({
          name,
          value: langCounts[name],
          color: colorMap[name] || "#71717a"
        }))
        .sort((a, b) => b.value - a.value) // Urutkan dari yang terbanyak
        .slice(0, 5); // Ambil Top 5 saja agar tidak terlalu ramai

        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error Language Fetch:", error);
        setLoading(false);
      }
    }
    fetchLanguages();
  }, []);

  if (loading) return (
    <div className="h-[430px] w-full flex items-center justify-center font-mono text-[10px] text-zinc-600 bg-zinc-900/10 border border-white/5 rounded-3xl">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
            <div className="w-10 h-10 border-2 border-sky-500/10 border-t-sky-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-sky-500 rounded-full animate-pulse" />
            </div>
        </div>
        <span className="tracking-[0.3em] animate-pulse">SCANNING_LANGUAGE_STACK...</span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-zinc-900/20 border border-white/5 p-8 rounded-3xl group hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50 h-full">
      <div className="mb-8 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] font-mono group-hover:text-sky-400 transition-colors">
            Stack_Distribution
          </h3>
          <p className="text-[10px] text-zinc-500 font-mono uppercase">
            Binary composition of your repos
          </p>
        </div>
        <div className="text-[9px] font-mono text-zinc-600 border border-white/5 px-2 py-1 rounded bg-black/20">
          SECURE_AUTH_V2
        </div>
      </div>

      <div className="h-[300px] w-full relative">
        {/* Dekorasi Center (Glassmorphism Donut) */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
          <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Total</p>
          <p className="text-[14px] font-mono text-white font-black tracking-tighter">DATA</p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={8}
              cornerRadius={8}
              dataKey="value"
              stroke="none"
              animationBegin={200}
              animationDuration={1800}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="hover:opacity-100 opacity-80 transition-all duration-300 cursor-pointer outline-none"
                  stroke={entry.color}
                  strokeWidth={index === 0 ? 2 : 0} // Kasih highlight dikit buat bahasa utama
                />
              ))}
            </Pie>
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-zinc-950/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase mb-1 tracking-widest">
                        {payload[0].name}
                      </p>
                      <p className="text-xs font-bold text-white uppercase">
                        {Math.round(payload[0].value / 1000)} KB written
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ 
                fontSize: '9px', 
                fontFamily: 'monospace', 
                textTransform: 'uppercase', 
                paddingTop: '40px',
                letterSpacing: '1.5px',
                opacity: 0.8
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
