"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Send, CheckCheck } from "lucide-react";

export default function ChatBento() {
  // Database percakapan agar terlihat hidup dan padat
  const fullConversation = [
    { id: 1, text: "Halo Moh Firdaus! 👋", sender: "client", time: "09:00" },
    { id: 2, text: "Bisa bantu buatkan website?", sender: "client", time: "09:01" },
    { id: 3, text: "Iya tentu! Mari diskusikan proyekmu. 🚀", sender: "me", time: "09:01" },
    { id: 4, text: "Berapa lama pengerjaannya?", sender: "client", time: "09:02" },
    { id: 5, text: "Tergantung tingkat kesulitan, biasanya 1-2 minggu saja.", sender: "me", time: "09:02" },
    { id: 6, text: "Oke, saya kirim detailnya lewat WA ya!", sender: "client", time: "09:03" }
  ];

  const [messages, setMessages] = useState([fullConversation[0]]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < fullConversation.length) {
        // Tambahkan pesan berikutnya satu per satu setiap 3 detik
        setMessages((prev) => [...prev, fullConversation[index]]);
        setIndex((prev) => prev + 1);
      } else {
        // Jika sudah habis, tunggu 5 detik lalu reset (Looping)
        setTimeout(() => {
          setMessages([fullConversation[0]]);
          setIndex(1);
        }, 5000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  const handleWA = () => {
    window.open("https://wa.me/6283867279174?text=Halo%20Firdaus,%20saya%20tertarik%20dengan%20jasamu!", "_blank");
  };

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <MessageCircle size={16} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp Room</h3>
            <p className="text-[10px] text-zinc-500 font-mono italic">Typing...</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-[8px] text-emerald-500 font-bold tracking-tighter">LIVE</span>
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>

      {/* Chat Area - Animasi Berurutan */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1 scrollbar-hide py-2 max-h-[220px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-500 ${
              msg.sender === "me" ? "self-end items-end" : "self-start items-start"
            }`}
          >
            <div className={`p-2.5 rounded-2xl text-[11px] leading-relaxed shadow-md ${
              msg.sender === "me" 
                ? "bg-emerald-600 text-white rounded-br-none" 
                : "bg-zinc-800/80 text-zinc-200 rounded-bl-none border border-white/5 backdrop-blur-sm"
            }`}>
              {msg.text}
            </div>
            <div className="flex items-center gap-1 mt-1 px-1">
              <span className="text-[8px] text-zinc-600 font-mono">{msg.time}</span>
              {msg.sender === "me" && <CheckCheck size={10} className="text-sky-400" />}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button 
        onClick={handleWA}
        className="mt-4 group relative w-full bg-emerald-500 hover:bg-emerald-400 text-white py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-emerald-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Tanya Sesuatu</span>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
