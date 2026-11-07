"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Rocket, 
  Clock, 
  Terminal, 
  Sparkles, 
  Wrench, 
  CheckCircle2, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle, 
  Layers, 
  BookOpen, 
  Cpu,
  Bookmark
} from "lucide-react";
import { JOURNEY_STAGES } from "@/lib/journey-data";
import { StageStatus } from "@/lib/types";
import { copyToClipboard, cn } from "@/lib/utils";
import { useAppMode } from "@/lib/mode-context";

export default function JourneyPage() {
  const { mode } = useAppMode();
  const [currentStageId, setCurrentStageId] = useState(1);
  const [statuses, setStatuses] = useState<Record<number, StageStatus>>({});
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});

  useEffect(() => {
    // Load persisted stage progress
    const savedStatuses = localStorage.getItem("zero_web_stage_statuses");
    if (savedStatuses) {
      try { setStatuses(JSON.parse(savedStatuses)); } catch (e) {}
    }
    const savedChecks = localStorage.getItem("zero_web_checklist");
    if (savedChecks) {
      try { setCheckedItems(JSON.parse(savedChecks)); } catch (e) {}
    }
    const savedNotes = localStorage.getItem("zero_web_notes");
    if (savedNotes) {
      try { setNotes(JSON.parse(savedNotes)); } catch (e) {}
    }
  }, []);

  const updateStatus = (stageId: number, status: StageStatus) => {
    const updated = { ...statuses, [stageId]: status };
    setStatuses(updated);
    localStorage.setItem("zero_web_stage_statuses", JSON.stringify(updated));
  };

  const toggleCheck = (key: string) => {
    const updated = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(updated);
    localStorage.setItem("zero_web_checklist", JSON.stringify(updated));
  };

  const handleCopy = async (text: string, id: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  const handleNoteChange = (stageId: number, text: string) => {
    const updated = { ...notes, [stageId]: text };
    setNotes(updated);
    localStorage.setItem("zero_web_notes", JSON.stringify(updated));
  };

  const stage = JOURNEY_STAGES.find((s) => s.id === currentStageId) || JOURNEY_STAGES[0];
  const completedCount = Object.values(statuses).filter((s) => s === "completed").length;
  const progressPercent = Math.round((completedCount / JOURNEY_STAGES.length) * 100);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Overall Progress Bar */}
        <div className="p-6 rounded-2xl bg-navy-900/90 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-electric-blue uppercase">
                  Interactive Journey Cockpit
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300">
                  {mode === "teaching" ? "Teaching Mode Active" : "Project Mode Active"}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                From Zero Knowledge to Website Live
              </h1>
            </div>

            {/* Overall Progress Stat */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-400">Total Completion</div>
                <div className="text-xl font-bold font-mono text-electric-blue">
                  {progressPercent}%
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue font-bold font-mono">
                {completedCount}/{JOURNEY_STAGES.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-navy-950 rounded-full h-2.5 overflow-hidden border border-white/5">
            <div
              className="bg-gradient-to-r from-electric-blue via-electric-indigo to-emerald-400 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 2-Column Layout: Sidebar Stages & Current Stage Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 17 Stages Stepper */}
          <div className="lg:col-span-4 rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-2 max-h-[820px] overflow-y-auto">
            <div className="px-3 py-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>All 17 Stages</span>
              <span className="text-[11px] text-electric-blue">Click to jump</span>
            </div>

            <div className="space-y-1">
              {JOURNEY_STAGES.map((s) => {
                const isCurrent = s.id === currentStageId;
                const status = statuses[s.id] || "not-started";
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentStageId(s.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl text-xs transition-all flex items-center justify-between gap-3",
                      isCurrent
                        ? "bg-electric-blue/20 border border-electric-blue text-white font-semibold shadow-md"
                        : "hover:bg-white/5 text-slate-300 border border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={cn(
                        "w-6 h-6 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center shrink-0",
                        isCurrent
                          ? "bg-electric-blue text-white"
                          : status === "completed"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-navy-800 text-slate-400"
                      )}>
                        {status === "completed" ? "✓" : s.stageNumber}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </div>

                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded font-mono shrink-0",
                      status === "completed"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : status === "in-progress"
                        ? "bg-amber-500/20 text-amber-400"
                        : status === "needs-attention"
                        ? "bg-rose-500/20 text-rose-400"
                        : "bg-white/5 text-slate-400"
                    )}>
                      {status === "completed" ? "Done" : status === "in-progress" ? "Active" : status === "needs-attention" ? "Help" : "Todo"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stage Details Cockpit */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Stage Title Card */}
            <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-electric-blue/20 border border-electric-blue/40 text-electric-blue font-mono font-bold text-xs">
                    STAGE {String(stage.stageNumber).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {stage.category}
                  </span>
                </div>

                {/* Status Switcher Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">Status:</span>
                  <select
                    value={statuses[stage.id] || "not-started"}
                    onChange={(e) => updateStatus(stage.id, e.target.value as StageStatus)}
                    aria-label={`Update status for Stage ${stage.stageNumber}: ${stage.title}`}
                    className="text-xs bg-navy-950 border border-white/20 rounded-lg px-3 py-1.5 text-white font-medium focus:outline-none focus:border-electric-blue"
                  >
                    <option value="not-started">⚪ Not Started</option>
                    <option value="in-progress">🟡 In Progress</option>
                    <option value="completed">🟢 Completed</option>
                    <option value="needs-attention">🔴 Needs Attention</option>
                  </select>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stage.title}
                </h2>
                <p className="text-sm font-medium text-electric-blue mt-1">
                  {stage.tagline}
                </p>
              </div>

              {/* Purpose & Why It Matters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                  <div className="text-xs font-bold text-slate-200">Stage Purpose</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{stage.purpose}</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                  <div className="text-xs font-bold text-amber-300">Why It Matters</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{stage.whyItMatters}</p>
                </div>
              </div>

              {/* Tools Required */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400">Required Tools:</span>
                {stage.requiredTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-electric-blue" />
                <span>Step-by-Step Instructions</span>
              </h3>

              <div className="space-y-4">
                {stage.steps.map((step, idx) => (
                  <div
                    key={step.title}
                    className="p-4 rounded-xl bg-navy-950/60 border border-white/5 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-electric-blue/20 text-electric-blue text-[11px] font-mono font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span>{step.title}</span>
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {step.actionLocation}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="p-3 rounded-lg bg-navy-900 border border-white/5 text-xs text-slate-200">
                      <span className="font-semibold text-electric-blue">What to do / click: </span>
                      {step.whatToClickOrDo}
                    </div>

                    {step.expectedOutput && (
                      <div className="text-xs text-slate-400">
                        <span className="font-semibold text-emerald-400">Expected Output: </span>
                        <span className="font-mono">{step.expectedOutput}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Commands (if any) */}
            {stage.commands.length > 0 && (
              <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-electric-violet" />
                  <span>Copyable Terminal Commands</span>
                </h3>

                <div className="space-y-3">
                  {stage.commands.map((cmd, idx) => (
                    <div
                      key={cmd.command}
                      className="rounded-xl bg-navy-950 border border-white/10 p-4 space-y-2 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-[11px]">
                          Location: <strong className="text-slate-200">{cmd.whereToExecute}</strong>
                        </span>
                        <button
                          onClick={() => handleCopy(cmd.command, `cmd-${stage.id}-${idx}`)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 text-xs transition-colors"
                        >
                          {copiedIndex === `cmd-${stage.id}-${idx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="p-2.5 rounded bg-black/60 text-emerald-400 text-xs overflow-x-auto select-all">
                        $ {cmd.command}
                      </div>

                      <div className="text-[11px] text-slate-400">
                        {cmd.description}
                      </div>

                      <div className="text-[11px] text-slate-400 pt-1 border-t border-white/5">
                        <span className="text-sky-400">Expected: </span>
                        <span>{cmd.expectedOutput}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Prompts for ChatGPT & Antigravity */}
            {stage.aiPrompts.length > 0 && (
              <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span>AI Prompts (ChatGPT & Google Antigravity)</span>
                </h3>

                <div className="space-y-4">
                  {stage.aiPrompts.map((p, idx) => (
                    <div
                      key={p.title}
                      className="rounded-xl bg-navy-950 border border-purple-500/20 p-4 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {p.tool}
                          </span>
                          <span className="text-xs font-bold text-white">{p.title}</span>
                        </div>

                        <button
                          onClick={() => handleCopy(p.prompt, `prompt-${stage.id}-${idx}`)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-xs transition-colors font-medium"
                        >
                          {copiedIndex === `prompt-${stage.id}-${idx}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Prompt</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-400">
                        <strong className="text-slate-300">When to use: </strong> {p.whenToUse}
                      </div>

                      <pre className="p-3 rounded-lg bg-black/60 border border-white/5 text-slate-300 text-xs font-mono whitespace-pre-wrap leading-relaxed select-all">
                        {p.prompt}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Errors & Solutions */}
            {stage.commonErrors.length > 0 && (
              <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-400" />
                  <span>Common Traps & Instant Fixes</span>
                </h3>

                <div className="space-y-3">
                  {stage.commonErrors.map((err) => (
                    <div
                      key={err.errorName}
                      className="p-4 rounded-xl bg-navy-950/80 border border-amber-500/20 space-y-2 text-xs"
                    >
                      <div className="flex items-center gap-2 text-amber-400 font-bold">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>{err.errorName}</span>
                      </div>
                      <p className="text-slate-300">
                        <strong className="text-slate-200">Why it happens: </strong> {err.meaning}
                      </p>
                      <div className="p-3 rounded bg-navy-900 border border-white/5 text-emerald-400 font-mono text-[11px]">
                        <strong>The Fix: </strong> {err.fix}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verification Checklist */}
            <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Stage Verification Checklist</span>
              </h3>
              <p className="text-xs text-slate-300">
                Check off each milestone as you confirm it working in your terminal or browser.
              </p>

              <div className="space-y-2.5 pt-2">
                {stage.verificationChecklist.map((check, idx) => {
                  const key = `stage-${stage.id}-chk-${idx}`;
                  const isChecked = !!checkedItems[key];
                  return (
                    <label
                      key={check}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all",
                        isChecked
                          ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                          : "bg-navy-950/60 border-white/5 text-slate-300 hover:bg-white/5"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCheck(key)}
                        className="mt-0.5 rounded border-white/20 text-electric-blue focus:ring-0 cursor-pointer"
                      />
                      <span className={isChecked ? "line-through text-slate-400" : ""}>
                        {check}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Personal Stage Notes */}
            <div className="rounded-2xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-electric-blue" />
                <span>Personal Project Notes for Stage {stage.stageNumber}</span>
              </h3>
              <p className="text-xs text-slate-400">
                Write down your test URLs, temporary passwords (remember: never commit them!), or notes. Persisted automatically in your browser.
              </p>
              <textarea
                value={notes[stage.id] || ""}
                onChange={(e) => handleNoteChange(stage.id, e.target.value)}
                placeholder="e.g. Render Web Service URL is https://my-backend.onrender.com. Atlas cluster created in AWS us-east-1."
                rows={3}
                className="w-full rounded-xl bg-navy-950 border border-white/10 p-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-4">
              <button
                disabled={currentStageId <= 1}
                onClick={() => setCurrentStageId((prev) => Math.max(1, prev - 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Stage</span>
              </button>

              <button
                onClick={() => {
                  updateStatus(stage.id, "completed");
                  if (currentStageId < JOURNEY_STAGES.length) {
                    setCurrentStageId((prev) => prev + 1);
                  }
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/20"
              >
                <span>Mark Completed & Next &rarr;</span>
              </button>

              <button
                disabled={currentStageId >= JOURNEY_STAGES.length}
                onClick={() => setCurrentStageId((prev) => Math.min(JOURNEY_STAGES.length, prev + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

