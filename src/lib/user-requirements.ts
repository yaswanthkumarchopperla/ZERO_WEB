export interface UserRequirements {
  websiteName: string;
  idea: string;
  purpose: string;
  targetAudience: string;
  mainPages: string;
  requiredFeatures: string;
  needsAuth: "yes" | "no" | "unsure";
  needsOtp: "yes" | "no" | "unsure";
  needsUserDataStorage: "yes" | "no" | "unsure";
  needsDatabase: "yes" | "no" | "unsure";
  needsAi: "yes" | "no" | "unsure";
  needsFileUploads: "yes" | "no" | "unsure";
  needsPayments: "yes" | "no" | "unsure";
  needsAdminDashboard: "yes" | "no" | "unsure";
  expectedTraffic: "low" | "medium" | "high" | "unsure";
  preferredTech: string;
  experienceLevel: "absolute_beginner" | "some_html_css" | "intermediate";
}

export interface ArchitectureRecommendation {
  overallComplexity: "Simple Static Website" | "Interactive Frontend Only" | "Full-Stack Web App" | "AI-Powered Full-Stack Web App";
  architectureSummary: string;
  frontendNeeded: boolean;
  frontendReason: string;
  frontendStack: string;
  backendNeeded: boolean;
  backendReason: string;
  backendStack: string;
  databaseNeeded: boolean;
  databaseReason: string;
  databaseStack: string;
  authNeeded: boolean;
  authReason: string;
  otpNeeded: boolean;
  otpReason: string;
  aiNeeded: boolean;
  aiReason: string;
  fileStorageNeeded: boolean;
  fileStorageReason: string;
  paymentsNeeded: boolean;
  paymentsReason: string;
  adminDashboardNeeded: boolean;
  adminDashboardReason: string;
  hostingFrontend: string;
  hostingBackend: string;
  skippedPhases: {
    phaseNumber: number;
    phaseTitle: string;
    reason: string;
  }[];
  includedPhases: {
    phaseNumber: number;
    phaseTitle: string;
    focus: string;
  }[];
}

export const DEFAULT_REQUIREMENTS: UserRequirements = {
  websiteName: "Aura Candles",
  idea: "An artisanal soy candle e-commerce store with an interactive custom scent mixer and real email order updates.",
  purpose: "Sell handcrafted, eco-friendly candles and allow shoppers to mix custom top, middle, and base fragrances before ordering.",
  targetAudience: "Home decor enthusiasts, eco-conscious shoppers, and gift buyers.",
  mainPages: "Homepage, Product Catalog, Custom Scent Mixer, Cart, Checkout, User Account Dashboard.",
  requiredFeatures: "Product browsing, custom fragrance builder, user registration with email OTP, order storage, and AI fragrance recommendations.",
  needsAuth: "yes",
  needsOtp: "yes",
  needsUserDataStorage: "yes",
  needsDatabase: "yes",
  needsAi: "yes",
  needsFileUploads: "no",
  needsPayments: "no",
  needsAdminDashboard: "no",
  expectedTraffic: "low",
  preferredTech: "React, Vite, Tailwind CSS, Python FastAPI, MongoDB Atlas",
  experienceLevel: "absolute_beginner",
};

