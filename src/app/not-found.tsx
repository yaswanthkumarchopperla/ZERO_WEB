import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
        <AlertCircle className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">404 — Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          The requested page could not be found. Head back to the homepage or jump directly into the 17-stage creation journey.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 pt-2">
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-850 hover:bg-navy-800 border border-white/10 text-white text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/journey"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-electric-blue hover:bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
        >
          <Rocket className="w-4 h-4" />
          <span>Open Journey</span>
        </Link>
      </div>
    </div>
  );
}

