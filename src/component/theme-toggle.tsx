"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import type { ThemeOption } from "@/lib/utils";

const options: { value: ThemeOption; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!mounted) {
    return (
      <button
        aria-label="theme"
        className="border border-border bg-card/50 rounded-md h-9 w-9 flex items-center justify-center"
      />
    );
  }

  const current = (theme ?? "system") as ThemeOption;
  const CurrentIcon =
    options.find((o) => o.value === current)?.Icon ?? Monitor;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={`theme: ${current}`}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Theme"
        className="border border-border bg-card/50 rounded-md h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-primaryTheme hover:border-primaryTheme/60 transition-colors"
      >
        <CurrentIcon className="h-4 w-4" strokeWidth={2} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-40 rounded-md border border-border bg-card shadow-lg overflow-hidden z-50"
        >
          <div className="px-3 py-1.5 text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground border-b border-border">
            Theme
          </div>
          {options.map(({ value, label, Icon }) => {
            const active = value === current;
            return (
              <button
                key={value}
                role="menuitem"
                onClick={() => {
                  setTheme(value);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-primaryTheme bg-primaryTheme/10"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <Icon
                  className="h-4 w-4 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="flex-1 text-left">{label}</span>
                {active && (
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
