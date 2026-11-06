"use client";

import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Lock, Mail, ShieldCheck, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xl">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 text-indigo-100" />
            </div>
          </Link>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Welcome to Zero-Web
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Sign in to track your course progress and project lab submissions.
          </p>
        </div>

        {/* Phase Info Notice */}
        <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-xs text-indigo-800 dark:text-indigo-300 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Phase 2 Public Portal:</strong> Secure database authentication with bcrypt and Auth.js v5 is coming in Phase 3. You can explore all 19 curriculum modules right now without an account!
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {submitted && (
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                Backend authentication database is being wired up in Phase 3. Meanwhile, jump into the free curriculum!
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            Sign In to Dashboard
          </button>
        </form>

        {/* Footer links */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/5 text-center text-xs text-slate-600 dark:text-slate-400 space-y-2">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Create an account
            </Link>
          </p>
          <p>
            <Link href="/learn" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
              ← Return to Free Curriculum
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

