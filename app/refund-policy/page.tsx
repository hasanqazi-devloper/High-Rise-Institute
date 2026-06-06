import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock, Percent, HelpCircle } from "lucide-react";

export default function RefundPolicy() {
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
            <ShieldCheck size={12} /> HRD Trust Standard
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-zinc-500 font-mono">LAST UPDATED: JUNE 2026</p>
          <hr className="border-white/10 pt-2" />
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-sm leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Clock size={16} className="text-blue-500" /> 1. 7-Day Money-Back Guarantee
            </h2>
            <p className="text-white">
              We stand behind the quality of our premium practical roadmaps. If you find that the course curriculum, project scope, or instructional methodology does not align with your educational goals, you are eligible to request a full refund within **7 calendar days** from your initial official registration date.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Percent size={16} className="text-emerald-500" /> 2. LMS Portal Fair-Use Metrics
            </h2>
            <p className="text-white">
              To prevent digital content piracy and protect our intellectual property, refunds are strictly governed by automated tracking metrics on our cloud LMS portal (lms.highrisedigital.io). If a student account has unlocked, streamed, or consumed more than **20% of the course video metrics** or downloaded downloadable custom source code repositories, the refund request will be automatically voided.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <HelpCircle size={16} className="text-[#FFC71E]" /> 3. How to Initiate a Claim
            </h2>
            <p className="text-white">
              To submit a cancellation request, please open an official ticket through our WhatsApp support helpdesk or send a detailed email specifying your registered transactional email ID and receipt code. Approved requests are settled directly into the student's local banking channel within **5 to 7 operational billing cycles**.
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