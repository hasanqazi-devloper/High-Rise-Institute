"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-fit lg:min-h-[85vh] 2xl:min-h-[60vh] bg-[#030303] overflow-hidden flex items-center selection:bg-blue-600 pb-12 pt-36 md:pt-40 lg:pt-32 lg:pb-12">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Left Deep Blue Flare */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/10 rounded-full blur-[140px]" />
        {/* Soft Right Cyan Flare */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[120rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Premium Animated Heading */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5.2rem] font-black leading-[1.05] tracking-tighter text-white max-w-2xl lg:max-w-none uppercase">
              Degree Se <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Skills Tak
              </span>
            </h1>

            {/* Cleaned Paragraph */}
            <p className="text-white text-sm md:text-base xl:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sirf degree kafi nahi! Master the exact engineering pipelines, architecture design patterns, and scaling models global tech giants demand. Zero boring theory, 100% full-stack code.
            </p>

            {/* 🎴 COMPACT PREMIUM MASTER COURSE CARD */}
            <div className="w-full max-w-sm pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] hover:scale-[1.01] transition-all duration-300 text-left group cursor-pointer relative overflow-hidden">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Compact Icon Badge */}
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-400 font-black text-[10px] tracking-tighter group-hover:scale-105 transition-transform shrink-0 border border-white/5">
                  WP+SEO
                </div>

                {/* Content Area */}
                <div className="truncate">
                  <h4 className="text-xs font-black text-white tracking-wider flex items-center gap-1.5 uppercase">
                    WordPress & SEO
                    <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-white font-medium truncate mt-0.5">
                    Master Course • Elementor & Advanced Audits
                  </p>
                </div>
              </div>
            </div>

            {/* 🚀 ACTION CALL SYSTEM */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto pt-4">

              {/* ENROLL NOW GRADIENT SLIDER BUTTON */}
              <Link href="#contact" className="w-full sm:w-auto block">
                <button
                  className="group relative overflow-hidden w-full sm:min-w-[180px] h-[50px] rounded-full bg-white text-black font-black text-[12px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-500 shadow-xl active:scale-95 cursor-pointer"
                >
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                    Enroll Now
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              {/* ELITE NATIONWIDE TRUST BADGE */}
              <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">
                <div className="relative w-9 h-9 rounded-full bg-[#052e16] border border-white/10 flex items-center justify-center overflow-hidden shadow-md shrink-0 select-none">
                  <div className="absolute left-0 top-0 bottom-0 w-[28%] bg-white" />
                  <div className="text-white text-[9px] font-bold ml-2">🌙</div>
                </div>
                <div className="text-left leading-none">
                  <h4 className="text-lg font-black text-white tracking-tight flex items-center gap-0.5">
                    15,000<span className="text-blue-500 font-black">+</span>
                  </h4>
                  <p className="text-[9px] text-white font-bold uppercase tracking-widest mt-1 whitespace-nowrap">
                    Students Enrolled
                  </p>
                </div>
              </div>

            </div>

            {/* 🎯 MINIMAL SOCIAL SOCIAL PROOF */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5 w-full max-w-xl lg:max-w-none justify-center lg:justify-start">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-white font-bold text-[10px] uppercase tracking-widest">
                Top Rated Ed-Tech Program In Pakistan
              </p>
            </div>

          </div>

          {/* 📸 RIGHT CONTENT: PREMIUM STATIC VISUAL LAYER */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Ambient Background Light Behind Product Image */}
            <div className="absolute w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px]">
              <Image
                src="/hero-img.webp"
                alt="HRD Institute Tech Education Ecosystem Mockup"
                width={650}
                height={650}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,112,255,0.12)] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}