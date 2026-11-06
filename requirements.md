# Zero-Web: Requirements Specification

> **Version:** 1.0.0  
> **Status:** Approved for Implementation  
> **Platform Tagline:** Learn It. Build It. Launch It.  
> **Brand Subheadline:** From Zero Knowledge to Your First Live Website.  

---

## 1. Executive Summary & Core Objective

### 1.1 The Core Problem
Most online coding platforms (e.g., W3Schools, Codecademy) teach programming in isolated silos—syntax snippets, single-function challenges, or algorithmic puzzles. As a result, beginner learners complete dozens of lessons yet remain unable to:
1. Initialize a real code repository on GitHub.
2. Use modern AI-native developer environments (**Google Antigravity**).
3. Connect frontend user interfaces to backend APIs and persistent databases.
4. Manage environment variables, domains, DNS records, and SSL certificates.
5. Deploy a live, secure website that users can access globally.

### 1.2 The Zero-Web Solution
**Zero-Web** is an interactive, beginner-first web development learning platform designed to bridge the gap between "knowing syntax" and "launching production web applications." 

The learning paradigm is structured around an unbroken, practical 12-step path:
$$\text{IDEA} \rightarrow \text{PLANNING} \rightarrow \text{DESIGN} \rightarrow \text{GITHUB} \rightarrow \text{ANTIGRAVITY} \rightarrow \text{FRONTEND} \rightarrow \text{BACKEND} \rightarrow \text{DATABASE} \rightarrow \text{APIs} \rightarrow \text{TESTING} \rightarrow \text{DEPLOYMENT} \rightarrow \text{LIVE WEBSITE}$$

---

## 2. Target Audience Personas

1. **Absolute Beginners**: Zero previous programming or command-line knowledge; require crystal-clear analogies, step-by-step visual screenshots, and zero jargon.
2. **College Students**: Need practical portfolio projects, modern Git workflows, and resume-ready full-stack engineering skills.
3. **AI-Native Developers**: Want to learn how to build production software with AI IDEs (**Google Antigravity**) rather than writing boilerplate manually.
4. **Indie Creators & Startup Founders**: Want to launch web apps, MVPs, and SaaS products independently without high agency costs.

---

## 3. Brand Identity & Design Direction

### 3.1 Visual Guidelines
- **Aesthetic**: Premium, developer-focused, SaaS dashboard aesthetic.
- **Palette**: Deep Navy (`#0A0F1D`, `#0F172A`), Crisp White (`#FFFFFF`), Electric Indigo/Purple (`#6366F1`, `#8B5CF6`), and High-Contrast Accent Cyan (`#06B6D4`).
- **Modes**: Native Dark and Light themes with persistent user preference.
- **Typography**: Clean sans-serif for UI (`Inter` / `Plus Jakarta Sans`) and crisp monospace for code and terminal displays (`JetBrains Mono`).
- **Visual Polish**: Subtle 1px borders, rounded cards (`rounded-2xl`), smooth CSS transitions, minimal gradients, zero bloated animations.
- **Layout**: 100% responsive across mobile, tablet, laptop, and ultra-wide desktop.

---

## 4. The 19-Module Complete Curriculum

The platform contains 19 structured, sequential modules:

### Module 01: Understanding Website Development
- What is a website?
- How websites work across the internet.
- Client vs. server architecture.
- Static vs. dynamic websites.
- Frontend vs. backend vs. full-stack development.
- How browser requests reach servers (DNS, IP, packets).
- HTTP and HTTPS fundamentals.

### Module 02: Project Planning and Requirements
- Selecting a viable website idea.
- Identifying target users and personas.
- Gathering functional vs. non-functional requirements.
- Minimum Viable Product (MVP) scoping.
- User stories and acceptance criteria.
- User flow diagramming.
- Sitemap creation.
- Low-fidelity wireframing.
- Choosing the right technology stack.

