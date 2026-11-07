"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Rocket, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  Wrench, 
  Bookmark, 
  FolderPlus, 
  Play, 
  Database, 
  Layers, 
  GitBranch, 
  ShieldCheck, 
  Globe, 
  Check, 
  Copy,
  AlertTriangle,
  MapPin,
  Clock,
  ArrowRight,
  ListFilter,
  Sliders,
  FileCode,
  Info
} from "lucide-react";
import { 
  CHRONOLOGICAL_STEPS, 
  PHASES_LIST, 
  ChronologicalStep, 
  PhaseInfo 
} from "@/lib/chronological-journey-data";
import { 
  UserRequirements, 
  ArchitectureRecommendation, 
  DEFAULT_REQUIREMENTS, 
  loadUserRequirements, 
  analyzeRequirements 
} from "@/lib/user-requirements";
import { RequirementsWizard } from "@/components/journey/RequirementsWizard";
import { copyToClipboard, cn } from "@/lib/utils";

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

export default function JourneyPage() {
  const [activeTab, setActiveTab] = useState<"journey" | "requirements">("journey");
  const [userReq, setUserReq] = useState<UserRequirements>(DEFAULT_REQUIREMENTS);
  const [userRec, setUserRec] = useState<ArchitectureRecommendation>(
    analyzeRequirements(DEFAULT_REQUIREMENTS)
  );

  const [currentStepNumber, setCurrentStepNumber] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [stepNotes, setStepNotes] = useState<Record<number, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"step-focus" | "phase-overview">("step-focus");

  // Load progress and user requirements on mount
  useEffect(() => {
    // Check URL parameters for tab
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam === "requirements" || tabParam === "wizard") {
        setActiveTab("requirements");
      }
    }

    const loadedReq = loadUserRequirements();
    setUserReq(loadedReq);
    setUserRec(analyzeRequirements(loadedReq));

    const savedStep = localStorage.getItem("zero_web_current_step");
    if (savedStep) {
      const parsed = parseInt(savedStep, 10);
      if (parsed >= 1 && parsed <= CHRONOLOGICAL_STEPS.length) {
        setCurrentStepNumber(parsed);
      }
    }

    const savedCompleted = localStorage.getItem("zero_web_completed_steps");
    if (savedCompleted) {
      try { setCompletedSteps(JSON.parse(savedCompleted)); } catch (e) {}
    }

    const savedNotes = localStorage.getItem("zero_web_step_notes");
    if (savedNotes) {
      try { setStepNotes(JSON.parse(savedNotes)); } catch (e) {}
    }
  }, []);

  const handleRequirementsSaved = (req: UserRequirements, rec: ArchitectureRecommendation) => {
    setUserReq(req);
    setUserRec(rec);
    setActiveTab("journey");
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const goToStep = (stepNum: number) => {
    const valid = Math.max(1, Math.min(CHRONOLOGICAL_STEPS.length, stepNum));
    setCurrentStepNumber(valid);
    localStorage.setItem("zero_web_current_step", String(valid));
    // Scroll to top of step card smoothly
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const toggleStepCompleted = (stepNum: number) => {
    const updated = { ...completedSteps, [stepNum]: !completedSteps[stepNum] };
    setCompletedSteps(updated);
    localStorage.setItem("zero_web_completed_steps", JSON.stringify(updated));
  };

  const handleNoteChange = (stepNum: number, text: string) => {
    const updated = { ...stepNotes, [stepNum]: text };
    setStepNotes(updated);
    localStorage.setItem("zero_web_step_notes", JSON.stringify(updated));
  };

  const handleCopy = async (text: string, id: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const currentStep: ChronologicalStep = 
    CHRONOLOGICAL_STEPS.find((s) => s.stepNumber === currentStepNumber) || CHRONOLOGICAL_STEPS[0];

  const currentPhase: PhaseInfo = 
    PHASES_LIST.find((p) => p.phaseNumber === currentStep.phaseNumber) || PHASES_LIST[0];

  // Phase steps
  const stepsInCurrentPhase = CHRONOLOGICAL_STEPS.filter(
    (s) => s.phaseNumber === currentStep.phaseNumber
  );

  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const overallPercent = Math.round((completedCount / CHRONOLOGICAL_STEPS.length) * 100);

  // Phase completion
  const phaseCompletedCount = stepsInCurrentPhase.filter((s) => completedSteps[s.stepNumber]).length;
  const phasePercent = Math.round((phaseCompletedCount / stepsInCurrentPhase.length) * 100);

  const PhaseIcon = ICONS_MAP[currentPhase.iconName] || Rocket;

  const isCurrentPhaseSkipped = userRec.skippedPhases.some(
    (sp) => sp.phaseNumber === currentStep.phaseNumber
  );
  const currentPhaseSkippedReason = userRec.skippedPhases.find(
    (sp) => sp.phaseNumber === currentStep.phaseNumber
  )?.reason;

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top-Level Mode Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-navy-900/90 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("requirements")}
              className={cn(
                "flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all",
                activeTab === "requirements"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/40"
                  : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Sliders className="w-4 h-4 text-purple-300" />
              <span>Phase A: Requirements & Architecture</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/15 font-mono">
                17 Inputs
              </span>
            </button>

            <button
              onClick={() => setActiveTab("journey")}
              className={cn(
                "flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all",
                activeTab === "journey"
                  ? "bg-gradient-to-r from-electric-blue to-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40"
                  : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <Rocket className="w-4 h-4 text-sky-300" />
              <span>Step-by-Step Creation Journey</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/15 font-mono">
                10 Phases &bull; 129 Steps
              </span>
            </button>
          </div>

          {/* Active project summary pill */}
          <div className="flex items-center justify-between sm:justify-end gap-3 px-3 py-1.5 rounded-xl bg-navy-950/80 border border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400 hidden md:inline">Project:</span>
              <span className="font-bold text-white truncate max-w-[140px] sm:max-w-[180px]">
                {userReq.websiteName || "My First Website"}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono font-medium border border-purple-500/30 shrink-0">
              {userRec.overallComplexity}
            </span>
          </div>
        </div>

        {/* Tab 1: Requirements Wizard (Phase A) */}
        {activeTab === "requirements" && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-navy-900/90 border border-white/10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-semibold text-purple-300">
                <Sliders className="w-3.5 h-3.5" />
                <span>Phase A &bull; Project Requirement Collection &amp; Architecture Planning</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Design Your Project Requirements &amp; Architecture
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Answer these simple questions about your website idea. ZERO_WEB automatically calculates which technologies you actually need &mdash; eliminating unnecessary databases, backends, and complex APIs if your website doesn&apos;t require them.
              </p>
            </div>

            <RequirementsWizard onSaved={handleRequirementsSaved} />
          </div>
        )}

        {/* Tab 2: Chronological Creation Journey */}
        {activeTab === "journey" && (
          <div className="space-y-8">
            {/* Header: Dedicated Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/90 border border-white/10 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>The Real Chronological Order &bull; 10 Phases &bull; Click-by-Click</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    MY FIRST WEBSITE: COMPLETE STEP-BY-STEP JOURNEY
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                    Personalized for <strong className="text-white">&quot;{userReq.websiteName}&quot;</strong> ({userRec.overallComplexity}). Follow every single action in the exact order an actual beginner performs it: Open GitHub &rarr; Create Repository &rarr; Empty Desktop Folder &rarr; Open Antigravity &rarr; Prompt ChatGPT &rarr; Generate Code &rarr; Run Localhost &rarr; Deploy to Vercel &amp; Render.
                  </p>
                </div>

                {/* Overall Progress Widget */}
                <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/10 flex items-center gap-5 shrink-0">
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                      Journey Progress
                    </div>
                    <div className="text-2xl font-bold font-mono text-electric-blue">
                      {overallPercent}%
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {completedCount} of {CHRONOLOGICAL_STEPS.length} steps complete
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-blue to-electric-indigo flex items-center justify-center text-white font-mono font-extrabold text-base shadow-lg shadow-blue-500/20">
                    {currentStepNumber}
                  </div>
                </div>
              </div>

              {/* Overall Progress Bar */}
              <div className="w-full bg-navy-950 rounded-full h-2.5 overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-electric-blue via-electric-violet to-emerald-400 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${overallPercent}%` }}
                />
              </div>
            </div>

            {/* Optional Phase Alert Banner if current step belongs to a skipped phase */}
            {isCurrentPhaseSkipped && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-amber-300">
                    Optional Phase for &quot;{userReq.websiteName}&quot; ({currentPhase.title})
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentPhaseSkippedReason || "Your selected project features do not require this service. You may skip this entire phase or read through it to learn how it works."}
                  </p>
                </div>
              </div>
            )}

            {/* Phase Navigator Pill Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {PHASES_LIST.map((phase) => {
                const isCurrentPhase = phase.phaseNumber === currentStep.phaseNumber;
                const IconComponent = ICONS_MAP[phase.iconName] || Rocket;
                const stepsInPhase = CHRONOLOGICAL_STEPS.filter((s) => s.phaseNumber === phase.phaseNumber);
                const isPhaseDone = stepsInPhase.every((s) => completedSteps[s.stepNumber]);
                const isPhaseSkipped = userRec.skippedPhases.some((sp) => sp.phaseNumber === phase.phaseNumber);

                return (
                  <button
                    key={phase.phaseNumber}
                    onClick={() => goToStep(stepsInPhase[0].stepNumber)}
                    className={cn(
                      "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0",
                      isCurrentPhase
                        ? "bg-electric-blue text-white border-electric-blue shadow-lg shadow-blue-500/20"
                        : isPhaseDone
                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                        : isPhaseSkipped
                        ? "bg-navy-900/40 text-slate-400 border-dashed border-amber-500/30 hover:text-white"
                        : "bg-navy-900/80 text-slate-300 hover:text-white hover:bg-navy-850 border-white/5"
                    )}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>Phase {phase.phaseNumber}: {phase.title}</span>
                    {isPhaseSkipped && (
                      <span className="text-[10px] text-amber-400/90 font-mono">
                        (Optional)
                      </span>
                    )}
                    {isPhaseDone ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <span className="text-[10px] opacity-75 font-mono">
                        ({phase.stepRange})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Main Step Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Steps List in Current Phase */}
          <div className="lg:col-span-4 rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-3 max-h-[800px] overflow-y-auto">
            <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-electric-blue font-bold uppercase">
                  Phase {currentPhase.phaseNumber} of 10
                </div>
                <div className="text-sm font-bold text-white">
                  {currentPhase.title}
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-400">
                {phaseCompletedCount}/{stepsInCurrentPhase.length}
              </span>
            </div>

            {/* Steps in this phase */}
            <div className="space-y-1">
              {stepsInCurrentPhase.map((step) => {
                const isSelected = step.stepNumber === currentStepNumber;
                const isDone = !!completedSteps[step.stepNumber];

                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => goToStep(step.stepNumber)}
                    className={cn(
                      "w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start justify-between gap-2.5 border",
                      isSelected
                        ? "bg-electric-blue/20 border-electric-blue text-white font-semibold shadow-md"
                        : isDone
                        ? "bg-emerald-500/10 border-emerald-500/20 text-slate-300 hover:bg-emerald-500/15"
                        : "bg-navy-950/40 border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <span className={cn(
                        "w-5 h-5 rounded-md text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5",
                        isSelected
                          ? "bg-electric-blue text-white"
                          : isDone
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-white/5 text-slate-400"
                      )}>
                        {isDone ? "✓" : step.stepNumber}
                      </span>
                      <span className="truncate leading-tight">
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick jump to all phases */}
            <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 text-center">
              Click any phase pill above to switch phases.
            </div>
          </div>

          {/* Right Column: Step Focus Card with 10 Required Sections */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step Card */}
            <div className="rounded-3xl bg-navy-900/90 border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/20 border border-electric-blue/30 text-electric-blue flex items-center justify-center font-mono font-bold text-sm">
                    {currentStep.stepNumber}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-electric-blue">
                      Phase {currentStep.phaseNumber}: {currentStep.phaseTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      Step {currentStep.stepNumber}: {currentStep.title}
                    </h2>
                  </div>
                </div>

                {/* Mark Completed Button */}
                <button
                  onClick={() => toggleStepCompleted(currentStep.stepNumber)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all border",
                    completedSteps[currentStep.stepNumber]
                      ? "bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/20"
                      : "bg-navy-850 hover:bg-navy-800 text-slate-300 border-white/10"
                  )}
                >
                  <Check className="w-4 h-4" />
                  <span>
                    {completedSteps[currentStep.stepNumber] ? "Step Completed!" : "Mark Step Completed"}
                  </span>
                </button>
              </div>

              {/* Step Summary */}
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {currentStep.summary}
              </p>

              {/* Official Link if applicable */}
              {currentStep.officialUrl && (
                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Official Web Resource:</span>
                  <a
                    href={currentStep.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-electric-blue hover:text-sky-300 font-semibold"
                  >
                    <span>Open {currentStep.officialUrlLabel || currentStep.officialUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* THE 10 CRITICAL ACTIONS (CLICK-BY-CLICK) */}
              <div className="space-y-4 pt-2">
                
                {/* 1. What to Open & 2. Where to Click */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                      <FolderPlus className="w-3.5 h-3.5" />
                      <span>1. What to Open</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {currentStep.whatToOpen}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-electric-blue flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>2. Where to Click</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {currentStep.whereToClick}
                    </p>
                  </div>
                </div>

                {/* 3. What Information to Enter */}
                <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>3. What Information to Enter</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentStep.whatToEnter}
                  </p>
                </div>

                {/* 4. What to Copy & 5. Where to Paste (if present) */}
                {(currentStep.whatToCopy || currentStep.whereToPaste) && (
                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-purple-500/20 space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300">
                      4 & 5. Copy & Paste Instructions
                    </div>
                    {currentStep.whatToCopy && (
                      <div className="flex items-start justify-between gap-3 text-xs">
                        <div>
                          <strong className="text-slate-300">What to copy: </strong>
                          <span className="font-mono text-emerald-400">{currentStep.whatToCopy}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(currentStep.whatToCopy!, `copy-step-${currentStep.stepNumber}`)}
                          className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-slate-200 shrink-0 flex items-center gap-1 font-sans"
                        >
                          {copiedId === `copy-step-${currentStep.stepNumber}` ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    {currentStep.whereToPaste && (
                      <div className="text-xs text-slate-300">
                        <strong className="text-slate-400">Where to paste: </strong>
                        <span className="text-slate-200 font-mono">{currentStep.whereToPaste}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* 6. What Command to Execute (if present) */}
                {currentStep.whatCommandToExecute && (
                  <div className="p-4 rounded-2xl bg-black/70 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>6. Command to Execute</span>
                      </span>
                      <button
                        onClick={() => handleCopy(currentStep.whatCommandToExecute!, `cmd-${currentStep.stepNumber}`)}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-sans flex items-center gap-1"
                      >
                        {copiedId === `cmd-${currentStep.stepNumber}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Command</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-3 rounded-xl bg-black text-emerald-400 overflow-x-auto select-all">
                      $ {currentStep.whatCommandToExecute}
                    </div>
                  </div>
                )}

                {/* 7. What Output to Expect */}
                <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5 space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>7. What Output to Expect (Example)</span>
                  </div>
                  <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed select-all">
                    {currentStep.whatOutputToExpect}
                  </pre>
                </div>

                {/* 8. What to Do If It Fails */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>8. What to Do If It Fails</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentStep.whatToDoIfFails}
                  </p>
                </div>

                {/* 9. How to Verify Success */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>9. How to Verify Success</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentStep.howToVerifySuccess}
                  </p>
                </div>

                {/* 10. Next Step */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 border border-electric-blue/30 space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-electric-blue flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>10. Next Step</span>
                  </div>
                  <p className="text-xs text-white leading-relaxed font-medium">
                    {currentStep.nextStep}
                  </p>
                </div>

              </div>

              {/* Personal Notes for This Step */}
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5 text-electric-blue" />
                    <span>Your Notes for Step {currentStep.stepNumber}</span>
                  </span>
                  <span className="text-[11px] text-slate-500">Auto-saved in browser</span>
                </div>
                <textarea
                  value={stepNotes[currentStep.stepNumber] || ""}
                  onChange={(e) => handleNoteChange(currentStep.stepNumber, e.target.value)}
                  placeholder="e.g. My repository URL is https://github.com/my-name/my-first-website.git. My password is saved."
                  rows={2}
                  className="w-full text-xs rounded-xl bg-navy-900 border border-white/10 p-2.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-electric-blue font-mono"
                />
              </div>

              {/* Step Navigation Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  disabled={currentStepNumber <= 1}
                  onClick={() => goToStep(currentStepNumber - 1)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Step ({currentStepNumber - 1})</span>
                </button>

                <div className="text-xs text-slate-400 font-mono">
                  Step {currentStepNumber} of {CHRONOLOGICAL_STEPS.length}
                </div>

                <button
                  disabled={currentStepNumber >= CHRONOLOGICAL_STEPS.length}
                  onClick={() => {
                    // Auto-mark completed when advancing
                    if (!completedSteps[currentStep.stepNumber]) {
                      toggleStepCompleted(currentStep.stepNumber);
                    }
                    goToStep(currentStepNumber + 1);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-indigo hover:from-blue-600 hover:to-indigo-600 text-white text-xs font-bold shadow-lg shadow-blue-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <span>Mark Done & Next Step &rarr;</span>
                </button>
              </div>

            </div>

            {/* Cross-Link Help Box */}
            <div className="p-4 rounded-2xl bg-navy-900/60 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-slate-400">Need auxiliary reference tools?</span>
              <div className="flex items-center gap-3">
                <Link href="/commands" className="text-electric-blue hover:underline flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Command Library</span>
                </Link>
                <Link href="/prompts" className="text-purple-400 hover:underline flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Prompt Vault</span>
                </Link>
                <Link href="/troubleshooting" className="text-amber-400 hover:underline flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Troubleshooting Hub</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    )}

      </div>
    </div>
  );
}
