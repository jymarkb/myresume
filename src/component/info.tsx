import Image from "next/image";
import { Globe } from "lucide-react";
import AuthorSocial from "./author-social";

const Info = () => {
  return (
    <div className="container-max-w w-full relative py-16 md:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none -z-10" />

      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-x-10 lg:gap-x-12 xl:gap-x-16 md:gap-y-6 md:items-center">
        {/* Avatar — first in source for mobile stacking; positioned right at md+ */}
        <div className="justify-self-center md:justify-self-end md:row-start-1 md:col-start-2 xl:row-span-4 hidden-pop">
          <div className="avatar-glow rounded-2xl w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px]">
            <div className="relative rounded-2xl overflow-hidden w-full h-full">
              <Image
                className="object-cover w-full h-full"
                src="/images/webp/avatar.avif"
                width={500}
                height={500}
                alt="Jay Mark Borja"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 300px, (max-width: 1280px) 380px, 500px"
              />
              <div className="absolute bottom-3 left-3 font-mono-tech text-xs">
                <div className="px-2 py-1 rounded bg-background/80 backdrop-blur border border-border text-muted-foreground">
                  ~/quezon-city
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4 md:gap-5 md:row-start-1 md:col-start-1 min-w-0 hidden-up">
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-border bg-card/50 font-mono-tech text-xs text-muted-foreground">
            <span className="status-dot" />
            <span>Available for new projects</span>
          </div>

          <div className="font-mono-tech text-sm text-muted-foreground">
            <span className="text-primaryTheme">$</span> echo &quot;hello,
            world&quot;
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            <span className="block text-foreground">Jay Mark Borja.</span>
            <span className="block text-accent-gradient">
              Full-stack web developer.
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="md:row-start-2 md:col-span-2 xl:col-span-1 xl:col-start-1 max-w-3xl min-w-0">
          <p
            id="desc-info"
            className="text-base lg:text-lg text-muted-foreground leading-relaxed hidden-right"
          >
            <span className="span-text">{"<p>"}</span> I build{" "}
            <span className="text-foreground font-medium">
              production web apps end-to-end
            </span>{" "}
            — reusable components, responsive interfaces, scalable APIs, and
            reliable deployments. Clean code, performance, and accessibility are{" "}
            <span className="text-foreground font-medium">
              baked in, not bolted on
            </span>
            . <span className="span-text">{"</p>"}</span>
          </p>
        </div>

        {/* CTA buttons + socials */}
        <div className="md:row-start-3 md:col-span-2 xl:col-span-1 xl:col-start-1 min-w-0">
          <AuthorSocial />
        </div>

        {/* Stats */}
        <div className="md:row-start-4 md:col-span-2 xl:col-span-1 xl:col-start-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono-tech text-muted-foreground">
            <div className="flex items-center gap-2">
              <i className="icon-briefcase text-primaryTheme" />
              <span>4+ years experience</span>
            </div>
            <span className="opacity-40">·</span>
            <div className="flex items-center gap-2">
              <Globe
                className="h-3.5 w-3.5 text-primaryTheme"
                strokeWidth={2}
              />
              <span>Remote · Worldwide · GMT+8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
