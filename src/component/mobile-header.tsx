"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { headerLinkData } from "@/lib/static-data";
import ScrollToTarget from "./scroll-to-target";
import ThemeToggle from "./theme-toggle";

const MobileHeader = ({
  isActive,
  onClose,
}: {
  isActive: string;
  onClose: () => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-overlay");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl animate-mobileMenuIn flex flex-col">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Top bar: logo + close */}
      <header className="relative flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-primaryTheme text-xl font-bold">
            {"<jb/>"}
          </span>
          <span className="font-mono-tech text-foreground text-sm">
            jaymark.dev
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onClose}
            aria-label="close menu"
            className="h-9 w-9 flex items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primaryTheme/60 transition-colors"
          >
            <i className="icon-x text-lg" />
          </button>
        </div>
      </header>

      {/* Nav items */}
      <nav className="relative flex-1 overflow-y-auto px-6 py-8">
        <p className="section-eyebrow mb-6">Menu</p>
        <ul className="flex flex-col">
          {headerLinkData.map((item, index) => {
            const active = isActive === item.target;
            return (
              <li
                key={item.target}
                className="border-b border-border last:border-b-0 mobile-menu-item"
                style={{ animationDelay: `${80 + index * 50}ms` }}
              >
                <Link
                  href={`#${item.target}`}
                  onClick={(e) => {
                    ScrollToTarget(e);
                    onClose();
                  }}
                  className={`group flex items-center gap-4 py-5 transition-colors ${
                    active
                      ? "text-primaryTheme"
                      : "text-foreground hover:text-primaryTheme"
                  }`}
                >
                  <span className="font-mono-tech text-xs text-muted-foreground/70 w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight flex-1">
                    {item.title}
                  </span>
                  <i className="icon-arrow-right text-lg opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </div>,
    modalRoot
  );
};

export default MobileHeader;