### Module 03: UI/UX Design
- UI vs. UX design principles.
- Wireframing to interactive prototyping.
- Responsive design principles (Fluid grids, breakpoints).
- Mobile-first design methodology.
- Typography scales and readability.
- Color theory, contrast ratios, and spacing rules.
- Design systems and reusable component libraries.
- Accessibility standards (WCAG 2.1 AA).
- Figma fundamentals for developers.

### Module 04: Frontend Development
- HTML5 fundamentals and semantic structure (`header`, `main`, `nav`, `section`, `article`).
- Accessible forms, input controls, and client-side validation.
- CSS3 fundamentals, selectors, specificity, and the box model.
- Flexbox layout mastery and CSS Grid system.
- Responsive breakpoints and fluid typography.
- JavaScript essentials: variables (`let`, `const`), data types, functions, events, and scope.
- DOM manipulation and asynchronous JavaScript (`fetch`, `async`/`await`).
- React fundamentals: components, JSX, props, state (`useState`), and lifecycle (`useEffect`).
- Next.js fundamentals: App Router, Server Components vs. Client Components, and nested layouts.
- Tailwind CSS utility-first styling and component design.

### Module 05: Backend Development
- What is backend development and server architecture?
- How web servers listen, route, and respond.
- HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
- HTTP status codes (2xx, 3xx, 4xx, 5xx).
- RESTful API design principles.
- Clean backend project directory structure.
- Node.js runtime and asynchronous event loop.
- Express.js route handlers, middleware, and error handling.
- Python and FastAPI fundamentals.
- Backend request validation (Zod / Pydantic) and business logic isolation.

### Module 06: Database Management
- What is a database and why files are not enough.
- Relational (SQL) vs. Non-Relational (NoSQL) databases.
- Relational concepts: tables, rows, columns, primary keys, foreign keys.
- MongoDB fundamentals: collections, BSON documents, and queries.
- PostgreSQL fundamentals: schemas, datatypes, and constraints.
- CRUD operations (Create, Read, Update, Delete).
- Relationships: One-to-One, One-to-Many, Many-to-Many.
- Database normalization (1NF, 2NF, 3NF).
- Indexing for query performance.
- ACID transactions and data integrity.
- Automated database backups and recovery.
- Object-Relational Mapping (ORM) fundamentals using Prisma.

### Module 07: Authentication and Authorization
- User registration, login, and session lifecycles.
- Secure password hashing using bcrypt/Argon2 with salt.
- State-based sessions vs. stateless JSON Web Tokens (JWT).
- Secure HTTP-only cookies and SameSite attributes.
- Google OAuth 2.0 and OpenID Connect (OIDC) integration.
- Role-Based Access Control (RBAC): Student, Instructor, Admin.
- Secure password reset workflows via time-limited signed tokens.
- Transactional email verification.
- Multi-Factor Authentication (MFA / TOTP) concepts.

### Module 08: APIs and Third-Party Integrations
- What are APIs and how web services communicate?
- JSON syntax, serialization, and parsing.
- REST vs. GraphQL architectural trade-offs.
- Reading and writing API documentation (OpenAPI / Swagger).
- API keys, Bearer tokens, and secure header transmission.
- Rate limiting, backoff strategies, and idempotency.
- Webhooks: receiving real-time event payloads securely.
- Payment gateway integrations (Stripe checkout & webhook verification).
- Transactional email integrations (Resend / SendGrid).
- AI API integrations (Google Gemini API).
- API testing and debugging using Postman and cURL.

### Module 09: Domain and DNS
- What is a domain name and how domain registries work?
- Top-Level Domains (TLDs: `.com`, `.org`, `.dev`, `.in`).
- Domain purchasing and registrar configuration.
- What is the Domain Name System (DNS)?
- DNS record types: `A`, `AAAA`, `CNAME`, `MX`, `TXT`, and `NS`.
- Nameservers and DNS resolution flow.
- DNS propagation timing and debugging (`dig`, `nslookup`).
- Pointing custom domains to cloud platforms (Vercel, Cloudflare).
- Configuring subdomains (`api.example.com`, `app.example.com`).
- SSL/TLS certificates and automatic Let's Encrypt issuance.

