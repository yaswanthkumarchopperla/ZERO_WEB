import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Globe, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Architect with ChatGPT",
    subtitle: "High-Level Blueprint & Prompts",
    description: "Start with your raw idea in plain English. ChatGPT structures your user stories, database models, and generates an exact, copyable developer prompt.",
    icon: Sparkles,
    accent: "from-blue-500 to-cyan-400",
    detail: "No code syntax knowledge needed—focus on what your website should do."
  },
  {
    number: "02",
    title: "Develop with Google Antigravity",
    subtitle: "Agentic Code Generation & Execution",
    description: "Paste your prompt into Google Antigravity. The AI agent crafts the React frontend, builds FastAPI endpoints, and configures the local server.",
    icon: Cpu,
    accent: "from-indigo-500 to-purple-400",
    detail: "Antigravity runs commands in the terminal with your approval."
  },
  {
    number: "03",
    title: "Connect Cloud DB & Brevo OTP",
    subtitle: "Real Database & Email Delivery",
    description: "Create a free MongoDB Atlas cluster and link Brevo for 6-digit email OTPs. All secret keys stay protected inside backend `.env` files.",
    icon: Database,
    accent: "from-purple-500 to-pink-400",
    detail: "Never fake authentication: real users, real hashed passwords, real emails."
  },
  {
    number: "04",
    title: "Deploy to Vercel & Render",
    subtitle: "Your Website Goes Live",
    description: "Push to GitHub to trigger automatic cloud deployment. Render hosts your backend API; Vercel hosts your frontend with free SSL certificates.",
    icon: Globe,
    accent: "from-emerald-500 to-teal-400",
    detail: "Open your live URL worldwide on phones, tablets, and laptops."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-navy-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <Cpu className="w-3.5 h-3.5" />
            <span>The Modern Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How ZERO_WEB Takes You from Idea to Live URL
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We broke down full-stack engineering into an intuitive, foolproof pipeline that anyone can follow.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-navy-900/90 border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-mono font-extrabold bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-electric-blue mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Detail Box */}
                <div className="mt-5 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-900/70 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base font-bold text-white">
              Ready to experience this process with your own website idea?
            </h4>
            <p className="text-xs text-slate-300">
              Switch anytime between <strong>Teaching Mode</strong> (step-by-step explanations) and <strong>Project Mode</strong> (direct instructions).
            </p>
          </div>
          <Link
            href="/journey"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-blue to-electric-indigo text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:scale-105 transition-transform"
          >
            <span>Begin Stage 1 Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

