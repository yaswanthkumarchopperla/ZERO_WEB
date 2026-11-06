"use client";

import * as React from "react";
import { 
  Lightbulb, 
  FileText, 
  Palette, 
  Github, 
  Sparkles, 
  Layout, 
  Server, 
  Database, 
  PlugZap, 
  CheckCircle2, 
  Rocket, 
  Globe2,
  ArrowRight
} from "lucide-react";

interface JourneyStep {
  number: string;
  title: string;
  short: string;
  icon: React.ElementType;
  whatYouDo: string;
  whatAntigravityDoes: string;
  result: string;
  modules: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Idea",
    short: "Select a real project",
    icon: Lightbulb,
    whatYouDo: "Pick an idea you care about (e.g., an artisanal candle shop, local service, or portfolio).",
    whatAntigravityDoes: "Helps refine your 1-sentence value proposition and target audience.",
    result: "Crystal-clear concept statement.",
    modules: "Module 01 & 02",
  },
  {
    number: "02",
    title: "Planning",
    short: "Scope the MVP",
    icon: FileText,
    whatYouDo: "Define user stories and prioritize features using the MoSCoW method (Must-haves vs Won't-haves).",
    whatAntigravityDoes: "Scaffolds a clean requirements.md and generates user flow diagrams.",
    result: "Buildable project scope and sitemap.",
    modules: "Module 02",
  },
  {
    number: "03",
    title: "Design",
    short: "UI/UX & tokens",
    icon: Palette,
    whatYouDo: "Choose your 4-48px spacing scale, colors, typography, and test wireframes for mobile.",
    whatAntigravityDoes: "Transforms wireframe sketches into clean Tailwind CSS component configurations.",
    result: "Accessible design system and mobile-first layouts.",
    modules: "Module 03",
  },
  {
    number: "04",
    title: "GitHub Repo",
    short: "Save-game history",
    icon: Github,
    whatYouDo: "Create your remote repository on GitHub with README.md and .gitignore.",
    whatAntigravityDoes: "Initializes local Git, manages commits, and links to your remote repository.",
    result: "Version-controlled cloud codebase.",
    modules: "Module 14",
  },
  {
    number: "05",
    title: "Google Antigravity",
    short: "AI development IDE",
    icon: Sparkles,
    whatYouDo: "Open your project workspace and guide development with structured, conversational prompts.",
    whatAntigravityDoes: "Executes terminal commands, edits code, reviews diffs, and manages project files.",
    result: "Active AI-powered pair-programming workspace.",
    modules: "Module 14",
  },
  {
    number: "06",
    title: "Frontend",
    short: "Interactive UI",
    icon: Layout,
    whatYouDo: "Build pages using semantic HTML, responsive CSS Grid, React components, and Tailwind.",
    whatAntigravityDoes: "Generates component boilerplate and handles client-side reactivity.",
    result: "Fast, responsive user interface.",
    modules: "Module 04",
  },
  {
    number: "07",
    title: "Backend",
    short: "Server logic & rules",
    icon: Server,
    whatYouDo: "Create REST API endpoints that listen on network ports, handle requests, and validate data.",
    whatAntigravityDoes: "Builds Express / Next.js route handlers with error handling and status codes.",
    result: "Secure server-side business logic.",
    modules: "Module 05",
  },
  {
    number: "08",
    title: "Database",
    short: "PostgreSQL & Prisma",
    icon: Database,
    whatYouDo: "Design relational tables, foreign keys, constraints, and store currency in integer paise.",
    whatAntigravityDoes: "Generates Prisma schemas, runs database migrations, and writes safe SQL queries.",
    result: "ACID-compliant persistent data store.",
    modules: "Module 06",
  },
  {
    number: "09",
    title: "APIs & Auth",
    short: "Stripe, Resend, OAuth",
    icon: PlugZap,
    whatYouDo: "Connect payments, Google login, and third-party services using webhooks.",
    whatAntigravityDoes: "Verifies webhook signatures, manages environment variables, and tests endpoints.",
    result: "Real payment processing and user auth.",
    modules: "Module 07 & 08",
  },
  {
    number: "10",
    title: "Testing",
    short: "Vitest & Playwright",
    icon: CheckCircle2,
    whatYouDo: "Test business logic (discounts, cart calculations) and browser checkout flows.",
    whatAntigravityDoes: "Generates test cases and executes tests in the terminal to verify zero regressions.",
    result: "Bug-free, production-ready code.",
    modules: "Module 15",
  },
  {
    number: "11",
    title: "Deployment",
    short: "Vercel & CI/CD",
    icon: Rocket,
    whatYouDo: "Push to main branch; automate builds, tests, and preview deployments with CI/CD.",
    whatAntigravityDoes: "Configures production environment variables and verifies production build logs.",
    result: "Automated continuous cloud deployment.",
    modules: "Module 10",
  },
  {
    number: "12",
    title: "Live Website",
    short: "Custom domain & SSL",
    icon: Globe2,
    whatYouDo: "Connect a custom domain, configure DNS A/CNAME records, and verify HTTPS Let's Encrypt SSL.",
    whatAntigravityDoes: "Audits Core Web Vitals, JSON-LD structured data, and SEO metadata.",
    result: "A live, global website accessible to the world!",
    modules: "Module 09, 11, 16",
  },
];

export function JourneyFlow() {
  const [activeStepIndex, setActiveStepIndex] = React.useState(4); // Default on Google Antigravity (step 5)
  const activeStep = JOURNEY_STEPS[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="py-20 lg:py-28 bg-slate-100/50 dark:bg-obsidian-950/60 border-y border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            How Zero-Web Works
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
            The 12-Step Development Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Traditional tutorials teach isolated syntax snippets. Zero-Web walks you through 
            the exact path real software teams follow to build and publish a live product.
          </p>
        </div>

        {/* 12 Steps Grid / Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isSelected = index === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`text-left p-3.5 rounded-2xl border transition-all text-sm group flex flex-col justify-between ${
                  isSelected
                    ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-glow ring-2 ring-indigo-500/20"
                    : "bg-white/60 dark:bg-obsidian-900/60 border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-indigo-800"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"
                  }`}>
                    {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${
                    isSelected
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-500"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {step.short}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="rounded-3xl border border-indigo-100 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Header & Badge */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Step {activeStep.number} of 12 · {activeStep.modules}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    {activeStep.title}
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeStep.whatYouDo}
              </p>
            </div>

            {/* Antigravity Role & Expected Result */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  What Google Antigravity Does
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeStep.whatAntigravityDoes}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Expected Real Milestone
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeStep.result}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

