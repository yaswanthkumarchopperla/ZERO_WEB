export interface DetailedCommand {
  id: string;
  command: string;
  category: "env" | "frontend" | "backend" | "database" | "api" | "auth" | "git" | "deployment" | "testing";
  categoryLabel: string;
  os: "all" | "windows" | "mac";
  whereToRun: string;
  whatItDoes: string;
  whyWeUseIt: string;
  whenToUseIt: string;
  howToUseIt: string[];
  expectedOutput: string;
  ifErrorOccurs: string;
  nextStep: string;
  shortSummary: string;
}

export const COMMANDS_DATA: DetailedCommand[] = [
  {
    id: "cmd-node-v",
    command: "node -v",
    category: "env",
    categoryLabel: "Environment Setup",
    os: "all",
    whereToRun: "Windows PowerShell, Command Prompt, or VS Code / Google Antigravity Terminal",
    whatItDoes: "Displays the currently installed Node.js version on your computer.",
    whyWeUseIt: "Node.js is the JavaScript runtime required to run modern web development tools, including Vite, Next.js, and npm package installations.",
    whenToUseIt: "Stage 2 (Install Development Tools), before installing dependencies or starting any JavaScript or React project.",
    howToUseIt: [
      "Open your terminal (in Google Antigravity or VS Code, press Ctrl + `).",
      "Type node -v into the terminal prompt.",
      "Press Enter to execute the command."
    ],
    expectedOutput: "v20.18.0 (Example output: version number may vary, v20+ LTS recommended)",
    ifErrorOccurs: "If you see ''node' is not recognized as an internal or external command', Node.js is either not installed or its installation directory was not added to your system PATH variable. Download the LTS installer from nodejs.org, run it, ensure 'Add to PATH' is checked, and restart your terminal.",
    nextStep: "Verify npm package manager installation by executing npm -v.",
    shortSummary: "Checks if Node.js runtime is installed and accessible in your system PATH."
  },
  {
    id: "cmd-npm-v",
    command: "npm -v",
    category: "env",
    categoryLabel: "Environment Setup",
    os: "all",
    whereToRun: "Windows PowerShell, Command Prompt, or Antigravity Terminal",
    whatItDoes: "Displays the installed version of the Node Package Manager (npm).",
    whyWeUseIt: "npm is used to download, install, and manage third-party open-source libraries that your frontend relies upon (such as React, Tailwind CSS, Lucide icons, and Axios).",
    whenToUseIt: "Stage 2, immediately after verifying that Node.js is installed.",
    howToUseIt: [
      "Open your terminal window.",
      "Type npm -v into the terminal prompt.",
      "Press Enter."
    ],
    expectedOutput: "10.8.2 (Example output: any version 10.x or higher is ready for production)",
    ifErrorOccurs: "On Windows PowerShell, if you see 'npm.ps1 cannot be loaded because running scripts is disabled', invoke it as npm.cmd -v or run 'Set-ExecutionPolicy -Scope CurrentUser RemoteSigned' once.",
    nextStep: "Check Python installation with python --version.",
    shortSummary: "Verifies that the Node Package Manager is available to install web libraries."
  },
  {
    id: "cmd-python-version",
    command: "python --version",
    category: "env",
    categoryLabel: "Environment Setup",
    os: "windows",
    whereToRun: "Windows PowerShell or Command Prompt",
    whatItDoes: "Displays the installed Python runtime version.",
    whyWeUseIt: "Python powers the backend server framework (such as FastAPI) that processes business logic, validates data, and communicates with MongoDB.",
    whenToUseIt: "Stage 2, before creating your backend directory or virtual environment.",
    howToUseIt: [
      "Open PowerShell or Command Prompt.",
      "Type python --version.",
      "Press Enter."
    ],
    expectedOutput: "Python 3.12.3 (Example output: Python 3.11 or newer is recommended)",
    ifErrorOccurs: "If the command opens the Windows Store app or displays 'python is not recognized', re-run the Python 3.11+ installer from python.org, select 'Modify', and check the box 'Add python.exe to PATH' at the bottom of the first setup screen.",
    nextStep: "Check Git version using git --version.",
    shortSummary: "Verifies Python 3 runtime installation for building backend APIs."
  },
  {
    id: "cmd-git-version",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Antigravity Terminal, PowerShell, Command Prompt, or Git Bash",
    command: "git --version",
    whatItDoes: "Displays the installed version of the Git version control system.",
    whyWeUseIt: "Git tracks historical snapshots of your project code and allows you to upload and sync your application with GitHub.",
    whenToUseIt: "Stage 2, before initializing a repository or attempting to deploy your code.",
    howToUseIt: [
      "Open your terminal.",
      "Type git --version.",
      "Press Enter."
    ],
    expectedOutput: "git version 2.45.2.windows.1 (Example output)",
    ifErrorOccurs: "If Git is not recognized, download the Git installer from git-scm.com, complete setup with default recommendations, and restart your terminal application.",
    nextStep: "Navigate to your project folder and prepare your directory hierarchy.",
    shortSummary: "Verifies that the Git command-line version tracking utility is installed."
  },
  {
    id: "cmd-mkdir-folders",
    command: "mkdir frontend backend",
    category: "env",
    categoryLabel: "Environment Setup",
    os: "all",
    whereToRun: "Terminal inside your root project folder (e.g. C:\\Projects\\my-web-project)",
    whatItDoes: "Creates two clean subdirectories named 'frontend' and 'backend' side by side in your project root.",
    whyWeUseIt: "Establishes a professional full-stack architecture that cleanly separates user-facing browser UI code from server database code, preventing dependency collisions and accidental secret leaks.",
    whenToUseIt: "Stage 3 (Create the Project Folder), when beginning a new full-stack website from scratch.",
    howToUseIt: [
      "Open your root project folder in your terminal.",
      "Verify you are in the intended directory using 'pwd' (Mac/Linux) or 'dir' (Windows).",
      "Type mkdir frontend backend and press Enter."
    ],
    expectedOutput: "Creates frontend/ and backend/ folders without terminal errors.",
    ifErrorOccurs: "If you see 'A subdirectory or file frontend already exists', the folders have already been created. You can verify them in your file explorer.",
    nextStep: "Navigate into the backend directory using 'cd backend' to set up your Python virtual environment.",
    shortSummary: "Creates the dual frontend and backend folder hierarchy."
  },
  {
    id: "cmd-python-venv",
    command: "python -m venv venv",
    category: "backend",
    categoryLabel: "Backend & FastAPI",
    os: "all",
    whereToRun: "Terminal inside the backend folder (run 'cd backend' first)",
    whatItDoes: "Generates an isolated Python virtual environment inside a dedicated directory named 'venv'.",
    whyWeUseIt: "Keeps all your backend project packages (FastAPI, Motor, Pydantic) isolated so they do not conflict with other Python programs on your machine or global system libraries.",
    whenToUseIt: "Stage 3, right after creating the backend folder and before installing any pip packages.",
    howToUseIt: [
      "Navigate into your backend folder: cd backend.",
      "Type python -m venv venv.",
      "Press Enter and wait ~5-10 seconds for the environment binaries to generate."
    ],
    expectedOutput: "A new venv/ directory appears in backend/ containing Scripts/ (Windows) or bin/ (Mac/Linux).",
    ifErrorOccurs: "On Linux/Ubuntu systems, you may need to run 'sudo apt install python3-venv'. On Windows, verify that python is recognized.",
    nextStep: "Activate the virtual environment with 'venv\\Scripts\\activate' on Windows or 'source venv/bin/activate' on Mac/Linux.",
    shortSummary: "Creates an isolated Python virtual environment inside backend/venv."
  },
  {
    id: "cmd-venv-activate-win",
    command: "venv\\Scripts\\activate",
    category: "backend",
    categoryLabel: "Backend & FastAPI",
    os: "windows",
    whereToRun: "Windows PowerShell or Command Prompt inside the backend folder",
    whatItDoes: "Activates the isolated Python virtual environment for your current terminal session.",
    whyWeUseIt: "Directs your terminal to use the Python and pip executables located inside your local venv folder rather than system-wide Python.",
    whenToUseIt: "Stage 3 and every single time you open a terminal to install backend packages or run your backend server.",
    howToUseIt: [
      "Confirm your terminal is in the backend directory.",
      "Type venv\\Scripts\\activate (for Windows).",
      "Press Enter."
    ],
    expectedOutput: "(venv) prefix appears at the beginning of your terminal prompt line (e.g. (venv) PS C:\\Projects\\my-web-project\\backend>).",
    ifErrorOccurs: "In Windows PowerShell, if you see 'Activate.ps1 cannot be loaded because running scripts is disabled', run 'Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser' once in PowerShell, or switch your terminal to Command Prompt (cmd.exe).",
    nextStep: "Install backend libraries using pip install.",
    shortSummary: "Activates the Python virtual environment on Windows."
  },
  {
    id: "cmd-vite-create",
    command: "npm create vite@latest . -- --template react",
    category: "frontend",
    categoryLabel: "Frontend & React",
    os: "all",
    whereToRun: "Terminal inside the frontend directory (run 'cd frontend' first)",
    whatItDoes: "Scaffolds a modern, fast React application directly into the current frontend directory using the official Vite template.",
    whyWeUseIt: "Vite is significantly faster than legacy Create React App, provides instant Hot Module Replacement during development, and produces lightweight production bundles optimized for Vercel edge deployment.",
    whenToUseIt: "Stage 5 (Frontend Development), when initializing your user interface.",
    howToUseIt: [
      "Ensure you are in the frontend directory: cd frontend.",
      "Verify the folder is completely empty.",
      "Type npm create vite@latest . -- --template react.",
      "Press Enter. Type 'y' if prompted to install create-vite.",
      "Select JavaScript or TypeScript with arrow keys."
    ],
    expectedOutput: "Scaffolding project in ... Done. Now run: npm install, npm run dev.",
    ifErrorOccurs: "If you see 'Target directory is not empty', remove any hidden files or subfolders inside frontend/ before running the scaffolding command.",
    nextStep: "Run 'npm install' to download the newly declared React dependencies.",
    shortSummary: "Scaffolds a modern React project powered by Vite."
  },
  {
    id: "cmd-npm-install",
    command: "npm install",
    category: "frontend",
    categoryLabel: "Frontend & React",
    os: "all",
    whereToRun: "Terminal inside the frontend directory",
    whatItDoes: "Reads the dependencies listed in package.json and downloads them from the npm registry into your local node_modules folder.",
    whyWeUseIt: "Code repositories do not store heavy library files in Git. Running npm install sets up all libraries locally so your React app can compile and run.",
    whenToUseIt: "Stage 5, right after creating the frontend project, or whenever you add new packages.",
    howToUseIt: [
      "Confirm terminal path is inside frontend/.",
      "Type npm install.",
      "Press Enter and wait for the package tree to download."
    ],
    expectedOutput: "added 138 packages, and audited 139 packages in 12s (Example output)",
    ifErrorOccurs: "If an EACCES permission or network error occurs, check your internet connection or run 'npm cache clean --force' then retry.",
    nextStep: "Start your local frontend preview server with npm run dev.",
    shortSummary: "Downloads and installs all declared JavaScript libraries into node_modules."
  },
  {
    id: "cmd-npm-run-dev",
    command: "npm run dev",
    category: "frontend",
    categoryLabel: "Frontend & React",
    os: "all",
    whereToRun: "Terminal inside the frontend directory",
    whatItDoes: "Starts the Vite local development hot-reload web server.",
    whyWeUseIt: "Serves your React application on your local machine so you can view, test, and interact with your UI in Google Chrome or any modern web browser.",
    whenToUseIt: "Stage 5 through Stage 11, whenever you are actively editing or testing frontend components.",
    howToUseIt: [
      "Ensure terminal is inside frontend/.",
      "Type npm run dev.",
      "Press Enter.",
      "Hold Ctrl and click the displayed Local URL (e.g. http://localhost:5173)."
    ],
    expectedOutput: "VITE v5.4.11 ready in 280 ms -> Local: http://localhost:5173/ (Example output)",
    ifErrorOccurs: "If port 5173 is already in use by another app, Vite automatically tries 5174. If terminal errors cite missing modules, ensure you ran 'npm install' first.",
    nextStep: "Open the printed localhost link in your browser to inspect your live frontend UI.",
    shortSummary: "Boots the Vite local development server with instant hot module replacement."
  },
  {
    id: "cmd-pip-install-backend",
    command: "pip install fastapi uvicorn pydantic python-dotenv motor bcrypt pyjwt",
    category: "backend",
    categoryLabel: "Backend & FastAPI",
    os: "all",
    whereToRun: "Terminal inside backend/ with (venv) virtual environment activated",
    whatItDoes: "Installs the full production suite of backend libraries: FastAPI framework, Uvicorn ASGI server, Pydantic data validator, python-dotenv for secrets, Motor for async MongoDB, bcrypt for password hashing, and PyJWT for user session tokens.",
    whyWeUseIt: "Provides all server capabilities required to build secure REST API endpoints, validate incoming request bodies, hash passwords, and connect to cloud databases.",
    whenToUseIt: "Stage 6 (Backend Development), after creating and activating your virtual environment.",
    howToUseIt: [
      "Ensure terminal prompt shows (venv).",
      "Type pip install fastapi uvicorn pydantic python-dotenv motor bcrypt pyjwt.",
      "Press Enter and wait ~15-30 seconds for pip to download all wheels."
    ],
    expectedOutput: "Successfully installed bcrypt-4.2.0 fastapi-0.115.0 motor-3.6.0 pydantic-2.9.2 python-dotenv-1.0.1 uvicorn-0.31.0 (Example output)",
    ifErrorOccurs: "If pip is not recognized, make sure you ran 'venv\\Scripts\\activate' first. If pip warns about an outdated version, update it via 'python -m pip install --upgrade pip'.",
    nextStep: "Start your backend server with Uvicorn.",
    shortSummary: "Installs the complete FastAPI, MongoDB, and authentication package suite."
  },
  {
    id: "cmd-uvicorn-dev",
    command: "uvicorn app.main:app --reload --port 8000",
    category: "backend",
    categoryLabel: "Backend & FastAPI",
    os: "all",
    whereToRun: "Terminal inside backend/ with (venv) activated",
    whatItDoes: "Launches the FastAPI ASGI application on port 8000 and watches for file edits to auto-restart the server.",
    whyWeUseIt: "Executes your Python backend locally so it can listen for incoming HTTP requests from your frontend and communicate with MongoDB Atlas.",
    whenToUseIt: "Stage 6 through Stage 11, in a dedicated terminal window while developing or testing your API.",
    howToUseIt: [
      "Confirm (venv) is active and terminal is inside the backend/ directory.",
      "Verify that backend/app/main.py exists with 'app = FastAPI()'.",
      "Type uvicorn app.main:app --reload --port 8000.",
      "Press Enter."
    ],
    expectedOutput: "INFO: Application startup complete. Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)",
    ifErrorOccurs: "If you see 'ModuleNotFoundError: No module named app', ensure your terminal is inside the backend/ folder where the 'app' directory resides. If port 8000 is occupied, use --port 8001.",
    nextStep: "Visit http://127.0.0.1:8000/docs in your browser to inspect interactive Swagger API documentation.",
    shortSummary: "Starts the FastAPI backend server with live auto-reload on code save."
  },
  {
    id: "cmd-pip-freeze",
    command: "pip freeze > requirements.txt",
    category: "backend",
    categoryLabel: "Backend & FastAPI",
    os: "all",
    whereToRun: "Terminal inside backend/ with (venv) activated",
    whatItDoes: "Inspects every package installed in your active virtual environment and writes their exact pinned version numbers into requirements.txt.",
    whyWeUseIt: "Cloud hosting platforms like Render look for requirements.txt in your backend folder to automatically install the exact libraries your application needs to boot.",
    whenToUseIt: "Stage 6 and Stage 13, whenever you install a new Python package and before committing changes to Git.",
    howToUseIt: [
      "Confirm (venv) is active in your terminal.",
      "Type pip freeze > requirements.txt.",
      "Press Enter.",
      "Open backend/requirements.txt to verify package rows were saved."
    ],
    expectedOutput: "Creates or updates requirements.txt inside backend/ containing pinned package lines (e.g. fastapi==0.115.0).",
    ifErrorOccurs: "If the output file is completely empty, you ran the command without your virtual environment active. Activate venv first and re-run.",
    nextStep: "Audit your git status to make sure requirements.txt is ready to commit.",
    shortSummary: "Locks backend package versions into requirements.txt for Render cloud deployment."
  },
  {
    id: "cmd-pip-gemini",
    command: "pip install google-generativeai",
    category: "api",
    categoryLabel: "APIs & AI Services",
    os: "all",
    whereToRun: "Terminal inside backend/ with (venv) activated",
    whatItDoes: "Installs Google's official Generative AI Python SDK for interacting with Gemini models.",
    whyWeUseIt: "Allows your backend to securely send prompts to Google Gemini and receive generated text/data without exposing your secret GEMINI_API_KEY in visitor web browsers.",
    whenToUseIt: "Stage 8 (API Keys & External AI Services), when adding AI features to your web application.",
    howToUseIt: [
      "Activate (venv) in backend/.",
      "Type pip install google-generativeai.",
      "Press Enter.",
      "Add GEMINI_API_KEY=AIzaSy... to your backend/.env file.",
      "Run pip freeze > requirements.txt to save the new dependency."
    ],
    expectedOutput: "Successfully installed google-generativeai-0.8.3 (Example output)",
    ifErrorOccurs: "If API calls fail with 400 or 403, check Google AI Studio (aistudio.google.com) to confirm your key is active and correctly read from os.getenv('GEMINI_API_KEY').",
    nextStep: "Create a backend route '/api/ai/ask' that securely proxies user questions to Gemini.",
    shortSummary: "Installs Google's official Gemini SDK for secure server-side AI generation."
  },
  {
    id: "cmd-pip-brevo",
    command: "pip install requests",
    category: "auth",
    categoryLabel: "Auth & Brevo Email OTP",
    os: "all",
    whereToRun: "Terminal inside backend/ with (venv) activated",
    whatItDoes: "Installs the Requests HTTP client library for Python.",
    whyWeUseIt: "Used by your backend server to make POST requests to Brevo's v3 transactional email API endpoint to dispatch 6-digit email OTPs to users during signup.",
    whenToUseIt: "Stage 9 (Authentication & Brevo Email OTP).",
    howToUseIt: [
      "In backend/ with (venv) active, run pip install requests.",
      "Add BREVO_API_KEY=xkeysib-... and BREVO_SENDER_EMAIL=you@example.com to backend/.env.",
      "Run pip freeze > requirements.txt."
    ],
    expectedOutput: "Successfully installed requests-2.32.3 (Example output)",
    ifErrorOccurs: "If Brevo returns 401 Unauthorized, make sure you created an API v3 key in Brevo (not an SMTP password) and verified your sender email in Brevo Senders & IPs.",
    nextStep: "Trigger a test registration and inspect your email inbox for the 6-digit verification code.",
    shortSummary: "Installs Python HTTP client for sending transactional OTP emails via Brevo."
  },
  {
    id: "cmd-git-init",
    command: "git init",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in your project root folder (NOT inside frontend or backend)",
    whatItDoes: "Initializes a new, empty local Git repository by creating a hidden .git metadata folder in your project root.",
    whyWeUseIt: "Turns your ordinary desktop directory into a version-controlled repository capable of tracking snapshots (commits) and syncing with GitHub.",
    whenToUseIt: "Stage 12 (GitHub Repository Creation), once at the beginning of version control setup.",
    howToUseIt: [
      "Ensure terminal is at the project root folder.",
      "Type git init.",
      "Press Enter."
    ],
    expectedOutput: "Initialized empty Git repository in C:/Projects/my-web-project/.git/ (Example output)",
    ifErrorOccurs: "If you accidentally ran it inside frontend/ or backend/, delete the inner .git folder so you only have one single .git repository at the project root.",
    nextStep: "Create a root .gitignore file to exclude .env and node_modules before staging any files.",
    shortSummary: "Initializes a brand-new Git version control repository in the root directory."
  },
  {
    id: "cmd-git-status",
    command: "git status",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in your project root folder",
    whatItDoes: "Displays the status of the working tree: shows which files are staged for commit, which are modified, and which are untracked.",
    whyWeUseIt: "CRITICAL SECURITY AUDIT: You must check git status before every commit to guarantee that secret .env files, credentials, and bulky node_modules folders are NOT being tracked.",
    whenToUseIt: "Stage 12, Stage 17, and before executing any 'git add' or 'git commit' command.",
    howToUseIt: [
      "Open terminal at project root.",
      "Type git status.",
      "Press Enter.",
      "Carefully scan the output: verify that NO .env file appears in the untracked or staged lists."
    ],
    expectedOutput: "On branch main. Untracked files: .gitignore, backend/, frontend/ (Example output)",
    ifErrorOccurs: "If .env appears in red under 'Untracked files', STOP! Add '.env' to your root .gitignore file immediately and re-run git status.",
    nextStep: "Once verified clean, stage your files using git add .",
    shortSummary: "Audits working tree state to ensure no private secrets or .env files are staged."
  },
  {
    id: "cmd-git-add",
    command: "git add .",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Stages all new, modified, and deleted files in the current folder (except those matched by .gitignore) into Git's staging area.",
    whyWeUseIt: "Prepares your current changes to be permanently recorded together in the next commit snapshot.",
    whenToUseIt: "Stage 12 and Stage 17, right after verifying git status.",
    howToUseIt: [
      "Verify git status shows no .env file.",
      "Type git add .",
      "Press Enter.",
      "Type git status again: all staged files will now display in green under 'Changes to be committed'."
    ],
    expectedOutput: "Command returns silently to prompt. Running git status shows green staged files.",
    ifErrorOccurs: "If CRLF line-ending replacement warnings appear on Windows, this is normal and safe.",
    nextStep: "Commit your staged files using git commit -m 'Your descriptive message'.",
    shortSummary: "Stages all verified project files into Git's preparation index."
  },
  {
    id: "cmd-git-commit",
    command: "git commit -m \"feat: complete initial full-stack release\"",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Takes all currently staged files and records a permanent, timestamped snapshot (commit) in your local Git repository history with your description.",
    whyWeUseIt: "Creates a milestone snapshot in your project. If you make a mistake later, you can review or restore this exact working state.",
    whenToUseIt: "Stage 12 and Stage 17, after staging files with git add.",
    howToUseIt: [
      "Type git commit -m \"your message in quotes\".",
      "Press Enter."
    ],
    expectedOutput: "[main (root-commit) 6e9fd3e] feat: complete initial full-stack release \n 32 files changed, 7548 insertions(+) (Example output)",
    ifErrorOccurs: "If Git displays 'Author identity unknown', configure your identity by running: git config --global user.name \"Your Name\" and git config --global user.email \"you@example.com\".",
    nextStep: "Rename your default branch to main using git branch -M main.",
    shortSummary: "Saves a permanent version snapshot with a descriptive message in your repository history."
  },
  {
    id: "cmd-git-branch",
    command: "git branch -M main",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Renames the current active Git branch to 'main'.",
    whyWeUseIt: "GitHub and modern deployment platforms use 'main' as the standard default production branch name.",
    whenToUseIt: "Stage 12, right after your first commit and before connecting to GitHub.",
    howToUseIt: [
      "Type git branch -M main.",
      "Press Enter."
    ],
    expectedOutput: "Returns to prompt silently without errors.",
    ifErrorOccurs: "If you see 'fatal: not a valid object name', you must create at least one commit first using git commit.",
    nextStep: "Link your remote GitHub repository URL with git remote add origin.",
    shortSummary: "Ensures the default branch is named 'main' matching GitHub conventions."
  },
  {
    id: "cmd-git-remote",
    command: "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Registers your remote GitHub repository web address under the standard alias name 'origin'.",
    whyWeUseIt: "Connects your local machine's Git repository to the cloud repository hosted on GitHub so you can push and pull code.",
    whenToUseIt: "Stage 12, after creating an empty repository on GitHub.com.",
    howToUseIt: [
      "Go to github.com/new and create a repository (leave 'Add README' unchecked).",
      "Copy the HTTPS repository URL from GitHub.",
      "In terminal, type git remote add origin followed by your URL.",
      "Press Enter."
    ],
    expectedOutput: "Returns to prompt silently without output.",
    ifErrorOccurs: "If you see 'error: remote origin already exists', you previously added an origin. Update it with: git remote set-url origin YOUR_NEW_URL.",
    nextStep: "Push your committed files to GitHub using git push -u origin main.",
    shortSummary: "Links your local Git workspace to your remote GitHub repository."
  },
  {
    id: "cmd-git-push",
    command: "git push -u origin main",
    category: "deployment",
    categoryLabel: "Cloud Deployment",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Uploads your local commits on branch 'main' to your remote GitHub repository and configures upstream tracking.",
    whyWeUseIt: "Makes your code accessible to cloud platforms (Render and Vercel) to trigger continuous automated deployments.",
    whenToUseIt: "Stage 12 (initial project push) and Stage 17 (whenever deploying updates).",
    howToUseIt: [
      "Ensure your computer is connected to the internet.",
      "Type git push -u origin main.",
      "Press Enter.",
      "If a browser window opens, sign in and authorize GitHub."
    ],
    expectedOutput: "Enumerating objects: 45, done. \n To https://github.com/user/repo.git \n * [new branch] main -> main \n Branch 'main' set up to track remote branch 'main' from 'origin'. (Example output)",
    ifErrorOccurs: "If push is rejected with 'failed to push some refs', the remote GitHub repo already contains files (e.g. a README created online). Run 'git pull origin main --rebase' then re-run git push.",
    nextStep: "Open Render.com and Vercel.com to import your repository and deploy your live web services.",
    shortSummary: "Uploads your committed code snapshots to GitHub, triggering cloud deployment builds."
  },
  {
    id: "cmd-npm-build",
    command: "npm run build",
    category: "testing",
    categoryLabel: "Testing & Debugging",
    os: "all",
    whereToRun: "Terminal inside frontend/ (or root in Next.js projects)",
    whatItDoes: "Compiles, typechecks, and minifies your React frontend code into optimized static distribution files (HTML/CSS/JS) inside the dist/ folder.",
    whyWeUseIt: "Simulates the exact production build step that Vercel executes in the cloud. Running it locally catches syntax and import errors before deployment.",
    whenToUseIt: "Stage 11 (Local Testing) and Stage 14 (Vercel Deployment Prep).",
    howToUseIt: [
      "Navigate to frontend/.",
      "Type npm run build.",
      "Press Enter.",
      "Ensure build completes with 0 errors."
    ],
    expectedOutput: "vite v5.x.x building for production... \n ✓ 42 modules transformed. \n dist/index.html 0.45 kB \n dist/assets/index-D7h...js 142.10 kB (Example output)",
    ifErrorOccurs: "If build fails, read the terminal output carefully: it will name the exact file and line number with broken syntax, missing imports, or TypeScript mismatches.",
    nextStep: "Once the build passes locally with zero errors, commit and push to GitHub for live Vercel deployment.",
    shortSummary: "Compiles and validates your production frontend build locally before deploying."
  },
  {
    id: "cmd-port-check-win",
    command: "netstat -ano | findstr :8000",
    category: "testing",
    categoryLabel: "Testing & Debugging",
    os: "windows",
    whereToRun: "Windows Command Prompt or PowerShell",
    whatItDoes: "Searches active network sockets for any background process currently listening on port 8000 and displays its Process ID (PID).",
    whyWeUseIt: "Allows you to find and terminate lingering background server processes when you encounter 'Port 8000 is already in use' errors.",
    whenToUseIt: "Stage 6 or Stage 11 when Uvicorn reports port conflicts.",
    howToUseIt: [
      "Open terminal.",
      "Type netstat -ano | findstr :8000.",
      "Press Enter.",
      "Look at the number at the far right of the line (this is the PID, e.g. 14280).",
      "Terminate the process using taskkill /PID <PID_NUMBER> /F."
    ],
    expectedOutput: "TCP 0.0.0.0:8000 0.0.0.0:0 LISTENING 14280 (Example output: rightmost number is the PID)",
    ifErrorOccurs: "If the command returns nothing, port 8000 is completely available and no program is using it.",
    nextStep: "Terminate the process or start your backend server on an alternate port (such as 8001).",
    shortSummary: "Diagnoses port 8000 conflicts on Windows to find occupying process IDs."
  },
  {
    id: "cmd-git-log",
    command: "git log --oneline -5",
    category: "git",
    categoryLabel: "Git & Version Control",
    os: "all",
    whereToRun: "Terminal in project root folder",
    whatItDoes: "Displays the last 5 commits in a concise, single-line format showing their commit hashes and descriptions.",
    whyWeUseIt: "Quickly confirms that your latest feature or bug fix was successfully committed and verifies your recent development timeline.",
    whenToUseIt: "Stage 17 (Maintenance & Updates), before pushing to verify what is being sent to production.",
    howToUseIt: [
      "In project root, type git log --oneline -5.",
      "Press Enter."
    ],
    expectedOutput: "6e9fd3e feat(phase-1): complete branding and navigation \n a1b2c3d feat: add auth and email otp \n e4f5g6h feat: initial fullstack release (Example output)",
    ifErrorOccurs: "If Git says 'fatal: your current branch does not have any commits yet', make your first commit with git commit.",
    nextStep: "Push to GitHub to trigger automated redeployment.",
    shortSummary: "Displays the last 5 commit snapshots in compact single-line format."
  }
];

