"use client";

import ContactSection from "@/components/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-20 pt-10">
      {/* Container utama dengan padding agar tidak mepet ke pinggir layar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Konten Utama */}
        <div className="relative z-10">
          <ContactSection />
        </div>

        {/* Dekorasi Background Tambahan (Opsional - Efek Cahaya) */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full" />
        </div>

      </div>
    </main>
  );
}
