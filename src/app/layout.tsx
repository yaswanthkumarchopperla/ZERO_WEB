import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeProvider } from "@/lib/mode-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ZERO_WEB — From Zero Knowledge to Website Live",
  description: "The complete interactive learning platform and website creation journey for non-programmers. Build, connect, and deploy real websites step by step with Google Antigravity, ChatGPT, Vercel, and Render.",
  keywords: ["web development", "beginner website tutorial", "deploy fullstack", "google antigravity", "chatgpt coding", "fastapi react", "render vercel deployment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-navy-950 text-slate-100 antialiased bg-grid-pattern selection:bg-electric-blue/30 selection:text-white flex flex-col justify-between">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ModeProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

