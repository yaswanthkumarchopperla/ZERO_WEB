"use client";

import React, { useState } from "react";
import { Terminal, Search, Copy, Check, Filter } from "lucide-react";
import { copyToClipboard, cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  command: string;
  category: "env" | "frontend" | "backend" | "git" | "database" | "deployment";
  os: "all" | "windows" | "mac";
  whereToExecute: string;
  description: string;
  expectedOutput: string;
  tips?: string;
}

const ALL_COMMANDS: CommandItem[] = [
  {
    id: "c1",
    command: "node -v",
    category: "env",
    os: "all",
    whereToExecute: "Terminal / Command Prompt",
    description: "Verifies that Node.js runtime is installed and in your system PATH.",
    expectedOutput: "v20.x.x or v22.x.x"
  },
  {
    id: "c2",
    command: "python --version",
    category: "env",
    os: "windows",
    whereToExecute: "Command Prompt / PowerShell",
    description: "Verifies Python 3 is installed. Make sure 'Add python.exe to PATH' was checked.",
    expectedOutput: "Python 3.11.x or Python 3.12.x"
  },
  {
    id: "c3",
    command: "git --version",
    category: "git",
    os: "all",
    whereToExecute: "Terminal",
    description: "Verifies Git CLI is installed for tracking project changes and pushing to GitHub.",
    expectedOutput: "git version 2.x.x"
  },
  {
    id: "c4",
    command: "mkdir frontend backend",
    category: "env",
    os: "all",
    whereToExecute: "Root project folder",
    description: "Creates the two isolated directories for client UI and server API.",
    expectedOutput: "Creates /frontend and /backend folders."
  },
  {
    id: "c5",
    command: "python -m venv venv",
    category: "backend",
    os: "all",
    whereToExecute: "Terminal inside /backend folder",
    description: "Generates an isolated Python virtual environment inside backend/venv.",
    expectedOutput: "venv directory created with isolated python binaries."
  },
  {
    id: "c6",
    command: "venv\\Scripts\\activate",
    category: "backend",
    os: "windows",
    whereToExecute: "Terminal inside /backend folder",
    description: "Activates the virtual environment in Windows Command Prompt or PowerShell.",
    expectedOutput: "(venv) prefix appears at the start of your terminal line."
  },
  {
    id: "c7",
    command: "npm create vite@latest . -- --template react",
    category: "frontend",
    os: "all",
    whereToExecute: "Terminal inside /frontend folder",
    description: "Scaffolds a clean React project powered by Vite in the current folder.",
    expectedOutput: "Scaffolding project in ./... Done."
  },
  {
    id: "c8",
    command: "npm install",
    category: "frontend",
    os: "all",
    whereToExecute: "Terminal inside /frontend folder",
    description: "Downloads and installs all declared dependencies from package.json into node_modules.",
    expectedOutput: "added X packages in Xs"
  },
  {
    id: "c9",
    command: "npm run dev",
    category: "frontend",
    os: "all",
    whereToExecute: "Terminal inside /frontend folder",
    description: "Starts the Vite local development hot-reload server.",
    expectedOutput: "VITE ready in 250ms -> Local: http://localhost:5173/"
  },
  {
    id: "c10",
    command: "pip install fastapi uvicorn pydantic python-dotenv motor bcrypt pyjwt",
    category: "backend",
    os: "all",
    whereToExecute: "Terminal inside /backend (with venv active)",
    description: "Installs complete FastAPI web framework, async MongoDB driver, and bcrypt auth libraries.",
    expectedOutput: "Successfully installed fastapi uvicorn..."
  },
  {
    id: "c11",
    command: "uvicorn app.main:app --reload --port 8000",
    category: "backend",
    os: "all",
    whereToExecute: "Terminal inside /backend (with venv active)",
    description: "Runs the FastAPI backend API server with auto-reload on code save.",
    expectedOutput: "Application startup complete. Uvicorn running on http://127.0.0.1:8000"
  },
  {
    id: "c12",
    command: "pip freeze > requirements.txt",
    category: "backend",
    os: "all",
    whereToExecute: "Terminal inside /backend folder",
    description: "Exports exact installed package versions for Render cloud to install automatically.",
    expectedOutput: "requirements.txt created or updated."
  },
  {
    id: "c13",
    command: "git status",
    category: "git",
    os: "all",
    whereToExecute: "Terminal in project root",
    description: "CRITICAL: Displays staged and unstaged files. Always verify .env is NOT in this list!",
    expectedOutput: "Lists modified files. If .env appears, do NOT commit—update .gitignore first!"
  },
  {
    id: "c14",
    command: "git add . && git commit -m 'Initial fullstack release'",
    category: "git",
    os: "all",
    whereToExecute: "Terminal in project root",
    description: "Stages all project files and creates a permanent version snapshot.",
    expectedOutput: "[main (root-commit) xxxxxxx] Initial fullstack release"
  },
  {
    id: "c15",
    command: "git branch -M main && git push -u origin main",
    category: "git",
    os: "all",
    whereToExecute: "Terminal in project root",
    description: "Pushes your local commit history to your remote GitHub repository on the main branch.",
    expectedOutput: "Branch 'main' set up to track remote branch 'main' from 'origin'."
  }
];

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (cmd: string, id: string) => {
    const ok = await copyToClipboard(cmd);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filtered = ALL_COMMANDS.filter((c) => {
    const matchesSearch = 
      c.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.whereToExecute.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === "all" || c.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <Terminal className="w-3.5 h-3.5" />
            <span>Searchable Terminal Reference</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Command Library
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Never guess what to type into your terminal. Every command specifies the exact folder to run it in, the operating system, and the expected output to verify success.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 rounded-2xl bg-navy-900/90 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search commands, tools, or expected outputs..."
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-electric-blue font-mono"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {[
                { id: "all", label: "All" },
                { id: "env", label: "Environment" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "git", label: "Git & GitHub" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={cn(
                    "px-3 py-1 rounded-lg text-xs font-medium transition-colors",
                    selectedCat === cat.id
                      ? "bg-electric-blue text-white font-semibold"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Commands List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-navy-900/60 border border-white/5 text-slate-400">
              No commands matched your search. Try "git", "npm", or "uvicorn".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-navy-900/80 border border-white/10 hover:border-white/20 p-5 space-y-3 font-mono text-xs transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-electric-blue/15 text-electric-blue border border-electric-blue/20">
                      {item.category}
                    </span>
                    <span className="text-slate-400 text-[11px] font-sans">
                      Run inside: <strong className="text-white font-mono">{item.whereToExecute}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.command, item.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-200 text-xs transition-colors font-sans"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Command</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/5 text-emerald-400 text-xs overflow-x-auto select-all">
                  $ {item.command}
                </div>

                <div className="text-slate-300 font-sans text-xs">
                  {item.description}
                </div>

                <div className="text-[11px] text-slate-400 pt-2 border-t border-white/5 font-sans">
                  <span className="text-sky-400 font-semibold">Expected Output: </span>
                  <span className="font-mono text-slate-300">{item.expectedOutput}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

