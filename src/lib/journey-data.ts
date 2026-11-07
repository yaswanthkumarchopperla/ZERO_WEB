import { JourneyStage, TechnologyItem } from "./types";

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 1,
    stageNumber: 1,
    title: "Idea to Project Plan",
    tagline: "Turn your raw idea into a crystal-clear feature blueprint.",
    category: "planning",
    purpose: "Transform an abstract thought into actionable pages, database collections, and user stories before writing a single line of code.",
    whyItMatters: "Building without a plan causes beginners to get stuck halfway, rewrite code repeatedly, and abandon projects. A 30-minute plan saves 30 hours of frustration.",
    requiredTools: ["ChatGPT", "Pen & Paper or Notepad"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Define the Core One-Sentence Problem",
        description: "State what your website does, who it is for, and the single main action a visitor takes.",
        actionLocation: "Notepad / ChatGPT",
        whatToClickOrDo: "Write down: 'My website helps [Target Audience] do [Main Action] so they can achieve [Key Benefit].'",
        expectedOutput: "A concise problem statement like: 'A candle boutique website where eco-conscious shoppers can customize scented soy candles and order online with email delivery updates.'"
      },
      {
        title: "List Must-Have vs Nice-to-Have Features",
        description: "Separate your MVP (Minimum Viable Product) from advanced features to launch faster.",
        actionLocation: "Planning Sheet",
        whatToClickOrDo: "Create two columns: 'Launch Day Essentials' (e.g. Catalog, Cart, Checkout, Auth) and 'Phase 2 Later' (e.g. AI scent generator, reviews).",
        expectedOutput: "A realistic 4-5 feature checklist ready for AI architectural prompts."
      },
      {
        title: "Choose the Beginner-Friendly Tech Stack",
        description: "Select modern, proven tools with generous free hosting tiers.",
        actionLocation: "Planning Sheet",
        whatToClickOrDo: "Default recommendation: Frontend (React + Vite + Tailwind CSS), Backend (FastAPI Python or Node Express), Database (MongoDB Atlas), Hosting (Vercel + Render).",
        expectedOutput: "Confirmed tech stack: Frontend React/Vite, Backend FastAPI, Database MongoDB Atlas."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "ChatGPT",
        title: "Generate Complete Website Architecture Blueprint",
        whenToUse: "When you have a rough idea and want ChatGPT to generate the exact database models, pages, and API endpoints.",
        prompt: `Act as a senior software architect. I am an absolute beginner planning my first web project: [WEBSITE_NAME_OR_IDEA].
Target audience: [AUDIENCE].
Please produce a beginner-friendly project specification:
1. Exact list of frontend pages and components needed.
2. Backend REST API endpoints (GET, POST, PUT, DELETE) with descriptions.
3. MongoDB collection schemas (document fields, types, and relationships).
4. Environment variable names needed.
5. Recommended folder hierarchy (frontend/ and backend/).
Keep technical jargon explained in simple English.`
      }
    ],
    commonErrors: [
      {
        errorName: "Scope Creep Overload",
        meaning: "Trying to build too many complex features before having a basic working page.",
        fix: "Cut features down to the core 3 actions: View items, submit a form/order, receive confirmation email."
      }
    ],
    verificationChecklist: [
      "I have written down my website's one-sentence core purpose.",
      "I know the 3-4 primary pages my website will have.",
      "I have decided on my frontend (React/Vite), backend (FastAPI/Express), and database (MongoDB).",
      "I have an outline of the data fields my website needs to store."
    ]
  },
  {
    id: 2,
    stageNumber: 2,
    title: "Install Development Tools",
    tagline: "Equip your computer with the professional developer toolkit.",
    category: "environment",
    purpose: "Install the core runtimes, editors, and CLI utilities required to run code locally on your machine.",
    whyItMatters: "Websites run on code, and your operating system needs Node.js and Python to execute web servers, plus Git to track files.",
    requiredTools: ["Google Antigravity / VS Code", "Node.js (LTS)", "Python 3.11+", "Git", "Google Chrome"],
    estimatedMinutes: 45,
    steps: [
      {
        title: "Install Node.js (v20+ LTS)",
        description: "Node.js is the JavaScript runtime that powers modern frontend build tools like Vite and React.",
        actionLocation: "Browser (nodejs.org)",
        whatToClickOrDo: "Download the 'LTS (Recommended For Most Users)' Windows/Mac installer. Run the installer and check 'Automatically install the necessary tools'.",
        expectedOutput: "Installer finishes with green checkmark."
      },
      {
        title: "Install Python (3.11 or newer)",
        description: "Python powers the FastAPI backend framework.",
        actionLocation: "Browser (python.org)",
        whatToClickOrDo: "CRITICAL: During Windows installation, check the box 'Add python.exe to PATH' at the bottom of the first installer screen!",
        expectedOutput: "Python installed and accessible from your terminal."
      },
      {
        title: "Install Git for Version Control",
        description: "Git tracks your code history and lets you upload your project to GitHub.",
        actionLocation: "Browser (git-scm.com)",
        whatToClickOrDo: "Download Git for Windows/macOS. Accept default options during setup.",
        expectedOutput: "Git Bash installed on Windows."
      },
      {
        title: "Launch Google Antigravity or VS Code",
        description: "Your primary agentic AI code editing environment.",
        actionLocation: "Desktop / Start Menu",
        whatToClickOrDo: "Open Google Antigravity. Check terminal access with Ctrl + ` (backtick).",
        expectedOutput: "Integrated terminal opens at the bottom."
      }
    ],
    commands: [
      {
        command: "node -v",
        os: "all",
        whereToExecute: "Terminal / PowerShell",
        description: "Checks if Node.js is installed correctly and outputs the installed version.",
        expectedOutput: "v20.x.x or v22.x.x",
        commonErrorFix: "If 'node is not recognized', restart your terminal or computer so PATH updates."
      },
      {
        command: "npm -v",
        os: "all",
        whereToExecute: "Terminal / PowerShell",
        description: "Checks if the Node Package Manager is available.",
        expectedOutput: "10.x.x or higher",
        commonErrorFix: "Ensure Node.js LTS was installed completely."
      },
      {
        command: "python --version",
        os: "windows",
        whereToExecute: "Terminal / Command Prompt",
        description: "Verifies Python runtime installation.",
        expectedOutput: "Python 3.11.x or Python 3.12.x",
        commonErrorFix: "If opens Windows Store, reinstall Python and check 'Add python.exe to PATH'."
      },
      {
        command: "git --version",
        os: "all",
        whereToExecute: "Terminal",
        description: "Verifies Git command-line installation.",
        expectedOutput: "git version 2.x.x",
        commonErrorFix: "Download and run git-scm.com installer."
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Verify Local Environment Setup",
        whenToUse: "Paste in Antigravity chat when you want the AI to run commands and verify your developer tools.",
        prompt: `Please inspect my local environment. Run commands to check Node.js, npm, Python, and Git. Report back which tools are correctly installed, their version numbers, and provide clear step-by-step guidance for any missing dependencies.`
      }
    ],
    commonErrors: [
      {
        errorName: "'node' or 'python' is not recognized as an internal or external command",
        meaning: "Windows cannot find the program because its installation folder was not added to the System PATH variable.",
        fix: "Re-run the installer, select 'Modify', ensure 'Add to PATH' is checked, and restart your terminal application."
      }
    ],
    verificationChecklist: [
      "Running `node -v` prints a version number like v20.x or v22.x.",
      "Running `python --version` prints Python 3.11+.",
      "Running `git --version` prints Git version.",
      "I have Google Antigravity or VS Code open and can open its terminal."
    ]
  },
  {
    id: 3,
    stageNumber: 3,
    title: "Create the Project Folder",
    tagline: "Structure your workspace with clean frontend and backend separation.",
    category: "environment",
    purpose: "Establish the professional dual-folder directory layout that keeps user-facing frontend code completely separate from backend server code.",
    whyItMatters: "Mixing frontend and backend files into one folder causes dependency collisions, deployment failures, and security leaks.",
    requiredTools: ["Terminal", "File Explorer / Finder"],
    estimatedMinutes: 20,
    steps: [
      {
        title: "Create Root Project Folder",
        description: "Choose a clean, dedicated folder on your computer without spaces in the name.",
        actionLocation: "Terminal / Desktop",
        whatToClickOrDo: "Create a folder named `my-web-project` and open it inside Google Antigravity.",
        expectedOutput: "Empty workspace opened in Antigravity."
      },
      {
        title: "Create Subdirectories: `frontend` and `backend`",
        description: "Separate client UI and server API logic.",
        actionLocation: "Terminal in root folder",
        whatToClickOrDo: "Run `mkdir frontend backend` or create two new folders in the file explorer.",
        expectedOutput: "Two empty sibling folders: /frontend and /backend."
      },
      {
        title: "Initialize Python Virtual Environment for Backend",
        description: "Isolates backend libraries so they do not conflict with other Python apps on your machine.",
        actionLocation: "Terminal inside /backend folder",
        whatToClickOrDo: "Navigate to backend and execute `python -m venv venv`.",
        expectedOutput: "A `venv` folder appears containing isolated Python binaries."
      }
    ],
    commands: [
      {
        command: "mkdir my-web-project && cd my-web-project",
        os: "all",
        whereToExecute: "Terminal",
        description: "Creates your project root directory and enters it.",
        expectedOutput: "Current directory changes to my-web-project."
      },
      {
        command: "mkdir frontend backend",
        os: "all",
        whereToExecute: "Terminal inside root folder",
        description: "Creates the two primary application workspaces.",
        expectedOutput: "Creates /frontend and /backend folders."
      },
      {
        command: "cd backend && python -m venv venv",
        os: "all",
        whereToExecute: "Terminal",
        description: "Creates an isolated Python virtual environment inside the backend directory.",
        expectedOutput: "Creates venv/ directory."
      },
      {
        command: "venv\\Scripts\\activate",
        os: "windows",
        whereToExecute: "Terminal in backend folder",
        description: "Activates the virtual environment in Windows Command Prompt/PowerShell.",
        expectedOutput: "(venv) prefix appears in the terminal prompt.",
        commonErrorFix: "If script execution error occurs in PowerShell, run: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned"
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Scaffold Dual Frontend & Backend Directory Architecture",
        whenToUse: "When starting a blank workspace and wanting Antigravity to create the initial folder skeleton.",
        prompt: `Create a clean dual-folder project structure in this repository:
1. 'frontend/' for React + Vite + Tailwind CSS.
2. 'backend/' for Python FastAPI with virtual environment guidance.
3. A root '.gitignore' that excludes node_modules, .env, venv, and dist.
4. A root README.md explaining how to run both services.`
      }
    ],
    commonErrors: [
      {
        errorName: "PowerShell: 'Activate.ps1 cannot be loaded because running scripts is disabled'",
        meaning: "Windows default security policy restricts PowerShell scripts from executing automatically.",
        fix: "Run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell, or switch terminal to Command Prompt (cmd)."
      }
    ],
    verificationChecklist: [
      "I have a root directory open in Google Antigravity.",
      "Inside the root, I have two distinct folders: `frontend` and `backend`.",
      "Inside `backend`, a `venv` virtual environment folder is created.",
      "My terminal prompt displays `(venv)` when activated."
    ]
  },
  {
    id: 4,
    stageNumber: 4,
    title: "AI-Assisted Development with ChatGPT & Antigravity",
    tagline: "Harness AI to plan with ChatGPT and build with Google Antigravity.",
    category: "development",
    purpose: "Master the professional two-stage AI workflow: use conversational AI (ChatGPT) for high-level system prompts and architecture, then pass actionable prompts to Google Antigravity to write and test code.",
    whyItMatters: "Beginners often get confused asking AI vague questions. The secret is structured prompts with role, context, exact tech stack, and step-by-step verification.",
    requiredTools: ["ChatGPT (Planning & Prompts)", "Google Antigravity (Agentic Code Execution)"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Step 1: Draft the High-Level Prompt in ChatGPT",
        description: "Ask ChatGPT to generate exact code specifications tailored for Antigravity.",
        actionLocation: "ChatGPT Web Interface",
        whatToClickOrDo: "Use our prompt template: define your website goal, specify React + Vite for frontend and FastAPI for backend.",
        expectedOutput: "A structured, self-contained prompt ready to paste into Antigravity."
      },
      {
        title: "Step 2: Copy Prompt & Open Google Antigravity",
        description: "Ensure Antigravity is opened to the exact root project folder.",
        actionLocation: "Google Antigravity IDE",
        whatToClickOrDo: "Check file tree to ensure you are in the project root, open the AI agent panel, and paste the prompt.",
        expectedOutput: "Antigravity begins creating files and running commands with tool approval."
      },
      {
        title: "Step 3: Review Generated Files (Never Blindly Trust AI)",
        description: "Inspect code created by the agent, review terminal outputs, and verify no mock placeholders remain.",
        actionLocation: "Antigravity Code Editor",
        whatToClickOrDo: "Open generated `main.py` or `App.tsx` and verify clean imports and syntax.",
        expectedOutput: "Syntactically correct code files without placeholder comments like '// add your logic here'."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "ChatGPT",
        title: "Generate Master Antigravity Execution Prompt",
        whenToUse: "In ChatGPT to create the ultimate code-generation prompt to give Antigravity.",
        prompt: `I am building [WEBSITE_NAME] using Google Antigravity.
Frontend: React 18+ with Vite, Tailwind CSS, Lucide icons.
Backend: Python FastAPI with Motor (async MongoDB driver) and Pydantic v2.
Database: MongoDB Atlas.
Please generate a single, highly detailed prompt that I can paste directly into Google Antigravity. It must instruct Antigravity to:
1. Create complete, working code without placeholders or 'todo' comments.
2. Configure CORS middleware for http://localhost:5173.
3. Include clear terminal run instructions for both frontend and backend.
4. Implement realistic schema validation.`
      },
      {
        tool: "Google Antigravity",
        title: "Bug Diagnosis & Fix Prompt",
        whenToUse: "In Antigravity when you encounter a terminal or browser console error.",
        prompt: `I encountered this error when running my application:
Error text: [PASTE_ERROR_MESSAGE_HERE]
Context: Happened when I ran command [COMMAND] or clicked [BUTTON].
Please diagnose the root cause, identify which file and line requires changes, explain why it occurred in beginner terms, and apply the exact fix.`
      }
    ],
    commonErrors: [
      {
        errorName: "AI hallucinations or incomplete code",
        meaning: "The AI stops midway or leaves placeholders like '// insert rest of code'.",
        fix: "Instruct Antigravity: 'Continue writing the complete file from line X. Do not skip or abbreviate any functions.'"
      }
    ],
    verificationChecklist: [
      "I understand the difference: ChatGPT is my Architect, Antigravity is my Developer.",
      "I know how to copy structured prompts from ChatGPT into Antigravity.",
      "I know how to feed terminal errors back into Antigravity for diagnosis."
    ]
  },
  {
    id: 5,
    stageNumber: 5,
    title: "Frontend Development",
    tagline: "Build responsive, interactive user interfaces with React and Vite.",
    category: "development",
    purpose: "Create the visual, interactive application that users see and interact with in their web browser.",
    whyItMatters: "Frontend delivers the user experience. You will build modular components (Navbar, Hero, ProductGrid, Forms) and test them on localhost.",
    requiredTools: ["Vite", "React", "Tailwind CSS", "Terminal"],
    estimatedMinutes: 60,
    steps: [
      {
        title: "Scaffold Vite + React + Tailwind Project",
        description: "Vite creates a lightning-fast modern development environment.",
        actionLocation: "Terminal in /frontend",
        whatToClickOrDo: "Run `npm create vite@latest . -- --template react` inside the frontend directory.",
        expectedOutput: "Standard React project files created (src, package.json, vite.config.js)."
      },
      {
        title: "Install Dependencies and Tailwind CSS",
        description: "Install React packages and styling engine.",
        actionLocation: "Terminal in /frontend",
        whatToClickOrDo: "Run `npm install` followed by `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`.",
        expectedOutput: "node_modules installed and tailwind.config.js generated."
      },
      {
        title: "Start Vite Development Server",
        description: "Run your local frontend preview server.",
        actionLocation: "Terminal in /frontend",
        whatToClickOrDo: "Execute `npm run dev`.",
        expectedOutput: "Terminal outputs local link: `http://localhost:5173` (or port specified)."
      },
      {
        title: "Open Browser and Test Hot Module Replacement (HMR)",
        description: "Verify your live frontend edits update instantly in the browser.",
        actionLocation: "Browser (Chrome/Edge)",
        whatToClickOrDo: "Open `http://localhost:5173` in your browser. Edit `src/App.jsx` to say 'Hello Zero-Web'. Save the file.",
        expectedOutput: "The browser automatically refreshes to show your changes without manual reloading."
      }
    ],
    commands: [
      {
        command: "npm create vite@latest . -- --template react",
        os: "all",
        whereToExecute: "Terminal inside /frontend folder",
        description: "Initializes a fast React application in the current directory.",
        expectedOutput: "Scaffolding project in ./..."
      },
      {
        command: "npm install",
        os: "all",
        whereToExecute: "Terminal inside /frontend folder",
        description: "Downloads and installs all declared dependencies.",
        expectedOutput: "added X packages in Xs"
      },
      {
        command: "npm run dev",
        os: "all",
        whereToExecute: "Terminal inside /frontend folder",
        description: "Starts the Vite local hot-reload web server.",
        expectedOutput: "VITE v5.x.x ready in 350 ms -> Local: http://localhost:5173/"
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Generate Modern Responsive React Components",
        whenToUse: "To build a complete interactive page with responsive Tailwind CSS.",
        prompt: `In the 'frontend' directory, build the complete UI for [PAGE_NAME]:
1. Create a responsive layout with mobile-first Tailwind CSS.
2. Include full state management with React useState and useEffect.
3. Create loading states (skeletons/spinners) and empty states.
4. Add clean error alerts if an API call fails.
5. Use Lucide React icons for all visual indicators.`
      }
    ],
    commonErrors: [
      {
        errorName: "Port 5173 already in use",
        meaning: "Another Vite dev server is still running in the background.",
        fix: "Vite will automatically try port 5174, or press Ctrl+C in the other terminal to terminate the previous process."
      }
    ],
    verificationChecklist: [
      "Running `npm run dev` boots the Vite server without errors.",
      "Opening `http://localhost:5173` displays my React application in the browser.",
      "Editing code in `src/App.jsx` updates the browser preview instantly.",
      "The page looks clean on mobile screen sizes (tested in Chrome DevTools F12)."
    ]
  },
  {
    id: 6,
    stageNumber: 6,
    title: "Backend Development",
    tagline: "Build the server API engine with Python FastAPI or Node Express.",
    category: "development",
    purpose: "Construct the backend server that processes business logic, validates incoming data, manages security, and speaks to the database.",
    whyItMatters: "Frontend code runs inside the user's browser where anyone can inspect it. Sensitive tasks—like calculating prices, sending emails, and authenticating passwords—must happen securely on the backend.",
    requiredTools: ["FastAPI / Express", "Uvicorn", "Python / Node.js"],
    estimatedMinutes: 60,
    steps: [
      {
        title: "Install Backend Framework and Dependencies",
        description: "Install FastAPI and Uvicorn server in your backend virtual environment.",
        actionLocation: "Terminal in /backend (with venv activated)",
        whatToClickOrDo: "Run `pip install fastapi uvicorn pydantic python-dotenv motor bcrypt pyjwt`.",
        expectedOutput: "Successfully installed fastapi uvicorn..."
      },
      {
        title: "Create Main API Entrypoint (`main.py`)",
        description: "Define the FastAPI application instance and CORS middleware.",
        actionLocation: "backend/app/main.py",
        whatToClickOrDo: "Create `main.py` with FastAPI initialization, CORS origins set to `http://localhost:5173`, and a health check route (`/api/health`).",
        expectedOutput: "File created with working health check endpoint."
      },
      {
        title: "Start Uvicorn Server with Auto-Reload",
        description: "Boot your local backend API server.",
        actionLocation: "Terminal in /backend",
        whatToClickOrDo: "Run `uvicorn app.main:app --reload --port 8000`.",
        expectedOutput: "Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)"
      },
      {
        title: "Test Interactive API Documentation (Swagger Docs)",
        description: "FastAPI automatically generates an interactive testing dashboard.",
        actionLocation: "Browser (Chrome)",
        whatToClickOrDo: "Navigate to `http://127.0.0.1:8000/docs` in your browser.",
        expectedOutput: "Interactive Swagger UI showing all declared endpoints with 'Try it out' buttons."
      }
    ],
    commands: [
      {
        command: "pip install fastapi uvicorn pydantic python-dotenv motor bcrypt pyjwt",
        os: "all",
        whereToExecute: "Terminal in /backend (venv active)",
        description: "Installs the complete modern FastAPI web and database stack.",
        expectedOutput: "Successfully installed..."
      },
      {
        command: "uvicorn app.main:app --reload --port 8000",
        os: "all",
        whereToExecute: "Terminal in /backend (venv active)",
        description: "Runs the backend server on port 8000 with live reload on code changes.",
        expectedOutput: "Application startup complete. Uvicorn running on http://127.0.0.1:8000"
      },
      {
        command: "pip freeze > requirements.txt",
        os: "all",
        whereToExecute: "Terminal in /backend",
        description: "Locks all installed Python package versions into requirements.txt for Render deployment.",
        expectedOutput: "requirements.txt generated or updated."
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Build Production-Ready FastAPI REST Endpoints",
        whenToUse: "To build secure, typed endpoints with Pydantic validation.",
        prompt: `In the 'backend' folder, build a clean FastAPI structure:
1. 'app/main.py' with CORS middleware configured for http://localhost:5173.
2. 'app/routes/' with modular APIRouters.
3. 'app/models/' with Pydantic v2 schemas for request and response validation.
4. Add a '/api/health' endpoint that returns {"status": "ok", "service": "api"}.
5. Return clean HTTP status codes (200, 201, 400, 404, 500).`
      }
    ],
    commonErrors: [
      {
        errorName: "Port 8000 already in use",
        meaning: "A previous Uvicorn process is still running.",
        fix: "Close the old terminal, or run on another port: `uvicorn app.main:app --reload --port 8001`."
      }
    ],
    verificationChecklist: [
      "Backend server is running on `http://127.0.0.1:8000`.",
      "Visiting `http://127.0.0.1:8000/docs` opens the interactive Swagger UI.",
      "The `/api/health` endpoint responds with a 200 OK status.",
      "All dependencies are saved in `backend/requirements.txt`."
    ]
  },
  {
    id: 7,
    stageNumber: 7,
    title: "Database Integration with MongoDB Atlas",
    tagline: "Set up a free cloud database and connect it securely to your backend.",
    category: "services",
    purpose: "Store your website's data permanently in the cloud so it survives server restarts.",
    whyItMatters: "Without a database, user signups, orders, or posts disappear as soon as you restart your server. MongoDB Atlas provides a generous free cloud tier (M0).",
    requiredTools: ["MongoDB Atlas (Cloud)", "Motor (Async Python Driver)", "Backend .env"],
    estimatedMinutes: 45,
    steps: [
      {
        title: "Create a Free MongoDB Atlas Account & Cluster",
        description: "Register at mongodb.com and create a free M0 Shared Cluster.",
        actionLocation: "Browser (cloud.mongodb.com)",
        whatToClickOrDo: "Click 'Build a Database' -> Select 'M0 Free' -> Choose provider (AWS) and closest region -> Click 'Create Cluster'.",
        expectedOutput: "Free cloud cluster provisioned in 1-2 minutes."
      },
      {
        title: "Create Database User & Strong Password",
        description: "Create credentials for your backend to log in.",
        actionLocation: "MongoDB Atlas -> Security -> Database Access",
        whatToClickOrDo: "Click 'Add New Database User' -> Username: `app_user` -> Auto-generate a 24-character password -> Click 'Add User'. Save the password in Notepad!",
        expectedOutput: "User `app_user` created with 'Read and write to any database' privilege."
      },
      {
        title: "Configure Network Access (IP Allowlist)",
        description: "Grant your computer permission to reach the database.",
        actionLocation: "MongoDB Atlas -> Security -> Network Access",
        whatToClickOrDo: "Click 'Add IP Address' -> For development, click 'Allow Access From Anywhere (0.0.0.0/0)' -> Confirm.",
        expectedOutput: "Status shows 'Active' with 0.0.0.0/0 allowlist."
      },
      {
        title: "Copy Connection String and Save in Backend `.env`",
        description: "Assemble the secure connection URL.",
        actionLocation: "MongoDB Atlas -> Database -> Connect -> Drivers",
        whatToClickOrDo: "Copy the connection string `mongodb+srv://app_user:<password>@cluster0.xxx.mongodb.net/?retryWrites=true&w=majority`. Replace `<password>` with your real password. Put it in `backend/.env` as `MONGODB_URI`.",
        expectedOutput: "backend/.env contains: MONGODB_URI=mongodb+srv://..."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Implement Async MongoDB Connection with Motor",
        whenToUse: "To set up database connection lifecycle handlers in FastAPI.",
        prompt: `In 'backend/app/database.py', implement the MongoDB connection using Motor:
1. Read 'MONGODB_URI' and 'MONGODB_DB_NAME' from environment variables using python-dotenv.
2. Initialize an AsyncIOMotorClient instance.
3. Create FastAPI lifespan event handlers that test the database ping on startup and close connection on shutdown.
4. Export the database instance for use in API routes.`
      }
    ],
    commonErrors: [
      {
        errorName: "AuthenticationFailed: bad auth: Authentication failed",
        meaning: "The database password or username in your MONGODB_URI is incorrect.",
        fix: "Check your password in Atlas Database Access. If your password contains special characters like '@', '#', or '!', URL-encode them (e.g. '@' becomes '%40')."
      },
      {
        errorName: "ServerSelectionTimeoutError",
        meaning: "Your backend cannot reach MongoDB Atlas servers over the internet.",
        fix: "Go to MongoDB Atlas -> Network Access and ensure '0.0.0.0/0' is active."
      }
    ],
    verificationChecklist: [
      "MongoDB Atlas cluster is provisioned and shows 'Active'.",
      "Network Access has 0.0.0.0/0 configured for development.",
      "`MONGODB_URI` is stored inside `backend/.env` (NEVER committed to git).",
      "Backend startup logs show 'Connected to MongoDB successfully!'."
    ]
  },
  {
    id: 8,
    stageNumber: 8,
    title: "API Keys & External AI Services",
    tagline: "Integrate Google Gemini API securely without exposing keys in frontend code.",
    category: "services",
    purpose: "Connect third-party intelligent capabilities (like Google Gemini generative AI) through secure backend proxy routes.",
    whyItMatters: "Putting API keys in frontend React code allows any visitor to steal your keys by inspecting browser network requests. Always call external APIs from your backend server.",
    requiredTools: ["Google AI Studio (Gemini API)", "Backend .env"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Generate Google Gemini API Key",
        description: "Obtain a free developer key from Google AI Studio.",
        actionLocation: "Browser (aistudio.google.com)",
        whatToClickOrDo: "Sign in with your Google account -> Click 'Get API key' -> Click 'Create API key in new project' -> Copy the key.",
        expectedOutput: "A 39-character key starting with `AIzaSy...`."
      },
      {
        title: "Store Secret Key in Backend `.env`",
        description: "Keep the secret in your server environment.",
        actionLocation: "backend/.env",
        whatToClickOrDo: "Add: `GEMINI_API_KEY=AIzaSy...` to `backend/.env`. Add `.env` to `backend/.gitignore`.",
        expectedOutput: ".env contains the secret safely out of version control."
      },
      {
        title: "Create Backend Proxy Route (`/api/generate`)",
        description: "The frontend calls your backend, and your backend calls Google Gemini.",
        actionLocation: "backend/app/routes/ai.py",
        whatToClickOrDo: "Create a POST route that takes user input, calls the Gemini API server-to-server, and returns the AI response.",
        expectedOutput: "Secure backend endpoint that keeps API keys 100% hidden from clients."
      }
    ],
    commands: [
      {
        command: "pip install google-generativeai",
        os: "all",
        whereToExecute: "Terminal in /backend (venv active)",
        description: "Installs Google's official Gemini Python SDK.",
        expectedOutput: "Successfully installed google-generativeai..."
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Implement Secure Gemini API Backend Route",
        whenToUse: "To build a server-side AI generation endpoint with error handling.",
        prompt: `Create a FastAPI route in 'backend/app/routes/ai.py':
1. Read 'GEMINI_API_KEY' from environment variables.
2. Configure google.generativeai with the key.
3. Create a POST endpoint '/api/ai/ask' with Pydantic request schema {'prompt': str}.
4. Wrap in try/except block to catch rate limits or network issues and return graceful 500/429 JSON errors.
5. Ensure no keys are ever sent to the frontend.`
      }
    ],
    commonErrors: [
      {
        errorName: "API_KEY_INVALID: API key not valid",
        meaning: "The key copied from Google AI Studio is incomplete or inactive.",
        fix: "Return to Google AI Studio, regenerate a new key, and update `backend/.env`."
      }
    ],
    verificationChecklist: [
      "Gemini API key is saved exclusively in `backend/.env`.",
      "`backend/.env` is listed inside `.gitignore`.",
      "The frontend never mentions or imports `GEMINI_API_KEY`.",
      "Testing the backend `/api/ai/ask` route in Swagger UI returns a valid AI response."
    ]
  },
  {
    id: 9,
    stageNumber: 9,
    title: "Authentication & Brevo Email OTP",
    tagline: "Build secure user signup, password hashing, and one-time password verification.",
    category: "services",
    purpose: "Enable real user accounts with encrypted passwords (bcrypt), JSON Web Tokens (JWT), and email OTP verification via Brevo.",
    whyItMatters: "Fake or hardcoded authentication is useless in production. Real apps protect user accounts with cryptographic password hashes and verified email ownership.",
    requiredTools: ["Brevo (formerly Sendinblue)", "bcrypt", "PyJWT / python-jose", "Backend .env"],
    estimatedMinutes: 60,
    steps: [
      {
        title: "Create Free Brevo Account for Transactional Emails",
        description: "Brevo provides 300 free emails per day for OTP verification.",
        actionLocation: "Browser (brevo.com)",
        whatToClickOrDo: "Sign up at brevo.com -> Verify your sender email address -> Go to SMTP & API -> Create an API key.",
        expectedOutput: "Brevo API key generated and sender email validated."
      },
      {
        title: "Implement Password Hashing with Bcrypt",
        description: "Never store plaintext passwords in a database.",
        actionLocation: "backend/app/auth/security.py",
        whatToClickOrDo: "Create hash functions using `bcrypt.hashpw()` and verify functions with `bcrypt.checkpw()`.",
        expectedOutput: "Passwords are converted into irreversible `$2b$12$...` hash strings."
      },
      {
        title: "Create 6-Digit OTP Generator with 10-Minute Expiry",
        description: "Generate cryptographically secure temporary codes.",
        actionLocation: "backend/app/auth/otp.py",
        whatToClickOrDo: "Generate random 6 digits using `secrets.randbelow()`, save hash + `expires_at` in MongoDB, and send code via Brevo API.",
        expectedOutput: "User receives a branded verification email with a 6-digit code."
      },
      {
        title: "Issue Secure JWT Cookie or Bearer Token",
        description: "Authorize authenticated requests after successful OTP verification.",
        actionLocation: "backend/app/auth/jwt.py",
        whatToClickOrDo: "Create a signed JWT containing user ID and expiration timestamp using `JWT_SECRET_KEY`.",
        expectedOutput: "Returns access token to client on successful verification."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Build Complete Production Auth & Brevo OTP Flow",
        whenToUse: "To generate the complete user registration, OTP generation, and email dispatch logic.",
        prompt: `Build a complete, production-grade authentication flow in FastAPI:
1. User registration schema (email, password, full_name).
2. Hash password using bcrypt before saving to MongoDB 'users' collection with 'is_verified': False.
3. Generate 6-digit OTP with a 10-minute expiration and store in an 'otps' collection.
4. Send transactional email using Brevo REST API (/v3/smtp/email) with 'BREVO_API_KEY'.
5. Verify OTP endpoint: validates code, checks expiration, sets 'is_verified': True, and issues a JWT token.
6. Login endpoint: checks bcrypt password and returns JWT token only if verified.`
      }
    ],
    commonErrors: [
      {
        errorName: "Brevo 401 Unauthorized / Key Invalid",
        meaning: "The BREVO_API_KEY in backend .env is wrong or lacks transactional email permissions.",
        fix: "Go to Brevo -> Account -> SMTP & API -> Generate a new v3 API key."
      },
      {
        errorName: "Sender email unverified",
        meaning: "Brevo will only send emails from an email address you have verified in Brevo Senders & IPs.",
        fix: "Verify your personal sender email in Brevo before sending test OTPs."
      }
    ],
    verificationChecklist: [
      "Passwords are encrypted with bcrypt before being written to MongoDB.",
      "Brevo sends real verification emails to test inboxes.",
      "OTPs expire after 10 minutes and cannot be reused.",
      "A valid JWT token is returned upon successful verification."
    ]
  },
  {
    id: 10,
    stageNumber: 10,
    title: "Connect Frontend & Backend",
    tagline: "Bridge the client and server with Axios, CORS, and typed API clients.",
    category: "integration",
    purpose: "Allow your React frontend running on port 5173 to communicate seamlessly with your backend running on port 8000.",
    whyItMatters: "Browsers block requests between different ports by default (Same-Origin Policy). Configuring CORS (Cross-Origin Resource Sharing) and centralized API clients is essential.",
    requiredTools: ["Axios / Fetch", "FastAPI CORS Middleware"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Configure CORS Middleware on Backend",
        description: "Authorize the frontend localhost origin on your backend server.",
        actionLocation: "backend/app/main.py",
        whatToClickOrDo: "Add `CORSMiddleware` with `allow_origins=[\"http://localhost:5173\", \"http://127.0.0.1:5173\"]`, `allow_credentials=True`, `allow_methods=[\"*\"]`.",
        expectedOutput: "Backend accepts incoming requests from the frontend."
      },
      {
        title: "Create Centralized Frontend API Client (`api.js` or `api.ts`)",
        description: "Define base URL using environment variables.",
        actionLocation: "frontend/src/lib/api.ts",
        whatToClickOrDo: "Create an Axios instance with `baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000'`.",
        expectedOutput: "Reusable API client ready for all frontend components."
      },
      {
        title: "Create Frontend `.env` File",
        description: "Specify the local backend endpoint.",
        actionLocation: "frontend/.env",
        whatToClickOrDo: "Add `VITE_API_URL=http://localhost:8000` to `frontend/.env`.",
        expectedOutput: "Frontend knows where to send requests."
      }
    ],
    commands: [
      {
        command: "npm install axios",
        os: "all",
        whereToExecute: "Terminal in /frontend",
        description: "Installs Axios HTTP client library in frontend.",
        expectedOutput: "added 1 package..."
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Create Robust Axios Client with JWT Interceptors",
        whenToUse: "To handle auth headers and automatic error handling across all frontend requests.",
        prompt: `In 'frontend/src/lib/api.ts':
1. Create an Axios client reading 'VITE_API_URL' with fallback to 'http://localhost:8000'.
2. Add a request interceptor that automatically attaches 'Authorization: Bearer <token>' from localStorage.
3. Add a response interceptor that redirects to '/login' if a 401 Unauthorized response is received.
4. Export helper methods for get, post, put, delete with TypeScript types.`
      }
    ],
    commonErrors: [
      {
        errorName: "Access to fetch at ... has been blocked by CORS policy",
        meaning: "The backend did not include `Access-Control-Allow-Origin` headers for port 5173.",
        fix: "Ensure `CORSMiddleware` is configured in `backend/app/main.py` before any routes are registered."
      }
    ],
    verificationChecklist: [
      "Submitting a form in the React frontend triggers a request visible in Chrome DevTools Network tab.",
      "The request returns HTTP 200 or 201 without any CORS red errors.",
      "The frontend UI displays data returned by the backend."
    ]
  },
  {
    id: 11,
    stageNumber: 11,
    title: "Test the Complete Website Locally",
    tagline: "Run end-to-end user journeys locally before deploying to production.",
    category: "integration",
    purpose: "Perform a comprehensive sanity check on registration, login, database storage, and mobile responsiveness with both servers running.",
    whyItMatters: "Deploying broken code causes confusing cloud deployment errors. Catching bugs locally in your terminal takes 2 minutes; debugging them on cloud servers can take hours.",
    requiredTools: ["Two Terminal Windows", "Chrome DevTools (F12)"],
    estimatedMinutes: 40,
    steps: [
      {
        title: "Start Both Servers Simultaneously in Two Terminals",
        description: "Terminal 1 runs backend, Terminal 2 runs frontend.",
        actionLocation: "Google Antigravity split terminal",
        whatToClickOrDo: "Terminal 1: `cd backend && uvicorn app.main:app --reload --port 8000`. Terminal 2: `cd frontend && npm run dev`.",
        expectedOutput: "Both servers reporting active without crashes."
      },
      {
        title: "Execute Complete User Journey in Incognito Window",
        description: "Simulate a completely new visitor from scratch.",
        actionLocation: "Browser (Incognito)",
        whatToClickOrDo: "1. Register new user. 2. Receive OTP. 3. Enter OTP. 4. Log in. 5. Perform main feature action. 6. Refresh page and verify session persists.",
        expectedOutput: "Entire flow completes without errors."
      },
      {
        title: "Audit Browser Developer Console & Backend Terminal Logs",
        description: "Inspect for silent errors or unhandled warnings.",
        actionLocation: "Chrome DevTools Console (F12)",
        whatToClickOrDo: "Press F12 -> Look at Console tab. Ensure 0 red exceptions. Inspect Network tab to verify 200/201 HTTP statuses.",
        expectedOutput: "Clean console with zero unhandled exceptions."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Generate End-to-End Local Test Checklist & Bug Audit",
        whenToUse: "To inspect both frontend and backend for unhandled promises or edge cases.",
        prompt: `Review our full-stack codebase (frontend and backend) for production readiness:
1. Are all database queries properly awaited?
2. Are all user inputs validated against malicious payloads or empty strings?
3. Are error responses returned as consistent JSON objects?
4. What happens if MongoDB disconnects or an external API times out?
Provide fixes for any vulnerabilities identified.`
      }
    ],
    commonErrors: [
      {
        errorName: "State resets on page refresh",
        meaning: "Authentication tokens or state was kept only in memory instead of localStorage or secure cookies.",
        fix: "Save the auth token in localStorage on login and restore it on app initialization with useEffect."
      }
    ],
    verificationChecklist: [
      "Both frontend and backend run smoothly side-by-side.",
      "New user can register and log in with real data saved to MongoDB.",
      "Refreshing the browser keeps the user logged in.",
      "No red errors appear in the browser developer console (F12)."
    ]
  },
  {
    id: 12,
    stageNumber: 12,
    title: "GitHub Repository Creation & Push",
    tagline: "Secure your project in cloud version control with professional git commands.",
    category: "deployment",
    purpose: "Initialize Git, verify your `.gitignore` to protect sensitive passwords, and push your codebase to a private or public GitHub repository.",
    whyItMatters: "Both Render and Vercel deploy websites by reading directly from your GitHub repository. Git is also your time machine to undo mistakes.",
    requiredTools: ["Git", "GitHub.com Account", "Terminal"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Create a New Repository on GitHub",
        description: "Create an empty remote project container.",
        actionLocation: "Browser (github.com/new)",
        whatToClickOrDo: "Click 'New' -> Repository name: `my-web-project` -> Public or Private -> Do NOT check 'Add README' or '.gitignore' -> Click 'Create repository'.",
        expectedOutput: "GitHub displays the remote repository URL: `https://github.com/username/my-web-project.git`."
      },
      {
        title: "CRITICAL SECURITY AUDIT: Verify `.gitignore`",
        description: "Never push `.env` files or secret keys to GitHub!",
        actionLocation: "Project root `.gitignore`",
        whatToClickOrDo: "Open `.gitignore`. Verify lines: `.env`, `node_modules`, `venv`, `*.log`, `.next`, `dist`. Run `git status` to ensure `.env` is NOT listed.",
        expectedOutput: "`.env` is ignored by Git and never staged."
      },
      {
        title: "Initialize, Stage, Commit, and Push via Terminal",
        description: "Upload your code to GitHub with 5 essential terminal commands.",
        actionLocation: "Terminal in project root",
        whatToClickOrDo: "Run: `git init`, `git add .`, `git commit -m 'Initial fullstack release'`, `git branch -M main`, `git remote add origin YOUR_URL`, `git push -u origin main`.",
        expectedOutput: "Terminal displays: `Branch 'main' set up to track remote branch 'main' from 'origin'`."
      }
    ],
    commands: [
      {
        command: "git status",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Checks which files are untracked or modified. ALWAYS check before committing!",
        expectedOutput: "Lists files to be committed. Ensure NO .env file appears here!"
      },
      {
        command: "git add .",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Stages all project files for the upcoming commit.",
        expectedOutput: "Files staged for commit."
      },
      {
        command: 'git commit -m "feat: complete initial full-stack implementation"',
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Creates a permanent snapshot of your staged files.",
        expectedOutput: "[main (root-commit) xxxxxxx] feat: complete initial full-stack implementation"
      },
      {
        command: "git branch -M main",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Renames the default branch to 'main'.",
        expectedOutput: "Default branch set to main."
      },
      {
        command: "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Connects your local folder to your remote GitHub repository.",
        expectedOutput: "Remote origin registered."
      },
      {
        command: "git push -u origin main",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Uploads your commit history to GitHub.",
        expectedOutput: "To https://github.com/... * [new branch] main -> main"
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Audit Git State and Generate Strict .gitignore",
        whenToUse: "Before running git add, to guarantee no API keys or database passwords leak.",
        prompt: `Audit my workspace for Git readiness:
1. Inspect the root and subfolder .gitignore files.
2. Confirm that all .env, secrets, venv, and node_modules folders are ignored.
3. Check git status and report if any sensitive files are currently staged or untracked.`
      }
    ],
    commonErrors: [
      {
        errorName: "remote origin already exists",
        meaning: "A remote URL was already linked previously.",
        fix: "Run `git remote set-url origin https://github.com/USERNAME/REPO.git` to update it."
      },
      {
        errorName: "Updates were rejected because the remote contains work that you do not have locally",
        meaning: "You checked 'Add README' when creating the GitHub repo, creating a collision.",
        fix: "Run `git pull origin main --rebase` then run `git push -u origin main`."
      }
    ],
    verificationChecklist: [
      "Running `git status` shows NO `.env` files in untracked or staged lists.",
      "Visiting your GitHub repo in your browser displays all your code files.",
      "The GitHub file browser does NOT show any `.env` file containing secrets.",
      "Branches list shows `main` as the default branch."
    ]
  },
  {
    id: 13,
    stageNumber: 13,
    title: "Deploy Backend Using Render",
    tagline: "Host your live API server on Render cloud with automatic GitHub deployments.",
    category: "deployment",
    purpose: "Publish your FastAPI/Express backend to the internet with a public HTTPS URL and automated deployments on every git push.",
    whyItMatters: "Your backend needs to be alive 24/7 on a cloud server so people worldwide can access your database and services.",
    requiredTools: ["Render.com Account", "GitHub", "Backend Environment Variables"],
    estimatedMinutes: 35,
    steps: [
      {
        title: "Create a Free Render Account & Link GitHub",
        description: "Sign in with GitHub at render.com.",
        actionLocation: "Browser (render.com)",
        whatToClickOrDo: "Click 'Sign Up' with GitHub. Authorize Render to access your repositories.",
        expectedOutput: "Render dashboard showing connected GitHub account."
      },
      {
        title: "Create New Web Service & Select Repository",
        description: "Configure your cloud compute instance.",
        actionLocation: "Render Dashboard",
        whatToClickOrDo: "Click 'New +' -> 'Web Service' -> Select your repository -> Set Name: `my-backend-api`.",
        expectedOutput: "Configuration form opens."
      },
      {
        title: "Configure Root Directory, Build & Start Commands",
        description: "Tell Render how to install dependencies and run your server.",
        actionLocation: "Render Web Service Settings",
        whatToClickOrDo: "Set Root Directory: `backend` | Runtime: `Python 3` | Build Command: `pip install -r requirements.txt` | Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.",
        expectedOutput: "Build instructions configured."
      },
      {
        title: "Add Backend Environment Variables into Render",
        description: "Copy secrets from your local `.env` into Render's secure vault.",
        actionLocation: "Render -> Environment Variables",
        whatToClickOrDo: "Add keys: `MONGODB_URI`, `JWT_SECRET_KEY`, `BREVO_API_KEY`, `GEMINI_API_KEY`. Paste the exact secret values.",
        expectedOutput: "Variables saved securely in Render."
      },
      {
        title: "Trigger Deploy and Test Live Health Endpoint",
        description: "Wait for deployment build to finish.",
        actionLocation: "Render Logs",
        whatToClickOrDo: "Click 'Create Web Service'. Watch deployment logs until 'Your service is live' appears. Click your live Render URL + `/docs`.",
        expectedOutput: "Live Swagger docs accessible at `https://my-backend-api.onrender.com/docs`."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Diagnose Render Deployment Build Log Errors",
        whenToUse: "If your Render deployment fails with a red build or start error.",
        prompt: `My Render backend deployment failed with this log output:
[PASTE_RENDER_LOGS]
Please identify why the build or startup failed, what file in my backend needs to be modified, and provide the exact fix.`
      }
    ],
    commonErrors: [
      {
        errorName: "Build failed: ModuleNotFoundError: No module named 'fastapi'",
        meaning: "FastAPI was not listed in backend/requirements.txt.",
        fix: "Locally in backend folder run `pip freeze > requirements.txt`, commit and push to GitHub."
      },
      {
        errorName: "Application failed to bind to $PORT",
        meaning: "The start command hardcoded port 8000 instead of listening to Render's dynamic $PORT environment variable.",
        fix: "Update Start Command to: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`."
      }
    ],
    verificationChecklist: [
      "Render deployment logs display '==> Your service is live 🎉'.",
      "Visiting `https://YOUR-APP.onrender.com/api/health` returns HTTP 200.",
      "Visiting `https://YOUR-APP.onrender.com/docs` loads interactive Swagger UI.",
      "All secret keys are configured in Render Environment Variables."
    ]
  },
  {
    id: 14,
    stageNumber: 14,
    title: "Deploy Frontend Using Vercel",
    tagline: "Deploy your lightning-fast React application worldwide on Vercel's Edge CDN.",
    category: "deployment",
    purpose: "Publish your user interface to the web with instant HTTPS, automated global CDN caching, and continuous deployment from GitHub.",
    whyItMatters: "Vercel is the industry benchmark for hosting modern frontend applications like Vite, Next.js, and React.",
    requiredTools: ["Vercel.com Account", "GitHub", "Frontend Environment Variables"],
    estimatedMinutes: 25,
    steps: [
      {
        title: "Create Vercel Account & Import Repository",
        description: "Connect Vercel to your GitHub account.",
        actionLocation: "Browser (vercel.com)",
        whatToClickOrDo: "Sign in with GitHub -> Click 'Add New Project' -> Find your repository -> Click 'Import'.",
        expectedOutput: "Project configuration screen appears."
      },
      {
        title: "Set Root Directory to `frontend`",
        description: "Tell Vercel which folder holds the user interface.",
        actionLocation: "Vercel Project Setup",
        whatToClickOrDo: "Click 'Edit' next to Root Directory -> Select `frontend` -> Framework Preset will auto-detect 'Vite'.",
        expectedOutput: "Root directory configured to frontend/."
      },
      {
        title: "Add Production Environment Variable `VITE_API_URL`",
        description: "Point your frontend to your live Render backend URL.",
        actionLocation: "Vercel -> Environment Variables",
        whatToClickOrDo: "Name: `VITE_API_URL` | Value: `https://my-backend-api.onrender.com` (your live Render backend URL without trailing slash).",
        expectedOutput: "Variable added for Production and Preview."
      },
      {
        title: "Configure SPA Rewrite Rule for Client-Side Routing",
        description: "Ensure refreshing subpages (like `/dashboard`) doesn't cause a 404.",
        actionLocation: "frontend/vercel.json",
        whatToClickOrDo: "Add `vercel.json` in `frontend/` with rewrites pointing all paths to `/index.html`.",
        expectedOutput: "vercel.json committed to git."
      },
      {
        title: "Deploy & Celebrate Your Live Frontend URL!",
        description: "Click Deploy and watch the build.",
        actionLocation: "Vercel Dashboard",
        whatToClickOrDo: "Click 'Deploy'. After ~45 seconds, confetti appears with your live `.vercel.app` domain!",
        expectedOutput: "Website live at `https://my-app.vercel.app`."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Create vercel.json SPA Rewrites for Vite",
        whenToUse: "To create the configuration file that prevents 404 errors when reloading subroutes.",
        prompt: `Create 'frontend/vercel.json' with the official Vercel SPA routing rewrite rule:
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
Explain how this prevents 404 errors when visitors refresh pages.`
      }
    ],
    commonErrors: [
      {
        errorName: "404 NOT_FOUND on page refresh",
        meaning: "The Vercel server looked for a physical HTML file for the subroute instead of serving index.html.",
        fix: "Add `vercel.json` with the rewrite rule in your frontend folder, commit, and push."
      },
      {
        errorName: "Failed to fetch / Network Error in production",
        meaning: "The frontend is still trying to call http://localhost:8000 or Render backend CORS is rejecting the Vercel domain.",
        fix: "Verify `VITE_API_URL` in Vercel environment variables, and update Render backend CORS to allow your Vercel URL."
      }
    ],
    verificationChecklist: [
      "Vercel build completes successfully with confetti screen.",
      "Visiting `https://YOUR-APP.vercel.app` loads the live website.",
      "Refreshing deep links (e.g. `/login` or `/dashboard`) does NOT return 404.",
      "`VITE_API_URL` is set to the live Render backend URL."
    ]
  },
  {
    id: 15,
    stageNumber: 15,
    title: "MongoDB Production Network Access",
    tagline: "Authorize cloud backend traffic to access your MongoDB Atlas database.",
    category: "deployment",
    purpose: "Ensure your live Render backend can query your MongoDB Atlas database without IP timeout errors.",
    whyItMatters: "Local computers and cloud hosting servers use completely different IP addresses. Free cloud containers rotate their outbound IPs, so your database firewall must be configured appropriately.",
    requiredTools: ["MongoDB Atlas Dashboard", "Render Dashboard"],
    estimatedMinutes: 20,
    steps: [
      {
        title: "Inspect MongoDB Network Access Settings",
        description: "Check the current IP allowlist status.",
        actionLocation: "MongoDB Atlas -> Security -> Network Access",
        whatToClickOrDo: "Open Network Access tab. Check if `0.0.0.0/0` is listed and active.",
        expectedOutput: "Shows active allowlist entries."
      },
      {
        title: "Understand Cloud Outbound IP Addressing",
        description: "Learn how Render connects to external databases.",
        actionLocation: "Render / Atlas Documentation",
        whatToClickOrDo: "Render free web services use dynamic outbound IP addresses that change across deployments. MongoDB Atlas `0.0.0.0/0` allowlist ensures continuous database connectivity.",
        expectedOutput: "Understanding of why 0.0.0.0/0 is standard for free-tier cloud deployments."
      },
      {
        title: "Verify Render Backend Logs for MongoDB Connection",
        description: "Confirm database handshakes succeed in the cloud.",
        actionLocation: "Render Web Service Logs",
        whatToClickOrDo: "Trigger a manual deploy on Render -> Watch logs -> Confirm 'Connected to MongoDB Atlas' log appears.",
        expectedOutput: "No timeout or server selection errors in logs."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Diagnose Cloud Database Timeout Errors",
        whenToUse: "If your deployed backend logs show MongoDB connection timeouts in production.",
        prompt: `My deployed backend on Render is failing to connect to MongoDB Atlas with this log:
[PASTE_RENDER_MONGODB_ERROR]
Please verify if this is an IP allowlist issue, a password encoding issue, or an SSL/TLS driver incompatibility, and provide step-by-step instructions to resolve it.`
      }
    ],
    commonErrors: [
      {
        errorName: "ServerSelectionTimeoutError: No replica set members match selector",
        meaning: "MongoDB Atlas rejected the connection request from Render's outbound IP.",
        fix: "Go to MongoDB Atlas -> Network Access -> Add IP Address -> Select 'Allow Access from Anywhere (0.0.0.0/0)'."
      }
    ],
    verificationChecklist: [
      "MongoDB Atlas Network Access contains `0.0.0.0/0` active entry.",
      "Render backend server logs show successful database connection on boot.",
      "Testing live user registration on the production Vercel frontend creates a document in Atlas."
    ]
  },
  {
    id: 16,
    stageNumber: 16,
    title: "Final Production Verification",
    tagline: "Perform the comprehensive 15-point launch audit before sharing your website.",
    category: "operations",
    purpose: "Systematically verify every user journey, security control, and performance factor on the live production environment.",
    whyItMatters: "Never claim a website is live until real tests prove it works. A methodical checklist catches broken buttons, missing keys, and mobile rendering bugs.",
    requiredTools: ["Production URL", "Smartphone / Mobile Browser", "DevTools"],
    estimatedMinutes: 30,
    steps: [
      {
        title: "Step 1: Test Live SSL & HTTPS Certificates",
        description: "Ensure green lock padlocks appear on both frontend and backend.",
        actionLocation: "Browser URL bar",
        whatToClickOrDo: "Visit `https://YOUR-APP.vercel.app` and `https://YOUR-BACKEND.onrender.com`. Verify padlock icon.",
        expectedOutput: "Valid SSL certificate issued by Let's Encrypt / Vercel."
      },
      {
        title: "Step 2: Test End-to-End Registration on Mobile Phone",
        description: "Test on a real handheld smartphone.",
        actionLocation: "Mobile Safari / Chrome",
        whatToClickOrDo: "Open your live Vercel URL on your smartphone. Sign up with a real email. Enter OTP received in inbox. Verify login success.",
        expectedOutput: "Smooth mobile interaction with zero awkward zoom or broken layout."
      },
      {
        title: "Step 3: Security & Secret Leak Audit",
        description: "Confirm no secrets or API keys are visible to visitors.",
        actionLocation: "Browser DevTools (F12) -> Sources & Network",
        whatToClickOrDo: "Search page sources for 'AIza', 'brevo', or 'mongodb'. Ensure zero hits in client-side bundles.",
        expectedOutput: "No private credentials exposed."
      }
    ],
    commands: [],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Pre-Launch Production Security & Performance Audit",
        whenToUse: "To run a final automated verification of all production settings.",
        prompt: `Act as a principal DevOps and security auditor.
Frontend: [VERCEL_URL]
Backend: [RENDER_URL]
Please provide an exhaustive 15-point verification checklist covering:
1. HTTPS security headers.
2. CORS origin lock to prevent unauthorized domain embedding.
3. Database connection pooling and connection limits.
4. Token expiration and refresh handling.
5. Mobile viewport responsiveness and touch target sizes.`
      }
    ],
    commonErrors: [
      {
        errorName: "Mixed Content Error",
        meaning: "An HTTPS website tried to load an HTTP image or API URL.",
        fix: "Ensure all frontend API calls use `https://` instead of `http://`."
      }
    ],
    verificationChecklist: [
      "Frontend loads via secure HTTPS on custom or `.vercel.app` domain.",
      "Backend API responds via secure HTTPS on Render domain.",
      "User registration, OTP delivery, and login work end-to-end on mobile.",
      "Database documents are successfully created and read from MongoDB Atlas.",
      "Zero private API keys or database credentials exist in frontend code or Git."
    ]
  },
  {
    id: 17,
    stageNumber: 17,
    title: "Maintenance, Git Updates & Continuous Delivery",
    tagline: "Update your live website effortlessly with automated CI/CD pipelines.",
    category: "operations",
    purpose: "Learn the modern developer workflow for fixing bugs, adding new features, and redeploying updates automatically using Git.",
    whyItMatters: "Building a website is just day one. Professional developers never edit files directly on servers—they make changes locally, test them, and let GitHub deploy automatically.",
    requiredTools: ["Git", "Terminal", "Google Antigravity"],
    estimatedMinutes: 20,
    steps: [
      {
        title: "Make Code Changes Locally & Verify",
        description: "Always test changes locally before pushing.",
        actionLocation: "Google Antigravity local workspace",
        whatToClickOrDo: "Make your bug fix or feature improvement. Test on `http://localhost:5173`.",
        expectedOutput: "Feature verified locally."
      },
      {
        title: "Stage, Commit, and Push to GitHub `main`",
        description: "One command triggers automated deployments everywhere.",
        actionLocation: "Terminal in project root",
        whatToClickOrDo: "Run `git add .`, `git commit -m 'feat: add new user profile page'`, `git push origin main`.",
        expectedOutput: "Git uploads changes to GitHub."
      },
      {
        title: "Watch Automatic Redeploy on Vercel & Render",
        description: "Continuous Delivery handles the deployment hands-free.",
        actionLocation: "Vercel & Render Dashboards",
        whatToClickOrDo: "Open Vercel and Render dashboards. Watch the automated build trigger within 5 seconds and deploy your new code.",
        expectedOutput: "Live website updated without any manual server uploads!"
      }
    ],
    commands: [
      {
        command: "git add . && git commit -m 'fix: resolve mobile navigation padding' && git push origin main",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "All-in-one command to stage changes, commit with description, and push to trigger automated redeployment.",
        expectedOutput: "Pushed to GitHub -> Vercel and Render auto-deploy."
      },
      {
        command: "git log --oneline -5",
        os: "all",
        whereToExecute: "Terminal in project root",
        description: "Displays the last 5 commits in your project history.",
        expectedOutput: "List of recent commits with hash and messages."
      }
    ],
    aiPrompts: [
      {
        tool: "Google Antigravity",
        title: "Prepare Feature Pull Request & Regression Test",
        whenToUse: "When adding a significant new feature to an already live website.",
        prompt: `I want to add [NEW_FEATURE_DESCRIPTION] to my live website.
Please review the changes required:
1. Ensure the new feature does not break existing authentication or database schemas.
2. Outline local test commands before committing.
3. Provide the exact git commands to commit cleanly.`
      }
    ],
    commonErrors: [
      {
        errorName: "Redeployment did not pick up code changes",
        meaning: "The changes were saved locally but not committed and pushed to the remote GitHub main branch.",
        fix: "Run `git status` to check for uncommitted changes, then `git push origin main`."
      }
    ],
    verificationChecklist: [
      "I know how to make local changes and test them locally first.",
      "I know how to push updates to GitHub using `git commit` and `git push`.",
      "I confirmed that pushing to GitHub automatically updates my live Vercel and Render sites."
    ]
  }
];

