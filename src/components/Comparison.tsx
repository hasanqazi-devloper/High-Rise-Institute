"use client";
import { Check, X, ShieldCheck, HelpCircle, Trophy } from "lucide-react";

export default function ComparisonSection() {
  // Ultra-clear explicit comparison vectors
  const comparisonMatrix = [
    {
      metric: "Training Methodology",
      hrdInstitute: "100% Practical Live Code. No Borings PPTs. You build actual production-ready pipelines from day one.",
      traditional: "Only theoretical lectures, old notes, and copying code from slides without understanding architecture."
    },
    {
      metric: "Curriculum Standard",
      hrdInstitute: "Combined Flagship Track: Advanced WordPress Architecture + Technical SEO Silo Strategies integrated together.",
      traditional: "Separated short courses. They charge you double for basic modules with zero inter-connected framework value."
    },
    {
      metric: "Live Optimization Mastery",
      hrdInstitute: "Deep-dive into Core Web Vitals, custom server configurations, and achieving 100% performance speed scores.",
      traditional: "Just installing basic element builders and heavy plugins that make websites extremely slow and unoptimized."
    },
    {
      metric: "Industry Case Studies",
      hrdInstitute: "Real-world agency simulations, ranking actual keywords live, and end-to-end client acquisition blueprints.",
      traditional: "Dummy dummy local assignments that have zero demand or footprint in the modern international freelancing market."
    },
    {
      metric: "Global Ecosystem Legacy",
      hrdInstitute: "15,000+ Students Nationwide with secure digital verification IDs lookup standard globally.",
      traditional: "Unverified printed papers or certificates without any online directory portal for employers to double check."
    }
  ];

  return (
    <section id="comparison" className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-24 border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-5 w-[400px] h-[400px] bg-blue-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-[400px] h-[400px] bg-emerald-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 w-full space-y-12">
        
        {/* 🏷️ BRAND HEADER BLOCK */}
        <div className="text-center space-y-2 pb-4">
        
          <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-black leading-none tracking-tighter text-white uppercase font-sans">
            THE REAL{" "}
             <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">DIFFERENCE</span>

          </h2>
          <p className="text-white text-xs font-bold uppercase tracking-widest max-w-md mx-auto pt-1">
            See how HRD Institute breaks the traditional loop.
          </p>
          <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 📊 WAZIHA SIDE-BY-SIDE COMPARISON TABLE */}
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          
          {/* Header row with solid high contrast layout handles */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch border-b border-white/10 bg-white/[0.02]">
            <div className="md:col-span-4 p-5 md:p-6 text-zinc-500 font-black text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <HelpCircle size={14} /> CORE METRICS
            </div>
            
            {/* HRD Institute Flagship Column Block Highlight */}
            <div className="md:col-span-4 bg-gradient-to-b from-blue-600 to-blue-700 p-5 md:p-6 text-center text-white font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
              ⚡ HRD INSTITUTE
            </div>
            
            <div className="md:col-span-4 p-5 md:p-6 text-zinc-500 font-black text-xs uppercase tracking-widest flex items-center justify-center text-center">
              TRADITIONAL ACADEMIES
            </div>
          </div>

          {/* Matrix Rows Wrapper */}
          <div className="divide-y divide-white/5">
            {comparisonMatrix.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 items-stretch text-center md:text-left transition-all duration-150 hover:bg-white/[0.01]"
              >
                {/* 1. Metric Column */}
                <div className="md:col-span-4 p-5 md:p-6 flex items-center border-b md:border-b-0 border-white/5 md:border-r border-white/5 bg-white/[0.005]">
                  <h4 className="w-full text-white font-black text-xs md:text-sm uppercase tracking-wide">
                    {item.metric}
                  </h4>
                </div>

                {/* 2. HRD Institute Column (Vibrant Solid Text Container) */}
                <div className="md:col-span-4 p-5 md:p-6 bg-blue-600/[0.03] md:border-r border-white/5 flex items-start gap-3 justify-start text-left">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/20">
                    <Check size={12} className="stroke-[4px]" />
                  </div>
                  <p className="text-white text-xs md:text-[13px] font-bold tracking-wide leading-relaxed">
                    {item.hrdInstitute}
                  </p>
                </div>

                {/* 3. Others Column (Muted Dull Layer) */}
                <div className="md:col-span-4 p-5 md:p-6  flex items-start gap-3 justify-start text-left bg-black/40">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-500/30 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="stroke-[3px]" />
                  </div>
                  <p className="text-white text-xs md:text-[13px] font-semibold leading-relaxed">
                    {item.traditional}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Bottom Lock badge verification indicator */}
        <div className="flex items-center justify-center gap-2 p-4 bg-white/[0.02] border border-white/10 rounded-xl max-w-2xl mx-auto text-center">
          <ShieldCheck size={16} className="text-[#FFC71E] flex-shrink-0" />
          <p className="text-white  text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Verified structural comparison. Choose production competence over simple theory.
          </p>
        </div>

      </div>
    </section>
  );
}