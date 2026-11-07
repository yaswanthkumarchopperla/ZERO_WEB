"use client";

import React from "react";
import Link from "next/link";
import { 
  Rocket, 
  ArrowRight, 
  FolderPlus, 
  Play, 
  Database, 
  Sparkles, 
  Layers, 
  GitBranch, 
  Terminal, 
  ShieldCheck, 
  Globe, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { PHASES_LIST } from "@/lib/chronological-journey-data";

const ICONS_MAP: Record<string, React.ElementType> = {
  FolderPlus,
  Play,
  Database,
  Sparkles,
  Layers,
  GitBranch,
  Terminal,
  ShieldCheck,
  Globe,
  Rocket
};

export function JourneyPreview() {
  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <Rocket className="w-3.5 h-3.5" />
            <span>The Real Chronological Order &bull; 10 Phases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MY FIRST WEBSITE: COMPLETE STEP-BY-STEP JOURNEY
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow every single action in the exact order an actual beginner performs it: Open GitHub &rarr; Create Repository &rarr; Empty Desktop Folder &rarr; Open Antigravity &rarr; Prompt ChatGPT &rarr; Generate Code &rarr; Run Localhost &rarr; Connect MongoDB &rarr; Deploy to Render & Vercel.
          </p>
        </div>

        {/* 10 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {PHASES_LIST.map((phase) => {
            const Icon = ICONS_MAP[phase.iconName] || Rocket;
            return (
              <div
                key={phase.phaseNumber}
                className="group relative rounded-2xl bg-navy-900/80 border border-white/10 hover:border-electric-blue/40 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-electric-blue/15 text-electric-blue border border-electric-blue/30">
                      PHASE {String(phase.phaseNumber).padStart(2, "0")}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-electric-blue group-hover:border-electric-blue/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phase.tagline}
                  </p>
                </div>

                {/* Bottom Bar with Step Range & Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    {phase.stepRange} ({phase.totalSteps} steps)
                  </span>
                  <Link
                    href="/journey"
                    className="flex items-center gap-1 text-electric-blue font-semibold group-hover:underline"
                  >
                    <span>Start Phase</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-indigo text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
          >
            <Rocket className="w-4 h-4" />
            <span>Open Complete Chronological Journey (Step 1 of 129)</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
