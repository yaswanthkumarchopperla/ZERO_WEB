"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AppMode = "teaching" | "project";

interface ModeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<AppMode>("teaching");

  useEffect(() => {
    const saved = localStorage.getItem("zero_web_mode") as AppMode;
    if (saved === "teaching" || saved === "project") {
      setModeState(saved);
    }
  }, []);

  const setMode = (newMode: AppMode) => {
    setModeState(newMode);
    localStorage.setItem("zero_web_mode", newMode);
  };

  const toggleMode = () => {
    const next = mode === "teaching" ? "project" : "teaching";
    setMode(next);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useAppMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useAppMode must be used within a ModeProvider");
  }
  return context;
}

