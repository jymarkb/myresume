"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const order = ["system", "light", "dark"] as const;

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="theme"
        className="border border-border bg-card/50 rounded-md h-9 w-9 flex items-center justify-center"
      />
    );
  }

  const current = (theme ?? "system") as (typeof order)[number];
  const next = order[(order.indexOf(current) + 1) % order.length];

  const Icon =
    current === "light" ? Sun : current === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={`switch to ${next} theme`}
      title={`Theme: ${current} (click for ${next})`}
      className="border border-border bg-card/50 rounded-md h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-primaryTheme hover:border-primaryTheme/60 transition-colors"
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
    </button>
  );
};

export default ThemeToggle;
