"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Globe, 
  Terminal, 
  Database, 
  Sparkles, 
  Mail, 
  GitBranch, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ArchitecturePage() {
  const [frontendChoice, setFrontendChoice] = useState<"react" | "next">("react");
  const [backendChoice, setBackendChoice] = useState<"fastapi" | "express">("fastapi");
  const [hasAi, setHasAi] = useState(true);
  const [hasEmail, setHasEmail] = useState(true);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Topology Visualizer</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full-Stack Project Architecture
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            See how your website functions as an interconnected ecosystem. Toggle integrations to watch the live data flow adapt between the client, your server, the cloud database, and external APIs.
          </p>
        </div>

        {/* Configuration Bar */}
        <div className="p-6 rounded-2xl bg-navy-900/90 border border-white/10 space-y-4">
          <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Configure Your Target Architecture
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Frontend Stack</label>
              <select
                value={frontendChoice}
                onChange={(e) => setFrontendChoice(e.target.value as any)}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-electric-blue font-mono"
              >
                <option value="react">React 18 + Vite (on Vercel)</option>
                <option value="next">Next.js 15 App Router</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Backend Stack</label>
              <select
                value={backendChoice}
                onChange={(e) => setBackendChoice(e.target.value as any)}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-electric-blue font-mono"
              >
                <option value="fastapi">Python FastAPI (on Render)</option>
                <option value="express">Node.js Express</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-navy-950 border border-white/10 text-slate-300">
                <input
                  type="checkbox"
                  checked={hasAi}
                  onChange={(e) => setHasAi(e.target.checked)}
                  className="rounded text-electric-blue focus:ring-0"
                />
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Google Gemini AI</span>
              </label>
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-navy-950 border border-white/10 text-slate-300">
                <input
                  type="checkbox"
                  checked={hasEmail}
                  onChange={(e) => setHasEmail(e.target.checked)}
                  className="rounded text-electric-blue focus:ring-0"
                />
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Brevo Email OTP</span>
              </label>
            </div>
          </div>
        </div>

        {/* Live Topology Diagram Canvas */}
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative items-center">
            
            {/* Node 1: Client / Browser */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-blue-500/40 space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-electric-blue mx-auto flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Visitor Browser</h4>
                <p className="text-xs text-electric-blue font-mono">React UI on Vercel</p>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Runs HTML/CSS/JS in user&apos;s browser. Sends Axios requests with JWT auth headers.
              </p>
              <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400 font-mono">
                Port 5173 / HTTPS Edge
              </div>
            </div>

            {/* Node 2: Backend API */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-purple-500/40 space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-300 mx-auto flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {backendChoice === "fastapi" ? "FastAPI Backend" : "Express Server"}
                </h4>
                <p className="text-xs text-purple-300 font-mono">Hosted on Render</p>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Validates data with Pydantic, checks CORS headers, hashes passwords with bcrypt.
              </p>
              <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400 font-mono">
                Port 8000 / $PORT Cloud
              </div>
            </div>

            {/* Node 3: Cloud Database */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-emerald-500/40 space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">MongoDB Atlas</h4>
                <p className="text-xs text-emerald-400 font-mono">M0 Free Cluster</p>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Persists collections (`users`, `orders`, `otps`) over secure encrypted TLS connection.
              </p>
              <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400 font-mono">
                TLS 27017 / 0.0.0.0/0 IP
              </div>
            </div>

            {/* Node 4: External Services Vault */}
            <div className="p-6 rounded-2xl bg-navy-900 border border-white/10 space-y-3 relative text-center">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-amber-300 mx-auto flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Backend-Only Vault</h4>
                <p className="text-xs text-amber-400 font-mono">Zero Client Leaks</p>
              </div>
              
              <div className="space-y-2 pt-1 text-[11px]">
                {hasAi && (
                  <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center gap-1.5 justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Gemini AI API</span>
                  </div>
                )}

                {hasEmail && (
                  <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 flex items-center gap-1.5 justify-center">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Brevo OTP (300/day free)</span>
                  </div>
                )}

                <div className="p-2 rounded bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5 justify-center font-mono">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub CI/CD Auto Deploy</span>
                </div>
              </div>
            </div>

          </div>

          {/* Critical Security Invariant Callout */}
          <div className="mt-10 p-4 rounded-xl bg-navy-900/90 border border-emerald-500/30 flex items-center gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white">Security Rule Enforced: </strong>
              The Visitor Browser ONLY talks to your Backend API. The Gemini API keys, Brevo keys, and MongoDB connection strings NEVER leave your server.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

