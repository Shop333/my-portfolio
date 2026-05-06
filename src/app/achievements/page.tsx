import AchievementList from "@/components/sections/achievement/AchievementList";

export default function AchievementPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
            Credential<span className="text-sky-500">_</span>Vault
          </h1>
          <p className="text-[10px] text-zinc-500 font-mono mt-2 tracking-[0.2em] uppercase">
            Official Certification Record // Moh Ahlul Firdaus
          </p>
        </header>

        {/* Section List */}
        <AchievementList />
      </div>
    </main>
  );
}
