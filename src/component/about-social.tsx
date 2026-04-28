"use client";
import { aboutMeSocial } from "@/lib/static-data";
import { toast } from "sonner";

const AboutSocial = () => {
  const onCopy = (target: string) => {
    navigator.clipboard.writeText(target);
    toast.dismiss();
    toast.info("📋 Copied!", {
      position: "top-center",
      description: target,
    });
  };
  return (
    <>
      {aboutMeSocial.map((item, index) => {
        return (
          <div
            className="group flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primaryTheme/40 transition-colors hidden-left"
            key={index}
          >
            <i
              className={`flex items-center justify-center text-base icon-${item.icon} rounded-md bg-primaryTheme/10 text-primaryTheme h-10 w-10 flex-shrink-0`}
            ></i>
            <div className="relative flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono-tech">
                {item.title}
              </p>
              <h1 className="text-sm font-medium truncate text-foreground">
                {item.data}
              </h1>
              {index !== 0 ? (
                <button
                  className="absolute top-1/2 right-0 -translate-y-1/2 text-xs flex gap-1 px-2 py-1 rounded border border-border bg-background opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
                  onClick={() => onCopy(item.target)}
                  aria-label={`copy ${item.title}`}
                >
                  <i className="icon-clipboard-copy"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AboutSocial;