### Module 10: Hosting and Deployment
- What is web hosting? Localhost vs. production environments.
- Hosting categories: Static, Serverless, Containers, and VPS.
- Frontend hosting vs. backend hosting vs. unified full-stack hosting.
- Build processes, bundling, and asset compilation.
- Git-based automated deployment workflows.
- Continuous Integration & Continuous Deployment (CI/CD) pipelines.
- Managing production environment variables securely (`.env.production`).
- Diagnosing and resolving common build & runtime deployment errors.
- Hands-on deployment with Vercel, Netlify, Render, and Railway.

### Module 11: SEO and Website Discoverability
- SEO fundamentals: search engine crawlers and indexing.
- Developer keyword research and intent analysis.
- On-page SEO: semantic heading hierarchy, alt attributes, URLs.
- Off-page SEO and domain authority concepts.
- Technical SEO: mobile responsiveness, crawl budgets, redirect status codes.
- Dynamic meta titles, descriptions, and OpenGraph/Twitter cards.
- Automated `sitemap.xml` generation and `robots.txt` configuration.
- Structured data with Schema.org JSON-LD.
- Core Web Vitals (LCP, INP, CLS) and their SEO ranking impact.
- Setting up Google Search Console and Google Analytics 4.

### Module 12: Website Security
- HTTPS, TLS encryption, and Strict-Transport-Security (HSTS).
- SQL Injection (SQLi) prevention via parameterized queries/ORMs.
- Cross-Site Scripting (XSS) prevention and DOM sanitization.
- Cross-Site Request Forgery (CSRF) tokens and SameSite cookies.
- Cross-Origin Resource Sharing (CORS) policies and whitelisting.
- Modern password security standards and brute-force mitigation.
- Strict input validation and sanitization using Zod schemas.
- API rate limiting using token-bucket and sliding-window algorithms.
- Secret management: preventing committed `.env` files in Git.
- Dependency vulnerability scanning (`npm audit`, Snyk).
- Content Security Policy (CSP) and HTTP security headers.
- OWASP Top 10 vulnerabilities walkthrough and mitigations.

### Module 13: Performance Optimization
- Why website speed matters for user retention and conversion.
- Modern image formats (AVIF, WebP), sizing, and lazy loading.
- Browser caching, HTTP cache-control headers, and ETags.
- Content Delivery Networks (CDNs) and edge caching.
- JavaScript code splitting, dynamic imports, and bundle analysis.
- CSS/JS minification, compression (Brotli, Gzip), and tree-shaking.
- Auditing performance using Google Lighthouse and PageSpeed Insights.
- Real-user performance monitoring (RUM) and error tracking.

### Module 14: Version Control and Development Tools
- Git version control fundamentals: repository, staging area, commit history.
- GitHub account creation and SSH key setup.
- Initializing local Git repos and creating remote GitHub repositories.
- Cloning, branching (`feature/`, `bugfix/`), and switching branches.
- Writing meaningful, conventional commit messages.
- Git push, pull, fetch, and remote tracking.
- Opening and reviewing Pull Requests (PRs).
- Resolving merge conflicts cleanly.
- Authoring professional README files and comprehensive `.gitignore` rules.
- Modern package managers: `npm`, `pnpm`.
- Browser Developer Tools: Elements, Console, Network, Application, and Storage tabs.
- API testing with Postman.
- Docker containerization fundamentals for local reproducibility.
- **Google Antigravity Setup and Full Workflow**: Workspace configuration, prompt engineering, agent task execution, code diff inspection, terminal verification, and deployment prep.

### Module 15: Testing and Quality Assurance
- Why automated testing saves projects from catastrophic failure.
- The Testing Pyramid: Unit, Integration, and End-to-End (E2E) tests.
- Manual testing checklists and exploratory testing.
- Cross-browser compatibility testing (Chromium, Firefox, WebKit).
- Mobile device emulation and viewport testing.
- Unit and integration testing with Vitest and React Testing Library.
- End-to-End browser automation with Playwright.
- Systemic debugging methodologies: reproducing bugs, isolating state, reading stack traces.
- Pre-deployment smoke testing checklist.

