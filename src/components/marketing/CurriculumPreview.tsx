"use client";

import * as React from "react";
import Link from "next/link";
import { CURRICULUM_MODULES } from "@/lib/curriculum-data";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Layers, 
  Globe, 
  FileSpreadsheet, 
  Palette, 
  Layout, 
  Server, 
  Database, 
  Lock, 
  PlugZap, 
  Network, 
  CloudUpload, 
  Search, 
  ShieldAlert, 
  Zap, 
  GitBranch, 
  CheckCircle2, 
  Activity, 
  ShoppingBag, 
  Compass 
} from "lucide-react";

// Icon mapping
const ICONS_MAP: Record<string, React.ElementType> = {
  Globe,
  FileSpreadsheet,
  Palette,
  Layout,
  Server,
  Database,
  Lock,
  PlugZap,
  Network,
  CloudUpload,
  Search,
  ShieldAlert,
  Zap,
  GitBranch,
  CheckCircle2,
  Activity,
  Layers,
  ShoppingBag,
  Compass,
};

const PARTS = [
  "All Modules",
  "Foundations",
  "Building the Core",
  "Going Live",
  "Quality & Security",
  "Putting It Together",
];

export function CurriculumPreview() {
  const [activePart, setActivePart] = React.useState("All Modules");

  const filteredModules = React.useMemo(() => {
    if (activePart === "All Modules") return CURRICULUM_MODULES;
    return CURRICULUM_MODULES.filter((m) => m.part === activePart);
  }, [activePart]);

  return (
    <section className="py-20 lg:py-28" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Complete 19-Module Syllabus
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
              Structured From First Line to Live Website
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Every single module includes practical exercises, verified checklists, 
              Google Antigravity AI prompts, and completion quizzes.
            </p>
          </div>

          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 self-start md:self-auto group"
          >
            Explore Interactive Dependency Roadmap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {PARTS.map((part) => (
            <button
              key={part}
              onClick={() => setActivePart(part)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activePart === part
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {part}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => {
            const Icon = ICONS_MAP[mod.iconName] || Layers;
            return (
              <div
                key={mod.id}
                className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/80 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-card-hover transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {mod.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.estimatedHours}h
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {mod.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom stats and link */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {mod.lessons.length} Lessons
                  </span>

                  <Link
                    href={`/learn#module-${mod.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                  >
                    View Lessons
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
