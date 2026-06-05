"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Terminal } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className=" width  relative min-h-fit lg:min-h-[70vh] 2xl:min-h-[50vh] 3xl:min-h-[60vh] bg-[#030303] overflow-hidden flex items-center selection:bg-blue-600 pb-4 pt-36 md:pt-40 lg:pt-28 lg:pb-18 2xl:pt-30 2xl:pb-20 3xl:pt-30 3xl:pb-20"
    >
      {/* 🌌 BACKGROUND GRADIENT LAYER */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030303] to-[#030303] z-0" />

      {/* Ambient Blue Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[600px] xl:w-[900px] h-[300px] sm:h-[600px] xl:h-[900px] bg-blue-600/[0.06] blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Heading */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[3.8rem] 2xl:text-[5.5rem] font-black leading-[1.1] lg:leading-[1.05] tracking-tighter text-white max-w-2xl lg:max-w-none uppercase">
              Degree Se  <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Skills Tak
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-white text-sm md:text-base xl:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sirf degree kafi nahi! Master the exact engineering pipelines, architecture design patterns, and scaling models global tech giants demand. Zero boring theory, 100% full-stack code.
            </p>

            {/* 🎴 DYNAMIC COURSE GRID CARDS (Matches Image Reference Layout) */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl pt-2">
              {/* Card 1 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs group-hover:scale-105 transition-transform">
                  &lt;/&gt;
                </div>
                <div>
                  <h4 className="text-xs font-black text-white  tracking-wider">Fullstack Web</h4>
                  <p className="text-[10px] text-white-500 font-medium ">React, Node & MongoDB</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs group-hover:scale-105 transition-transform">
                  📱
                </div>
                <div>
                  <h4 className="text-xs font-black text-white  tracking-wider">App Development</h4>
                  <p className="text-[10px] text-white-500 font-medium ">Flutter, Dart & Firebase</p>
                </div>
              </div>

              {/* Card 3 */}
              {/* <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-xs group-hover:scale-105 transition-transform">
                  🤖
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">AI & ML</h4>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase">Python & Deep Learning</p>
                </div>
              </div> */}

              {/* Card 4 */}
              {/* <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-xs group-hover:scale-105 transition-transform">
                  🌐
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">WordPress</h4>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase">PHP & Custom Themes</p>
                </div>
              </div> */}
            </div>

            {/* 🚀 CUSTOM LIVE DESIGN ACCURATE BUTTONS & TRUST LAYOUT */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto pt-6">

              {/* PRIMARY SOLID YELLOW BUTTON */}
              {/* <Link className="w-full sm:w-auto">
                <button
                  className="w-full sm:min-w-[220px] h-12 rounded-full bg-blue-900 hover:bg-white hover:text-blue-900 text-white font-black text-xs xl:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer font-sans"
                >
                 
                  <span className="font-bold text-base">→</span>
                </button>
              </Link> */}
           <Link href="#contact" className="w-full sm:w-auto">
  <button
    className="group relative overflow-hidden w-full sm:min-w-[160px] 2xl:min-w-[200px] h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] tracking-[2px] flex items-center justify-center gap-2 transition-all duration-500 shadow-lg active:scale-95"
  >
    {/* Blue to Cyan Hover Effect Gradient */}
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
    
    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
      Enroll Now
      <ArrowUpRight size={14} className="2xl:w-5 2xl:h-5 group-hover:rotate-45 transition-transform duration-300" />
    </span>
  </button>
</Link>

              {/* SLIM VERTICAL DIVIDER & PAKISTAN EMBEDDED TRUST BADGE */}
              <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">
                {/* Pakistan Flag Circle Graphic */}
                <div className="relative w-9 h-9 rounded-full bg-[#063a23] border border-white/10 flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
                  <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-white" />
                  <div className="text-white text-[10px] font-bold ml-1.5 leading-none select-none">🌙</div>
                </div>
                {/* Stats */}
                <div className="text-left leading-none flex flex-col justify-center">
                  <h4 className="text-[17px] font-black text-white tracking-tight flex items-center gap-0.5 leading-none">
                    15,000<span className="text-[#FFC71E] text-sm font-extrabold">+</span>
                  </h4>
                  <p className="text-[9px] text-white-400 font-bold uppercase tracking-widest mt-1 whitespace-nowrap leading-none">
                    Students Nationwide
                  </p>
                </div>
              </div>

            </div>

            {/* 🎯 SOCIAL TRUST BLOCK WITH PAKISTAN BADGE */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-white/5 w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                {/* Stylized Pakistan Circular Flag Badge */}
                <div className="w-6 h-6 rounded-full bg-[#115E59] border border-white/20 flex items-center justify-center relative overflow-hidden shadow-md">
                  <div className="w-3 h-3 text-[8px] flex items-center justify-center text-white font-bold">🌙</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
              </div>
              <p className="text-white font-bold text-[10px] xl:text-xs uppercase tracking-widest">
                Trusted by 15,000+ Students Nationwide
              </p>
            </div>

          </div>

          {/* 📸 RIGHT CONTENT: CLEAN STATIC IMAGE PRESENTATION */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Background Soft Glow Effect behind Image */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]">
              <Image
                src="/hero-img.webp" // Make sure this file exists in your public folder
                alt="HRD Institute Tech Education Ecosystem Mockup"
                width={600}
                height={600}
                priority
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,112,255,0.15)]"
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