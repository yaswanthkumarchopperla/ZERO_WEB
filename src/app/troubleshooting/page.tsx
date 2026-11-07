"use client";

import React, { useState } from "react";
import { Wrench, Search, AlertTriangle, CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorGuide {
  id: string;
  errorName: string;
  category: "environment" | "backend" | "frontend" | "database" | "git" | "deployment" | "services";
  whatItMeans: string;
  whyItHappens: string;
  howToDiagnose: string;
  stepByStepFix: string[];
  howToVerify: string;
}

const ERROR_GUIDES: ErrorGuide[] = [
  {
    id: "err-1",
    errorName: "'npm' or 'node' is not recognized as an internal or external command",
    category: "environment",
    whatItMeans: "Your operating system's command processor checked all directories in your system PATH variable and could not find node.exe or npm.cmd.",
    whyItHappens: "Node.js was installed without updating PATH, or you installed Node.js while your terminal was already open.",
    howToDiagnose: "Open PowerShell or Command Prompt and type `where node`. If it returns 'INFO: Could not find files for the given pattern(s)', PATH is missing it.",
    stepByStepFix: [
      "Completely close all terminal and Google Antigravity windows.",
      "Re-open your terminal and try `node -v` again.",
      "If it still fails, re-download the Node.js LTS installer from nodejs.org.",
      "Run the installer, choose 'Modify', and ensure 'Add to PATH' is checked.",
      "Finish setup and restart your computer if required."
    ],
    howToVerify: "Running `node -v` and `npm -v` in a new terminal displays version numbers (e.g., v20.18.0 and 10.8.2)."
  },
  {
    id: "err-2",
    errorName: "Port 8000 or Port 5173 is already in use",
    category: "backend",
    whatItMeans: "Another process on your computer is already listening for network packets on that specific port number.",
    whyItHappens: "You previously ran `uvicorn` or `npm run dev` and closed the window without terminating the server with Ctrl + C.",
    howToDiagnose: "In Windows terminal run: `netstat -ano | findstr :8000`. If rows appear, the port is occupied.",
    stepByStepFix: [
      "In Windows PowerShell run: `Get-Process -Id (Get-NetTCPConnection -LocalPort 8000).OwningProcess | Stop-Process -Force`.",
      "Alternatively, run your server on a different port: `uvicorn app.main:app --reload --port 8001`.",
      "Remember to update your frontend `VITE_API_URL` to match the new port."
    ],
    howToVerify: "Run `uvicorn app.main:app --reload --port 8000` and confirm it boots with 'Uvicorn running on http://127.0.0.1:8000'."
  },
  {
    id: "err-3",
    errorName: "Access to fetch at 'http://localhost:8000' has been blocked by CORS policy",
    category: "frontend",
    whatItMeans: "Cross-Origin Resource Sharing security check failed. The browser blocked your React app (port 5173) from reading the response from FastAPI (port 8000).",
    whyItHappens: "The backend server did not send the `Access-Control-Allow-Origin: http://localhost:5173` HTTP header with the response.",
    howToDiagnose: "Open Chrome DevTools (F12) -> Console. Red CORS error appears showing the missing origin header.",
    stepByStepFix: [
      "Open `backend/app/main.py`.",
      "Import `from fastapi.middleware.cors import CORSMiddleware`.",
      "Add `app.add_middleware(CORSMiddleware, allow_origins=['http://localhost:5173', 'http://127.0.0.1:5173'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])`.",
      "CRITICAL: Ensure `app.add_middleware()` is placed BEFORE any `app.include_router()` calls!"
    ],
    howToVerify: "Refresh the React frontend and submit an API request. Inspect Network tab in DevTools: HTTP status is 200 with no red CORS errors."
  },
  {
    id: "err-4",
    errorName: "MongoDB Atlas: AuthenticationFailed: bad auth / authentication failed",
    category: "database",
    whatItMeans: "The username or password supplied in your `MONGODB_URI` string was rejected by MongoDB Atlas security.",
    whyItHappens: "You copied the connection template without replacing `<password>`, or your password contains special characters (like `@`, `#`, `!`) that were not URL-encoded.",
    howToDiagnose: "Inspect `backend/.env`. Does `MONGODB_URI` contain `<password>` or literal unescaped characters?",
    stepByStepFix: [
      "Open MongoDB Atlas in your browser -> Security -> Database Access.",
      "Click 'Edit' on your database user and click 'Autogenerate Secure Password'.",
      "Copy the password into Notepad.",
      "If the password contains `@`, replace it with `%40`. If it contains `#`, replace with `%23`.",
      "Update `MONGODB_URI` in `backend/.env`.",
      "Restart the backend server."
    ],
    howToVerify: "Start backend and check logs: 'Connected to MongoDB Atlas successfully!'."
  },
  {
    id: "err-5",
    errorName: "MongoDB Atlas: ServerSelectionTimeoutError",
    category: "database",
    whatItMeans: "The backend tried to reach the Atlas cluster for 30 seconds but received zero network response.",
    whyItHappens: "The IP address of your computer (or Render cloud server) is not in the MongoDB Atlas Network Access allowlist.",
    howToDiagnose: "Check MongoDB Atlas -> Security -> Network Access. If status is inactive or missing your IP, it will timeout.",
    stepByStepFix: [
      "Open cloud.mongodb.com -> Select your project.",
      "Go to Security -> Network Access.",
      "Click 'Add IP Address'.",
      "Click 'Allow Access from Anywhere (0.0.0.0/0)' for development.",
      "Click 'Confirm' and wait 60 seconds until status becomes 'Active'."
    ],
    howToVerify: "Re-run the backend server; connection succeeds within 1 second."
  },
  {
    id: "err-6",
    errorName: "Vercel: 404 NOT_FOUND when refreshing subpages (e.g. /dashboard)",
    category: "deployment",
    whatItMeans: "Vercel's edge web server tried to find a physical HTML file at `/dashboard/index.html` on the server filesystem and could not find one.",
    whyItHappens: "React and Vite are Single Page Applications (SPAs). All routing happens in the browser via JavaScript, so all URL paths must be routed to `/index.html`.",
    howToDiagnose: "Directly visit your deployed site URL + `/dashboard` and press Enter. If you see Vercel's black 404 page, SPA rewrites are missing.",
    stepByStepFix: [
      "Create a file named `vercel.json` inside your `frontend/` folder.",
      "Paste the rewrite rule: `{\"rewrites\": [{\"source\": \"/(.*)\", \"destination\": \"/index.html\"}]}`.",
      "Stage, commit, and push: `git add frontend/vercel.json && git commit -m 'fix: add vercel spa rewrite' && git push`.",
      "Wait 45 seconds for Vercel to redeploy."
    ],
    howToVerify: "Visit `https://YOUR-APP.vercel.app/dashboard` and refresh the page. The application renders smoothly without 404."
  },
  {
    id: "err-7",
    errorName: "Render: Application failed to bind to $PORT / Build failed",
    category: "deployment",
    whatItMeans: "Render expects web applications to listen on the dynamic port number assigned in the `$PORT` environment variable. If the application hardcodes port 8000 or crashes during startup, Render terminates the container.",
    whyItHappens: "The start command used `--port 8000` instead of `--port $PORT`, or a required package was omitted from `requirements.txt`.",
    howToDiagnose: "Go to Render Dashboard -> Web Service -> Logs. Look for 'Port binding failed' or 'ModuleNotFoundError'.",
    stepByStepFix: [
      "Go to Render -> Web Service -> Settings.",
      "Verify Start Command is: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.",
      "Locally inside backend folder run `pip freeze > requirements.txt`.",
      "Commit and push `requirements.txt` to GitHub.",
      "In Render, click 'Manual Deploy' -> 'Clear build cache & deploy'."
    ],
    howToVerify: "Render deployment log outputs: '==> Your service is live 🎉'."
  },
  {
    id: "err-8",
    errorName: "Brevo: 401 Unauthorized / OTP Email Not Delivered",
    category: "services",
    whatItMeans: "Brevo rejected your transactional email request because the API key is incorrect or the sender email has not been validated.",
    whyItHappens: "Using an unverified sender address in Brevo, or copying an SMTP key instead of an API v3 key.",
    howToDiagnose: "Check backend terminal logs for Brevo response. Look for `{'code': 'unauthorized', 'message': 'Key not found'}`.",
    stepByStepFix: [
      "Log in to brevo.com -> Senders & IPs -> Senders.",
      "Confirm your sender email address has a green 'Verified' badge.",
      "Go to SMTP & API -> API Keys -> Generate a new v3 API key.",
      "Update `BREVO_API_KEY` and `BREVO_SENDER_EMAIL` in `backend/.env`.",
      "Restart backend and submit a new registration."
    ],
    howToVerify: "Check your test email inbox; 6-digit OTP email arrives within 5 seconds."
  }
];

export default function TroubleshootingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("err-1");

  const filtered = ERROR_GUIDES.filter((err) =>
    err.errorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    err.whatItMeans.toLowerCase().includes(searchTerm.toLowerCase()) ||
    err.whyItHappens.toLowerCase().includes(searchTerm.toLowerCase()) ||
    err.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Beginner Troubleshooting Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diagnose & Fix Common Developer Errors
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Getting an error is a normal part of building software. Every error in our database includes the exact 5-part anatomy: what it means, why it happens, how to diagnose it, the step-by-step fix, and how to verify it worked.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search error messages (e.g. CORS, MongoDB, Vercel 404, npm)..."
            className="w-full pl-10 pr-4 py-3 text-xs rounded-xl bg-navy-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 font-mono"
          />
        </div>

        {/* Error Cards Accordion */}
        <div className="space-y-4">
          {filtered.map((err) => {
            const isExpanded = expandedId === err.id;
            return (
              <div
                key={err.id}
                className="rounded-2xl bg-navy-900/80 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : err.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        {err.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{err.errorName}</span>
                    </h3>
                  </div>

                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 mt-1",
                      isExpanded ? "rotate-180" : "rotate-0"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-6 text-xs text-slate-300">
                    
                    {/* 1. What It Means & 2. Why It Happens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                        <div className="font-bold text-slate-200">1. What This Error Means</div>
                        <p className="leading-relaxed text-slate-300">{err.whatItMeans}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                        <div className="font-bold text-amber-300">2. Why It May Happen</div>
                        <p className="leading-relaxed text-slate-300">{err.whyItHappens}</p>
                      </div>
                    </div>

                    {/* 3. How to Diagnose It */}
                    <div className="p-4 rounded-xl bg-navy-950/70 border border-white/5 space-y-1">
                      <div className="font-bold text-sky-400">3. How to Diagnose It</div>
                      <p className="leading-relaxed text-slate-300 font-mono text-[11px]">{err.howToDiagnose}</p>
                    </div>

                    {/* 4. Step-by-Step Fix */}
                    <div className="space-y-2">
                      <div className="font-bold text-white text-sm">4. Step-by-Step Fix</div>
                      <ol className="space-y-2 list-decimal list-inside pl-1 text-slate-300">
                        {err.stepByStepFix.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">
                            <span className="font-mono text-slate-200">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* 5. How to Verify */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>5. How to Verify the Fix Worked: </strong>
                        <span>{err.howToVerify}</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

