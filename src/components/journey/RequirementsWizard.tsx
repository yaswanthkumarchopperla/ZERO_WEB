"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  Database, 
  Mail, 
  Cpu, 
  Globe, 
  Terminal, 
  ArrowRight, 
  RotateCcw, 
  Save, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  UserRequirements, 
  DEFAULT_REQUIREMENTS, 
  analyzeRequirements, 
  saveUserRequirements, 
  loadUserRequirements,
  ArchitectureRecommendation 
} from "@/lib/user-requirements";
import { cn } from "@/lib/utils";

interface RequirementsWizardProps {
  onSaved?: (req: UserRequirements, rec: ArchitectureRecommendation) => void;
  className?: string;
}

export function RequirementsWizard({ onSaved, className }: RequirementsWizardProps) {
  const [req, setReq] = useState<UserRequirements>(DEFAULT_REQUIREMENTS);
  const [recommendation, setRecommendation] = useState<ArchitectureRecommendation>(
    analyzeRequirements(DEFAULT_REQUIREMENTS)
  );
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loaded = loadUserRequirements();
    setReq(loaded);
    setRecommendation(analyzeRequirements(loaded));
  }, []);

  const handleChange = (key: keyof UserRequirements, value: any) => {
    const updated = { ...req, [key]: value };
    setReq(updated);
    setRecommendation(analyzeRequirements(updated));
    setSaveSuccess(false);
  };

  const handleSave = () => {
    saveUserRequirements(req);
    const rec = analyzeRequirements(req);
    setRecommendation(rec);
    setSaveSuccess(true);
    if (onSaved) {
      onSaved(req, rec);
    }
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const loadExample = (type: "ecommerce" | "portfolio" | "ai-tool") => {
    let example: UserRequirements;
    if (type === "portfolio") {
      example = {
        websiteName: "Alex Rivera Portfolio",
        idea: "A modern developer and UI designer portfolio showcasing web projects, case studies, and an interactive contact form.",
        purpose: "Display my college projects, skills, resume download, and allow recruiters to contact me.",
        targetAudience: "Hiring managers, startup founders, and design recruiters.",
        mainPages: "Home, Projects, About Me, Skills, Resume, Contact.",
        requiredFeatures: "Project gallery with live preview links, interactive dark mode, resume PDF viewer, and responsive layout.",
        needsAuth: "no",
        needsOtp: "no",
        needsUserDataStorage: "no",
        needsDatabase: "no",
        needsAi: "no",
        needsFileUploads: "no",
        needsPayments: "no",
        needsAdminDashboard: "no",
        expectedTraffic: "low",
        preferredTech: "React 18, Vite, Tailwind CSS, Vercel",
        experienceLevel: "absolute_beginner",
      };
    } else if (type === "ai-tool") {
      example = {
        websiteName: "StudyGenie AI",
        idea: "An AI study assistant that converts complex textbook notes into flashcards, bullet summaries, and quiz questions.",
        purpose: "Help college students study 3x faster with AI summarization and active recall quizzes.",
        targetAudience: "High school and university students preparing for exams.",
        mainPages: "Homepage, Note Converter, Flashcards, Quiz Generator, User Dashboard.",
        requiredFeatures: "Text paste box, Google Gemini summarization, flashcard flip cards, user accounts, and saved note history.",
        needsAuth: "yes",
        needsOtp: "yes",
        needsUserDataStorage: "yes",
        needsDatabase: "yes",
        needsAi: "yes",
        needsFileUploads: "no",
        needsPayments: "no",
        needsAdminDashboard: "no",
        expectedTraffic: "medium",
        preferredTech: "React, Vite, Python FastAPI, MongoDB Atlas, Google Gemini API",
        experienceLevel: "absolute_beginner",
      };
    } else {
      example = DEFAULT_REQUIREMENTS;
    }

    setReq(example);
    setRecommendation(analyzeRequirements(example));
    saveUserRequirements(example);
    setSaveSuccess(true);
    if (onSaved) {
      onSaved(example, analyzeRequirements(example));
    }
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const toggleExplanation = (key: string) => {
    setExpandedExplanations((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={cn("space-y-8", className)}>
      
      {/* Wizard Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/90 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Requirements Analyzer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              UNDERSTAND MY WEBSITE REQUIREMENTS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Before writing prompts or generating code, define your website in plain English. ZERO_WEB explains every technical option, automatically determines whether you need a database, backend, or AI, and eliminates unnecessary complexity.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
            <span className="text-[11px] font-mono text-slate-400 font-semibold block">Load Preset Example:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => loadExample("ecommerce")}
                className="px-2.5 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 transition-colors font-medium"
              >
                🕯️ Aura Candles (Full-Stack)
              </button>
              <button
                type="button"
                onClick={() => loadExample("portfolio")}
                className="px-2.5 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 transition-colors font-medium"
              >
                💼 Portfolio (Frontend Only)
              </button>
              <button
                type="button"
                onClick={() => loadExample("ai-tool")}
                className="px-2.5 py-1.5 rounded-lg bg-navy-850 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 transition-colors font-medium"
              >
                🤖 StudyGenie (AI + DB)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form & Live Architecture Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 17 Requirement Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card 1: Core Vision & Identity */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-electric-blue/20 text-electric-blue text-xs font-mono font-bold flex items-center justify-center">
                1
              </span>
              <span>Website Vision & Purpose</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  1. Website / Project Name
                </label>
                <input
                  type="text"
                  value={req.websiteName}
                  onChange={(e) => handleChange("websiteName", e.target.value)}
                  placeholder="e.g. Aura Candles, QuickBite, DevFolio"
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  2. What is your website idea?
                </label>
                <textarea
                  value={req.idea}
                  onChange={(e) => handleChange("idea", e.target.value)}
                  rows={2}
                  placeholder="Describe what your website does in normal everyday English..."
                  className="w-full bg-navy-950 border border-white/10 rounded-xl p-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-200 font-semibold mb-1">
                    3. Main Purpose
                  </label>
                  <input
                    type="text"
                    value={req.purpose}
                    onChange={(e) => handleChange("purpose", e.target.value)}
                    placeholder="e.g. Sell products, showcase portfolio, share notes"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-1">
                    4. Target Audience
                  </label>
                  <input
                    type="text"
                    value={req.targetAudience}
                    onChange={(e) => handleChange("targetAudience", e.target.value)}
                    placeholder="e.g. College students, local clients, gamers"
                    className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pages & Structure */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-electric-indigo/20 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center">
                2
              </span>
              <span>Pages & Core Features</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  5. Main Pages Needed
                </label>
                <input
                  type="text"
                  value={req.mainPages}
                  onChange={(e) => handleChange("mainPages", e.target.value)}
                  placeholder="e.g. Homepage, Catalog, Product Detail, Cart, About, Contact"
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Tip: Start with 3 to 5 core pages for your launch MVP (Minimum Viable Product).
                </span>
              </div>

              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  6. Main Interactive Features
                </label>
                <textarea
                  value={req.requiredFeatures}
                  onChange={(e) => handleChange("requiredFeatures", e.target.value)}
                  rows={2}
                  placeholder="e.g. Interactive scent mixer, search filter, shopping cart, dark theme, contact form..."
                  className="w-full bg-navy-950 border border-white/10 rounded-xl p-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Interactive Capabilities & Technical Options (Explained for Beginners!) */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-electric-violet/20 text-purple-400 text-xs font-mono font-bold flex items-center justify-center">
                3
              </span>
              <span>Technical Requirements (Explained in Plain English)</span>
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Question 7: User Registration & Login */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>7. Do visitors need User Accounts (Login & Sign Up)?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(["yes", "no", "unsure"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsAuth", opt)}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all",
                          req.needsAuth === opt
                            ? "bg-electric-blue text-white shadow-sm"
                            : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  <strong className="text-slate-300">What this means: </strong>
                  If Yes, users can create private accounts with passwords. If No, any visitor can use the site immediately without logging in.
                </p>
              </div>

              {/* Question 8: Email OTP Verification */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>8. Do you need Email OTP Verification?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(["yes", "no", "unsure"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsOtp", opt)}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all",
                          req.needsOtp === opt
                            ? "bg-electric-blue text-white shadow-sm"
                            : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  <strong className="text-slate-300">What this means: </strong>
                  Sends a real 6-digit verification code to the user&apos;s email address via Brevo to confirm they own it.
                </p>
              </div>

              {/* Question 9 & 10: Persistent Database Storage */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>9 & 10. Does your website need a Database to store data?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(["yes", "no", "unsure"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          handleChange("needsDatabase", opt);
                          handleChange("needsUserDataStorage", opt);
                        }}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all",
                          req.needsDatabase === opt
                            ? "bg-electric-blue text-white shadow-sm"
                            : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  <strong className="text-slate-300">What this means: </strong>
                  A database (like MongoDB Atlas) permanently stores user profiles, items, or orders. If your website only displays static portfolio information, you do <strong className="text-emerald-400">NOT</strong> need a database!
                </p>
              </div>

              {/* Question 11: AI Integration (Gemini) */}
              <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span>11. Do you need Generative AI features?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(["yes", "no", "unsure"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsAi", opt)}
                        className={cn(
                          "px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all",
                          req.needsAi === opt
                            ? "bg-electric-blue text-white shadow-sm"
                            : "bg-navy-900 text-slate-400 hover:text-white border border-white/5"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  <strong className="text-slate-300">What this means: </strong>
                  Allows your website to call Google Gemini to summarize text, provide personalized recommendations, or power an AI chatbot assistant.
                </p>
              </div>

              {/* Question 12, 13, 14: Files, Payments, Admin */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* 12. File Uploads */}
                <div className="p-3 rounded-xl bg-navy-950/50 border border-white/5 space-y-1.5">
                  <span className="font-semibold text-slate-200 block text-[11px]">12. File Uploads?</span>
                  <div className="flex items-center gap-1">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsFileUploads", opt)}
                        className={cn(
                          "px-2 py-0.5 rounded text-[11px] font-semibold uppercase transition-all",
                          req.needsFileUploads === opt
                            ? "bg-electric-blue text-white"
                            : "bg-navy-900 text-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 block">User photo uploads</span>
                </div>

                {/* 13. Payments */}
                <div className="p-3 rounded-xl bg-navy-950/50 border border-white/5 space-y-1.5">
                  <span className="font-semibold text-slate-200 block text-[11px]">13. Online Payments?</span>
                  <div className="flex items-center gap-1">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsPayments", opt)}
                        className={cn(
                          "px-2 py-0.5 rounded text-[11px] font-semibold uppercase transition-all",
                          req.needsPayments === opt
                            ? "bg-electric-blue text-white"
                            : "bg-navy-900 text-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 block">Stripe credit cards</span>
                </div>

                {/* 14. Admin Dashboard */}
                <div className="p-3 rounded-xl bg-navy-950/50 border border-white/5 space-y-1.5">
                  <span className="font-semibold text-slate-200 block text-[11px]">14. Admin Portal?</span>
                  <div className="flex items-center gap-1">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleChange("needsAdminDashboard", opt)}
                        className={cn(
                          "px-2 py-0.5 rounded text-[11px] font-semibold uppercase transition-all",
                          req.needsAdminDashboard === opt
                            ? "bg-electric-blue text-white"
                            : "bg-navy-900 text-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 block">Site owner controls</span>
                </div>

              </div>

            </div>
          </div>

          {/* Card 4: Experience & Preferences */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">
                4
              </span>
              <span>Your Experience & Preferences</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  15. Your Experience Level
                </label>
                <select
                  value={req.experienceLevel}
                  onChange={(e) => handleChange("experienceLevel", e.target.value as any)}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-electric-blue"
                >
                  <option value="absolute_beginner">Absolute Beginner (Never coded before)</option>
                  <option value="some_html_css">Know some basic HTML / CSS</option>
                  <option value="intermediate">Intermediate (Built a small site before)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-200 font-semibold mb-1">
                  16. Expected Initial Traffic
                </label>
                <select
                  value={req.expectedTraffic}
                  onChange={(e) => handleChange("expectedTraffic", e.target.value as any)}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-electric-blue"
                >
                  <option value="low">Launch MVP / Low (&lt; 1,000 visitors/mo)</option>
                  <option value="medium">Medium (1,000 - 50,000 visitors/mo)</option>
                  <option value="high">High (&gt; 50,000 visitors/mo)</option>
                  <option value="unsure">Not sure yet (Start on free tier)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-200 font-semibold mb-1">
                  17. Preferred Technologies (Optional)
                </label>
                <input
                  type="text"
                  value={req.preferredTech}
                  onChange={(e) => handleChange("preferredTech", e.target.value)}
                  placeholder="e.g. React, Tailwind, Python FastAPI (or leave default for recommended)"
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
                />
              </div>
            </div>

            {/* Save Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleSave}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-electric-indigo text-white font-bold text-xs shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save Requirements & Personalize Journey</span>
              </button>

              {saveSuccess && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold animate-pulse">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Requirements Saved to Browser!</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Dynamic Architecture Recommendation */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          
          <div className="rounded-3xl bg-navy-900/90 border border-electric-blue/30 p-6 sm:p-7 space-y-6 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-wider text-electric-blue font-bold">
                Automated Architecture Analysis
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                100% Free Tiers
              </span>
            </div>

            {/* Complexity Badge */}
            <div>
              <div className="text-xs text-slate-400 mb-1">Recommended Architecture:</div>
              <h3 className="text-xl font-extrabold text-white bg-gradient-to-r from-white via-sky-200 to-electric-blue bg-clip-text text-transparent">
                {recommendation.overallComplexity}
              </h3>
            </div>

            {/* Plain English Summary */}
            <p className="text-xs text-slate-300 leading-relaxed p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
              {recommendation.architectureSummary}
            </p>

            {/* Recommended Stack Components */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-electric-blue" />
                <span>Service Breakdown for &quot;{req.websiteName}&quot;</span>
              </div>

              {/* Frontend */}
              <div className="p-3 rounded-xl bg-navy-950/80 border border-blue-500/30 flex items-start justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-electric-blue" />
                    <span>Frontend UI</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {recommendation.frontendStack}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0">
                  Required
                </span>
              </div>

              {/* Backend */}
              <div className={cn(
                "p-3 rounded-xl border flex items-start justify-between gap-3 text-xs transition-colors",
                recommendation.backendNeeded
                  ? "bg-navy-950/80 border-purple-500/30"
                  : "bg-navy-950/40 border-white/5 opacity-60"
              )}>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>Backend Server</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {recommendation.backendStack}
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded shrink-0",
                  recommendation.backendNeeded
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 bg-white/5"
                )}>
                  {recommendation.backendNeeded ? "Included" : "Skipped (Not Needed)"}
                </span>
              </div>

              {/* Database */}
              <div className={cn(
                "p-3 rounded-xl border flex items-start justify-between gap-3 text-xs transition-colors",
                recommendation.databaseNeeded
                  ? "bg-navy-950/80 border-emerald-500/30"
                  : "bg-navy-950/40 border-white/5 opacity-60"
              )}>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Database</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {recommendation.databaseStack}
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded shrink-0",
                  recommendation.databaseNeeded
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 bg-white/5"
                )}>
                  {recommendation.databaseNeeded ? "Included" : "Skipped (Not Needed)"}
                </span>
              </div>

              {/* Email OTP */}
              <div className={cn(
                "p-3 rounded-xl border flex items-start justify-between gap-3 text-xs transition-colors",
                recommendation.otpNeeded
                  ? "bg-navy-950/80 border-sky-500/30"
                  : "bg-navy-950/40 border-white/5 opacity-60"
              )}>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Email OTP</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Brevo REST API (300/day free)
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded shrink-0",
                  recommendation.otpNeeded
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 bg-white/5"
                )}>
                  {recommendation.otpNeeded ? "Included" : "Skipped"}
                </span>
              </div>

              {/* AI Integration */}
              <div className={cn(
                "p-3 rounded-xl border flex items-start justify-between gap-3 text-xs transition-colors",
                recommendation.aiNeeded
                  ? "bg-navy-950/80 border-purple-500/30"
                  : "bg-navy-950/40 border-white/5 opacity-60"
              )}>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>AI Capabilities</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Google Gemini Multimodal API
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded shrink-0",
                  recommendation.aiNeeded
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-slate-400 bg-white/5"
                )}>
                  {recommendation.aiNeeded ? "Included" : "Skipped"}
                </span>
              </div>
            </div>

            {/* Smart Skipping Explanations */}
            {recommendation.skippedPhases.length > 0 && (
              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Smart Simplicity (Phases Skipped for Your Site):</span>
                </div>
                <div className="space-y-1.5">
                  {recommendation.skippedPhases.map((sp) => (
                    <div key={sp.phaseNumber} className="p-2.5 rounded-lg bg-navy-950 border border-white/5 text-[11px] text-slate-400">
                      <strong className="text-slate-200">Phase {sp.phaseNumber} ({sp.phaseTitle}): </strong>
                      <span>{sp.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Save & Apply Architecture to Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
