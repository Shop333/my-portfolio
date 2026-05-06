import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-20" />
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Full_Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-all" />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Email_Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Transmission_Message</label>
                <textarea rows={5} placeholder="Your message here..." className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-all resize-none" />
            </div>
            <button className="md:col-span-2 flex items-center justify-center gap-3 w-full py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold uppercase text-xs tracking-widest transition-all shadow-lg shadow-sky-500/20">
                Send Message <Send size={16} />
            </button>
        </form>
    </div>
  );
}
