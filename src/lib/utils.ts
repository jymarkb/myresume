import { clsx, type ClassValue } from "clsx";
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