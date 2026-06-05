"use client";
import { useState } from "react";
import { Play, MessageSquare, Sparkles } from "lucide-react";

export default function StudentReviews() {
  // Dummy data representing student video cards
  const students = [
    { name: "FIZAA", role: "WordPress Engineer", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", videoUrl: "#" },
    { name: "FURQAN MALIK", role: "SEO Strategy Lead", thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop", videoUrl: "#" },
    { name: "HAYAT", role: "Fullstack Web Dev", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", videoUrl: "#" },
    { name: "IQRA SAIF", role: "Custom Theme Specialist", thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop", videoUrl: "#" },
    { name: "M HARIS", role: "Technical SEO Expert", thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop", videoUrl: "#" },
  ];

  return (
    <section className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 border-t border-white/5">
      {/* Soft Ambient Background Light Effect */}
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 w-full space-y-12">
        
        {/* 🏷️ HEADER SECTION: EXACT MATCHING APKI REFERENCE SCREENSHOT */}
        <div className="space-y-3 border-b border-white/5 pb-8">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-semibold text-[10px] tracking-widest uppercase">
            <Sparkles size={10} /> Success Stories
          </div> */}
          
          <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] font-black leading-[1.05] tracking-tighter text-white uppercase font-sans">
            THE 15,000+ 
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              POWER
            </span>
          </h2>

          {/* Accent colored small bottom border bar like screen layout */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-12 h-[2px] bg-[#FFC71E]" />
            <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-[2px] font-mono">
              SHOWCASING OUR ELITE GRADUATES
            </p>
          </div>
        </div>

        {/* 📹 HORIZONTAL SCROLL / GRID VIDEO CONTENT */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 pt-4">
          {students.map((student, index) => (
            <div 
              key={index} 
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-[#0A0F1D] shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-end p-4 cursor-pointer"
            >
              {/* Image Thumbnail Backdrop */}
              <img 
                src={student.thumbnail} 
                alt={`${student.name} Thumbnail`} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 z-0 grayscale"
              />

              {/* Black Gradient Vignette Shield Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Floating Center Action Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#FFC71E] text-[#030303] flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Play size={16} className="fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Info Data Block Matching Layout */}
              <div className="relative z-20 space-y-1">
                {/* Name Box Border Box exact shape */}
                <div className="inline-block bg-white text-black font-black font-sans text-[10px] tracking-wide px-2 py-0.5 uppercase shadow-md">
                  {student.name}
                </div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider pl-0.5">
                  {student.role}
                </p>
              </div>

              {/* Top Corner Meta Tag Icon Badge */}
              <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-1.5 rounded-lg text-white/60 group-hover:text-blue-400 transition-colors">
                <MessageSquare size={12} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}