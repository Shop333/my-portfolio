"tsx"
import { Mail, Instagram, Linkedin, MessageCircle, Github, ExternalLink } from "lucide-react";

export default function ContactGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
      
      {/* 1. GMAIL - Card Besar (Span 4) */}
      <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-900 p-8 flex justify-between items-end min-h-[160px] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transition-all duration-500">
        <div className="relative z-10 space-y-2">
          <h3 className="text-xl font-bold text-white">Stay In Touch</h3>
          <p className="text-red-100/70 text-xs">Reach out via email for inquiries or collaborations.</p>
          <a href="mailto:firdausahlul88@gmail.com" className="flex items-center gap-2 bg-black/20 hover:bg-black/40 text-white text-[10px] font-bold py-2 px-4 rounded-full w-fit transition-all uppercase tracking-wider mt-4">
            Go to Gmail <ExternalLink size={12} />
          </a>
        </div>
        <Mail size={80} className="absolute -right-4 -top-4 text-white/10 group-hover:scale-110 transition-transform duration-500" />
        <Mail size={40} className="text-white/40" />
      </div>

      {/* 2. INSTAGRAM - Card Kecil (Span 2) */}
      <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-8 flex flex-col justify-between min-h-[160px] hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)] transition-all">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Follow My Journey</h3>
          <p className="text-pink-100/70 text-[10px]">Follow my creative journey.</p>
        </div>
        <div className="flex justify-between items-end">
          <a href="https://instagram.com/acyyc777" target="_blank" className="bg-black/20 text-white text-[10px] font-bold py-2 px-4 rounded-full uppercase transition-all hover:bg-black/40">
            Go to Instagram
          </a>
          <Instagram size={32} className="text-white/40" />
        </div>
      </div>

      {/* 3. LINKEDIN - Card Kecil (Span 3) */}
      <div className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-blue-800 p-8 flex flex-col justify-between min-h-[160px] hover:shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)] transition-all">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Let's Connect</h3>
          <p className="text-blue-100/70 text-[10px]">Connect with me professionally.</p>
        </div>
        <div className="flex justify-between items-end">
          <a href="https://www.linkedin.com/in/moh-ahlul-firdaus-5b95b33ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-black/20 text-white text-[10px] font-bold py-2 px-4 rounded-full uppercase hover:bg-black/40 transition-all">
            Go to LinkedIn
          </a>
          <Linkedin size={32} className="text-white/40" />
        </div>
      </div>

      {/* 4. WHATSAPP (Ganti TikTok) - Card Kecil (Span 3) */}
      <div className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 p-8 flex flex-col justify-between min-h-[160px] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white">Join the Chat</h3>
          <p className="text-emerald-100/70 text-[10px]">Fast response for urgent matters.</p>
        </div>
        <div className="flex justify-between items-end">
          <a href="https://wa.me/6283867279174" className="bg-black/20 text-white text-[10px] font-bold py-2 px-4 rounded-full uppercase hover:bg-black/40 transition-all">
            Go to WhatsApp
          </a>
          <MessageCircle size={32} className="text-white/40" />
        </div>
      </div>

      {/* 5. GITHUB - Card Lebar (Span 6) */}
      <div className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 p-8 flex justify-between items-center min-h-[120px] hover:bg-zinc-800 transition-all">
        <div className="flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-2xl">
                <Github size={40} className="text-white" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">Explore the Code</h3>
                <p className="text-zinc-500 text-xs mt-1">Explore my open-source work on GitHub.</p>
            </div>
        </div>
        <a href="https://github.com/Shop333" target="_blank" className="bg-white text-black text-[10px] font-black py-3 px-6 rounded-full uppercase tracking-tighter hover:bg-sky-500 hover:text-white transition-all">
            Go to Github
          </a>
      </div>

    </div>
  );
}
