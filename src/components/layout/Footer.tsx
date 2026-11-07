import React from "react";
import Link from "next/link";
import { 
  Rocket, 
  Terminal, 
  Sparkles, 
  Wrench, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  ShieldAlert
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 dark:border-white/10 border-slate-200 bg-navy-950 dark:bg-navy-950 bg-slate-900 text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue via-electric-indigo to-electric-violet flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="font-mono font-extrabold text-white text-base tracking-tighter">0_W</span>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">ZERO_WEB</span>
                <span className="ml-2 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  PRODUCTION READY
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white">From Zero Knowledge to Website Live.</strong> Designed for absolute beginners, students, and first-time builders to create, connect, and deploy real full-stack web applications to the internet.
            </p>

            <div className="p-3.5 rounded-xl bg-navy-900/90 border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-electric-blue font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The ZERO_WEB Pedagogical Pledge</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Never just tell a beginner what to do. Show them where to go, what to click, what to type, what they should see, what can go wrong, and how to fix it.
              </p>
            </div>
          </div>

          {/* Quick Stages */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Rocket className="w-3.5 h-3.5 text-electric-blue" />
              <span>Core Journey</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/journey#stage-1" className="hover:text-electric-blue transition-colors">
                  Stage 1: Idea to Plan
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-4" className="hover:text-electric-blue transition-colors">
                  Stage 4: ChatGPT & Antigravity
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-5" className="hover:text-electric-blue transition-colors">
                  Stage 5: React & Vite Frontend
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-6" className="hover:text-electric-blue transition-colors">
                  Stage 6: FastAPI Backend
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-7" className="hover:text-electric-blue transition-colors">
                  Stage 7: MongoDB Atlas Cloud
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-9" className="hover:text-electric-blue transition-colors">
                  Stage 9: Brevo Email OTP & Auth
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-13" className="hover:text-electric-blue transition-colors">
                  Stage 13: Render Backend Hosting
                </Link>
              </li>
              <li>
                <Link href="/journey#stage-14" className="hover:text-electric-blue transition-colors">
                  Stage 14: Vercel Frontend Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Tools */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-electric-violet" />
              <span>Interactive Toolkit</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/commands" className="hover:text-electric-blue transition-colors">
                  Searchable Command Library
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="hover:text-electric-blue transition-colors">
                  AI Prompt Vault (ChatGPT + AGY)
                </Link>
              </li>
              <li>
                <Link href="/troubleshooting" className="hover:text-electric-blue transition-colors">
                  Beginner Troubleshooting Hub
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-electric-blue transition-colors">
                  Dynamic Architecture Visualizer
                </Link>
              </li>
              <li>
                <Link href="/tech-map" className="hover:text-electric-blue transition-colors">
                  Website Technology Map
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-electric-blue transition-colors">
                  Student Project Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Security & Cloud Tech */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Tech Stack Covered</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Google Antigravity",
                "ChatGPT",
                "React + Vite",
                "Tailwind CSS",
                "FastAPI Python",
                "Node Express",
                "MongoDB Atlas",
                "Google Gemini",
                "Brevo OTP",
                "Git & GitHub",
                "Render Cloud",
                "Vercel Edge"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Zero Secret Leak Rule</span>
              </div>
              <p>
                ZERO_WEB strictly enforces never committing `.env` or raw database credentials to Git.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} ZERO_WEB. Created for real builders. "From Zero Knowledge to Website Live."
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-300">
              Primary IDE: <strong className="text-white">Google Antigravity</strong>
            </span>
            <Link href="/journey" className="text-electric-blue hover:underline">
              Launch Your Site &rarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

