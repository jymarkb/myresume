import { serviceData } from "@/lib/static-data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container-max-w w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col items-start gap-3 mb-10 lg:mb-14 hidden-up">
        <div className="section-eyebrow">Services</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-bold tracking-tight leading-tight">
          What I can{" "}
          <span className="text-accent-gradient">build for you.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          End-to-end solutions across the full stack — from frontend interfaces
          to deployment pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className="hidden-left-up group relative flex flex-col gap-4 rounded-xl border border-border bg-card/60 p-6 transition-all hover:border-primaryTheme/40 hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg bg-primaryTheme/10 border border-primaryTheme/20 flex items-center justify-center">
                  <Image
                    src={item.imgSrc}
                    width={32}
                    height={32}
                    alt="services images"
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <span className="font-mono-tech text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(serviceData.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
