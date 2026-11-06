import Link from "next/link";
import { Compass, CheckCircle2, ArrowRight, Sparkles, Terminal, Wrench, Trophy, ExternalLink } from "lucide-react";

interface RoadmapPhase {
  number: number;
  title: string;
  concepts: string[];
  tools: string[];
  exercises: string;
  projectIdea: string;
  completionCriteria: string;
  nextStep: string;
}

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    number: 1,
    title: "Web Fundamentals & Client-Server",
    concepts: ["How the internet and browsers work", "Client vs server architecture", "HTTP and HTTPS rules", "DNS and URL anatomy", "Frontend vs backend roles"],
    tools: ["Modern Browser (Chrome/Firefox)", "DevTools Network Tab", "Google Antigravity Terminal"],
    exercises: "Open DevTools on your favorite websites and inspect HTTP requests, status codes, and response headers.",
    projectIdea: "Author a 1-page markdown document explaining 'What happens when I type a URL and hit Enter' in your own words.",
    completionCriteria: "You can explain the client-server request cycle to a friend without looking at notes.",
    nextStep: "HTML and CSS",
  },
  {
    number: 2,
    title: "HTML5 & CSS3 Responsive Layouts",
    concepts: ["Semantic HTML structure", "Accessible forms and labels", "The CSS box model & box-sizing: border-box", "Flexbox (1D) and CSS Grid (2D)", "Mobile-first responsive media queries"],
    tools: ["Google Antigravity IDE", "DevTools Device Toolbar", "MDN Web Docs"],
    exercises: "Rebuild the layout (not branding) of 3 real websites; construct a responsive navbar and a product card grid.",
    projectIdea: "A personal portfolio or responsive landing page using semantic HTML and clean Tailwind / CSS Grid.",
    completionCriteria: "You can build an accessible, responsive multi-section page from a design without relying on a framework.",
    nextStep: "JavaScript",
  },
  {
    number: 3,
    title: "JavaScript Fundamentals & DOM",
    concepts: ["Variables (const, let), 7 primitives, and objects", "Functions, arrow syntax, and default parameters", "Array methods: map, filter, and reduce", "DOM tree manipulation and events", "Promises, async/await, and Fetch API", "Local storage security rules"],
    tools: ["Google Antigravity Workspace", "Browser Console", "Node.js v24"],
    exercises: "Build a to-do list with local storage; fetch live data from a public API with error handling; build interactive form validation.",
    projectIdea: "A real-time currency or weather converter app with error handling; an interactive shopping cart with price totals via reduce.",
    completionCriteria: "You can build an interactive web app that fetches data, handles network errors, and updates the DOM without copying code line by line.",
    nextStep: "Frontend Frameworks (React & Next.js)",
  },
  {
    number: 4,
    title: "Frontend Frameworks (React & Next.js)",
    concepts: ["Components, JSX, and props", "State management with useState", "Component lifecycles and side-effects", "Next.js App Router and nested layouts", "Server Components vs Client Components"],
    tools: ["React 19", "Next.js 15", "Tailwind CSS", "Google Antigravity"],
    exercises: "Convert a vanilla JavaScript project into reusable React components; build a multi-page app with routing and search filters.",
    projectIdea: "A movie search catalog or recipe index app with instant keyword search and category filtering.",
    completionCriteria: "You can structure an application into reusable components and manage client-server state confidently.",
    nextStep: "Backend Development",
  },
  {
    number: 5,
    title: "Backend Development & REST APIs",
    concepts: ["HTTP methods: GET, POST, PUT, PATCH, DELETE", "HTTP status codes (2xx, 3xx, 4xx, 5xx)", "RESTful API design & predictable URLs", "Router, middleware, controller, and service patterns", "Input validation and error handling"],
    tools: ["Node.js + Express", "Python + FastAPI", "Postman", "Google Antigravity Terminal"],
    exercises: "Build a CRUD REST API for products or notes; add validation to reject bad requests with 400; test every endpoint in Postman.",
    projectIdea: "A RESTful API for a digital library, tasks manager, or inventory system with status code handling.",
    completionCriteria: "You can design, build, and test a validated REST API with proper status codes and error responses.",
    nextStep: "Databases (PostgreSQL)",
  },
  {
    number: 6,
    title: "Database Management (PostgreSQL & SQL)",
    concepts: ["SQL vs NoSQL trade-offs", "Tables, rows, columns, primary and foreign keys", "Relationships (1:1, 1:N, N:N join tables)", "SQL CRUD operations", "Storing monetary amounts in integer paise", "Normalization and ACID transactions", "Indexing and Prisma ORM"],
    tools: ["PostgreSQL 16", "Prisma ORM", "Prisma Studio", "Google Antigravity"],
    exercises: "Design a relational schema for a store with users, orders, and products; execute queries with JOINs; run an ACID transaction.",
    projectIdea: "Connect your Phase 5 REST API to a PostgreSQL database via Prisma ORM.",
    completionCriteria: "You can model relational schemas and write safe queries, joins, and transactions.",
    nextStep: "APIs & Authentication",
  },
  {
    number: 7,
    title: "Authentication & Third-Party APIs",
    concepts: ["AuthN vs AuthZ (Passport vs Boarding Pass)", "Password hashing with bcrypt (cost factor 12)", "HttpOnly, Secure, SameSite=Lax cookie sessions", "JSON Web Tokens (JWT)", "OAuth 2.0 & Sign in with Google", "Server-side RBAC", "Webhooks and idempotency"],
    tools: ["Auth.js (NextAuth v5)", "Stripe Test Mode", "Resend Email API", "Google Gemini API"],
    exercises: "Add registration and login with roles; verify webhook signatures; call the Gemini API securely from the server.",
    projectIdea: "A private notes application where users only access their own data, and an admin user can view analytics.",
    completionCriteria: "Users can register, log in, see only their data, and role-based permissions are enforced strictly on the server.",
    nextStep: "Git Workflow & Cloud Deployment",
  },
  {
    number: 8,
    title: "Git Workflows & Cloud Deployment",
    concepts: ["Git branches, commits, and remotes", "Pull requests and code reviews", "Resolving merge conflicts", "Continuous Integration & Deployment (CI/CD)", "Production environment variables (.env)", "DNS records and custom domain connections"],
    tools: ["Git & GitHub", "Vercel / Railway", "Let's Encrypt SSL", "Google Antigravity"],
    exercises: "Deploy a frontend, backend, and PostgreSQL database to Vercel/Railway; connect a custom domain; set up preview PR deployments.",
    projectIdea: "Put every previous project online with a professional README.md and live HTTPS link.",
    completionCriteria: "You can take a project from your laptop to a custom HTTPS domain and redeploy with a single git push.",
    nextStep: "Security, SEO & Performance Quality",
  },
  {
    number: 9,
    title: "Security, SEO & Performance Quality",
    concepts: ["OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR)", "Content Security Policy and HTTP security headers", "On-page, off-page, and technical SEO", "Schema.org JSON-LD structured data", "Core Web Vitals (LCP, INP, CLS)", "Image optimization & resolving N+1 queries", "Unit testing with Vitest"],
    tools: ["Google Lighthouse", "Search Console", "npm audit", "Vitest & Playwright"],
    exercises: "Audit your deployed projects against the 14-point security checklist; add JSON-LD product metadata; run unit tests in CI.",
    projectIdea: "An optimized, high-scoring web application with 95+ Lighthouse scores and automated tests in GitHub Actions.",
    completionCriteria: "Your project passes security, SEO, and performance audits with automated tests running in CI.",
    nextStep: "Real-World Capstone Projects",
  },
  {
    number: 10,
    title: "Real-World Production Capstones",
    concepts: ["Complete lifecycle integration", "Scoping, building, testing, and shipping", "Production error tracking with Sentry", "Automated database backups & disaster recovery", "User feedback and continuous maintenance"],
    tools: ["Google Antigravity Workflows", "Sentry", "UptimeRobot", "Vercel + Managed Postgres"],
    exercises: "Build the complete Module 18 Candle Shop E-Commerce Website from scratch with test Stripe payments and live admin orders.",
    projectIdea: "A live, fully functioning web product serving real users (or local business) with uptime monitoring and automated backups.",
    completionCriteria: "At least one full-stack project live on the internet with real users, monitored and maintained for weeks.",
    nextStep: "Graduate to Full-Stack Engineer!",
  },
];

