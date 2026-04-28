"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Toggle Language"
    >
      <Globe className="w-4 h-4 text-accent" />
      <span className="font-semibold text-sm uppercase tracking-wider text-foreground">
        {language}
      </span>
    </button>
  );
}