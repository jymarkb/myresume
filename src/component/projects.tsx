import Image from "next/image";
import { ArrowRight, Github, Images } from "lucide-react";
import GalleryWrapper from "./gallery/gallery-wrapper";
import ProjectsTabs from "./projects-tabs";
import { workData } from "@/lib/static-data";

const Projects = () => {
  return (
    <div className="container-max-w w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-col items-start gap-3 mb-10 lg:mb-14 hidden-up">
        <div className="section-eyebrow">Projects</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-bold tracking-tight leading-tight">
          Recent{" "}
          <span className="text-accent-gradient">development efforts.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl">
          A snapshot of what I&apos;ve been shipping — from blogging platforms
          to image optimization tools.
        </p>
      </div>

      {/* Featured project */}
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-border bg-card hidden-pop aspect-video lg:aspect-auto lg:min-h-[400px]">
          <Image
            src="/images/webp/work/image-1.webp"
            alt="project feature image"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primaryTheme/15 backdrop-blur border border-primaryTheme/40 font-mono-tech text-xs text-primaryTheme z-10">
            ★ Featured
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center gap-5 hidden-up">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-muted-foreground">
            <span className="text-primaryTheme">{"//"}</span>
            <span>blog cms platform</span>
          </div>
          <h3 className="text-3xl xl:text-4xl font-bold text-foreground">
            {"The </blog> Blog"}
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            The
            <span className="span-text font-semibold">{" </blog> "}</span>
            is a full-featured blogging CMS built with Symfony 7, React 18, and
            Tailwind CSS. It supports dynamic content management, a WYSIWYG
            editor, and a responsive layout for publishing and showcasing blog
            posts with smooth user interactions.
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
            {["Symfony 7", "React 18", "Tailwind", "MySQL"].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md border border-border bg-background/50 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <a
              href="https://myblog.jymarkb.info/"
              className="btn-primary text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Visit Page <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/jymarkb/symfonyBlog"
              aria-label="View source on GitHub"
              className="btn-ghost text-sm"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
            <GalleryWrapper btnStyle="btn-ghost text-sm" data={workData}>
              <Images className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
            </GalleryWrapper>
          </div>
        </div>
      </div>

      {/* Filter chips + project grid */}
      <ProjectsTabs />
    </div>
  );
};

export default Projects;
