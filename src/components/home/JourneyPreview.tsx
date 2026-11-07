"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Rocket, 
  ArrowRight, 
  Clock, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { JOURNEY_STAGES } from "@/lib/journey-data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All 17 Stages" },
  { id: "planning", label: "Planning" },
  { id: "environment", label: "Environment" },
  { id: "development", label: "Development" },
  { id: "services", label: "Database & APIs" },
  { id: "deployment", label: "Cloud Deployment" },
  { id: "operations", label: "Operations" },
];

export function JourneyPreview() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredStages = selectedCat === "all"
    ? JOURNEY_STAGES
    : JOURNEY_STAGES.filter((s) => s.category === selectedCat);

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/15 border border-electric-violet/30 text-xs font-semibold text-electric-violet">
            <Rocket className="w-3.5 h-3.5" />
            <span>Structured Path from A to Z</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 17-Stage Website Creation Journey
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every single stage gives you the purpose, the exact UI clicks, copyable terminal commands, Google Antigravity prompts, and verification checklists.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                selectedCat === cat.id
                  ? "bg-electric-blue text-white shadow-md shadow-blue-500/25 font-semibold"
                  : "bg-navy-850/80 text-slate-300 hover:text-white hover:bg-navy-800 border border-white/5"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStages.map((stage) => (
            <div
              key={stage.id}
              className="group relative rounded-2xl bg-navy-900/80 border border-white/10 hover:border-electric-blue/40 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-electric-blue/15 text-electric-blue border border-electric-blue/25">
                    STAGE {String(stage.stageNumber).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>~{stage.estimatedMinutes} mins</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1 mb-3">
                  {stage.tagline}
                </p>

                {/* Purpose Snippet */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {stage.purpose}
                </p>

                {/* Tools Chips */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {stage.requiredTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-navy-800/80 border border-white/5 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-3 flex items-center justify-between border-t border-white/5 text-xs font-semibold">
                <span className="text-slate-400 text-[11px]">
                  {stage.steps.length} guided steps
                </span>
                <Link
                  href={`/journey#stage-${stage.id}`}
                  className="flex items-center gap-1 text-electric-blue group-hover:underline"
                >
                  <span>Open Stage</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-white font-semibold text-sm transition-all hover:border-electric-blue/50"
          >
            <span>Explore All 17 Stages in Interactive Journey Mode</span>
            <ArrowRight className="w-4 h-4 text-electric-blue" />
          </Link>
        </div>

      </div>
    </section>
  );
}

