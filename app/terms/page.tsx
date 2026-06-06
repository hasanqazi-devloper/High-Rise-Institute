import Link from "next/link";
import { ArrowLeft, ShieldCheck, UserCheck, Code, AlertTriangle } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#1E2939] text-zinc-400 pt-36 pb-20 px-6 selection:bg-blue-600">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* BACK TO HOME */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* HEADER */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-400">
            <ShieldCheck size={12} /> Compliance Protocol
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 2026</p>
          <hr className="border-white/10 pt-2" />
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-sm leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <UserCheck size={16} className="text-blue-500" /> 1. Account Integrity & Anti-Sharing
            </h2>
            <p className="text-white">
              Every profile issued on our educational ecosystem is restricted to one physical individual. Concurrent cross-IP streaming sessions or credential recycling are actively flagged by automated anti-piracy algorithms and will result in strict, instant deployment of account suspension without fallback compensation options.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Code size={16} className="text-cyan-500" /> 2. Proprietary Assets & Source Code
            </h2>
            <p className="text-white">
              The full architecture modules, advanced SEO custom payloads, Elementor layout trees, and PHP custom themes compiled during sessions are proprietary intellectual assets owned entirely by HRD Institute. Redistribution or commercial resale of training files is strictly actionable under federal legal statutes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <AlertTriangle size={16} className="text-[#FFC71E]" /> 3. Limitation of Industrial Outcomes
            </h2>
            <p className="text-white">
              Our technical content maps current real-world elite industrial standard patterns. However, progress tracking is completely dependent on student application metrics. HRD Institute provides no structural financial guarantees or contractual hiring warranties to individual users.
            </p>
          </section>

        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="text-[11px] font-mono text-white uppercase tracking-widest text-center">
            HRD Institute • Industrial Education Ecosystem
          </p>
        </div>
      </div>
    </main>
  );
}