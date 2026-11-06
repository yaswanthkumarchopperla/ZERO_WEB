import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ExternalLink, 
  Clock, 
  Layers, 
  ShieldCheck,
  ShoppingBag,
  GitBranch,
  Rocket
} from "lucide-react";

interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: string;
  hours: number;
  overview: string;
  stack: string[];
  steps: {
    num: string;
    title: string;
    description: string;
    antigravityPrompt: string;
    expectedOutput: string;
  }[];
}

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "candle-shop-ecommerce": {
    slug: "candle-shop-ecommerce",
    title: "The Candle Shop: Full-Stack E-Commerce Platform",
    subtitle: "Module 18 Flagship Capstone: From Zero to Live E-Commerce on Vercel",
    category: "Full-Stack Capstone",
    difficulty: "Capstone",
    hours: 20,
    overview: "This flagship project guides you through building a complete, production-ready online candle store from scratch using Next.js 15, PostgreSQL, Prisma ORM, Stripe payments in test mode, and Google Antigravity. By the end, you will have a live, HTTPS-secured website deployed on Vercel with an active database.",
    stack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Stripe API", "Resend", "Vercel"],
    steps: [
      {
        num: "01",
        title: "Requirements & Scope (MoSCoW)",
        description: "Define the core MVP features: customer product browsing, persistent cart, checkout with test online payment, and an admin page to manage orders and stock.",
        antigravityPrompt: "Draft an MVP requirements document and user stories for an artisanal candle store following the MoSCoW method.",
        expectedOutput: "requirements.md with clear Must-Have and Won't-Have feature boundaries.",
      },
      {
        num: "02",
        title: "UI/UX Design & 10-Page Wireframes",
        description: "Establish design tokens: 4-48px spacing scale, deep navy and warm amber accents, accessible typography, and wireframes for mobile and desktop screens.",
        antigravityPrompt: "Generate Tailwind design tokens and wireframe layout components for a mobile-first e-commerce shop.",
        expectedOutput: "Reusable Tailwind components and mobile layout templates.",
      },
      {
        num: "03",
        title: "Frontend Product Catalog & Responsive Grid",
        description: "Build the shop catalog with Next.js Server Components, responsive CSS Grid (`repeat(auto-fill, minmax(220px, 1fr))`), and instant category filtering.",
        antigravityPrompt: "Build a responsive Next.js Server Component that renders a product catalog grid with pricing, stock badges, and image cards.",
        expectedOutput: "Fast, server-rendered product listing page with accessible alt tags.",
      },
      {
        num: "04",
        title: "PostgreSQL Database Schema with Prisma",
        description: "Define models for User, Product, Order, OrderItem, and Address in `schema.prisma`. Enforce `price_paise INTEGER NOT NULL CHECK (price_paise > 0)`.",
        antigravityPrompt: "Write a Prisma schema for an e-commerce database with products, users, orders, and order_items storing money in integer paise.",
        expectedOutput: "Prisma schema file ready for migration (`npx prisma db push`).",
      },
      {
        num: "05",
        title: "Shopping Cart & Server-Side Price Calculation",
        description: "Implement cart state storing only `{productId, quantity}` on the client. At checkout, the server reloads live prices from the database to prevent tampering.",
        antigravityPrompt: "Create a Next.js Server Action to validate cart contents against PostgreSQL and calculate total order price in paise on the server.",
        expectedOutput: "Tamper-proof server-side checkout calculation logic.",
      },
      {
        num: "06",
        title: "Stripe Payment Gateway in Test Mode",
        description: "Initialize Stripe checkout sessions. Create an order with status 'pending', open Stripe checkout, and listen for the `checkout.session.completed` webhook.",
        antigravityPrompt: "Build a Next.js API route that creates a Stripe Checkout session in test mode and returns the checkout session URL.",
        expectedOutput: "Functional test-mode checkout gateway accepting test credit cards.",
      },
      {
        num: "07",
        title: "Idempotent Webhook Handler & ACID Transaction",
        description: "Verify the Stripe webhook cryptographic signature. Inside a database transaction, mark the order as 'paid', reduce inventory stock, and send an email receipt.",
        antigravityPrompt: "Write an idempotent Stripe webhook handler that verifies event signatures and runs a Prisma transaction to update order status and decrement stock.",
        expectedOutput: "Verified webhook route protected against duplicate execution.",
      },
      {
        num: "08",
        title: "Protected Admin Dashboard & Order Management",
        description: "Build an admin panel showing recent orders, pending fulfillments, low-stock alerts, and action audit logs protected by `requireRole('admin')`.",
        antigravityPrompt: "Create an admin order management table with status filters (pending, paid, shipped) and server-side RBAC protection.",
        expectedOutput: "Role-protected admin management console.",
      },
      {
        num: "09",
        title: "Quality Assurance & Vitest Unit Tests",
        description: "Write unit tests for cart total calculation using Vitest and run Playwright E2E automation verifying the complete browsing-to-payment flow.",
        antigravityPrompt: "Write a Vitest test suite for cart calculations, discounts, and empty cart edge cases.",
        expectedOutput: "Passing test suite running in the Antigravity terminal with 100% green checks.",
      },
      {
        num: "10",
        title: "Cloud Deployment on Vercel & Managed PostgreSQL",
        description: "Connect your GitHub repository to Vercel, configure production environment variables (`DATABASE_URL`, `STRIPE_SECRET_KEY`), and run database migrations.",
        antigravityPrompt: "Prepare production build scripts and verify that next build passes with zero TypeScript errors.",
        expectedOutput: "Live, global website with SSL certificate and automated CI/CD deployments.",
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "candle-shop-ecommerce" },
    { slug: "developer-portfolio" },
    { slug: "student-management-crud" },
    { slug: "gemini-ai-assistant" },
  ];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug] || PROJECT_DETAILS["candle-shop-ecommerce"];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project Lab
        </Link>

        {/* Project Header Banner */}
        <div className="rounded-3xl border border-indigo-200 dark:border-white/10 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 dark:from-slate-900 dark:via-obsidian-900 dark:to-indigo-950/40 p-8 sm:p-10 shadow-xl space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
              {project.difficulty}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              ~{project.hours} Hours Build Time
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.overview}
          </p>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technologies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-Step Implementation Guide */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              Step-by-Step Development Guide & Antigravity Prompts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Execute each step sequentially in Google Antigravity. Copy the prompts, review the generated code diffs, and verify results.
            </p>
          </div>

          <div className="space-y-6">
            {project.steps.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4 hover:border-indigo-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900/40 self-start sm:self-auto">
                    Verified Workflow
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Google Antigravity Prompt Box */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2 text-slate-200 font-mono text-xs">
                  <div className="flex items-center justify-between text-indigo-400 text-[11px] font-sans font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Google Antigravity Agent Prompt:
                    </span>
                    <span className="text-[10px] text-slate-400">Copy & Paste</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans bg-slate-900/80 p-3 rounded-lg border border-white/5">
                    &ldquo;{step.antigravityPrompt}&rdquo;
                  </p>
                </div>

                {/* Expected Output */}
                <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Expected Milestone:</strong> {step.expectedOutput}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Submission Banner */}
          <div className="p-8 rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-gradient-to-r from-indigo-600 to-violet-600 text-white space-y-4 shadow-xl">
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-2xl">
                Ready to Publish Your Project?
              </h3>
              <p className="text-indigo-100 text-sm max-w-2xl">
                Once all steps are verified and your site is live on Vercel, submit your GitHub Repository URL 
                and live HTTPS link in your Student Dashboard to earn your Verified Capstone Certificate.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/learn"
                className="px-5 py-2.5 rounded-xl bg-white text-indigo-600 font-bold text-xs hover:bg-indigo-50 transition-colors shadow-sm"
              >
                Back to Curriculum
              </Link>
              <Link
                href="/roadmap"
                className="px-5 py-2.5 rounded-xl bg-indigo-700/60 hover:bg-indigo-700 text-white font-bold text-xs transition-colors"
              >
                View 10-Phase Roadmap
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

