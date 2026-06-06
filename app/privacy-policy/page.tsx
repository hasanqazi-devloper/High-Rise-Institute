import Link from "next/link";
import { ArrowLeft, ShieldCheck, Eye, Database, Lock } from "lucide-react";

export default function PrivacyPolicy() {
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
            <ShieldCheck size={12} /> Data Privacy Assured
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 2026</p>
          <hr className="border-white/10 pt-2" />
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-sm leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Eye size={16} className="text-blue-500" /> 1. Information We Collect
            </h2>
            <p className="text-white">
              When you enroll in our Master Courses or register an account on our official LMS portal (lms.highrisedigital.io), we safely collect your name, active email address, contact number, billing transactions records, and technical logging identifiers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Database size={16} className="text-cyan-500" /> 2. Data Usage & LMS Analytics
            </h2>
            <p className="text-white">
              We leverage this structural data exclusively to manage your internal course tracking pipelines, monitor live progress matrices, generate verifiable certification credentials, and deliver security alert updates. Your metrics are never sold or shared with external data vendors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Lock size={16} className="text-emerald-500" /> 3. High-Grade Security Layers
            </h2>
            <p className="text-white">
              Our architecture employs strict SSL/TLS encryption tokens for all client sessions. Administrative portals are fortified with multi-factor verification systems to prevent systemic security leaks or unauthorized access threats to individual student files.
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