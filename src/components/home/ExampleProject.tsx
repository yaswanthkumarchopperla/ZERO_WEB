import React from "react";
import Link from "next/link";
import { 
  Flame, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Globe,
  Terminal
} from "lucide-react";

export function ExampleProject() {
  return (
    <section className="py-20 bg-navy-950/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-semibold text-amber-400">
            <Flame className="w-3.5 h-3.5" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See the Complete Journey in Action
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow how a college student with zero coding knowledge built and deployed <strong>Aura Candles</strong> to the internet in 17 stages.
          </p>
        </div>

        {/* Project Card */}
        <div className="mt-12 rounded-3xl bg-navy-900/90 border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Story & Architecture */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Aura Candles</h3>
                    <p className="text-xs text-slate-400 font-medium">
                      Artisanal Soy Candle Boutique & Scent Customizer
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  A real-world full-stack web application featuring product catalog filtering, interactive candle fragrance builder, real email OTP registration via Brevo, and order storage in MongoDB Atlas.
                </p>

                {/* Milestones Achieved */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Frontend:</strong> React 18 + Vite on Vercel Edge (`aura-candles.vercel.app`)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Backend:</strong> Python FastAPI on Render (`aura-api.onrender.com`)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Database:</strong> MongoDB Atlas Cloud with 3 collections (users, orders, scents)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Security:</strong> Bcrypt password hashing + Brevo transactional email OTP</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/journey"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-xs shadow-md shadow-orange-500/20 hover:scale-105 transition-transform"
                >
                  <span>Build This Project in Stage 1</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-slate-400">
                  Total build time: ~4.5 hours with Google Antigravity
                </span>
              </div>
            </div>

            {/* Right Column: Visual Architecture Preview */}
            <div className="lg:col-span-5 bg-navy-950/80 p-8 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center font-mono text-xs space-y-4">
              <div className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                Production Topology
              </div>

              {/* Topology Nodes */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-navy-900 border border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-electric-blue" />
                    <span className="text-white font-semibold">Vercel Edge</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    200 OK HTTPS
                  </span>
                </div>

                <div className="text-center text-slate-500 text-[10px]">
                  &darr; API Requests via Axios (CORS Authorized)
                </div>

                <div className="p-3 rounded-xl bg-navy-900 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-electric-violet" />
                    <span className="text-white font-semibold">Render Web Service</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    FastAPI Active
                  </span>
                </div>

                <div className="text-center text-slate-500 text-[10px]">
                  &darr; Encrypted TLS Handshake
                </div>

                <div className="p-3 rounded-xl bg-navy-900 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-semibold">MongoDB Atlas M0</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Network: Active
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-navy-900/60 border border-white/5 text-[11px] text-slate-400 leading-normal">
                All environment variables (`MONGODB_URI`, `JWT_SECRET`) injected securely at cloud runtime—zero exposed keys.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

