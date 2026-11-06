"use client";

import * as React from "react";
import { 
  Bot, 
  Sparkles, 
  Send, 
  Languages, 
  Image as ImageIcon, 
  Terminal, 
  Copy, 
  Check, 
  RotateCcw,
  BookOpen
} from "lucide-react";

interface ChatMsg {
  id: string;
  sender: "user" | "ai";
  text: string;
  code?: string;
  lang?: string;
  isTelugu?: boolean;
}

const INITIAL_MESSAGES: ChatMsg[] = [
  {
    id: "1",
    sender: "ai",
    text: "Hello! I am your Zero-Web AI Teacher, powered by Google Gemini. I'm here to explain web concepts simply, help you debug errors step by step, and guide your journey from your first line of code to a live website.\n\nYou can ask me in English or తెలుగు (Telugu), or upload a screenshot of an error!",
  },
];

const SUGGESTED_QUESTIONS = [
  "Explain client vs server using the restaurant analogy",
  "Why do we store prices in integer paise instead of floats?",
  "Explain what the N+1 query problem is with an example",
  "How does Google Antigravity differ from traditional text editors?",
  "తెలుగులో వివరించండి: వెబ్‌సైట్ రిక్వెస్ట్ ఎలా ప్రయాణిస్తుంది?",
];

export default function AITeacherPage() {
  const [messages, setMessages] = React.useState<ChatMsg[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = React.useState<"en" | "te">("en");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMsg = {
      id: Date.now().toString(),
      sender: "user",
      text,
      isTelugu: selectedLanguage === "te",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate Socratic pedagogical AI response based on curriculum concepts
    setTimeout(() => {
      let aiReply: ChatMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "",
      };

      if (text.includes("restaurant") || text.includes("client vs server")) {
        aiReply.text = "Think of a website like dining at a restaurant:\n\n1. **The Client (Browser):** This is the dining room where customers sit, browse the menu, and place orders. It shows the HTML structure, CSS styling, and handles button clicks.\n\n2. **The Server (Backend):** This is the kitchen behind the counter. Chefs receive the orders, verify recipes, check the pantry (database), and cook the meal.\n\n💡 **The Golden Rule from Module 1:** Customers never walk into the kitchen, but nothing reaches the table without it. Prices and permissions are always verified by the server!";
      } else if (text.includes("paise") || text.includes("integer")) {
        aiReply.text = "In computer science, floating-point numbers (like `450.50`) cannot always be represented with 100% precision in binary arithmetic (e.g., `0.1 + 0.2 === 0.30000000000000004`).\n\nTo prevent silent financial rounding bugs where a customer is charged 1 cent too much or too little, we store monetary amounts as **integers in the smallest currency unit** (e.g., 45000 paise for ₹450, or 45000 cents for $450).";
        aiReply.code = "-- Module 6: PostgreSQL Table Definition\nCREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  price_paise INTEGER NOT NULL CHECK (price_paise > 0),\n  stock INTEGER NOT NULL DEFAULT 0\n);";
      } else if (text.includes("తెలుగు") || selectedLanguage === "te") {
        aiReply.text = "నమస్కారం! వెబ్‌సైట్ రిక్వెస్ట్ ఎలా ప్రయాణిస్తుందో సులభంగా చూద్దాం:\n\n1. **URL టైప్ చేయడం:** మీరు బ్రౌజర్‌లో అడ్రస్ టైప్ చేసి Enter కొట్టగానే, బ్రౌజర్ డొమైన్ పేరును గుర్తిస్తుంది.\n2. **DNS శోధన (Phonebook):** కంప్యూటర్‌లకు పేర్లు తెలియవు, కేవలం IP అడ్రస్‌లు మాత్రమే తెలుసు. DNS ఫోన్‌బుక్ లాగా పేరును IP నంబర్‌గా మారుస్తుంది.\n3. **సర్వర్‌తో కనెక్ట్:** బ్రౌజర్ సర్వర్‌తో HTTPS కనెక్షన్ ద్వారా మాట్లాడి 'నాకు పేజీ కావాలి' అని అడుగుతుంది.\n4. **సర్వర్ స్పందన:** సర్వర్ డేటాబేస్ నుండి డేటాను తీసుకొని HTML, CSS మరియు JavaScript రూపంలో వెనక్కి పంపుతుంది.\n5. **పేజీ డిస్‌ప్లే:** బ్రౌజర్ ఆ కోడ్‌ను చదివి మీ స్క్రీన్‌పై రంగురంగుల వెబ్‌పేజీగా చూపిస్తుంది!";
        aiReply.isTelugu = true;
      } else if (text.includes("N+1") || text.includes("query")) {
        aiReply.text = "The **N+1 query problem** happens when you fetch a list of items and then execute a separate database query for each item inside a loop.\n\nFor example, if you fetch 50 orders, and then loop through them to fetch each customer, your backend makes **1 + 50 = 51 database queries**! This slows down page response times significantly.\n\n**The Solution:** Use an eager SQL `JOIN` or Prisma `include` to fetch orders and customers in a single database roundtrip.";
        aiReply.code = "// Prisma ORM Solution (Module 13):\nconst orders = await prisma.order.findMany({\n  include: { user: true, items: true }\n}); // Done in 1 efficient query!";
      } else {
        aiReply.text = `That's a thoughtful question about ${text}! In full-stack web engineering, we always trace how the client, server, and database interact.\n\nWhat specifically would you like to explore? We can look at the code demonstration, walk through common errors, or write a practice task together!`;
      }

      setMessages((prev) => [...prev, aiReply]);
    }, 600);
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Bilingual Google Gemini Assistant
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Zero-Web AI Teacher
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Your personal full-stack tutor. Ask questions about any module, get line-by-line code explanations, 
            or switch to Telugu for intuitive regional analogies.
          </p>
        </div>

        {/* Chat Container */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col h-[680px]">
          
          {/* Top Chat Bar */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Zero-Web Pedagogical AI
                </h3>
                <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Active · Powered by Google Gemini
                </span>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setSelectedLanguage("en")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedLanguage === "en"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setSelectedLanguage("te")}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                  selectedLanguage === "te"
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                తెలుగు
              </button>
            </div>
          </div>

          {/* Chat Messages Thread */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white flex-shrink-0 text-xs shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`rounded-2xl px-5 py-4 text-sm leading-relaxed max-w-2xl space-y-3 ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white rounded-tr-sm shadow-sm"
                      : "bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-white/5 text-slate-800 dark:text-slate-200 rounded-tl-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Code block if present */}
                  {msg.code && (
                    <div className="rounded-xl bg-slate-950 border border-white/10 p-4 font-mono text-xs text-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-1.5">
                        <span className="text-[10px] uppercase">Example Snippet</span>
                        <button
                          onClick={() => copyToClipboard(msg.id, msg.code!)}
                          className="flex items-center gap-1 text-[11px] hover:text-white text-indigo-400"
                        >
                          {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedId === msg.id ? "Copied" : "Copy"}
                        </button>
                      </div>
                      <pre className="overflow-x-auto text-emerald-400">{msg.code}</pre>
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 font-bold text-xs flex-shrink-0">
                    You
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Prompts Bar */}
          <div className="px-6 py-2.5 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
              Suggestions:
            </span>
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="px-3 py-1 rounded-full text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400 whitespace-nowrap transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
            <button
              title="Attach Error Screenshot for AI Diagnosis"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
            </button>

            <input
              type="text"
              placeholder={
                selectedLanguage === "te"
                  ? "మీ సందేహాన్ని ఇక్కడ అడగండి..."
                  : "Ask a question about web dev, code, or terminal errors..."
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