### Module 16: Website Maintenance and Monitoring
- Post-launch maintenance routines and health checks.
- Systematic bug triage and hotfix release procedures.
- Safe dependency upgrading and regression testing.
- Automated database backup scheduling and point-in-time recovery testing.
- Server and application uptime monitoring (BetterStack, UptimeRobot).
- Real-time exception logging and error tracking (Sentry).
- Analyzing web traffic and user drop-off funnels.
- Collecting and acting on real user feedback.
- Vertical vs. horizontal scaling concepts for growing applications.

### Module 17: Complete Technology Stacks
- Architectural breakdown and comparison of standard stacks:
  - **MERN Stack**: MongoDB, Express, React, Node.js.
  - **Modern Next.js Full-Stack**: React Server Components, Server Actions, PostgreSQL, Prisma, Tailwind CSS.
  - **React + Python + FastAPI**: High-performance backend API with decoupled React SPA.
  - **React/Next.js + Supabase**: Serverless BaaS with real-time PostgreSQL and Auth.
- Deep-dive trade-off matrix: PostgreSQL vs. MongoDB.
- Runtime comparison: Node.js vs. Python for backend services.
- Frontend library comparison: React vs. Angular vs. Vue.
- Cloud hosting platform comparison: Vercel vs. Netlify vs. Render vs. Railway vs. AWS.

### Module 18: Build a Real-World Project (Flagship Capstone)
- **Project: Complete Production-Grade E-Commerce Web Application**
  1. Product requirements and user stories.
  2. Figma wireframing and design token specification.
  3. Responsive frontend development with product catalog, search, and filtering.
  4. Backend REST APIs for products, orders, cart, and users.
  5. Relational PostgreSQL database schema with Prisma ORM.
  6. Secure customer authentication and session management.
  7. Interactive shopping cart with persistent storage.
  8. Stripe payment gateway integration in test mode.
  9. Protected Admin Dashboard for product and order management.
  10. Unit, integration, and checkout flow testing.
  11. Application security audit and OWASP validation.
  12. Git repository organization and CI/CD automation.
  13. Production deployment on Vercel and Railway.
  14. Custom domain connection and SSL configuration.
  15. SEO optimization and metadata setup.
  16. Live website verification and uptime monitoring.

### Module 19: Complete Learning Roadmap
- Visual, dependency-based progression roadmap:
  1. Web Fundamentals
  2. HTML5 & CSS3
  3. JavaScript Mastery
  4. Frontend Frameworks (React & Next.js)
  5. Backend Engineering (Node.js/Express & FastAPI)
  6. Database Management (PostgreSQL, Prisma, MongoDB)
  7. Authentication & Third-Party APIs
  8. Git Version Control & Cloud Deployment
  9. Security, SEO & Performance Optimization
  10. Full-Stack Real-World Capstone Projects
- Individual completion criteria, hands-on checkpoints, and milestone certificates for every stage.

---

## 5. Tutorial Experience (W3Schools-Style Interface)

The tutorial reader is the core learning interface of Zero-Web. It features a modern 3-column layout:

### 5.1 Layout Specifications
1. **Left Navigation Sidebar (Collapsible)**:
   - Module list with progress percentages.
   - Expandable chapters with individual lesson links.
   - Visual status indicators: Not Started (grey circle), In Progress (amber half-circle), Completed (green checkmark).
   - Real-time search filter for quick lesson lookup.
2. **Main Instructional Content**:
   - Lesson header: Module badge, estimated read time, difficulty tag, and bookmark button.
   - The **10-Part Lesson Anatomy** (detailed in Section 5.2).
   - Interactive code viewer with syntax highlighting, copy-to-clipboard, and live preview tabs.
   - Sequential navigation footer: `← Previous Lesson` and `Next Lesson →` buttons with dynamic progress updates.
3. **Right Context Sidebar (Sticky)**:
   - "On this page" Table of Contents with active scroll-spy highlighting.
   - AI Teacher quick-trigger widget ("Ask AI Teacher about this step").
   - Module progress radial gauge.
   - Downloadable cheat sheets, starter templates, and GitHub links.

