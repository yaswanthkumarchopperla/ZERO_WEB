export type StageStatus = "not-started" | "in-progress" | "completed" | "needs-attention";

export type TechCategory = 
  | "frontend"
  | "backend"
  | "database"
  | "auth"
  | "ai"
  | "devtools"
  | "deployment"
  | "vcs";

export interface JourneyStage {
  id: number;
  stageNumber: number;
  title: string;
  tagline: string;
  category: "planning" | "environment" | "development" | "services" | "integration" | "deployment" | "operations";
  purpose: string;
  whyItMatters: string;
  requiredTools: string[];
  estimatedMinutes: number;
  steps: {
    title: string;
    description: string;
    actionLocation: string;
    whatToClickOrDo: string;
    expectedOutput?: string;
    warningNote?: string;
  }[];
  commands: {
    command: string;
    os?: "windows" | "mac" | "linux" | "all";
    whereToExecute: string;
    description: string;
    expectedOutput: string;
    commonErrorFix?: string;
  }[];
  aiPrompts: {
    tool: "ChatGPT" | "Google Antigravity";
    title: string;
    prompt: string;
    whenToUse: string;
  }[];
  commonErrors: {
    errorName: string;
    meaning: string;
    fix: string;
  }[];
  verificationChecklist: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  idea: string;
  category: string;
  targetAudience: string;
  frontendStack: string;
  backendStack: string;
  databaseStack: string;
  authProvider: string;
  emailProvider: string;
  hostingFrontend: string;
  hostingBackend: string;
  progressPercentage: number;
  currentStageId: number;
  stageStatuses: Record<number, StageStatus>;
  notes: Record<number, string>;
  createdAt: string;
  updatedAt: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  role: string;
  category: TechCategory;
  badge: string;
  description: string;
  howWeUseIt: string;
  officialUrl: string;
  isBeginnerFriendly: boolean;
}

export interface TroubleshootingError {
  id: string;
  errorName: string;
  category: "terminal" | "node" | "python" | "mongodb" | "gemini" | "brevo" | "cors" | "git" | "render" | "vercel";
  trigger: string;
  meaning: string;
  whyItHappens: string;
  howToDiagnose: string;
  stepByStepFix: string[];
  howToVerify: string;
  relatedStageId?: number;
}

