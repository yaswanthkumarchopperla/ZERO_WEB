"use client";

import Link from "next/link";
import { ArrowRight, Compass, Sparkles, CheckCircle2, Play, Terminal, Database, Globe, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/15 via-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Learn It · Build It · Launch It</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              From Zero Knowledge to Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                First Live Website.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Learn how to create real websites step by step. From your first GitHub repository 
              to deploying your website online with <strong className="text-slate-900 dark:text-white font-semibold">Google Antigravity</strong>, 
              we&apos;ll guide you through everything.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-glow transition-all active:scale-[0.98]"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/roadmap"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-6 py-3.5 rounded-xl shadow-sm transition-all"
              >
                <Compass className="w-5 h-5 text-indigo-500" />
                Explore Learning Roadmap
              </Link>
            </div>

            {/* Trust bullet indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero Coding Required</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Google Antigravity AI IDE</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Real Live Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Antigravity & Live Website IDE Preview */}
          <div className="lg:col-span-5 relative">
            {/* Soft decorative glow behind window */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-20 dark:opacity-30" />

            {/* IDE Window Mockup */}
            <div className="relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 font-sans text-xs font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    Google Antigravity · CandleShop Workspace
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <Globe className="w-3 h-3" />
                  Live on Vercel
                </div>
              </div>

              {/* IDE Editor Area */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2 text-[11px]">
                  <span>📄 src/app/shop/page.tsx</span>
                  <span className="text-cyan-400">TypeScript · Next.js 15</span>
                </div>

                <div className="space-y-1 text-slate-300">
                  <p><span className="text-purple-400">export default async function</span> <span className="text-blue-400">ShopPage</span>() &#123;</p>
                  <p className="pl-4 text-slate-400">// Fetch products from PostgreSQL via Prisma</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> products = <span className="text-purple-400">await</span> prisma.product.<span className="text-blue-400">findMany</span>(&#123;</p>
                  <p className="pl-8"><span className="text-slate-400">where:</span> &#123; stock: &#123; gt: <span className="text-amber-400">0</span> &#125; &#125;,</p>
                  <p className="pl-8"><span className="text-slate-400">orderBy:</span> &#123; name: <span className="text-emerald-300">&apos;asc&apos;</span> &#125;,</p>
                  <p className="pl-4">&#125;);</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">ProductGrid</span> items=&#123;products&#125; /&gt;;</p>
                  <p>&#125;</p>
                </div>

                {/* AI Agent Execution Card inside IDE */}
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      Antigravity AI Agent
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      Auto-verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    &ldquo;Created PostgreSQL schema with <code>CHECK (price_paise &gt; 0)</code>, built responsive Tailwind grid, and ran tests.&rdquo;
                  </p>
                </div>

                {/* Terminal Bar inside IDE */}
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 space-y-1 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-500 text-[10px]">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      Antigravity Terminal (Node v24)
                    </span>
                    <span className="text-emerald-400">● 0 errors</span>
                  </div>
                  <p className="text-emerald-400">&gt; next dev</p>
                  <p className="text-slate-400">▲ Next.js 15.1.0 - Local: http://localhost:3000</p>
                  <p className="text-cyan-300">✓ Ready in 640ms (Compiled 18 modules)</p>
                </div>
              </div>

              {/* Progress floating badge */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex items-center justify-between font-sans text-xs">
                <span className="text-slate-400">Student Progress Preview:</span>
                <span className="font-semibold text-cyan-400 flex items-center gap-1">
                  Step 5 of 12: Backend & Database
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