### 5.2 Mandatory 10-Part Lesson Anatomy
Every lesson must strictly follow this instructional structure:
1. **What are we learning?** Clear, jargon-free 2-sentence explanation.
2. **Why is it important?** Real-world context and consequences of not knowing it.
3. **What tools do we need?** Prerequisites, installed CLI utilities, and services.
4. **Step-by-step explanation:** Granular, numbered steps.
5. **Screenshots showing the actual process:** Real instructional screenshots captured from the exact workflow (no decorative stock images).
6. **Practical demonstration:** Working code snippets or terminal commands.
7. **Common errors and solutions:** What can go wrong and the exact fix.
8. **Practice task:** A self-contained exercise for the learner.
9. **Interactive quiz:** Knowledge check before marking complete.
10. **Lesson completion:** Explicit verification criteria required before completion is registered in the database.

---

## 6. Real-World Practical Learning Methodology

Zero-Web strictly rejects theoretical-only learning. Every lesson requires active learner execution.

### Example: Lesson "Create a GitHub Repository"
- **Step 1:** Open `github.com` in your browser.
  - *Screenshot:* GitHub homepage showing the sign-in / header area.
  - *Expected Result:* Logged-in dashboard is visible.
  - *Mistakes to avoid:* Not verifying your email address before creating repos.
- **Step 2:** Click the "+" icon in the top-right corner and select "New repository".
  - *Screenshot:* Dropdown menu with "New repository" highlighted.
- **Step 3:** Enter repository name (e.g., `my-first-website`).
  - *Screenshot:* Repository creation form with naming convention advice.
- **Step 4:** Choose visibility (Public vs. Private).
  - *Explanation:* Public allows free Vercel deployment and portfolio sharing.
- **Step 5:** Check "Add a README file" and select a `.gitignore` template for Node.
- **Step 6:** Click "Create repository".
  - *Expected Result:* Newly created repository page with initial commit visible.
- **Step 7:** Connect repository inside **Google Antigravity** via Clone URL.

---

## 7. Google Antigravity Learning Center

Google Antigravity is the primary AI development environment taught throughout the platform. The dedicated learning section covers:

1. **Introduction to Google Antigravity:** What makes it an agentic AI IDE compared to traditional code editors.
2. **Installation & System Setup:** Environment prerequisites, installation, and initial configuration.
3. **Workspace Management:** Creating workspaces, configuring project root directories, and setting up `.env` contexts.
4. **Connecting GitHub Projects:** Cloning repositories directly into Antigravity workspaces and configuring branch tracking.
5. **AI Agent Fundamentals:** Understanding how agentic assistants read files, write code, run terminal commands, and inspect project state.
6. **Prompt Engineering for Web Developers:** How to write structured, actionable prompts that produce production-ready code without hallucinations.
7. **Scaffolding Project Structures:** Prompting Antigravity to generate clean Next.js, Express, and database directory layouts.
8. **Frontend Generation & Live Preview:** Generating responsive Tailwind components, testing UI states, and inspecting styling.
9. **Backend & API Generation:** Building Express and Next.js Route Handlers with validation and error handlers.
10. **Reviewing Code Diffs:** How to inspect, accept, or reject AI-generated changes safely before committing.
11. **Executing and Monitoring Terminal Tasks:** Running dev servers (`npm run dev`), database migrations, and package installations through Antigravity.
12. **Automated Error Debugging:** Pasting terminal stack traces into Antigravity to analyze and auto-correct syntax or runtime errors.
13. **Application Testing:** Prompting Antigravity to write and execute unit and end-to-end tests.
14. **Git Operations & Deployment Prep:** Staging changes, drafting commit messages, creating branches, pushing to GitHub, and prepping build commands for Vercel/Railway.

---

## 8. AI Teacher (Personal Learning Assistant)

