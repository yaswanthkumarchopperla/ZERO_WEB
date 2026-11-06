"use client";

import * as React from "react";
import Link from "next/link";
import { Bot, Sparkles, Languages, Image as ImageIcon, Terminal, CheckCircle2, ArrowRight, CornerDownLeft } from "lucide-react";

export function AITeacherSection() {
  const [activeTab, setActiveTab] = React.useState<"english" | "telugu" | "screenshot">("english");

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-indigo-950/20 via-slate-900/40 to-transparent border-y border-slate-200 dark:border-white/5 transition-colors" id="ai-teacher">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Powered by Google Gemini
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
            Meet Your Patient AI Teacher
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Never get stuck. Ask questions, get line-by-line code breakdowns, upload terminal error screenshots, 
            and learn in <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">English</strong> or{" "}
            <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">తెలుగు (Telugu)</strong>.
          </p>
        </div>

        {/* Interactive AI Teacher Showcase Panel */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
          
          {/* Top Controls Bar */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  Zero-Web AI Tutor
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.2 rounded font-mono font-medium">
                    Online
                  </span>
                </h4>
                <p className="text-[11px] text-slate-500">Context: Module 01 · How Websites Work</p>
              </div>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab("english")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "english"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                English View
              </button>
              <button
                onClick={() => setActiveTab("telugu")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === "telugu"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                తెలుగు (Telugu)
              </button>
              <button
                onClick={() => setActiveTab("screenshot")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                  activeTab === "screenshot"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
                Error Debugger
              </button>
            </div>
          </div>

          {/* Chat Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Student Question */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-lg shadow-sm">
                {activeTab === "screenshot" ? (
                  <div className="space-y-2">
                    <p className="text-indigo-100 text-xs font-mono">📎 screenshot-terminal-error.png attached</p>
                    <p>&ldquo;My Next.js build failed with this error. What does it mean and how do I fix it?&rdquo;</p>
                  </div>
                ) : activeTab === "telugu" ? (
                  <p>&ldquo;క్లయింట్ మరియు సర్వర్ అంటే ఏమిటి? సులభమైన ఉదాహరణతో వివరించండి.&rdquo;</p>
                ) : (
                  <p>&ldquo;Can you explain client vs server using a simple analogy? Why do we need both?&rdquo;</p>
                )}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs font-bold flex-shrink-0 text-slate-800 dark:text-slate-200">
                You
              </div>
            </div>

            {/* AI Teacher Answer */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 rounded-2xl rounded-tl-sm p-5 text-sm max-w-2xl text-slate-700 dark:text-slate-200 space-y-3 leading-relaxed">
                
                {activeTab === "english" && (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Great question! Think of a website like a restaurant:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-16">Client:</span>
                        <span>The dining area where customers sit, look at the menu, and place orders (this is your browser—Chrome or Safari).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-16">Server:</span>
                        <span>The kitchen behind the counter where chefs prepare food, check recipes, and guard the pantry (this is your backend code).</span>
                      </li>
                    </ul>
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-900 dark:text-indigo-300">
                      💡 <strong>Key Idea from Module 1:</strong> Customers never walk into the kitchen, but nothing reaches the table without it. The browser asks for HTML/CSS, the server cooks it and sends it back!
                    </div>
                  </>
                )}

                {activeTab === "telugu" && (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      చాలా మంచి ప్రశ్న! వెబ్‌సైట్‌ను ఒక రెస్టారెంట్‌తో పోల్చి సులభంగా అర్థం చేసుకుందాం:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-20">క్లయింట్:</span>
                        <span>రెస్టారెంట్‌లో భోజనం చేసే ప్రాంతం మరియు మెనూ కార్డ్. కస్టమర్ అక్కడ కూర్చుని ఆర్డర్ ఇస్తారు (ఇది మీ బ్రౌజర్ - Chrome లేదా Edge).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-20">సర్వర్:</span>
                        <span>వెనుక ఉండే వంటిల్లు (కిచెన్). చెఫ్ వంట చేసి, రికార్డులు భద్రపరుస్తారు (ఇది మీ సర్వర్ కోడ్ మరియు డేటాబేస్).</span>
                      </li>
                    </ul>
                    <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-900 dark:text-indigo-300">
                      💡 <strong>ముఖ్యమైన అంశం:</strong> కస్టమర్లు నేరుగా కిచెన్‌లోకి వెళ్ళరు. బ్రౌజర్ అడుగుతుంది (Request), సర్వర్ సిద్ధం చేసి అందిస్తుంది (Response)!
                    </div>
                  </>
                )}

                {activeTab === "screenshot" && (
                  <>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      Diagnosed: SyntaxError in src/app/api/orders/route.ts:24
                    </div>
                    <p className="text-xs sm:text-sm">
                      I analyzed your screenshot! You have an unclosed brace <code>&#125;</code> right before line 24.
                    </p>
                    <div className="p-3 rounded-lg bg-black text-emerald-400 font-mono text-xs overflow-x-auto">
                      <p className="text-slate-400">// Exact correction:</p>
                      <p>const order = await prisma.order.create(&#123;</p>
                      <p>&nbsp;&nbsp;data: &#123; totalPaise: 45000 &#125;,</p>
                      <p className="text-emerald-300">&#125;); // Added missing closing brace here</p>
                    </div>
                    <p className="text-xs text-slate-500">
                      Run <code>npm run dev</code> in Google Antigravity terminal after saving, and the error will clear.
                    </p>
                  </>
                )}

              </div>
            </div>

          </div>

          {/* Chat input teaser footer */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Socratic learning: Explains WHY things work, doesn&apos;t just copy-paste answers
            </span>

            <Link
              href="/ai-teacher"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              Open AI Teacher
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

