import HeaderDashboard from "@/components/sections/dashboard/HeaderDashboard";
import StatsGrid from "@/components/sections/dashboard/StatsGrid";
import ActivityChart from "@/components/sections/dashboard/ActivityChart";
import GithubProfileCard from "@/components/sections/dashboard/GithubProfileCard";
import RecentAchievements from "@/components/sections/dashboard/RecentAchievements";
import TechStackStatus from "@/components/sections/dashboard/TechStackStatus";
import LanguagePieChart from "@/components/sections/dashboard/LanguagePieChart";
import GithubContribution from "@/components/sections/dashboard/GithubContribution"; 

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-sky-500/30">
      <div className="max-w-[1400px] mx-auto p-6 md:p-10 lg:p-12">
        
        {/* 1. HEADER: Identitas & Jam */}
        <section className="mb-10">
          <HeaderDashboard />
        </section>

        {/* 2. QUICK STATS: Ringkasan Angka */}
        <section className="mb-8">
          <StatsGrid />
        </section>

        {/* 3. MAIN GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* KOLOM KIRI (LEBAR) - Visualisasi Data Komprehensif */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Grafik Aktivitas (Tren 6 Bulan) */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-transparent blur-2xl opacity-20" />
              <ActivityChart />
            </div>

            {/* GitHub Heatmap (Kontribusi Setahun) - BARU */}
            <GithubContribution />

            {/* Komposisi Bahasa & Monitoring Stats */}
            <div className="grid grid-cols-1 gap-8">
              <LanguagePieChart />
              
              {/* System Monitoring Log */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 border border-dashed border-white/5 rounded-3xl bg-zinc-900/10 flex flex-col items-center justify-center text-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse mb-3" />
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
                    Deployment_Log: Stable
                  </p>
                </div>
                <div className="p-8 border border-dashed border-white/5 rounded-3xl bg-zinc-900/10 flex flex-col items-center justify-center text-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mb-3" />
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
                    Database_Latenci: 24ms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (SEMPIT) - Profil & Achievements */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Kartu Profil GitHub Live */}
            <GithubProfileCard />

            {/* List Sertifikat Terakhir */}
            <RecentAchievements />

            {/* Matrix Kemampuan */}
            <TechStackStatus />

          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 py-8 border-t border-white/5 text-center">
          <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.5em]">
            Terminal_Access_Authorized // 2026_Edition
          </p>
        </footer>
      </div>
    </main>
  );
}