### 8.1 Functional Capabilities
- **Pedagogical Persona:** Patient, encouraging senior software architect and educator. Employs the Socratic method: explains *why* things work rather than simply spitting out raw code.
- **Bilingual Support:** Full conversational fluency in **English** and **Telugu** (including technical explanations using familiar Telugu analogies for South Asian learners).
- **Context-Aware:** Automatically receives the current course, module, lesson slug, code snippet, and student progress in the prompt context.
- **Code Explanation:** Deconstructs provided code line-by-line with breakdown annotations.
- **Error Screenshot Diagnosis:** Multimodal image recognition allows students to drag and drop browser or terminal error screenshots; the AI analyzes the visual error and returns the exact fix.
- **Terminal Log Analyzer:** Parses cryptic CLI stack traces (Node, npm, TypeScript, Git) and explains what happened in plain English.
- **Practice Generator:** Generates custom micro-exercises based on the current lesson topic.

### 8.2 Interface Specifications
- Slide-over drawer and dedicated `/ai-teacher` full-page interface.
- Chat message history with session persistence.
- "New Conversation" button.
- Image upload attachment for screenshots.
- Syntax-highlighted code blocks with one-click copy.
- Pre-populated prompt chips (e.g., *"Explain this code line by line"*, *"Why did this error occur?"*, *"Explain in Telugu"*).
- **Security Rule:** Powered by server-side Google Gemini API route handlers (`/api/ai/chat`, `/api/ai/analyze-screenshot`). Zero client-side API key exposure.

---

## 9. Student Dashboard

Accessible at `/dashboard` for authenticated learners:
- **Hero Welcome Banner:** Personalized greeting, motivational quote, and quick "Continue Learning" button linking to their exact last-visited lesson.
- **Progress Radial Metrics:** Overall platform completion percentage, completed lessons count, quizzes taken, and projects launched.
- **Active Learning Roadmap:** Interactive step-by-step track highlighting completed, current, and upcoming stages.
- **My Projects:** Cards showing enrolled projects, current step, GitHub repo URL, live URL, and review status.
- **Achievements & Badges:** Earnable milestones (e.g., *"First Commit"*, *"HTML Architect"*, *"API Explorer"*, *"Full-Stack Master"*).
- **Certificates:** Cryptographically verifiable PDF/digital completion certificates upon completing milestone roadmaps and capstones.
- **Quick AI Teacher Launcher:** One-click shortcut into contextual chat.

---

## 10. Project Lab

Project-based learning divided into 9 practical categories:
1. **Beginner Websites:** Single-page personal bio, link-in-bio clone.
2. **Portfolio Websites:** Developer portfolio with project showcase and contact form.
3. **Landing Pages:** Modern SaaS product launch page with pricing tiers and email waitlist.
4. **Student Management Systems:** CRUD application with tables, search, filters, and pagination.
5. **Authentication Projects:** Secure Auth portal with email verification and password reset.
6. **E-Commerce Websites:** Flagship capstone with product catalog, cart, Stripe checkout, and admin orders.
7. **Blog Applications:** Markdown-powered CMS blog with comments and tag filtering.
8. **Admin Dashboards:** Analytics dashboard with charts, data tables, and dark mode.
9. **AI-Powered Websites:** Web application integrating the Gemini API for content generation or translation.

### Project Card & Detail Structure
Each project includes:
- Difficulty badge (Beginner, Intermediate, Advanced) and estimated completion time.
- Prerequisites checklist.
- Architecture diagram and wireframes.
- Step-by-step implementation guide.
- **Google Antigravity Prompts:** Exact prompts students can use in Antigravity to scaffold and build each feature.
- Testing and verification checklist.
- Deployment guide for Vercel/Railway.
- Submission form: Repository URL + Live Website URL + screenshot upload for certificate verification.

---

## 11. Quizzes and Assessment System

### 11.1 Question Formats
- Multiple Choice Questions (MCQ) with 4 options and detailed explanation on answer.
- True / False questions.
- Fill-in-the-blanks for syntax and command verification.
- Code-reading challenges (spot the bug or predict output).
- Hands-on practical assignments.

