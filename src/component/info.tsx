import Image from "next/image";
import { Globe } from "lucide-react";
import AuthorSocial from "./author-social";

const Info = () => {
  return (
    <div className="container-max-w w-full relative flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-16 py-16 md:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none -z-10" />

      <div className="flex-1 font-medium">
        <div className="grid gap-5 lg:gap-6 max-w-2xl hidden-up">
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-border bg-card/50 font-mono-tech text-xs text-muted-foreground">
            <span className="status-dot" />
            <span>Available for new projects</span>
          </div>

          <div className="font-mono-tech text-sm text-muted-foreground">
            <span className="text-primaryTheme">$</span> echo &quot;hello,
            world&quot;
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            <span className="block text-foreground">Jay Mark Borja.</span>
            <span className="block text-accent-gradient">
              Full-stack web developer.
            </span>
          </h1>

          <p
            id="desc-info"
            className="text-base lg:text-lg text-muted-foreground max-w-[600px] leading-relaxed hidden-right"
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

          <div className="flex flex-wrap gap-3 mt-2 items-center">
            <AuthorSocial />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs font-mono-tech text-muted-foreground">
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

      <div className="flex-shrink-0 hidden-pop">
        <div className="avatar-glow rounded-2xl">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
            <Image
              className="object-cover aspect-square w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px]"
              src="/images/webp/avatar2.webp"
              width={500}
              height={500}
              alt="Jay Mark Borja"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono-tech text-xs">
              <div className="px-2 py-1 rounded bg-background/80 backdrop-blur border border-border text-muted-foreground">
                ~/quezon-city
              </div>
              <div className="px-2 py-1 rounded bg-primaryTheme/20 backdrop-blur border border-primaryTheme/40 text-primaryTheme">
                v4.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
