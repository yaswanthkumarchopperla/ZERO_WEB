import Link from "next/link";
import { FolderGit2, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Terminal } from "lucide-react";

interface ProjectTrack {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Capstone";
  estimatedHours: number;
  description: string;
  technologies: string[];
  antigravityPrompt: string;
  keyFeatures: string[];
}

const ALL_PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "candle-shop-ecommerce",
    title: "The Candle Shop: Full-Stack E-Commerce Website",
    category: "Full-Stack Capstone",
    difficulty: "Capstone",
    estimatedHours: 20,
    description: "The complete Module 18 capstone. A full online store with product catalog, cart state, PostgreSQL database, Stripe test payments, and protected admin orders.",
    technologies: ["Next.js 15", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Stripe API", "Vercel"],
    antigravityPrompt: "Scaffold an e-commerce checkout flow with Prisma transactions and Stripe webhook verification.",
    keyFeatures: ["Shopping cart with server-side pricing", "Stripe payment gateway in test mode", "Protected admin dashboard for orders", "Automated email receipts with Resend"],
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio & Interactive Blog",
    category: "Beginner Websites",
    difficulty: "Beginner",
    estimatedHours: 8,
    description: "Showcase your work to employers with a modern dark-mode developer portfolio, markdown project case studies, and live contact form.",
    technologies: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
    antigravityPrompt: "Build a responsive mobile-first developer portfolio with dark/light mode toggle and JSON-LD schema.",
    keyFeatures: ["Mobile-first responsive grid", "Lighthouse 98+ performance score", "OpenGraph social preview cards", "Contact form with Zod validation"],
  },
  {
    id: "saas-landing-page",
    title: "SaaS Product Landing Page with Waitlist",
    category: "Landing Pages",
    difficulty: "Beginner",
    estimatedHours: 6,
    description: "High-converting marketing surface with interactive feature carousels, pricing comparison tiers, and email waitlist collection.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Resend"],
    antigravityPrompt: "Generate a conversion-optimized SaaS landing page with animated feature tabs and email waitlist API.",
    keyFeatures: ["Responsive pricing comparison matrix", "Email subscription with duplicate check", "Core Web Vitals LCP < 1.8s", "Smooth scroll navigation"],
  },
  {
    id: "student-management-crud",
    title: "Student Management CRUD System",
    category: "Student Management",
    difficulty: "Intermediate",
    estimatedHours: 12,
    description: "A database-driven web application with search, filter, pagination, student records modal, and foreign key enrollments.",
    technologies: ["React", "Express.js", "PostgreSQL", "Prisma"],
    antigravityPrompt: "Create REST API endpoints for students and courses with parameterized SQL queries and Zod schemas.",
    keyFeatures: ["Full CRUD for student profiles", "Table pagination and multi-field search", "PostgreSQL relational integrity", "CSV export of student reports"],
  },
  {
    id: "auth-rbac-portal",
    title: "Secure Authentication & RBAC Portal",
    category: "Authentication Projects",
    difficulty: "Intermediate",
    estimatedHours: 10,
    description: "Production-grade authentication featuring bcrypt password hashing, session cookies, Google OAuth 2.0, and role-based permissions.",
    technologies: ["Next.js", "Auth.js", "bcryptjs", "PostgreSQL"],
    antigravityPrompt: "Implement secure session cookie authentication with requireRole('admin') middleware and email verification.",
    keyFeatures: ["Bcrypt cost factor 12 hashing", "HttpOnly SameSite=Lax cookies", "Google OAuth 2.0 integration", "Single-use hashed password reset tokens"],
  },
  {
    id: "markdown-blog-cms",
    title: "Markdown Blog & Content Management System",
    category: "Blog Applications",
    difficulty: "Intermediate",
    estimatedHours: 10,
    description: "A publishing platform with markdown editor, tag categorization, estimated reading time calculator, and comment system.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind Typography"],
    antigravityPrompt: "Scaffold a blog system with dynamic sitemap generation and XSS-safe DOMPurify markdown rendering.",
    keyFeatures: ["Dynamic sitemap.xml and RSS feed", "Full-text article search", "Sanitized comment submissions", "Estimated read time calculation"],
  },
  {
    id: "admin-analytics-dashboard",
    title: "Enterprise Admin & Analytics Dashboard",
    category: "Admin Dashboards",
    difficulty: "Intermediate",
    estimatedHours: 14,
    description: "Data-heavy dashboard with charts, KPI summary metrics, activity logs, user management table, and dark mode.",
    technologies: ["Next.js", "PostgreSQL", "Recharts", "Tailwind CSS"],
    antigravityPrompt: "Build an admin dashboard layout with sticky sidebar, metrics grid, and user role management table.",
    keyFeatures: ["KPI revenue and active user metrics", "Interactive time-series charts", "Audit logging of admin actions", "Server-side role guards"],
  },
  {
    id: "gemini-ai-copywriter",
    title: "AI-Powered Multilingual Copywriter",
    category: "AI-Powered Websites",
    difficulty: "Intermediate",
    estimatedHours: 12,
    description: "Harness the Google Gemini API to generate marketing copy, translate descriptions into Telugu, and extract text from uploaded images.",
    technologies: ["Next.js", "Google Gemini API", "Server-Sent Events", "Tailwind"],
    antigravityPrompt: "Build a server-side route that streams Gemini API responses and handles multimodal image payloads.",
    keyFeatures: ["Streaming response generation", "Bilingual English and Telugu translation", "Image text and error extraction", "Rate limiting with exponential backoff"],
  },
  {
    id: "link-in-bio-maker",
    title: "Link-in-Bio Profile Builder",
    category: "Beginner Websites",
    difficulty: "Beginner",
    estimatedHours: 6,
    description: "A personalized link-tree clone where users can customize links, icons, color themes, and view visitor click analytics.",
    technologies: ["React", "Tailwind CSS", "LocalStorage", "Vercel"],
    antigravityPrompt: "Create a customizable mobile-first link-in-bio page with drag-and-drop link reordering.",
    keyFeatures: ["Custom theme colors and avatars", "Click count tracking", "Mobile-first full bleed design", "Instant static generation"],
  },
];

export function generateMetadata() {
  return {
    title: "Project Lab (9 Real-World Tracks) | Zero-Web",
    description: "Build portfolio-ready full-stack projects with Google Antigravity prompts and step-by-step guidance.",
  };
}

export default function ProjectsPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Hands-On Portfolio Projects
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
            Zero-Web Project Lab
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Tutorials teach syntax; projects teach development. Build complete applications 
            with Google Antigravity prompts, verify them with tests, and deploy them live.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECT_TRACKS.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border p-7 flex flex-col justify-between transition-all ${
                project.difficulty === "Capstone"
                  ? "border-indigo-500 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 dark:from-slate-900 dark:via-obsidian-900 dark:to-indigo-950/40 shadow-glow"
                  : "border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-card-hover hover:border-indigo-400"
              }`}
            >
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {project.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-semibold ${
                    project.difficulty === "Capstone"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}>
                    {project.difficulty} · ~{project.estimatedHours}h
                  </span>
                </div>

                <h3 className="font-bold font-display text-xl text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Capabilities
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {project.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Antigravity Prompt Card */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/5 space-y-1 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-sans font-bold text-[10px] uppercase">
                    <Sparkles className="w-3 h-3" />
                    Antigravity Prompt
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs italic line-clamp-2">
                    &ldquo;{project.antigravityPrompt}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-slate-400">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  Start Track
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