### 11.2 Completion Rules
- A lesson is **NOT** marked complete merely by opening or scrolling the page.
- Requirements for completion:
  1. Passing the end-of-lesson quiz ($\ge 80\%$ score).
  2. Marking the practice task checklist as completed.
  3. Clicking explicit "Complete & Proceed" button which sends an authenticated mutation to the database.

---

## 12. Admin Dashboard

Accessible at `/admin` for users with role `ADMIN`:
- **Overview Analytics:** Total registered students, active daily learners, lesson completion rates, quiz pass rates, and popular drop-off points.
- **Course & Module Management:** Create, edit, reorder, publish/unpublish courses and modules.
- **Lesson CMS:** Rich markdown/MDX editor, screenshot asset uploader, code snippet manager, and estimated read-time calculator.
- **Quiz Builder:** Question creator, explanation editor, and passing threshold configurator.
- **Project Lab Manager:** Add new project tracks, update Antigravity prompt templates, and review student live project submissions.
- **User Management:** View student accounts, change roles (STUDENT $\leftrightarrow$ ADMIN), review progress, and reset credentials.
- **AI Settings:** Configure Gemini system instructions, temperature, rate limits, and fallback models.

---

## 13. Route & URL Structure

```text
/                              -> Public Landing Page
/learn                         -> Learning Hub / All Modules
/roadmap                       -> Interactive Dependency Roadmap
/courses                       -> Course Catalog
/courses/[course-slug]         -> Course Overview & Syllabus
/learn/[course-slug]/[lesson-slug] -> Interactive W3Schools-style Tutorial Reader
/projects                      -> Project Lab Overview
/projects/[project-slug]       -> Project Guide & Antigravity Workflow
/ai-teacher                    -> AI Learning Assistant Full Page
/dashboard                     -> Authenticated Student Dashboard
/profile                       -> User Profile & Account Settings
/login                         -> Authentication (Sign In)
/register                      -> Authentication (Sign Up)
/admin                         -> Admin Overview & Analytics
/admin/courses                 -> Admin Course Manager
/admin/lessons                 -> Admin Lesson CMS
/admin/users                   -> Admin User Management
/admin/projects                -> Admin Project Review & Management
/admin/analytics               -> Platform Insights & Funnels
/api/auth/*                    -> NextAuth / Auth.js endpoints
/api/ai/*                      -> Secure Server-side Gemini API handlers
/api/progress/*                -> Lesson & Quiz completion mutations
/api/projects/*                -> Project submission & verification endpoints
```

---

## 14. Non-Functional Requirements

### 14.1 Security
- Password hashing with `bcryptjs` (work factor $\ge 12$).
- Stateless JWT or encrypted database sessions with `HttpOnly`, `Secure`, and `SameSite=Lax/Strict` cookies.
- Server-side role-based middleware (`/admin/*` locked to `ADMIN` role).
- Input validation via `Zod` on all API routes and Server Actions.
- Rate limiting on authentication and AI endpoints (Token Bucket algorithm).
- Environment variable isolation (`NEXT_PUBLIC_` strictly reserved for non-sensitive client variables).

### 14.2 Performance
- Google Lighthouse score $\ge 90$ for Performance, Accessibility, Best Practices, and SEO.
- Server Components (RSC) utilized for static and read-heavy tutorial pages to ensure near-instant initial page loads.
- Client-side navigation with prefetching for seamless lesson transitions.
- Image optimization using Next.js `<Image />` with modern AVIF/WebP formats.

### 14.3 Accessibility (a11y)
- Full compliance with WCAG 2.1 AA standards.
- High-contrast color ratios for both light and dark modes ($\ge 4.5:1$).
- Complete keyboard navigability across tutorial sidebar, quiz inputs, and modal dialogs.
- ARIA landmarks and live regions for dynamic AI chat responses.

### 14.4 SEO & Discoverability
- Dynamic OpenGraph and Twitter cards for all courses, lessons, and project pages.
- Auto-generated `sitemap.xml` and standard `robots.txt`.
- Structured JSON-LD breadcrumbs, articles, and educational courses metadata.

