import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Terminal, Shield, Zap, GitBranch, Database } from "lucide-react";

interface TutorialCard {
  title: string;
  category: string;
  moduleBadge: string;
  readTime: string;
  snippet: string;
  icon: React.ElementType;
  href: string;
}

const POPULAR_TUTORIALS: TutorialCard[] = [
  {
    title: "The 8-Step Request Journey: From Enter Key to Pixels",
    category: "Web Fundamentals",
    moduleBadge: "Module 01",
    readTime: "12 min",
    snippet: "Trace what happens between typing a URL and seeing rendered pixels: DNS, TLS handshake, HTTP GET, and the DOM tree.",
    icon: Zap,
    href: "/learn",
  },
  {
    title: "Google Antigravity Setup & AI Agent Workflow",
    category: "AI Development",
    moduleBadge: "Module 14",
    readTime: "15 min",
    snippet: "Master your AI developer environment: prompt engineering, workspace files, diff reviews, and executing terminal commands.",
    icon: Sparkles,
    href: "/learn",
  },
  {
    title: "Create Your First GitHub Repository & Git Daily Workflow",
    category: "Version Control",
    moduleBadge: "Module 14",
    readTime: "12 min",
    snippet: "Step-by-step with real screenshots: initializing git, staging commits, pushing to GitHub, and opening your first Pull Request.",
    icon: GitBranch,
    href: "/learn",
  },
  {
    title: "SQL vs NoSQL & Storing Money in Integer Paise",
    category: "Databases",
    moduleBadge: "Module 06",
    readTime: "14 min",
    snippet: "Why floating-point numbers break financial math, how to structure PostgreSQL tables, and writing your first ACID transaction.",
    icon: Database,
    href: "/learn",
  },
  {
    title: "Password Hashing with Bcrypt & Secure Cookie Sessions",
    category: "Security & Auth",
    moduleBadge: "Module 07",
    readTime: "11 min",
    snippet: "Why fast hashes like MD5/SHA-256 fail, how salt rounds work, and configuring HttpOnly SameSite=Lax session cookies.",
    icon: Shield,
    href: "/learn",
  },
  {
    title: "The N+1 Query Problem: How to Speed Up Backends by 10x",
    category: "Performance",
    moduleBadge: "Module 13",
    readTime: "10 min",
    snippet: "Understand why fetching 50 orders creates 51 database queries and how a single eager JOIN cuts server latency to milliseconds.",
    icon: Terminal,
    href: "/learn",
  },
];

export function PopularTutorials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-obsidian-950/80 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              Beginner Favorites
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
              Popular Step-by-Step Tutorials
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Practical, screenshot-guided lessons solving real problems every web developer faces.
            </p>
          </div>

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group"
          >
            Browse All Lessons
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_TUTORIALS.map((tutorial) => {
            const Icon = tutorial.icon;
            return (
              <Link
                key={tutorial.title}
                href={tutorial.href}
                className="group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-indigo-500 hover:shadow-card-hover transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {tutorial.moduleBadge}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {tutorial.readTime} read
                    </span>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {tutorial.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {tutorial.snippet}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Start Tutorial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

