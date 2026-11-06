import { Star, CheckCircle, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  projectShipped: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Computer Science Undergraduate (2nd Year)",
    quote: "I tried tutorial videos for months but was terrified of Git and deployment. Zero-Web's step-by-step approach and Google Antigravity gave me the confidence to build and deploy a live candle shop with real Stripe test checkout. It helped me land my first software internship!",
    projectShipped: "Live E-Commerce Website (Vercel + Postgres)",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "Non-Technical Founder / Indie Builder",
    quote: "I had an MVP idea for my family's bakery. The explanation of client-server and the Telugu analogies in the AI Teacher made everything click. In two weekends, I had my customer ordering website live with a custom domain.",
    projectShipped: "Online Bakery Ordering System",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Self-Taught Career Switcher",
    quote: "Most platforms leave you hanging on localhost. Zero-Web taught me DNS records, Let's Encrypt SSL, and Prisma transactions. The difference between knowing syntax and shipping a live URL to clients is night and day.",
    projectShipped: "Client Booking & Portfolio SaaS",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-obsidian-950/40 border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            Real Student Outcomes
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
            From Zero Knowledge to Live Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            See how students, career changers, and creators built real projects with Zero-Web and Google Antigravity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 p-8 flex flex-col justify-between shadow-sm hover:shadow-card-hover transition-all"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900/40">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {t.projectShipped}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
