import Link from "next/link";
import { Sparkles, Terminal, ShieldCheck, Heart, Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-obsidian-950 text-slate-600 dark:text-slate-400 text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-indigo-100" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                Zero<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">-Web</span>
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-300 font-medium">
              &ldquo;Learn It. Build It. Launch It.&rdquo;
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              From zero knowledge to your first live website. An interactive, step-by-step educational platform 
              teaching beginners how to design, build, test, and deploy production websites with{" "}
              <strong className="text-slate-800 dark:text-slate-200">Google Antigravity</strong>.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
              <Terminal className="w-3.5 h-3.5" />
              Built for Google Antigravity Workflows
            </div>
          </div>

          {/* Col 1: Curriculum */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Curriculum
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn#part-1" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Foundations (1–3)
                </Link>
              </li>
              <li>
                <Link href="/learn#part-2" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Frontend & React (4)
                </Link>
              </li>
              <li>
                <Link href="/learn#part-2" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Backend & REST (5)
                </Link>
              </li>
              <li>
                <Link href="/learn#part-2" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  PostgreSQL & SQL (6)
                </Link>
              </li>
              <li>
                <Link href="/learn#part-3" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Domain, DNS & Hosting (9–10)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  E-Commerce Capstone (18)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Platform */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/roadmap" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  10-Phase Roadmap
                </Link>
              </li>
              <li>
                <Link href="/ai-teacher" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Teacher (Gemini)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Project Lab (9 Tracks)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Resource Directory
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Reference & Guides */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">
              Reference
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources#comparisons" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  10 Comparison Tables
                </Link>
              </li>
              <li>
                <Link href="/resources#glossary" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  60+ Term Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources#checklists" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Master Launch Checklist
                </Link>
              </li>
              <li>
                <Link href="/learn/version-control-and-tools/antigravity-setup-workflow" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Google Antigravity Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Zero-Web. Created for beginner-to-production web education.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              100% Practical & Dependency-Ordered
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
