"use client";

import React, { useState } from "react";
import { Sparkles, Copy, Check, Terminal, Cpu, RefreshCw } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

interface PromptTemplate {
  id: string;
  tool: "ChatGPT" | "Google Antigravity";
  category: "planning" | "frontend" | "backend" | "database" | "auth" | "deployment" | "debugging";
  title: string;
  purpose: string;
  whenToUse: string;
  template: (vars: { projectName: string; audience: string; features: string }) => string;
}

const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "p1",
    tool: "ChatGPT",
    category: "planning",
    title: "Master Architecture Specification",
    purpose: "Generates an end-to-end database, API endpoint, and component blueprint for your website concept.",
    whenToUse: "Use in ChatGPT before touching any code.",
    template: ({ projectName, audience, features }) =>
`Act as a principal software architect. I am an absolute beginner planning my first web project: "${projectName}".
Target Audience: ${audience}.
Core Features: ${features}.
Please generate a beginner-friendly project specification:
1. Exact frontend pages and React components needed.
2. REST API endpoints (GET, POST, PUT, DELETE) with descriptions.
3. MongoDB collection schemas (document fields, types, and relationships).
4. Environment variable names needed.
5. Recommended folder hierarchy (frontend/ and backend/).
Keep technical jargon explained in simple English.`
  },
  {
    id: "p2",
    tool: "Google Antigravity",
    category: "frontend",
    title: "Generate Complete React + Vite + Tailwind UI",
    purpose: "Instructs Google Antigravity to build responsive, accessible React components with zero missing placeholders.",
    whenToUse: "Paste into Google Antigravity after initializing the frontend folder.",
    template: ({ projectName, features }) =>
`In the 'frontend' directory for my project "${projectName}":
Please build a clean, responsive web application implementing these features: ${features}.
Requirements:
1. Use React 18+ with Vite and Tailwind CSS.
2. Implement modern mobile-first styling with dark/light theme support.
3. Use Lucide React icons for all visual indicators.
4. Add clean loading skeletons and empty states.
5. Provide working form validation and clear error alert states.
6. Centralize API calls in 'src/lib/api.ts' using Axios with base URL fallback to http://localhost:8000.
Do not leave any placeholder comments or partial code.`
  },
  {
    id: "p3",
    tool: "Google Antigravity",
    category: "backend",
    title: "FastAPI REST API with Motor & Pydantic",
    purpose: "Generates typed, secure API endpoints with CORS and database lifecycle management.",
    whenToUse: "Paste into Google Antigravity to build the backend server.",
    template: ({ projectName, features }) =>
`In the 'backend' folder for "${projectName}":
Build a production-quality Python FastAPI application:
1. 'app/main.py' with CORS middleware configured for http://localhost:5173.
2. 'app/database.py' connecting asynchronously to MongoDB using Motor, reading 'MONGODB_URI' from environment variables.
3. Pydantic schemas validating all incoming request bodies.
4. Implement endpoints for: ${features}.
5. Add a '/api/health' endpoint that pings MongoDB and returns status 200.
6. Provide a 'requirements.txt' with all pinned dependencies.`
  },
  {
    id: "p4",
    tool: "Google Antigravity",
    category: "auth",
    title: "Bcrypt Hashing & Brevo Email OTP Verification",
    purpose: "Creates real user registration with 6-digit OTP delivery via Brevo transactional emails.",
    whenToUse: "Paste into Antigravity for Stage 9 authentication.",
    template: ({ projectName }) =>
`Implement a production-grade authentication and email verification system for "${projectName}":
1. User signup with email, password, and full name.
2. Securely hash passwords using bcrypt before saving to MongoDB with 'is_verified': False.
3. Generate a cryptographically random 6-digit OTP with a 10-minute expiry time.
4. Dispatch the verification email via Brevo's REST API using 'BREVO_API_KEY'.
5. An endpoint to verify the OTP: on success, mark 'is_verified': True and return a signed JWT token.
6. A login endpoint checking password hashes and returning JWT.`
  },
  {
    id: "p5",
    tool: "Google Antigravity",
    category: "debugging",
    title: "Autonomous Error Diagnosis & Fix",
    purpose: "Feeds a terminal or browser console error to Antigravity to pinpoint root cause and fix.",
    whenToUse: "Whenever you encounter a red error message in your terminal or browser console.",
    template: () =>
`I ran into this error while running my project:
[PASTE YOUR ERROR MESSAGE OR LOG HERE]
Please:
1. Explain what this error means in plain English.
2. Identify which file and exact line of code caused it.
3. Explain why it occurred.
4. Apply the exact fix to the codebase and verify that it resolves the issue.`
  }
];

export default function PromptsPage() {
  const [vars, setVars] = useState({
    projectName: "Aura Candles",
    audience: "Eco-conscious homeowners and gift buyers",
    features: "Product catalog, custom scent mixer, user auth with email OTP, order tracking"
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<"all" | "ChatGPT" | "Google Antigravity">("all");

  const handleCopy = async (text: string, id: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filtered = PROMPT_TEMPLATES.filter(
    (p) => selectedTool === "all" || p.tool === selectedTool
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/15 border border-electric-violet/30 text-xs font-semibold text-electric-violet">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Prompt Engineering Vault</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Prompts for ChatGPT & Google Antigravity
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            The secret to building real software with AI is asking the right questions with precise technical requirements. Customize these battle-tested prompt templates and paste them directly into ChatGPT or Google Antigravity.
          </p>
        </div>

        {/* Dynamic Variable Customizer */}
        <div className="p-6 rounded-2xl bg-navy-900/90 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-electric-blue" />
              <span>Personalize Prompts with Your Project Details</span>
            </h3>
            <span className="text-xs text-slate-400">Updates all templates live below</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={vars.projectName}
                onChange={(e) => setVars({ ...vars, projectName: e.target.value })}
                className="w-full text-xs rounded-xl bg-navy-950 border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Target Audience
              </label>
              <input
                type="text"
                value={vars.audience}
                onChange={(e) => setVars({ ...vars, audience: e.target.value })}
                className="w-full text-xs rounded-xl bg-navy-950 border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Main Features
              </label>
              <input
                type="text"
                value={vars.features}
                onChange={(e) => setVars({ ...vars, features: e.target.value })}
                className="w-full text-xs rounded-xl bg-navy-950 border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>
          </div>
        </div>

        {/* Tool Filter Tabs */}
        <div className="flex items-center gap-2">
          {(["all", "ChatGPT", "Google Antigravity"] as const).map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                selectedTool === tool
                  ? "bg-electric-blue text-white shadow-md shadow-blue-500/20"
                  : "bg-navy-900 text-slate-300 hover:text-white border border-white/5"
              }`}
            >
              {tool === "all" ? "All Prompts" : tool}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="space-y-6">
          {filtered.map((item) => {
            const promptText = item.template(vars);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-navy-900/80 border border-white/10 p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold ${
                      item.tool === "Google Antigravity"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    }`}>
                      {item.tool}
                    </span>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>

                  <button
                    onClick={() => handleCopy(promptText, item.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue border border-electric-blue/30 text-xs font-semibold transition-all"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-300">
                  {item.purpose}
                </p>

                <div className="text-[11px] text-slate-400 font-mono">
                  <strong>When to use: </strong> {item.whenToUse}
                </div>

                <pre className="p-4 rounded-xl bg-black/60 border border-white/10 text-slate-200 text-xs font-mono whitespace-pre-wrap leading-relaxed select-all">
                  {promptText}
                </pre>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

