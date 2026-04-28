import { testimonialData, type Testimonial } from "@/lib/static-data";
import Image from "next/image";
import Link from "next/link";

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <figure className="group relative flex flex-col gap-5 rounded-xl border border-border bg-card/60 p-6 w-[280px] sm:w-[340px] lg:w-[380px] flex-shrink-0 transition-colors hover:border-primaryTheme/40 hover:bg-card">
    <span
      aria-hidden
      className="absolute top-3 right-4 font-serif text-6xl leading-none text-primaryTheme/20 select-none"
    >
      &ldquo;
    </span>

    <blockquote className="text-sm lg:text-base leading-relaxed text-foreground/90 relative">
      {item.quote}
    </blockquote>

    <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
      <div className="h-10 w-10 rounded-full bg-primaryTheme/10 border border-primaryTheme/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {item.avatar ? (
          <Image
            src={item.avatar}
            alt={item.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="font-mono-tech text-sm font-semibold text-primaryTheme">
            {item.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">
          {item.name}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {item.role}
          {item.company ? (
            <>
              {" · "}
              <span className="text-primaryTheme/80">{item.company}</span>
            </>
          ) : null}
        </p>
      </div>
      {item.linkedin ? (
        <Link
          href={item.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${item.name} on LinkedIn`}
          className="text-muted-foreground hover:text-primaryTheme transition-colors flex-shrink-0"
        >
          <i className="icon-linkedin text-lg" />
        </Link>
      ) : null}
    </figcaption>
  </figure>
);

const Testimonials = () => {
  // Duplicated for seamless infinite loop
  const loop = [...testimonialData, ...testimonialData];

  return (
    <div className="container-max-w w-full py-16 lg:py-24">
      <div className="px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start gap-3 mb-10 lg:mb-14 hidden-up">
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-bold tracking-tight leading-tight">
            What{" "}
            <span className="text-accent-gradient">colleagues say</span>{" "}
            about working with me.
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Notes and feedback from teammates, leads, and collaborators across
            past projects. Hover any card to pause.
          </p>
        </div>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track py-2">
          {loop.map((item, index) => (
            <TestimonialCard key={`${index}-${item.name}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
