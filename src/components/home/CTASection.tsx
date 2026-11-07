import React from "react";
import Link from "next/link";
import { Rocket, Terminal, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/10 to-violet-600/15 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-electric-blue/30 text-xs font-semibold text-electric-blue shadow-inner">
          <Rocket className="w-3.5 h-3.5" />
          <span>Launch Today &bull; Keep It Live Forever</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to launch your first website into the internet?
        </h2>

        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Zero prior programming experience needed. Take the 17-stage journey from an empty folder on your desktop to a deployed, secure web application on Vercel and Render.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/journey"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue via-blue-600 to-electric-indigo text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <Rocket className="w-4 h-4" />
            <span>Start Your Guided Journey</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            href="/commands"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-200 font-semibold text-sm transition-all"
          >
            <Terminal className="w-4 h-4 text-electric-violet" />
            <span>Browse Command Library</span>
          </Link>
        </div>

        {/* Confidence assurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero dollars required (100% free cloud tiers)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-electric-blue" />
            <span>No secret leaks guarantee</span>
          </span>
        </div>

      </div>
    </section>
  );
}

