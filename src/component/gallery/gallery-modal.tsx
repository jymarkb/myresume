"use client";
import { closeModal, WorkDataType } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ArrowRight, X } from "lucide-react";

type ModalProps = {
  onClose: () => void;
  data: WorkDataType[];
};

const GalleryModal = ({ onClose, data }: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [selectedImgId, setSelectedImgId] = useState(0);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const onSelect = (id: number) => setSelectedImgId(id);
  const onPrev = () =>
    setSelectedImgId((id) => (id - 1 + data.length) % data.length);
  const onNext = () => setSelectedImgId((id) => (id + 1) % data.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll active thumb into view
  useEffect(() => {
    const active = stripRef.current?.querySelector<HTMLElement>(
      `[data-idx="${selectedImgId}"]`
    );
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedImgId]);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-overlay");
  if (!modalRoot) return null;

  const current = data[selectedImgId];

  return ReactDOM.createPortal(
    <div
      id="popupWrapper"
      className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md animate-slideIn flex flex-col"
      onClickCapture={(e) => closeModal({ e, onClose })}
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-card/40 backdrop-blur">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-primaryTheme">
            Gallery
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span className="text-sm text-foreground truncate">
            {current.title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-xs text-muted-foreground">
            {String(selectedImgId + 1).padStart(2, "0")}
            <span className="text-muted-foreground/50">
              {" "}/ {String(data.length).padStart(2, "0")}
            </span>
          </span>
          <button
            onClick={onClose}
            className="h-9 w-9 flex items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primaryTheme/60 transition-colors"
            aria-label="close"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      {/* Stage */}
      <div
        className="flex-1 relative flex items-center justify-center p-4 sm:py-8 sm:px-20 lg:py-10 lg:px-24 overflow-hidden touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative flex items-center justify-center w-full h-full max-w-[1400px]">
          <Image
            key={current.imgSrc}
            src={current.imgSrc}
            alt={current.title}
            width={1600}
            height={1000}
            sizes="(max-width: 1280px) 90vw, 1400px"
            priority
            unoptimized={current.imgSrc.endsWith(".gif")}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg border border-border bg-card shadow-2xl pointer-events-none"
            draggable={false}
          />
        </div>

        {/* prev / next — desktop only; mobile uses swipe */}
        {data.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors shadow-lg"
              aria-label="previous"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card/90 backdrop-blur border border-border text-foreground hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors shadow-lg"
              aria-label="next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails strip (always horizontal at bottom) */}
      <div className="border-t border-border bg-card/40 backdrop-blur px-4 sm:px-6 py-3">
        <div
          ref={stripRef}
          className="flex gap-2 overflow-x-auto scroll-smooth [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto"
        >
          {data.map((item, index) => {
            const active = index === selectedImgId;
            return (
              <button
                key={index}
                data-idx={index}
                onClick={() => onSelect(index)}
                aria-label={`view ${item.title}`}
                className={`relative flex-shrink-0 w-24 sm:w-28 aspect-video rounded-md overflow-hidden border-2 transition-all ${
                  active
                    ? "border-primaryTheme opacity-100"
                    : "border-border opacity-50 hover:opacity-100 hover:border-primaryTheme/40"
                }`}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={224}
                  height={126}
                  className="object-cover object-top w-full h-full"
                  loading="lazy"
                  unoptimized={item.imgSrc.endsWith(".gif")}
                />
                <span
                  className={`absolute top-0.5 left-0.5 px-1 rounded font-mono-tech text-[9px] ${
                    active
                      ? "bg-primaryTheme text-[hsl(var(--hint-color))]"
                      : "bg-background/70 text-foreground"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Key hints */}
        <div className="mt-2 hidden sm:flex items-center justify-center gap-3 font-mono-tech text-[10px] text-muted-foreground/70">
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background mr-1">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">
              →
            </kbd>{" "}
            navigate
          </span>
          <span className="opacity-50">·</span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">
              esc
            </kbd>{" "}
            close
          </span>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default GalleryModal;
