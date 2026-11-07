"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Do I really need zero programming experience to build a live website?",
    answer: "Yes, absolutely. ZERO_WEB was engineered specifically for people who have never written a line of code. We explain what technical terms mean when they first appear, provide the exact commands to paste into your terminal, tell you what screen output to look for, and use Google Antigravity and ChatGPT to generate and refine your application code."
  },
  {
    question: "Why do we use both ChatGPT and Google Antigravity together?",
    answer: "They serve complementary roles in modern software engineering. ChatGPT acts as your System Architect: it helps brainstorm features, structure user requirements, and draft specialized instructions. Google Antigravity acts as your Autonomous Developer: it reads your repository, creates multi-file frontend and backend code, runs build commands, and resolves errors right inside your workspace."
  },
  {
    question: "Will this cost me money for servers, databases, or domains?",
    answer: "No. Everything taught in ZERO_WEB utilizes generous, permanent free developer tiers: MongoDB Atlas provides a free 512MB cloud cluster (M0), Render provides free web services for backend APIs, Vercel provides free global edge hosting with automated SSL certificates, and Brevo provides 300 free transactional emails every day. You can launch your website for $0."
  },
  {
    question: "How do I keep my database password and API keys safe from hackers?",
    answer: "We strictly teach the industry-standard environment variable workflow. Your secrets (database password, JWT secret, Brevo API key, Gemini key) are stored solely in a backend `.env` file that is permanently ignored by Git using `.gitignore`. In production, these secrets are entered into Render's encrypted settings vault. They are never sent to visitors' browsers or published on GitHub."
  },
  {
    question: "What happens if my deployment crashes on Render or Vercel?",
    answer: "Our Troubleshooting Center and Stage 13/14 guides provide diagnosis workflows for all common cloud deployment failures—including missing dependencies in `requirements.txt`, unhandled promises, dynamic `$PORT` binding issues, and SPA routing 404s. You can paste the build log directly into Google Antigravity to receive an instant fix."
  },
  {
    question: "Can I build my own custom idea instead of the example project?",
    answer: "Yes! While we showcase a complete Candle Shop e-commerce project as a reference case study, the 17-stage journey is completely idea-agnostic. In Stage 1, you can define any concept—a college event portal, a doctor appointment system, a portfolio, or a local service directory—and use our prompt generators to build your unique vision."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/15 border border-electric-blue/30 text-xs font-semibold text-electric-blue">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Everything you need to know before taking your first step from zero knowledge to a live URL.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-navy-900/80 border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-electric-blue shrink-0 transition-transform duration-200",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

