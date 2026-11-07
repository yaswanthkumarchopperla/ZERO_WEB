"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Search, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Lightbulb, 
  Layers,
  ChevronRight
} from "lucide-react";
import { COMMANDS_DATA, DetailedCommand } from "@/lib/commands-data";
import { copyToClipboard, cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Commands" },
  { id: "env", label: "Environment & Tools" },
  { id: "frontend", label: "Frontend & React" },
  { id: "backend", label: "Backend & FastAPI" },
  { id: "git", label: "Git & GitHub" },
  { id: "deployment", label: "Cloud Deployment" },
  { id: "api", label: "APIs & AI" },
  { id: "auth", label: "Auth & Brevo OTP" },
  { id: "testing", label: "Testing & Debugging" },
];

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "cmd-node-v": true,
    "cmd-python-version": true,
    "cmd-git-version": true
  });

  const handleCopy = async (cmd: string, id: string) => {
    const ok = await copyToClipboard(cmd);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    COMMANDS_DATA.forEach((cmd) => {
      allExpanded[cmd.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const filtered = COMMANDS_DATA.filter((c) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      c.command.toLowerCase().includes(term) ||
      c.whatItDoes.toLowerCase().includes(term) ||
      c.whyWeUseIt.toLowerCase().includes(term) ||
      c.whereToRun.toLowerCase().includes(term) ||
      c.ifErrorOccurs.toLowerCase().includes(term) ||
      c.categoryLabel.toLowerCase().includes(term);
    const matchesCat = selectedCat === "all" || c.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <Terminal className="w-3.5 h-3.5" />
            <span>Searchable Terminal Reference</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Command Library
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Never guess what to type into your terminal. Every command below contains a comprehensive 9-section beginner guide explaining its exact execution location, purpose, real-world rationale, step-by-step usage, example outputs, troubleshooting fixes, and next steps.
          </p>
        </div>

        {/* Search, Filter & Bulk Expand Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-navy-900/90 border border-white/10 space-y-4 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search commands, error fixes, or keywords (e.g. node, git, venv, uvicorn)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>

            {/* Expand / Collapse Controls */}
            <div className="flex items-center gap-2 w-full lg:w-auto justify-end text-xs">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                Expand All Guides
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                Collapse All
              </button>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                {filtered.length} of {COMMANDS_DATA.length} commands
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-medium transition-all",
                  selectedCat === cat.id
                    ? "bg-electric-blue text-white font-semibold shadow-md shadow-blue-500/25"
                    : "bg-navy-950/80 text-slate-300 hover:text-white hover:bg-navy-800 border border-white/5"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-navy-900/60 border border-white/5 text-slate-400 space-y-2">
              <p className="text-sm">No commands matched your search criteria.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedCat("all"); }}
                className="text-xs text-electric-blue hover:underline"
              >
                Reset filters & search
              </button>
            </div>
          ) : (
            filtered.map((item) => {
              const isExpanded = !!expandedIds[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-navy-900/80 border border-white/10 hover:border-white/20 transition-all duration-200 overflow-hidden shadow-lg"
                >
                  {/* Card Header & Compact View */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-electric-blue/15 text-electric-blue border border-electric-blue/30">
                          {item.categoryLabel}
                        </span>
                        {item.os !== "all" && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-white/5 text-amber-300 border border-white/10">
                            {item.os === "windows" ? "Windows Only" : "macOS / Linux"}
                          </span>
                        )}
                      </div>

                      {/* Copy Command Button */}
                      <button
                        onClick={() => handleCopy(item.command, item.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                        title="Copy command to clipboard"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Command</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Section 1: Command */}
                    <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto select-all shadow-inner">
                      <span className="text-slate-500 select-none">$ </span>
                      {item.command}
                    </div>

                    {/* Short Summary & Quick Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                      <p className="font-medium text-slate-200">
                        {item.shortSummary}
                      </p>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] shrink-0">
                        <MapPin className="w-3 h-3 text-electric-blue" />
                        <span>Run in: <strong className="text-slate-200">{item.whereToRun}</strong></span>
                      </div>
                    </div>

                    {/* Expand / Collapse Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-electric-blue hover:text-sky-300 transition-colors focus:outline-none"
                      >
                        <span>{isExpanded ? "Hide Detailed Guide" : "Show Full Beginner Guide (9 Sections)"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Complete 9-Section Beginner Explanation (Expandable) */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-white/10 bg-navy-950/60 space-y-5 text-xs text-slate-300">
                      
                      {/* Section 2: Where to Run */}
                      <div className="p-3.5 rounded-xl bg-navy-900/90 border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-electric-blue flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>2. Where to Run</span>
                        </div>
                        <p className="text-slate-200 font-mono text-xs">
                          {item.whereToRun}
                        </p>
                      </div>

                      {/* Section 3: What This Command Does & Section 4: Why We Use It */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-navy-900/70 border border-white/5 space-y-1.5">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-200 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                            <span>3. What This Command Does</span>
                          </div>
                          <p className="leading-relaxed text-slate-300">
                            {item.whatItDoes}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-navy-900/70 border border-white/5 space-y-1.5">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-electric-violet" />
                            <span>4. Why We Use It</span>
                          </div>
                          <p className="leading-relaxed text-slate-300">
                            {item.whyWeUseIt}
                          </p>
                        </div>
                      </div>

                      {/* Section 5: When to Use It */}
                      <div className="p-3.5 rounded-xl bg-navy-900/70 border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>5. When to Use It</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed">
                          {item.whenToUseIt}
                        </p>
                      </div>

                      {/* Section 6: How to Use It (Step-by-Step) */}
                      <div className="p-4 rounded-xl bg-navy-900/90 border border-white/5 space-y-2.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>6. How to Use It (Step-by-Step)</span>
                        </div>
                        <ol className="space-y-1.5 list-decimal list-inside pl-1 text-slate-200 font-mono text-[11px]">
                          {item.howToUseIt.map((step, idx) => (
                            <li key={idx} className="leading-relaxed">
                              <span className="font-sans text-slate-300">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Section 7: Expected Output */}
                      <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>7. Expected Output (Example)</span>
                        </div>
                        <pre className="text-slate-300 font-mono text-[11px] whitespace-pre-wrap leading-relaxed select-all">
                          {item.expectedOutput}
                        </pre>
                      </div>

                      {/* Section 8: If an Error Occurs */}
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-1.5">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>8. If an Error Occurs</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed">
                          {item.ifErrorOccurs}
                        </p>
                      </div>

                      {/* Section 9: Next Step */}
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5 text-slate-200">
                        <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div>
                          <strong className="text-emerald-300 text-[11px] uppercase tracking-wider mr-1">9. Next Step:</strong>
                          <span>{item.nextStep}</span>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