export function analyzeRequirements(req: UserRequirements): ArchitectureRecommendation {
  // Determine if backend is needed
  const needsBackend =
    req.needsAuth === "yes" ||
    req.needsDatabase === "yes" ||
    req.needsUserDataStorage === "yes" ||
    req.needsAi === "yes" ||
    req.needsPayments === "yes" ||
    req.needsFileUploads === "yes" ||
    req.needsOtp === "yes";

  // Determine if database is needed
  const needsDb =
    req.needsDatabase === "yes" ||
    req.needsUserDataStorage === "yes" ||
    req.needsAuth === "yes";

  // Determine if auth is needed
  const needsAuth = req.needsAuth === "yes";

  // Determine if OTP is needed
  const needsOtp = req.needsOtp === "yes" && needsAuth;

  // Determine if AI is needed
  const needsAi = req.needsAi === "yes";

  // Determine if payments needed
  const needsPayments = req.needsPayments === "yes";

  // Determine if file uploads needed
  const needsFiles = req.needsFileUploads === "yes";

  // Determine admin dashboard
  const needsAdmin = req.needsAdminDashboard === "yes";

  // Complexity calculation
  let complexity: ArchitectureRecommendation["overallComplexity"] = "Simple Static Website";
  if (needsBackend && needsAi) {
    complexity = "AI-Powered Full-Stack Web App";
  } else if (needsBackend) {
    complexity = "Full-Stack Web App";
  } else if (req.requiredFeatures.length > 50) {
    complexity = "Interactive Frontend Only";
  }

  // Summary message
  let summary = "";
  if (!needsBackend) {
    summary = `Your website "${req.websiteName}" can be built as a fast, high-performance client-side application. Because you do not need private user accounts or permanent database records, you can deploy solely to Vercel without managing a backend server or database. This eliminates server crash risks and keeps hosting 100% free!`;
  } else if (needsAi) {
    summary = `Your website "${req.websiteName}" is an intelligent full-stack application. It requires a React frontend on Vercel, an asynchronous Python FastAPI server on Render to protect your Gemini API keys and Brevo secrets, and a cloud MongoDB Atlas cluster to persist data.`;
  } else {
    summary = `Your website "${req.websiteName}" is a robust full-stack web application. It pairs a modern React frontend on Vercel with a lightweight FastAPI backend on Render and a secure MongoDB Atlas database.`;
  }

  // Skipped phases logic
  const skipped: ArchitectureRecommendation["skippedPhases"] = [];
  const included: ArchitectureRecommendation["includedPhases"] = [
    { phaseNumber: 1, phaseTitle: "Create the Project", focus: "GitHub repository, empty folder, Antigravity, and ChatGPT prompt" },
    { phaseNumber: 2, phaseTitle: "Run the Website Locally", focus: "Terminal, dependencies, and localhost preview" },
  ];

  if (!needsDb) {
    skipped.push({
      phaseNumber: 3,
      phaseTitle: "Create and Connect the Database",
      reason: "Your website does not require permanent user records. Skipping MongoDB Atlas saves time and complexity."
    });
    skipped.push({
      phaseNumber: 8,
      phaseTitle: "Connect MongoDB to Production Backend",
      reason: "No database cluster needed."
    });
  } else {
    included.push({ phaseNumber: 3, phaseTitle: "Create and Connect Database", focus: "MongoDB Atlas cluster and backend .env connection" });
  }

  if (!needsAi && !needsOtp) {
    skipped.push({
      phaseNumber: 4,
      phaseTitle: "Connect External Services",
      reason: "Neither Google Gemini AI nor Brevo Email OTP is needed for your project requirements."
    });
  } else {
    included.push({ phaseNumber: 4, phaseTitle: "Connect External Services", focus: "Google AI Studio API key and/or Brevo email OTP delivery" });
  }

  if (!needsBackend) {
    skipped.push({
      phaseNumber: 5,
      phaseTitle: "Connect Frontend and Backend",
      reason: "Frontend runs standalone; no backend API bridge required."
    });
    skipped.push({
      phaseNumber: 7,
      phaseTitle: "Deploy Backend to Render",
      reason: "Your application is 100% client-side; no Render web service needed."
    });
  } else {
    included.push({ phaseNumber: 5, phaseTitle: "Connect Frontend and Backend", focus: "Axios client, CORS configuration, and full stack wiring" });
    included.push({ phaseNumber: 7, phaseTitle: "Deploy Backend to Render", focus: "Render cloud web service and production environment variables" });
  }

  included.push({ phaseNumber: 6, phaseTitle: "Push to Existing GitHub Repository", focus: "Git status audit, .gitignore secret protection, and pushing code" });
  included.push({ phaseNumber: 9, phaseTitle: "Deploy Frontend to Vercel", focus: "Vercel edge build, production URL, and live custom domain" });
  included.push({ phaseNumber: 10, phaseTitle: "Final Website Launch", focus: "20-point verification audit, mobile test, and official LIVE mark" });

  return {
    overallComplexity: complexity,
    architectureSummary: summary,
    frontendNeeded: true,
    frontendReason: "Every website requires a frontend user interface for visitors to view pages and interact with content.",
    frontendStack: "React 18 + Vite with Tailwind CSS (Hosted on Vercel)",
    backendNeeded: needsBackend,
    backendReason: needsBackend
      ? "A backend server is required to safely store API keys, hash user passwords with bcrypt, send Brevo emails, and protect database queries."
      : "No separate backend needed. Your site can run entirely inside the visitor's browser, eliminating server maintenance.",
    backendStack: needsBackend ? "Python FastAPI with Uvicorn (Hosted on Render)" : "None (Client-Side Only)",
    databaseNeeded: needsDb,
    databaseReason: needsDb
      ? "A cloud database is required to remember user accounts, custom items, or orders across server restarts."
      : "No database needed. Content can be loaded from static files or local browser storage.",
    databaseStack: needsDb ? "MongoDB Atlas M0 Free Cloud Cluster" : "None (Static Data)",
    authNeeded: needsAuth,
    authReason: needsAuth
      ? "User registration and login are enabled so each visitor has a private account."
      : "Skipped. Anyone can access all pages without creating an account.",
    otpNeeded: needsOtp,
    otpReason: needsOtp
      ? "Email OTP via Brevo guarantees that users own the email address they register with."
      : "Skipped. No email verification code dispatch needed.",
    aiNeeded: needsAi,
    aiReason: needsAi
      ? "Google Gemini API is integrated through your backend to provide intelligent suggestions, chat, or content generation."
      : "Skipped. No generative AI features needed.",
    fileStorageNeeded: needsFiles,
    fileStorageReason: needsFiles
      ? "Cloud file storage (like Cloudinary or AWS S3) is recommended for user-uploaded images."
      : "Skipped. Standard website images will live directly inside the frontend/public folder.",
    paymentsNeeded: needsPayments,
    paymentsReason: needsPayments
      ? "Stripe Checkout integration is recommended to safely accept credit card payments."
      : "Skipped. No payment gateway needed for launch.",
    adminDashboardNeeded: needsAdmin,
    adminDashboardReason: needsAdmin
      ? "A protected admin portal is recommended to manage inventory, users, and content."
      : "Skipped for initial launch MVP to speed up deployment.",
    hostingFrontend: "Vercel Global Edge CDN (100% Free Tier)",
    hostingBackend: needsBackend ? "Render Cloud Web Service (100% Free Tier)" : "None",
    skippedPhases: skipped,
    includedPhases: included,
  };
}

export function saveUserRequirements(req: UserRequirements): void {
  const storage = typeof window !== "undefined" && window.localStorage 
    ? window.localStorage 
    : (typeof localStorage !== "undefined" ? localStorage : null);

  if (storage) {
    storage.setItem("zero_web_user_requirements", JSON.stringify(req));
  }
}

export function loadUserRequirements(): UserRequirements {
  const storage = typeof window !== "undefined" && window.localStorage 
    ? window.localStorage 
    : (typeof localStorage !== "undefined" ? localStorage : null);

  if (storage) {
    const saved = storage.getItem("zero_web_user_requirements");
    if (saved) {
      try {
        return { ...DEFAULT_REQUIREMENTS, ...JSON.parse(saved) };
      } catch (e) {
        console.error("Failed to parse saved user requirements", e);
      }
    }
  }
  return DEFAULT_REQUIREMENTS;
}

