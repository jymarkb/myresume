"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check, Filter as FilterIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./project-card";
import { projectCard } from "@/lib/static-data";

type Filter = "all" | "company" | "personal" | "wip";

const filters: { value: Filter; label: string }[] = [
  { value: "company", label: "Company" },
  { value: "personal", label: "Personal" },
  { value: "wip", label: "In progress" },
  { value: "all", label: "All" },
];

const matches = (filter: Filter) => {
  return (p: (typeof projectCard)[number]) => {
    if (filter === "all") return true;
    if (filter === "wip") return p.status === "wip";
    return p.kind === filter && p.status === "live";
  };
};

const ProjectsTabs = () => {
  const [active, setActive] = useState<Filter>("company");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const items = projectCard.filter(matches(active));
  const activeFilter = filters.find((f) => f.value === active) ?? filters[0];
  const activeCount = items.length;

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const chipClass = (isActive: boolean) =>
    `flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${
      isActive
        ? "bg-primaryTheme text-[hsl(var(--hint-color))] border-primaryTheme"
        : "border-border bg-card hover:border-primaryTheme/50 text-foreground"
    }`;

  const countClass = (isActive: boolean) =>
    `text-[10px] font-mono-tech px-1.5 py-0.5 rounded ${
      isActive
        ? "bg-[hsl(var(--hint-color))] text-[hsl(var(--primary-theme))]"
        : "bg-secondary text-muted-foreground"
    }`;

  return (
    <Carousel
      // remount when filter changes so carousel re-initializes scroll bounds
      key={active}
      opts={{ align: "start", containScroll: "trimSnaps" }}
      className="w-full"
    >
      {/* Below md: single filter button on the left, prev/next on the right */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <div ref={menuRef} className="flex-1 min-w-0 relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className="w-full flex items-center justify-between gap-2 px-3.5 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground"
          >
            <span className="flex items-center gap-2 min-w-0">
              <FilterIcon
                className="h-3.5 w-3.5 text-primaryTheme flex-shrink-0"
                strokeWidth={2.25}
              />
              <span className="truncate">{activeFilter.label}</span>
              <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-secondary text-muted-foreground flex-shrink-0">
                {String(activeCount).padStart(2, "0")}
              </span>
            </span>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 ${
                menuOpen ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute left-0 right-0 top-full mt-2 rounded-lg border border-border bg-card shadow-lg overflow-hidden z-20"
            >
              {filters.map(({ value, label }) => {
                const isActive = active === value;
                const count = projectCard.filter(matches(value)).length;
                return (
                  <button
                    key={value}
                    role="menuitem"
                    onClick={() => {
                      setActive(value);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "text-primaryTheme bg-primaryTheme/10"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-medium">{label}</span>
                      <span
                        className={`text-[10px] font-mono-tech px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-primaryTheme/15 text-primaryTheme"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {String(count).padStart(2, "0")}
                      </span>
                    </span>
                    {isActive && (
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <CarouselPrevious className="!static !translate-y-0 !left-auto !right-auto !top-auto h-9 w-9" />
          <CarouselNext className="!static !translate-y-0 !left-auto !right-auto !top-auto h-9 w-9" />
        </div>
      </div>

      {/* md+: chip row on the left, prev/next on the right */}
      <div className="hidden md:flex items-center gap-3 mb-6">
        <div className="flex flex-1 min-w-0 flex-wrap items-center gap-2">
          {filters.map(({ value, label }) => {
            const isActive = active === value;
            const count = projectCard.filter(matches(value)).length;
            return (
              <button
                key={value}
                onClick={() => setActive(value)}
                className={chipClass(isActive)}
              >
                {label}
                <span className={countClass(isActive)}>
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <CarouselPrevious className="!static !translate-y-0 !left-auto !right-auto !top-auto h-9 w-9" />
          <CarouselNext className="!static !translate-y-0 !left-auto !right-auto !top-auto h-9 w-9" />
        </div>
      </div>

      <CarouselContent className="-ml-4 sm:-ml-5 lg:-ml-6">
        {items.map((item, index) => (
          <CarouselItem
            key={`${active}-${index}`}
            className="pl-4 sm:pl-5 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <ProjectCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectsTabs;
