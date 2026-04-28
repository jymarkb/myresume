import Image from "next/image";
import { techLayers } from "@/lib/static-data";

const TechStack = () => {
  return (
    <div className="container-max-w w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col items-start gap-3 mb-12 lg:mb-16 hidden-up">
        <div className="section-eyebrow">Expertise</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-bold tracking-tight leading-tight">
          The{" "}
          <span className="text-accent-gradient">tools and technologies</span>{" "}
          I work with daily.
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Organized by where they live in a typical project — from the UI
          you see to the tools that ship it.
        </p>
      </div>

      {/* spine layout */}
      <div className="relative pl-6 sm:pl-10 hidden-up">
        {/* vertical connecting spine */}
        <div
          aria-hidden
          className="absolute left-2 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primaryTheme/60 via-primaryTheme/30 to-transparent"
        />

        <div className="grid gap-5 lg:gap-6">
          {techLayers.map((layer) => (
            <div
              key={layer.id}
              className="relative rounded-xl border border-border bg-card overflow-hidden"
            >
              {/* spine connector */}
              <div
                aria-hidden
                className="absolute -left-[28px] sm:-left-[32px] top-6 h-px w-6 sm:w-7 bg-primaryTheme/40"
              />
              {/* node dot on the spine */}
              <div
                aria-hidden
                className="absolute -left-[34px] sm:-left-[38px] top-[18px] h-3 w-3 rounded-full bg-card border-2 border-primaryTheme/70"
              />

              <div className="grid lg:grid-cols-12 lg:items-start gap-3 lg:gap-6 p-5 sm:p-6">
                {/* layer header */}
                <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-[11px] tracking-[0.18em] text-primaryTheme">
                      {String(layer.index).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border lg:hidden" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {layer.role}
                  </p>
                </div>

                {/* tech chips */}
                <div className="lg:col-span-9 xl:col-span-9 flex flex-wrap content-start items-start gap-2">
                  {layer.items.map((item) => (
                    <div
                      key={item.name}
                      title={`${item.name} · ${layer.title}`}
                      className="group inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-secondary/40 hover:border-primaryTheme/50 hover:bg-secondary hover:-translate-y-0.5 transition-all"
                    >
                      <Image
                        src={`/images/techstack/${item.icon}`}
                        alt={item.name}
                        width={20}
                        height={20}
                        className={`object-contain h-5 w-5 group-hover:scale-110 transition-transform ${
                          item.invertOnDark ? "tech-invert-dark" : ""
                        } ${item.invertOnLight ? "tech-invert-light" : ""}`}
                        loading="lazy"
                      />
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
