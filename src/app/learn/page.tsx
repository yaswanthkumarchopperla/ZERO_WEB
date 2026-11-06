"use client";

import * as React from "react";
import Link from "next/link";
import { CURRICULUM_MODULES } from "@/lib/curriculum-data";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Wrench,
  ChevronDown,
  Layers
} from "lucide-react";

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedPart, setSelectedPart] = React.useState("All");
  const [expandedModules, setExpandedModules] = React.useState<Record<number, boolean>>({
    1: true,
    2: true,
  });

  const toggleExpand = (id: number) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredModules = React.useMemo(() => {
    return CURRICULUM_MODULES.filter((m) => {
      const matchesPart = selectedPart === "All" || m.part === selectedPart;
      const matchesSearch =
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.lessons.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesPart && matchesSearch;
    });
  }, [searchQuery, selectedPart]);

  const parts = ["All", "Foundations", "Building the Core", "Going Live", "Quality & Security", "Putting It Together"];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum Hub
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
            19 Modules to Full-Stack Mastery
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Explore every lesson in the Zero-Web curriculum. Each topic includes step-by-step 
            instructional screenshots, Google Antigravity prompts, exercises, and quizzes.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-slate-200 dark:border-white/10">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search lessons, topics, or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Part Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {parts.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPart(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedPart === p
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Module Accordions List */}
        <div className="space-y-6">
          {filteredModules.map((mod) => {
            const isExpanded = expandedModules[mod.id] ?? false;
            return (
              <div
                key={mod.id}
                id={`module-${mod.id}`}
                className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all"
              >
                {/* Module Bar Trigger */}
                <div
                  onClick={() => toggleExpand(mod.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-850/40 transition-colors select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md font-mono font-bold text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                        {mod.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {mod.part} · ~{mod.estimatedHours} Hours · {mod.lessons.length} Lessons
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {mod.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
                      {mod.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-850 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      aria-label="Toggle details"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 space-y-6">
                    
                    {/* Lessons Grid */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Lessons in this Module
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mod.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="p-3.5 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-950/60 flex items-start justify-between gap-3 group hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                                  {lesson.id}
                                </span>
                                <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                  {lesson.title}
                                </h5>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {lesson.keyTakeaway}
                              </p>
                            </div>

                            <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                              {lesson.readTime}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Practical Task & Google Antigravity Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                        <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                          Practical Hands-On Exercise
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {mod.practicalTask}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/40 space-y-1">
                        <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-bold text-xs uppercase tracking-wide">
                          <Sparkles className="w-4 h-4 text-cyan-500" />
                          Google Antigravity Workflow
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          {mod.antigravityWorkflow}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
