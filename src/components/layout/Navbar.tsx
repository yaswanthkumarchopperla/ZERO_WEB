"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Rocket, 
  Terminal, 
  Sparkles, 
  Wrench, 
  Layers, 
  BookOpen, 
  Cpu, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAppMode } from "@/lib/mode-context";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Journey", href: "/journey", icon: Rocket, badge: "17 Stages" },
  { name: "Commands", href: "/commands", icon: Terminal },
  { name: "AI Prompts", href: "/prompts", icon: Sparkles },
  { name: "Troubleshoot", href: "/troubleshooting", icon: Wrench },
  { name: "Architecture", href: "/architecture", icon: Layers },
  { name: "Tech Map", href: "/tech-map", icon: Cpu },
  { name: "Dashboard", href: "/dashboard", icon: BookOpen },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, toggleMode } = useAppMode();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 dark:border-white/10 border-slate-200/80 bg-navy-950/80 dark:bg-navy-950/80 bg-white/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue via-electric-indigo to-electric-violet flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <span className="font-mono font-extrabold text-white text-lg tracking-tighter">0_W</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 dark:from-white dark:via-slate-100 dark:to-slate-300 from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    ZERO_WEB
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-electric-violet/20 border border-electric-violet/30 text-electric-violet dark:text-purple-300">
                    LIVE
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 text-slate-500 font-medium tracking-wide hidden sm:inline-block">
                  From Zero Knowledge to Website Live
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150",
                    isActive
                      ? "bg-electric-blue/15 text-electric-blue dark:text-electric-blue border border-electric-blue/30 font-semibold"
                      : "text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white dark:hover:text-white hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-electric-blue/20 text-electric-blue font-mono font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Mode Toggle, Theme Toggle, CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Mode Switcher Pill */}
            <button
              onClick={toggleMode}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-white/10 dark:border-white/10 border-slate-300 bg-navy-850/60 hover:bg-navy-800 dark:bg-navy-850/60 dark:hover:bg-navy-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Toggle between Teaching Mode (slow with concepts) and Project Mode (direct steps)"
            >
              <span className={cn(
                "w-2 h-2 rounded-full animate-pulse",
                mode === "teaching" ? "bg-emerald-400" : "bg-amber-400"
              )} />
              <span className="text-[11px] font-medium text-slate-300 dark:text-slate-300 text-slate-700">
                {mode === "teaching" ? "Teaching Mode" : "Project Mode"}
              </span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Start CTA */}
            <Link
              href="/journey"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-electric-blue to-electric-indigo text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 dark:text-slate-300 text-slate-600 hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 dark:border-white/10 border-slate-200 bg-navy-950/95 dark:bg-navy-950/95 bg-white/95 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 dark:border-white/10 border-slate-200">
            <div className="flex items-center gap-2">
              <span className={cn(
                "w-2.5 h-2.5 rounded-full animate-pulse",
                mode === "teaching" ? "bg-emerald-400" : "bg-amber-400"
              )} />
              <span className="text-xs font-semibold text-slate-300 dark:text-slate-300 text-slate-700">
                Current: {mode === "teaching" ? "Teaching Mode" : "Project Mode"}
              </span>
            </div>
            <button
              onClick={toggleMode}
              className="text-xs px-2 py-0.5 rounded bg-white/10 dark:bg-white/10 bg-slate-200 text-slate-300 dark:text-slate-300 text-slate-700 font-medium"
            >
              Switch Mode
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-electric-blue/15 text-electric-blue border border-electric-blue/30 font-semibold"
                      : "text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-electric-blue/20 text-electric-blue font-mono">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/journey"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-electric-blue to-electric-indigo text-white font-semibold text-sm shadow-lg shadow-blue-500/25"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

