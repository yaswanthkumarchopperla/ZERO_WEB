import React from "react";
import Link from "next/link";
import { 
  Cpu, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Database, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { TECHNOLOGY_MAP } from "@/lib/journey-data";

export const metadata = {
  title: "Website Technology Map — ZERO_WEB",
  description: "Learn what each developer tool does: Google Antigravity, ChatGPT, VS Code, Git, GitHub, Render, Vercel, MongoDB Atlas, and Brevo.",
};

export default function TechMapPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/15 border border-electric-cyan/30 text-xs font-semibold text-electric-cyan">
            <Cpu className="w-3.5 h-3.5" />
            <span>Developer Ecosystem Demystified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Website Technology Map
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Beginners get overwhelmed by the sea of names: Git, GitHub, Vercel, Render, Atlas, Vite. Here is what every tool actually does, why we selected it, and how it fits into your website journey.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_MAP.map((tech) => (
            <div
              key={tech.id}
              className="rounded-2xl bg-navy-900/80 border border-white/10 p-6 flex flex-col justify-between hover:border-electric-blue/40 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-electric-blue/15 text-electric-blue border border-electric-blue/30">
                    {tech.badge}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {tech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  <p className="text-xs font-semibold text-electric-blue mt-0.5">
                    {tech.role}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.description}
                </p>

                <div className="p-3 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>How ZERO_WEB Uses It:</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.howWeUseIt}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-mono text-[11px]">
                  Free Tier Available
                </span>
                <a
                  href={tech.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-300 hover:text-white hover:underline"
                >
                  <span>Official Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 rounded-2xl bg-navy-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Ready to see how these technologies connect together?
            </h4>
            <p className="text-xs text-slate-300">
              Check out our interactive visual topology to inspect live data flows.
            </p>
          </div>
          <Link
            href="/architecture"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-blue hover:bg-blue-600 text-white font-semibold text-xs shadow-md transition-all shrink-0"
          >
            <span>Open Architecture Visualizer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

