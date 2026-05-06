"use client";

import ContactGrid from "./ContactGrid";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full py-10 space-y-12 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
        <p className="text-zinc-400 text-sm">Let's get in touch</p>
      </div>

      {/* Grid Kartu Sosial Media */}
      <div className="space-y-6">
        <p className="text-zinc-300 text-sm font-medium">Find me on social media</p>
        <ContactGrid />
      </div>

      {/* Section Form Pesan */}
      <div className="pt-10 border-t border-white/5">
        <p className="text-zinc-300 text-sm font-medium mb-6">Or send me a message</p>
        <ContactForm />
      </div>
    </section>
  );
}
