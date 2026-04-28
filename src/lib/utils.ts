import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type sectionType = {
  target: string;
  top: number;
  bot: number;
};

export const debounce = (func: () => void, delay: number) => {
  let timeoutId: number;
  return () => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(func, delay);
  };
};

export const closeModal = ({ e, onClose }: { e: React.MouseEvent; onClose: () => void; }) => {
  const target = e.target as HTMLElement;

  if (target.getAttribute("id") !== "popupWrapper") {
    return;
  }

  onClose();
};

export type WorkDataType = {
  title: string;
  imgSrc: string;
};


export type ProjectStatus = "live" | "wip";
export type ProjectKind = "company" | "personal";

export type ProjectCardType = {
  title: string;
  description: string;
  tagline?: string;
  highlights?: string[];
  tags: string[];
  link: string;
  imageSrc: string;
  gallery: WorkDataType[] | null;
  status: ProjectStatus;
  kind: ProjectKind;
  role?: string;
  company?: string;
};


export type OptionType = {
  threshold: number;
  rootMargin: string;
};

export type AnimateType = {
  target: Element;
  entry: IntersectionObserverEntry;
};

export type Tech = {
  name: string;
  icon: string;
  invertOnDark?: boolean;
  invertOnLight?: boolean;
};

export type TechLayer = {
  id: string;
  index: number;
  title: string;
  role: string;
  items: Tech[];
};

export type ThemeOption = "system" | "light" | "dark";

export const formInputClass =
  "border border-border bg-secondary px-3 text-sm rounded-md " +
  "placeholder:text-muted-foreground h-10 w-full text-foreground " +
  "focus:outline-none focus:border-primaryTheme/60 " +
  "focus:ring-1 focus:ring-primaryTheme/30 transition-colors";