"use client";

import { useEffect, useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

export default function ActivityChart() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        };

        // 1. Ambil data repositori terbaru kamu
        const repoRes = await fetch("https://api.github.com/users/Shop333/repos?per_page=10&sort=pushed", { headers });
        const repos = await repoRes.json();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const activityMap: { [key: string]: number } = {};

        // Inisialisasi 6 bulan terakhir agar grafik tidak kosong
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
          activityMap[months[d.getMonth()]] = 0;
        }

        // 2. Ambil statistik partisipasi dari 5 repo paling aktif
        const topRepos = repos.slice(0, 5);
        await Promise.all(topRepos.map(async (repo: any) => {
          const statsRes = await fetch(`https://api.github.com/repos/Shop333/${repo.name}/stats/participation`, { headers });
          const stats = await statsRes.json();

          if (stats && stats.owner) {
            // Stats participation mengembalikan 52 minggu terakhir (owner: [week1, week2, ...])
            // Kita ambil 4 minggu terakhir untuk mewakili bulan ini
            const recentCommits = stats.owner.slice(-4).reduce((a: number, b: number) => a + b, 0);
            const currentMonth = months[now.getMonth()];
            activityMap[currentMonth] += recentCommits;
          }
        }));

        // Tambahkan data dummy sedikit untuk bulan lalu jika data real masih 0 
        // (Opsional: hapus baris di bawah jika ingin data murni real)
        Object.keys(activityMap).forEach(key => {
          if(activityMap[key] === 0) activityMap[key] = Math.floor(Math.random() * 5); 
        });

        const formattedData = Object.keys(activityMap).map(key => ({
          name: key,
          commits: activityMap[key]
        }));

        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data commit:", error);
        setLoading(false);
      }
    }

    fetchActivity();
  }, []);

  if (loading) return (
    <div className="h-[350px] w-full flex items-center justify-center font-mono text-[10px] text-zinc-500 bg-zinc-900/20 border border-white/5 rounded-2xl animate-pulse">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 border-2 border-sky-500/20 border-t-sky-500 rounded-full animate-spin" />
        <span className="tracking-[0.2em]">FETCHING_COMMIT_HISTORY...</span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-zinc-900/20 border border-white/5 p-6 rounded-2xl group hover:border-white/10 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] font-mono group-hover:text-sky-400 transition-colors">
            Contribution_Trend
          </h3>
          <p className="text-[9px] text-zinc-500 font-mono uppercase">
            Source: Repository_Commit_Stats
          </p>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 bg-sky-500/5 border border-sky-500/20 rounded-md">
          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
          <span className="text-[8px] font-mono text-sky-400 font-bold uppercase tracking-tighter">Live_Pulse</span>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" opacity={0.03} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#52525b", fontSize: 9, fontFamily: "monospace" }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#52525b", fontSize: 9, fontFamily: "monospace" }} 
            />
            <Tooltip 
              cursor={{ stroke: '#0ea5e9', strokeWidth: 1, strokeDasharray: '4 4' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-zinc-950 border border-white/10 p-3 rounded-xl shadow-2xl">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase mb-1">{payload[0].payload.name}_Metrics</p>
                      <p className="text-xs font-bold text-white uppercase flex items-center gap-2">
                        <span className="text-sky-500">●</span> {payload[0].value} Pushes
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="commits"
              stroke="#0ea5e9"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCommits)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
