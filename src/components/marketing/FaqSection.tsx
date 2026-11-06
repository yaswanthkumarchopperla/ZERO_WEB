"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do I need any previous programming or command-line experience?",
    answer: "Absolutely not. Zero-Web is designed from the ground up for absolute beginners. We explain every term the first time it appears, using everyday analogies (like comparing clients and servers to restaurant dining rooms and kitchens). You start from opening a browser and end with a live URL.",
  },
  {
    question: "Why does Zero-Web teach Google Antigravity instead of VS Code?",
    answer: "Google Antigravity is a modern agentic AI development environment designed for real-world software creation. Traditional editors leave beginners stuck on syntax errors, missing brackets, and cryptic terminal stack traces. With Google Antigravity, beginners learn to pair-program with AI, review code diffs, run terminal tasks with guidance, and understand system architecture rapidly.",
  },
  {
    question: "How is Zero-Web different from W3Schools or Codecademy?",
    answer: "W3Schools teaches isolated language syntax and single functions in a vacuum. Zero-Web teaches the unbroken 12-step product journey: how an idea becomes a wireframe, how a GitHub repository is initialized, how frontend communicates with backend APIs, how PostgreSQL stores data, and how code on your laptop gets published live on the global internet with a custom domain and SSL.",
  },
  {
    question: "Does the platform cost anything, or are paid tools required?",
    answer: "The curriculum and all core learning tracks are free. All tools taught across the curriculum (Google Antigravity, Next.js, Node.js, PostgreSQL via Supabase/Neon, GitHub, and Vercel) have generous, production-ready free tiers suitable for student projects and portfolio building.",
  },
  {
    question: "How does the AI Teacher work, and why does it support Telugu?",
    answer: "The AI Teacher is powered by the Google Gemini API running securely on the server. In addition to answering technical questions and explaining code line by line, it can translate complex software concepts into Telugu using regional analogies. You can also upload screenshots of confusing terminal or browser errors for an instant, step-by-step diagnostic fix.",
  },
  {
    question: "Will I actually launch a live website that anyone on the internet can visit?",
    answer: "Yes! By Module 10 and in our flagship Capstone project (Module 18), you deploy your full-stack application to production cloud infrastructure (Vercel and Railway) and connect custom domains with Let's Encrypt SSL certificates. Anyone in the world will be able to visit your site on their phone or laptop.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // First open by default

  return (
    <section className="py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Have questions about getting started? Here are the most common questions from new learners.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-500" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-white/5">
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
