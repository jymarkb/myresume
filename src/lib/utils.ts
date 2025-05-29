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


export type ProjectCardType = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageSrc: string;
  gallery: WorkDataType[] | null;
};


export type OptionType = {
  threshold: number;
  rootMargin: string;
};

export type AnimateType = {
  target: Element;
  entry: IntersectionObserverEntry;
};