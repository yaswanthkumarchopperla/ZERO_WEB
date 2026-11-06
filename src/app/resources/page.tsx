"use client";

import * as React from "react";
import { 
  Library, 
  Table2, 
  CheckSquare, 
  BookA, 
  ExternalLink, 
  Search,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = React.useState<"comparisons" | "checklists" | "glossary" | "directory">("comparisons");
  const [glossarySearch, setGlossarySearch] = React.useState("");

  const GLOSSARY_TERMS = [
    { term: "ACID", def: "Atomicity, Consistency, Isolation, Durability: the transactional guarantees of relational databases like PostgreSQL." },
    { term: "API (Application Programming Interface)", def: "A defined contract for software programs to communicate with each other (The Restaurant Menu Analogy)." },
    { term: "API Key", def: "A secret token identifying your application to a third-party service. Must never be exposed in client code or Git." },
    { term: "Authentication (AuthN)", def: "Verifying WHO a user is (e.g., logging in with email and password, like showing a passport at airport security)." },
    { term: "Authorization (AuthZ)", def: "Deciding WHAT an authenticated user is permitted to do (like a boarding pass allowing access to a specific seat)." },
    { term: "Bcrypt / Argon2id", def: "Deliberately slow, salted password-hashing algorithms that make stolen databases practically impossible to brute force." },
    { term: "Branch (Git)", def: "An independent line of development where you build features without modifying the stable main code." },
    { term: "Build Process", def: "Compiling, bundling, minifying, and tree-shaking source code into production-ready assets." },
    { term: "Cache", def: "A temporary storage layer that makes repeat requests significantly faster by avoiding repetitive computation or DB queries." },
    { term: "CDN (Content Delivery Network)", def: "A globally distributed network of edge servers that delivers web files from the geographical location closest to the user." },
    { term: "CI/CD", def: "Continuous Integration & Continuous Delivery: automating testing, building, and deploying code on every Git push." },
    { term: "Client", def: "The application running on the user's device (usually a web browser or mobile app) that sends requests to servers." },
    { term: "CLS (Cumulative Layout Shift)", def: "A Google Core Web Vital measuring unexpected layout jumps while a page loads (target: 0.1 or less)." },
    { term: "CNAME Record", def: "A DNS record that maps an alias subdomain (such as www.example.com) to a canonical domain or hosting provider." },
    { term: "CORS (Cross-Origin Resource Sharing)", def: "HTTP headers that allow servers to specify which browser origins may access their API resources." },
    { term: "CRUD", def: "Create, Read, Update, Delete: the four fundamental data operations in all persistent software." },
    { term: "CSRF (Cross-Site Request Forgery)", def: "An attack that tricks a logged-in user's browser into submitting unwanted commands using their cookies." },
    { term: "Database Normalization", def: "Structuring database tables to eliminate redundant duplicate data, following the rule: 'each fact is stored in exactly one place'." },
    { term: "DNS (Domain Name System)", def: "The internet's phonebook that translates human-readable domain names (example.com) into IP addresses." },
    { term: "DOM (Document Object Model)", def: "The browser's in-memory live tree representation of HTML elements on the current webpage." },
    { term: "Idempotent", def: "An operation that produces the exact same outcome whether executed once or repeated multiple times (vital for payment webhooks)." },
    { term: "INP (Interaction to Next Paint)", def: "A Google Core Web Vital measuring page responsiveness to clicks, taps, and keyboard events (target: 200ms or less)." },
    { term: "JWT (JSON Web Token)", def: "A digitally signed, compact token containing claims (e.g. userId, expiry). Note: payload is encoded, not encrypted." },
    { term: "LCP (Largest Contentful Paint)", def: "A Core Web Vital measuring when the primary content element on the screen finishes rendering (target: 2.5s or less)." },
    { term: "N+1 Query Problem", def: "An anti-pattern where an application executes 1 initial query plus N additional queries for each child record instead of 1 eager JOIN." },
    { term: "RBAC (Role-Based Access Control)", def: "Assigning permissions to roles (student, instructor, admin) and verifying these roles strictly on the server." },
    { term: "SQL Injection (SQLi)", def: "An attack where malicious SQL statements are inserted into entry fields. Prevented by parameterized queries and ORMs." },
    { term: "XSS (Cross-Site Scripting)", def: "An attack that injects malicious client-side scripts into web pages viewed by other users. Defended with output escaping and CSP." },
  ];

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (g) => g.term.toLowerCase().includes(glossarySearch.toLowerCase()) || g.def.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Library className="w-3.5 h-3.5" />
            Handbook Reference Hub
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white">
            Developer Reference & Tools
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Essential architectural decision matrices, pre-launch checklists, and strict definitions 
            derived directly from the <em>Full-Stack Website Development Guide</em>.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4 mb-8 overflow-x-auto no-scrollbar">
          {[
            { id: "comparisons", label: "10 Comparison Tables", icon: Table2 },
            { id: "checklists", label: "Master Launch Checklists", icon: CheckSquare },
            { id: "glossary", label: "Developer Glossary (60+ Terms)", icon: BookA },
            { id: "directory", label: "Verified Resource Directory", icon: Globe },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: COMPARISONS */}
        {activeTab === "comparisons" && (
          <div className="space-y-12">
            
            {/* Table 1: Frontend vs Backend vs Full-Stack */}
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Table2 className="w-5 h-5 text-indigo-500" />
                1. Frontend vs Backend vs Full-Stack
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="py-3 px-4 font-bold">Dimension</th>
                      <th className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">Frontend</th>
                      <th className="py-3 px-4 font-bold text-cyan-600 dark:text-cyan-400">Backend</th>
                      <th className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">Full-Stack</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Works on</td>
                      <td className="py-3 px-4">What users see & interact with</td>
                      <td className="py-3 px-4">Server logic, data, integrations</td>
                      <td className="py-3 px-4 font-medium">Both, plus how they connect</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Core skills</td>
                      <td className="py-3 px-4">HTML, CSS, JS, UI framework, a11y</td>
                      <td className="py-3 px-4">Server language, APIs, databases, auth</td>
                      <td className="py-3 px-4 font-medium">Both skill sets, plus deployment</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Typical tools</td>
                      <td className="py-3 px-4">React, Tailwind CSS, Vite</td>
                      <td className="py-3 px-4">Node.js/Express, Python/FastAPI, SQL</td>
                      <td className="py-3 px-4 font-medium">Next.js + PostgreSQL + Prisma</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">You see result in</td>
                      <td className="py-3 px-4">The browser viewport</td>
                      <td className="py-3 px-4">API JSON responses, logs, DB tables</td>
                      <td className="py-3 px-4 font-medium">The entire live product</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: SQL vs NoSQL */}
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Table2 className="w-5 h-5 text-indigo-500" />
                2. SQL (Relational) vs NoSQL (Non-Relational)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="py-3 px-4 font-bold">Feature</th>
                      <th className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">SQL (Relational)</th>
                      <th className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">NoSQL (Non-Relational)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Structure</td>
                      <td className="py-3 px-4">Tables with fixed schema, rows, and columns</td>
                      <td className="py-3 px-4">Documents (JSON), key-value, or graph</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Relationships</td>
                      <td className="py-3 px-4">Built-in foreign keys and JOIN operations</td>
                      <td className="py-3 px-4">Embedding or manual code-level references</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Transactions</td>
                      <td className="py-3 px-4 font-medium text-emerald-600 dark:text-emerald-400">Strong ACID transactions by design</td>
                      <td className="py-3 px-4">Varies; eventual consistency common</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Default choice for</td>
                      <td className="py-3 px-4 font-medium">Users, orders, payments, relational data</td>
                      <td className="py-3 px-4">Flexible unstructured content, logging, rapid caching</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Hosting Platforms */}
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Table2 className="w-5 h-5 text-indigo-500" />
                3. Hosting Platform Matrix (Vercel, Render, Railway, AWS)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="py-3 px-4 font-bold">Platform</th>
                      <th className="py-3 px-4 font-bold">Best For</th>
                      <th className="py-3 px-4 font-bold">Server Model</th>
                      <th className="py-3 px-4 font-bold">Key Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 px-4 font-bold text-indigo-600 dark:text-indigo-400">Vercel</td>
                      <td className="py-3 px-4">Next.js & full-stack apps</td>
                      <td className="py-3 px-4">Serverless / Edge functions</td>
                      <td className="py-3 px-4">Instant Git deploys & preview URLs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyan-600 dark:text-cyan-400">Railway</td>
                      <td className="py-3 px-4">Apps + PostgreSQL databases</td>
                      <td className="py-3 px-4">Long-running services</td>
                      <td className="py-3 px-4">Instant managed DBs with a few clicks</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">Render</td>
                      <td className="py-3 px-4">Full-stack web services & cron</td>
                      <td className="py-3 px-4">Long-running servers</td>
                      <td className="py-3 px-4">Familiar server model with managed DB</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-amber-600 dark:text-amber-400">AWS / GCP</td>
                      <td className="py-3 px-4">Large or custom enterprise systems</td>
                      <td className="py-3 px-4">Containers, VMs, Serverless</td>
                      <td className="py-3 px-4">Most powerful; requires billing alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CHECKLISTS */}
        {activeTab === "checklists" && (
          <div className="space-y-8">
            <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-indigo-500" />
                  Pre-Launch & Production Checklists
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Use this verified checklist before declaring any website &ldquo;done&rdquo;.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                
                {/* Planning & Build */}
                <div className="space-y-3">
                  <h4 className="font-bold uppercase tracking-wider text-xs text-indigo-600 dark:text-indigo-400">
                    1. Planning & Build Quality
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Purpose, target personas, and MoSCoW MVP scope documented",
                      "Mobile-first responsive design with strict 4-48px spacing scale",
                      "Semantic HTML (<header>, <main>, <nav>, <article>, <label>)",
                      "Code versioned in Git with README.md, .gitignore, and .env.example",
                      "Server-side validation of all user inputs using Zod/Pydantic",
                      "Database schema with primary/foreign keys, indexes, and migrations",
                      "Passwords hashed with bcrypt (cost 12); auth checked on server",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Launch & Security */}
                <div className="space-y-3">
                  <h4 className="font-bold uppercase tracking-wider text-xs text-indigo-600 dark:text-indigo-400">
                    2. Security, SEO & Launch
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "HTTPS enforced with HSTS and SSL/TLS certificate active",
                      "All SQL queries parameterized; zero raw string concatenations",
                      "Production environment variables set; zero secrets committed to Git",
                      "Automated database backups configured with tested restore",
                      "Custom domain connected with canonical redirect (www / non-www)",
                      "Unique <title>, meta description, and sitemap.xml submitted",
                      "Core Web Vitals passing (LCP < 2.5s, INP < 200ms, CLS < 0.1)",
                      "Uptime monitoring & error tracking (Sentry/UptimeRobot) active",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GLOSSARY */}
        {activeTab === "glossary" && (
          <div className="space-y-6">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search glossary definitions..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((g) => (
                <div
                  key={g.term}
                  className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 space-y-1.5 shadow-sm"
                >
                  <h4 className="font-bold text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                    {g.term}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {g.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DIRECTORY */}
        {activeTab === "directory" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Official Documentation", items: ["MDN Web Docs", "web.dev", "TypeScript Docs", "Next.js Docs", "Prisma Docs", "Tailwind CSS"] },
                { title: "Learning & Practice", items: ["freeCodeCamp", "The Odin Project", "CS50 Web", "Frontend Mentor", "Exercism"] },
                { title: "Testing & Monitoring", items: ["Playwright", "Vitest", "Postman", "Sentry", "UptimeRobot", "Google Search Console"] },
              ].map((cat) => (
                <div key={cat.title} className="p-6 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 space-y-3">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{cat.title}</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {cat.items.map((i) => (
                      <li key={i} className="flex items-center justify-between hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer">
                        <span>{i}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

