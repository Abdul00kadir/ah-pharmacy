"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Determine initial theme
    const saved = localStorage.getItem("ah_theme");
    if (saved) {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = systemDark ? "dark" : "light";
      setTheme(initial);
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("ah_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!theme) {
    return (
      <div className="w-9 h-9 rounded-full bg-emerald-100/50 dark:bg-emerald-950/50 border border-emerald-200/50 dark:border-emerald-800/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle light/dark theme"
      className="relative p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-all duration-300 shadow-sm group focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-amber-400 transform group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-emerald-700 transform group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
