"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Rocket, 
  Plus, 
  Terminal, 
  Sparkles, 
  Wrench, 
  Layers, 
  FileDown, 
  CheckCircle2, 
  Clock, 
  ExternalLink 
} from "lucide-react";
import { JOURNEY_STAGES } from "@/lib/journey-data";
import { StageStatus } from "@/lib/types";

export default function DashboardPage() {
  const [statuses, setStatuses] = useState<Record<number, StageStatus>>({});
  const [projectName, setProjectName] = useState("My First Website");
  const [projectIdea, setProjectIdea] = useState("A custom candle e-commerce shop with interactive scent mixing.");

  useEffect(() => {
    const saved = localStorage.getItem("zero_web_stage_statuses");
    if (saved) {
      try { setStatuses(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const completedCount = Object.values(statuses).filter((s) => s === "completed").length;
  const progressPercent = Math.round((completedCount / JOURNEY_STAGES.length) * 100);

  const exportDossier = () => {
    const markdown = `# Project Dossier: ${projectName}
**Idea:** ${projectIdea}
**Generated:** ${new Date().toLocaleDateString()}
**Status:** ${progressPercent}% Complete (${completedCount}/${JOURNEY_STAGES.length} Stages)

## Technology Stack
- **Frontend:** React 18 + Vite (Tailwind CSS) on Vercel
- **Backend:** Python FastAPI on Render
- **Database:** MongoDB Atlas M0 Cloud
- **Security:** Bcrypt Password Hashing + Brevo Email OTP
- **AI Integration:** Google Gemini API via Backend Proxy

## Stage Milestones
${JOURNEY_STAGES.map((s) => `- [${statuses[s.id] === "completed" ? "x" : " "}] Stage ${s.stageNumber}: ${s.title} (${statuses[s.id] || "not-started"})`).join("\n")}

## Required Environment Variables (Never commit values!)
- \`MONGODB_URI\`
- \`JWT_SECRET_KEY\`
- \`BREVO_API_KEY\`
- \`GEMINI_API_KEY\`
`;

    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectName.toLowerCase().replace(/\s+/g, "-")}-dossier.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-8 rounded-3xl bg-navy-900/90 border border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learner Cockpit</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back to ZERO_WEB
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Track your projects, resume stages, and manage your deployment credentials safely.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportDossier}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-200 text-xs font-semibold transition-colors"
            >
              <FileDown className="w-4 h-4 text-electric-blue" />
              <span>Export Dossier (.md)</span>
            </button>

            <Link
              href="/journey"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-blue hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20"
            >
              <Rocket className="w-4 h-4" />
              <span>Continue Journey</span>
            </Link>
          </div>
        </div>

        {/* Active Project Card */}
        <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase text-electric-blue font-bold tracking-wider">
                Active Project
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">{projectName}</h2>
              <p className="text-xs text-slate-400 mt-1">{projectIdea}</p>
            </div>

            <div className="text-right sm:border-l border-white/10 sm:pl-6">
              <div className="text-xs text-slate-400">Journey Progress</div>
              <div className="text-2xl font-bold font-mono text-electric-blue">
                {progressPercent}%
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {completedCount} of {JOURNEY_STAGES.length} stages complete
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-navy-950 rounded-full h-2.5 overflow-hidden border border-white/5">
            <div
              className="bg-gradient-to-r from-electric-blue to-emerald-400 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <Link
              href="/commands"
              className="p-4 rounded-xl bg-navy-950/70 border border-white/5 hover:border-white/15 transition-all text-left group"
            >
              <Terminal className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Command Library</div>
              <div className="text-[11px] text-slate-400">Copy terminal scripts</div>
            </Link>

            <Link
              href="/prompts"
              className="p-4 rounded-xl bg-navy-950/70 border border-white/5 hover:border-white/15 transition-all text-left group"
            >
              <Sparkles className="w-5 h-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">AI Prompt Vault</div>
              <div className="text-[11px] text-slate-400">Prompts for AGY & ChatGPT</div>
            </Link>

            <Link
              href="/troubleshooting"
              className="p-4 rounded-xl bg-navy-950/70 border border-white/5 hover:border-white/15 transition-all text-left group"
            >
              <Wrench className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Troubleshoot</div>
              <div className="text-[11px] text-slate-400">Fix beginner errors</div>
            </Link>

            <Link
              href="/architecture"
              className="p-4 rounded-xl bg-navy-950/70 border border-white/5 hover:border-white/15 transition-all text-left group"
            >
              <Layers className="w-5 h-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-white">Architecture</div>
              <div className="text-[11px] text-slate-400">Inspect system diagram</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

