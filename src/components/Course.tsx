"use client";
import Link from "next/link";
import { CheckCircle, Globe, Search, ArrowRight, Sparkles } from "lucide-react";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-24 border-t border-white/5"
    >
      {/* Subtle Blue/Cyan Ambient Radial Glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl xl:max-w-[85rem] mx-auto px-6 w-full space-y-12">

        {/* 🏷️ HEADER SECTION: MATCHING APKI REFERENCE SCREENSHOT */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-center md:text-left border-b border-white/5 pb-6">
          <div className="space-y-2">
            <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-black leading-none tracking-tighter text-white uppercase font-sans">
              SKILL<span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">TRACKS</span>
            </h2>
          </div>

          {/* Subtext aligned right matching the precise reference stroke line */}
          <div className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-[3px] font-mono whitespace-nowrap">
            ENGINEERED FOR <span className="text-white">PROFESSIONAL EXCELLENCE</span>
          </div>
        </div>

        {/* 🗴 MASTER COURSE PRESENTATION LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">

          {/* LEFT COLUMN: WHAT YOU WILL MASTER INFO BOX */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-extrabold text-[10px] tracking-widest uppercase">
                <Sparkles size={10} /> Ultimate Combo Track
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                Become a High-Income Digital Engineer
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                No filler. Learn how to architect lightning-fast conversion-optimized WordPress sites and combine it with advanced production-grade Technical SEO frameworks that dominate search engines.
              </p>
            </div>

            {/* Core Tech Stack Included Pills */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Modules Covered:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 font-bold text-xs flex items-center gap-1.5 border border-white/5"><Globe size={12} className="text-blue-400" /> WordPress Architecture</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 font-bold text-xs flex items-center gap-1.5 border border-white/5"><Search size={12} className="text-emerald-400" /> Technical SEO Masterclass</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 font-bold text-xs border border-white/5">⚡ Speed Optimization</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 font-bold text-xs border border-white/5">🛠️ Custom Theme Dev</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM HIGH-CONTRAST FLAGSHIP CARD */}
          <div className="lg:col-span-7 relative group bg-gradient-to-br from-[#0B1220] to-[#030303] border-2 border-white/10 hover:border-blue-500/30 rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 transition-all duration-300 shadow-xl">

            {/* Left side of the single layout */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                {/* Reference style track badge info */}
                <div className="inline-block bg-[#FFC71E]/10 border border-[#FFC71E]/20 text-[#FFC71E] font-black text-[10px] tracking-wider px-2.5 py-0.5 rounded-md uppercase">
                  SEO-WP-2026
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight pt-1 leading-tight">
                  WordPress & SEO <br />Mastery Track
                </h4>
              </div>

              {/* Learning Outcomes List */}
              <ul className="space-y-2.5 text-zinc-400 text-xs md:text-sm font-semibold">
                <li className="flex items-center gap-2 text-white/90">
                  <CheckCircle size={14} className="text-blue-500 flex-shrink-0" /> Full-Stack Custom Custom WordPress Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-500 flex-shrink-0" /> Semantic Keyword Clusters & Silo Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-500 flex-shrink-0" /> Core Web Vitals Optimization (100% Score)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-500 flex-shrink-0" /> Live Project Deployment & Freelancing Blueprint
                </li>
              </ul>
            </div>

            {/* Right side of the single layout: Pricing Block matching your screenshot aesthetics */}
            <div className="md:w-[220px] bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col justify-between text-center md:text-left h-full min-h-[180px]">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Investment</p>
                <div className="pt-2 leading-none">
                  {/* Reference style yellow solid pricing display */}
                  <span className="text-[22px] font-black text-[#FFC71E] tracking-tight">Rs 19,999</span>
                  <span className="text-[11px] text-zinc-500 line-through block font-bold mt-1">Rs 35,000</span>
                </div>
              </div>

              {/* Card Action Button */}
              <Link href="#contact" className="w-full pt-4 md:pt-0 block">
                <button
                  className="group relative overflow-hidden w-full h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-500 shadow-lg active:scale-95 cursor-pointer"
                >
                  {/* Blue to Cyan Hover Effect Gradient Layer */}
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Button Text & Icon Layer */}
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500 ease-out">
                    Enroll Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}