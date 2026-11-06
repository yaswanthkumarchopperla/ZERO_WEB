import Link from "next/link";
import { ArrowRight, ShoppingBag, FolderGit2, Sparkles, Terminal, CheckCircle2, ExternalLink } from "lucide-react";

interface ProjectTrack {
  id: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Capstone";
  estimatedHours: number;
  description: string;
  techStack: string[];
  antigravityPrompt: string;
  isFlagship?: boolean;
}

const FEATURED_PROJECTS: ProjectTrack[] = [
  {
    id: "candle-shop-ecommerce",
    title: "The Candle Shop: Full-Stack E-Commerce Platform",
    category: "Full-Stack Capstone",
    difficulty: "Capstone",
    estimatedHours: 20,
    description: "Build, test, and deploy a complete production-grade online shop with product catalog, cart state, PostgreSQL database, Stripe test payments, and admin order management.",
    techStack: ["Next.js 15", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe API", "Vercel"],
    antigravityPrompt: "Scaffold an e-commerce checkout flow with Prisma transactions and Stripe webhook verification.",
    isFlagship: true,
  },
  {
    id: "developer-portfolio",
    title: "Responsive Developer Portfolio & Live Blog",
    category: "Frontend & SEO",
    difficulty: "Beginner",
    estimatedHours: 8,
    description: "Design and ship a personal developer portfolio featuring project showcases, dark mode toggle, OpenGraph preview cards, and automated sitemap generation.",
    techStack: ["Next.js", "Tailwind CSS", "JSON-LD", "GitHub Pages"],
    antigravityPrompt: "Create a mobile-first responsive portfolio grid with accessible focus rings and contact form.",
  },
  {
    id: "student-management-crud",
    title: "Student Management System & Dashboard",
    category: "Backend & SQL",
    difficulty: "Intermediate",
    estimatedHours: 12,
    description: "A relational database application with user roles, table pagination, search filters, modal forms, and foreign key relationships.",
    techStack: ["React", "Express.js", "PostgreSQL", "Zod Validation"],
    antigravityPrompt: "Generate REST endpoints with parameterized SQL queries and Zod schema validation.",
  },
  {
    id: "gemini-ai-assistant",
    title: "AI-Powered Product Copywriter Web App",
    category: "AI Engineering",
    difficulty: "Intermediate",
    estimatedHours: 10,
    description: "Connect to the Google Gemini API to generate marketing descriptions, translate content into Telugu, and diagnose errors from uploaded screenshots.",
    techStack: ["Next.js", "Gemini API", "Tailwind", "Server-Sent Events"],
    antigravityPrompt: "Build a streaming AI endpoint that accepts image attachments and streams responses to a chat UI.",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Project Lab
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
              Real-World Projects for Your Portfolio
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Don&apos;t just copy code—build and deploy full applications that you can showcase to employers and clients.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 group"
          >
            Explore All 9 Project Tracks
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Flagship Project Highlight Card */}
        {FEATURED_PROJECTS.filter((p) => p.isFlagship).map((project) => (
          <div
            key={project.id}
            className="mb-8 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 dark:from-slate-900 dark:via-obsidian-900 dark:to-indigo-950/40 p-8 sm:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider">
                    Flagship Capstone
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                    Module 18
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    ~{project.estimatedHours} Hours of Hands-on Building
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    Start Capstone Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Includes Google Antigravity Prompts & Verified Checklists
                  </span>
                </div>
              </div>

              {/* Right Mini Card with Antigravity Prompt Card */}
              <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-900 text-slate-200 p-5 shadow-lg space-y-3">
                  <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 font-sans font-semibold text-indigo-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      Antigravity Prompt Template
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Step 9 of 18</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    &ldquo;Create a Stripe webhook route in Next.js that validates the event signature, 
                    begins a PostgreSQL Prisma transaction, marks the order paid, and decrements candle inventory.&rdquo;
                  </p>
                  <div className="p-2 rounded bg-black/60 border border-white/5 text-[11px] text-emerald-400 flex items-center justify-between font-mono">
                    <span>✓ Idempotent Webhook Passed</span>
                    <span className="text-slate-400">HTTP 200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.filter((p) => !p.isFlagship).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-indigo-500 hover:shadow-card-hover transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-full font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {project.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    ~{project.estimatedHours}h
                  </span>
                </div>

                <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((t) => (
                    <span key={t} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <Link href={`/projects/${project.id}`} className="hover:underline flex items-center gap-1">
                  View Project Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
