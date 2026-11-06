# Zero-Web: Master Development Roadmap

> **Platform:** Zero-Web ("Learn It. Build It. Launch It.")  
> **Development Methodology:** Incremental, Phase-by-Phase, Production-Grade  
> **Primary AI Development Tool:** Google Antigravity  

---

## 🗺️ Master Phase Overview

| Phase | Title | Focus Area | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **System Architecture & Documentation** | Requirements, Architecture, Database, Design System, Roadmap | 🚀 **Completed** |
| **Phase 2** | **Homepage & Public Pages** | Landing page, Roadmap explorer, Course preview, Nav, Footer | ⏳ *Next Milestone* |
| **Phase 3** | **Authentication & Student Dashboard** | Auth.js, Login/Register, Session, RBAC, Personalized Dashboard | 📋 Scheduled |
| **Phase 4** | **LMS & Course Overview Pages** | Course catalog, Syllabus hierarchy, Module views | 📋 Scheduled |
| **Phase 5** | **W3Schools-Style Tutorial Reader** | 3-column layout, 10-step lesson anatomy, real screenshots | 📋 Scheduled |
| **Phase 6** | **AI Teacher Integration** | Gemini API, Bilingual (EN/TE), Screenshot debugger, Chat drawer | 📋 Scheduled |
| **Phase 7** | **Quizzes & Project Lab** | Assessment engine, 9 project tracks, submission verification | 📋 Scheduled |
| **Phase 8** | **Admin Dashboard & CMS** | Course CRUD, lesson editor, user management, analytics | 📋 Scheduled |
| **Phase 9** | **Full Backend & Database Integration** | PostgreSQL, Prisma migrations, seed scripts, rate limits | 📋 Scheduled |
| **Phase 10** | **Testing & Quality Assurance** | Vitest unit tests, Playwright E2E, accessibility, Lighthouse | 📋 Scheduled |
| **Phase 11** | **Git Integration & CI/CD** | GitHub repository connection, GitHub Actions, build scripts | 📋 Scheduled |
| **Phase 12** | **Production Deployment & Live Launch**| Vercel/Railway deployment, domain connection, live testing | 📋 Scheduled |
| **Future** | **Zero-Web Mobile App** | React Native / Expo cross-platform mobile client | 💡 Future Horizon |

---

## 📌 Phase 1: Architecture, Planning & Documentation (Completed)
- [x] Inspect existing workspace and environment tooling (Node.js v24, npm 11, Git).
- [x] Analyze 19-module curriculum, target audience, and Google Antigravity workflows.
- [x] Author comprehensive project documentation:
  - `README.md`
  - `requirements.md`
  - `architecture.md`
  - `database-design.md`
  - `design-system.md`
  - `development-roadmap.md`
- [x] Propose clean modular Next.js App Router folder structure.
- [x] Design full PostgreSQL schema with Prisma ORM.
- [x] Define first implementation milestone and prepare execution plan.

---

## 🎯 Phase 2: Complete Responsive Homepage and Public Pages (Next Up)

### Objective
Create a world-class, responsive, high-converting public landing page and marketing surface that showcases Zero-Web's unique value proposition: taking absolute beginners from zero knowledge to a live deployed website using Google Antigravity.

### Deliverables & Task Breakdown
1. **Next.js & Tailwind Initialization**:
   - Initialize Next.js 15+ App Router with TypeScript, Tailwind CSS, Lucide React, and `next-themes`.
   - Configure Tailwind with design system tokens (Deep Navy, Electric Indigo, Cyan, Slate scales).
2. **Global Navigation Bar (`Navbar.tsx`)**:
   - Zero-Web logo with brand gradient spark.
   - Links: Home, Learn, Learning Roadmap, Projects, AI Teacher, Resources.
   - Right section: Dark/Light mode toggle, Login button, "Get Started" primary CTA.
   - Mobile responsive slide-over drawer with keyboard accessibility.
3. **Hero Section (`Hero.tsx`)**:
   - Headline: *"From Zero Knowledge to Your First Live Website."*
   - Subheadline: *"Learn how to create real websites step by step. From your first GitHub repository to deploying your website online, we'll guide you through everything."*
   - Dual CTAs: "Start Learning" and "Explore Learning Roadmap".
   - Interactive Learning Progress Preview card and developer IDE mock visual featuring Google Antigravity.
4. **The 12-Step Development Journey Section (`JourneyFlow.tsx`)**:
   - Interactive visual roadmap: IDEA $\rightarrow$ PLANNING $\rightarrow$ DESIGN $\rightarrow$ GITHUB $\rightarrow$ ANTIGRAVITY $\rightarrow$ FRONTEND $\rightarrow$ BACKEND $\rightarrow$ DATABASE $\rightarrow$ APIs $\rightarrow$ TESTING $\rightarrow$ DEPLOYMENT $\rightarrow$ LIVE WEBSITE.
5. **19-Module Curriculum Preview (`CurriculumPreview.tsx`)**:
   - Categorized module cards with icons, lesson counts, estimated duration, and key skills learned.
6. **Popular Tutorials Section (`PopularTutorials.tsx`)**:
   - Cards highlighting beginner-favorite tutorials (e.g., *"Create Your First GitHub Repo"*, *"Prompting Google Antigravity for UI"*, *"Deploying to Vercel in 60 Seconds"*).
