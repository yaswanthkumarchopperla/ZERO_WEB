import React from "react";
import Link from "next/link";
import { 
  Terminal, 
  Sparkles, 
  Wrench, 
  Layers, 
  Cpu, 
  FileText, 
  ArrowRight,
  Copy,
  Search,
  CheckCircle2
} from "lucide-react";

const FEATURES = [
  {
    title: "Searchable Command Library",
    description: "Every terminal command you will ever need—labeled by Windows/Mac, where to run it, what output to expect, and instant copy buttons.",
    icon: Terminal,
    href: "/commands",
    badge: "Windows & Mac",
    color: "from-blue-500/20 to-sky-500/10",
    iconColor: "text-sky-400"
  },
  {
    title: "AI Prompt Vault",
    description: "Copy-paste ready, battle-tested prompt templates for ChatGPT (architecture) and Google Antigravity (code generation, debugging, security audits).",
    icon: Sparkles,
    href: "/prompts",
    badge: "ChatGPT + Antigravity",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-400"
  },
  {
    title: "Beginner Troubleshooting Center",
    description: "Search 15+ classic beginner traps (like 'npm not recognized', CORS errors, MongoDB timeouts, or Vercel 404s) with a 5-part diagnosis and verified fix.",
    icon: Wrench,
    href: "/troubleshooting",
    badge: "15+ Common Errors",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400"
  },
  {
    title: "Interactive Architecture Visualizer",
    description: "A dynamic visual topology showing how User &rarr; React Frontend &rarr; FastAPI Backend &rarr; MongoDB Atlas connect together in real time.",
    icon: Layers,
    href: "/architecture",
    badge: "Live Diagram",
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400"
  },
  {
    title: "Website Technology Map",
    description: "Demystify every developer tool—understand what Git does vs GitHub, why Vite is faster than old React, and what Render and Vercel actually do.",
    icon: Cpu,
    href: "/tech-map",
    badge: "10 Essential Tools",
    color: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400"
  },
  {
    title: "Personal Project Dossier",
    description: "Automatically organizes your project's tech stack, folder hierarchy, live URLs, and environment variable names into an exportable Markdown guide.",
    icon: FileText,
    href: "/dashboard",
    badge: "Export to MD",
    color: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-400"
  }
];

export function FeatureGrid() {
  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Platform Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built-In Superpowers for Absolute Beginners
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Zero-Web isn't a static textbook. It's a suite of interactive instruments designed to prevent confusion and eliminate roadblocks.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <Link
                key={feat.title}
                href={feat.href}
                className="group relative rounded-2xl bg-navy-900/80 border border-white/10 hover:border-white/25 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feat.color} border border-white/10 flex items-center justify-center ${feat.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-electric-blue">
                  <span>Explore Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

