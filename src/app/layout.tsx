import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Zero-Web | From Zero Knowledge to Your First Live Website",
  description:
    "Learn how to create real websites step by step. From your first GitHub repository to deploying your website online with Google Antigravity, we'll guide you through everything.",
  keywords: [
    "web development",
    "learn to code",
    "google antigravity",
    "full-stack tutorial",
    "react",
    "next.js",
    "postgresql",
    "beginner web dev",
    "deploy website",
  ],
  authors: [{ name: "Zero-Web Team" }],
  openGraph: {
    title: "Zero-Web | Learn It. Build It. Launch It.",
    description: "From Zero Knowledge to Your First Live Website.",
    url: "https://zero-web.dev",
    siteName: "Zero-Web",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