export const TECHNOLOGY_MAP: TechnologyItem[] = [
  {
    id: "antigravity",
    name: "Google Antigravity",
    role: "Agentic AI Development Environment",
    category: "devtools",
    badge: "Primary IDE",
    description: "The next-generation AI coding environment that reads your entire workspace, plans multi-file changes, runs terminal commands, and fixes errors autonomously with your approval.",
    howWeUseIt: "Your primary cockpit for writing frontend components, backend endpoints, and managing local servers.",
    officialUrl: "https://antigravity.google",
    isBeginnerFriendly: true
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    role: "System Architect & Prompt Strategist",
    category: "ai",
    badge: "Architect",
    description: "Conversational AI that excels at high-level planning, refining website concepts, outlining database schemas, and generating structured execution prompts for Antigravity.",
    howWeUseIt: "Drafting the project plan, brainstorming feature requirements, and crafting specialized developer prompts.",
    officialUrl: "https://chatgpt.com",
    isBeginnerFriendly: true
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    role: "Source Code Editor",
    category: "devtools",
    badge: "Code Editor",
    description: "The world's most popular lightweight code editor, equipped with syntax highlighting, extensions, and integrated terminal support.",
    howWeUseIt: "Manual code reviews, quick configuration edits, and alternative coding workspace.",
    officialUrl: "https://code.visualstudio.com",
    isBeginnerFriendly: true
  },
  {
    id: "git",
    name: "Git",
    role: "Local Version Control System",
    category: "vcs",
    badge: "CLI Tool",
    description: "A distributed command-line utility that tracks the chronological history of changes to your project files, allowing rollbacks and branch management.",
    howWeUseIt: "Creating snapshots (commits) of your working code before making risky modifications.",
    officialUrl: "https://git-scm.com",
    isBeginnerFriendly: true
  },
  {
    id: "github",
    name: "GitHub",
    role: "Cloud Code Repository & CI/CD Hub",
    category: "vcs",
    badge: "Cloud Repo",
    description: "The cloud platform where developers store Git repositories, collaborate, and connect continuous deployment triggers to hosting services.",
    howWeUseIt: "Holding your remote code backup and feeding automatic deployments into Render and Vercel.",
    officialUrl: "https://github.com",
    isBeginnerFriendly: true
  },
  {
    id: "render",
    name: "Render",
    role: "Cloud Backend Web Service Hosting",
    category: "deployment",
    badge: "Backend Host",
    description: "A modern cloud platform that builds and runs backend applications (Python, Node, Docker) directly from GitHub with zero server management.",
    howWeUseIt: "Hosting your live FastAPI or Express backend with automatic SSL certificates and GitHub auto-deploy.",
    officialUrl: "https://render.com",
    isBeginnerFriendly: true
  },
  {
    id: "vercel",
    name: "Vercel",
    role: "Global Edge Frontend Hosting",
    category: "deployment",
    badge: "Frontend Host",
    description: "The leading global edge platform designed specifically for lightning-fast frontend frameworks like React, Next.js, and Vite.",
    howWeUseIt: "Hosting your live client application with instant global CDN caching and preview deployments.",
    officialUrl: "https://vercel.com",
    isBeginnerFriendly: true
  },
  {
    id: "mongodb",
    name: "MongoDB Atlas",
    role: "Fully Managed Cloud NoSQL Database",
    category: "database",
    badge: "Cloud Database",
    description: "A cloud-hosted document database that stores JSON-like documents with flexible schemas, built-in security, and a generous free tier.",
    howWeUseIt: "Permanently saving user accounts, profiles, posts, items, and verification tokens.",
    officialUrl: "https://www.mongodb.com/atlas",
    isBeginnerFriendly: true
  },
  {
    id: "gemini",
    name: "Google Gemini API",
    role: "Generative AI Language & Multimodal Models",
    category: "ai",
    badge: "AI Service",
    description: "Google's cutting-edge family of multimodal AI models, accessible through Google AI Studio API keys.",
    howWeUseIt: "Powering smart website features like automated content generation, chatbots, and summarization.",
    officialUrl: "https://aistudio.google.com",
    isBeginnerFriendly: true
  },
  {
    id: "brevo",
    name: "Brevo (Sendinblue)",
    role: "Transactional Email & OTP Delivery",
    category: "auth",
    badge: "Email Service",
    description: "A reliable email delivery service offering 300 free transactional emails per day via simple REST API or SMTP.",
    howWeUseIt: "Delivering real 6-digit OTP verification codes directly to users' inboxes during registration.",
    officialUrl: "https://www.brevo.com",
    isBeginnerFriendly: true
  }
];

