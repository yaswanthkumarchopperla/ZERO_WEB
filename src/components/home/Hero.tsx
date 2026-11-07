"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Rocket, 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
  Play
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"antigravity" | "backend" | "frontend">("antigravity");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-850/80 border border-electric-blue/30 text-xs font-medium text-electric-blue shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-electric-blue animate-ping" />
              <span>Zero Prior Coding Required</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Live Website in 17 Stages</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Zero Knowledge</span> to a <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Live Website.</span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your idea. Your first website. Your journey to the internet. We guide non-programmers through every click, command, prompt, and cloud setting—from your first blank folder to a deployed website on Vercel and Render.
            </p>

            {/* Key Pedagogical Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3 rounded-xl bg-navy-850/60 border border-white/5">
                <div className="text-electric-blue font-bold text-sm">Where to Click</div>
                <div className="text-xs text-slate-400">Exact UI navigation</div>
              </div>
              <div className="p-3 rounded-xl bg-navy-850/60 border border-white/5">
                <div className="text-electric-violet font-bold text-sm">What to Type</div>
                <div className="text-xs text-slate-400">Copyable terminal cmds</div>
              </div>
              <div className="p-3 rounded-xl bg-navy-850/60 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-emerald-400 font-bold text-sm">How to Fix Errors</div>
                <div className="text-xs text-slate-400">5-step diagnosis fixes</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/journey"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-blue via-blue-600 to-electric-indigo text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Rocket className="w-4 h-4" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <Link
                href="/architecture"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-850/90 hover:bg-navy-800 border border-white/10 text-slate-200 font-semibold text-sm hover:border-white/20 transition-all"
              >
                <Layers className="w-4 h-4 text-electric-blue" />
                <span>Explore Architecture</span>
              </Link>
            </div>

            {/* Social Proof / Security Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Hosting Tiers</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-electric-blue" />
                <span>Zero Secret Leaks Enforced</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Google Antigravity Powered</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Cockpit Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-navy-900/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Cockpit Window Header */}
              <div className="px-4 py-3 bg-navy-950/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-electric-blue" />
                    <span>Google Antigravity — Live Agent</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Cockpit Tabs */}
              <div className="flex items-center border-b border-white/10 bg-navy-950/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("antigravity")}
                  className={`px-4 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === "antigravity"
                      ? "border-electric-blue text-electric-blue bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Agent Task Log</span>
                </button>

                <button
                  onClick={() => setActiveTab("backend")}
                  className={`px-4 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === "backend"
                      ? "border-electric-blue text-electric-blue bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>FastAPI (:8000)</span>
                </button>

                <button
                  onClick={() => setActiveTab("frontend")}
                  className={`px-4 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === "frontend"
                      ? "border-electric-blue text-electric-blue bg-white/5 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 text-sky-400" />
                  <span>Vite (:5173)</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 font-mono text-xs leading-relaxed h-[310px] overflow-y-auto">
                {activeTab === "antigravity" && (
                  <div className="space-y-3">
                    <div className="text-slate-400">
                      <span className="text-electric-blue font-bold">[STAGE 04 &rarr; 14]</span> Full-Stack Autonomous Build
                    </div>
                    <div className="p-2.5 rounded-lg bg-navy-950/70 border border-white/5 space-y-1 text-slate-300">
                      <div className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Frontend: React + Vite + Tailwind initialized</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Backend: FastAPI with CORS & Motor MongoDB driver</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Auth: Bcrypt hashing + Brevo Email OTP verified</span>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Deploy: Render Web Service & Vercel Edge connected</span>
                      </div>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      $ git push -u origin main
                      <br />
                      <span className="text-purple-300">&rarr; Vercel Build: 200 OK (https://my-site.vercel.app)</span>
                      <br />
                      <span className="text-emerald-300">&rarr; Render Service: Live (https://api.onrender.com)</span>
                    </div>
                  </div>
                )}

                {activeTab === "backend" && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">$ uvicorn app.main:app --reload --port 8000</div>
                    <div className="text-sky-300">INFO: Will watch for changes in: ['/backend']</div>
                    <div className="text-emerald-400">INFO: Application startup complete.</div>
                    <div className="text-emerald-400">INFO: Connected to MongoDB Atlas cluster0.xxxx.mongodb.net</div>
                    <div className="text-purple-300">INFO: Swagger Docs live at http://127.0.0.1:8000/docs</div>
                    <div className="text-slate-400 text-[11px] pt-2">
                      GET /api/health 200 OK in 1.4ms
                      <br />
                      POST /api/auth/register 201 Created (OTP sent via Brevo)
                    </div>
                  </div>
                )}

                {activeTab === "frontend" && (
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">$ npm run dev</div>
                    <div className="text-sky-400 font-bold">VITE v5.4.11 ready in 280 ms</div>
                    <div className="pt-1">
                      <span className="text-slate-400">&bull; Local: </span>
                      <span className="text-emerald-400 underline">http://localhost:5173/</span>
                    </div>
                    <div className="pt-2 text-slate-400 text-[11px]">
                      [vite] hmr update /src/App.tsx
                      <br />
                      [vite] connected to backend at http://localhost:8000
                    </div>
                  </div>
                )}
              </div>

              {/* Cockpit Footer */}
              <div className="px-4 py-2.5 bg-navy-950/80 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>No secrets exposed in client bundle</span>
                </div>
                <Link href="/journey" className="text-electric-blue hover:underline flex items-center gap-1">
                  <span>Explore Stage 1</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