export function generateMetadata() {
  return {
    title: "10-Phase Learning Roadmap | Zero-Web",
    description: "A dependency-based full-stack learning roadmap from web fundamentals to real-world deployment.",
  };
}

export default function RoadmapPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Module 19 Blueprint
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
            The 10-Phase Dependency Roadmap
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Ordered by <em>dependency</em>, not by the calendar. Everyone learns at a different speed. 
            Advance to the next phase only when you satisfy the practical completion criteria and ship working code.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-12 before:w-0.5 before:bg-indigo-200 dark:before:bg-indigo-950 before:z-0">
          {ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.number}
              className="relative z-10 pl-16 md:pl-24"
            >
              {/* Circular Step Badge Marker */}
              <div className="absolute left-4 md:left-8 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md ring-4 ring-white dark:ring-obsidian-900">
                {phase.number}
              </div>

              {/* Phase Card */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm hover:shadow-card-hover transition-all space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/5 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      Phase {phase.number} of 10
                    </span>
                    <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {phase.title}
                    </h2>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                    Next: {phase.nextStep}
                  </span>
                </div>

                {/* Concepts & Tools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Core Concepts Mastered
                    </h4>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                      {phase.concepts.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Tools & Environment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-white/5 space-y-1">
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Hands-On Practice Exercise
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {phase.exercises}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Completion Criteria Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50">
                    <Trophy className="w-4 h-4 flex-shrink-0" />
                    <span>Completion Criteria: {phase.completionCriteria}</span>
                  </div>

                  <Link
                    href={`/learn#module-${phase.number}`}
                    className="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 self-end sm:self-auto"
                  >
                    Start Phase Lessons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