7. **Real-World Project Showcase (`FeaturedProjects.tsx`)**:
   - Teaser cards for the 9 project tracks, spotlighting the flagship Full-Stack E-Commerce Capstone.
8. **AI Teacher Showcase (`AITeacherSection.tsx`)**:
   - Interactive demo showing bilingual explanations (English & Telugu) and terminal error screenshot debugging.
9. **Student Testimonials & Social Proof (`Testimonials.tsx`)**:
   - Real developer stories from beginners who shipped their first live website.
10. **Frequently Asked Questions (`FaqSection.tsx`)**:
    - Accordion FAQs addressing beginner questions (e.g., "Do I need any coding experience?", "Why Google Antigravity instead of VS Code?", "Is it really free?").
11. **Professional Global Footer (`Footer.tsx`)**:
    - Product links, curriculum sitemap, community links, GitHub link, copyright, and legal disclaimers.

---

## 🔒 Phase 3: Authentication & Student Dashboard
- Initialize Auth.js / NextAuth v5 with credentials and Google OAuth providers.
- Build `/login` and `/register` pages with form validation (Zod + React Hook Form).
- Create `/dashboard` for logged-in students:
  - Welcome banner with "Continue Learning" shortcut.
  - Overall progress radial gauge and completed lessons tally.
  - Current learning roadmap visual tracker.
  - My Projects widget showing active code repos and live URLs.
  - Earned achievements and downloadable completion certificates.

---

## 📚 Phase 4: LMS & Course Pages
- Build `/courses` catalog page and `/courses/[courseSlug]` overview page.
- Implement course syllabus tree, estimated time badges, prerequisites, and learning objectives.
- Enrollment state tracking (Enroll / Continue course).

---

## 📖 Phase 5: W3Schools-Style Interactive Tutorial Reader
- Build `/learn/[courseSlug]/[lessonSlug]` responsive 3-column layout:
  - **Left Sidebar**: Expandable modules, lessons list, real-time search, completion indicators.
  - **Center Column**: 10-part lesson anatomy with high-definition instructional screenshots, zoom modal, code blocks with copy/preview tabs, and common mistakes callouts.
  - **Right Sidebar**: In-page Table of Contents scroll-spy, AI Teacher launcher, and module completion ring.
- Sequential `Previous Lesson` and `Next Lesson` footer controls.

---

## 🤖 Phase 6: AI Teacher (Google Gemini Bilingual Integration)
- Implement server-side route handlers: `/api/ai/chat` and `/api/ai/analyze-screenshot`.
- Build the slide-over AI Teacher drawer and dedicated `/ai-teacher` full-page portal.
- Support instant language toggle: English $\leftrightarrow$ Telugu.
- Multimodal drag-and-drop screenshot uploader for diagnosing terminal & browser errors.
- Contextual lesson injection (active code snippet and lesson topic automatically passed to Gemini).

---

## 🧪 Phase 7: Quizzes, Assessments & Project Lab
- Build interactive Quiz component at the end of each lesson (MCQ, True/False, Code-reading).
- Automatic grading engine with passing threshold ($\ge 80\%$) and explanatory feedback.
- Build `/projects` and `/projects/[projectSlug]` Project Lab:
  - 9 project tracks with step-by-step guides.
  - Ready-to-copy Google Antigravity prompt cards.
  - Student project submission form (GitHub repo + live deployment link).

---

## 🛡️ Phase 8: Admin Dashboard & CMS
- Build `/admin` protected route with server-side RBAC validation.
- Course, Module, and Lesson CRUD interface with rich markdown editor and image uploader.
- Quiz editor and passing score manager.
- Student management table with role assignment and progress reset options.
- Platform analytics dashboard (active students, completion funnels, AI queries).

---

## ⚙️ Phase 9: Database, Security & Backend Integration
- Finalize PostgreSQL schema and run initial Prisma migrations.
- Execute curriculum seed script (`prisma/seed.ts`) populating all 19 modules and projects.
- Implement token-bucket rate limiting on `/api/ai/*` and `/api/auth/*`.
- Verify security headers (CSP, CORS, HSTS) and input sanitization.

---

## 🧪 Phase 10: Quality Assurance, Testing & Optimization
- Unit tests for curriculum utilities, quiz grading, and progress math using Vitest.
- End-to-end user journey tests with Playwright (Signup $\rightarrow$ Read lesson $\rightarrow$ Pass quiz $\rightarrow$ Submit project).
- Accessibility audit (WCAG 2.1 AA compliance).
- Lighthouse performance optimization (target $\ge 90$ across all metrics).

---

## 🚀 Phase 11: Git Repository & CI/CD Setup
- Initialize Git repository with structured `.gitignore` and conventional commits.
- Configure GitHub Actions CI workflow (linting, type-checking, automated tests, build verification).
- Connect repository to GitHub remote.

---

## 🌐 Phase 12: Production Deployment & Live Verification
- Deploy web application to Vercel / Railway with managed PostgreSQL.
- Configure production environment variables securely.
- Connect custom domain, verify SSL certificate, and test live user flows.
- Conduct final end-to-end smoke test on the live deployment.

