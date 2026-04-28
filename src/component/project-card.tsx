import { ProjectCardType } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import GalleryWrapper from "./gallery/gallery-wrapper";

const ProjectCard = ({ data }: { data: ProjectCardType }) => {
  return (
    <article className="project-card-modern h-full flex flex-col group">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={`/images/webp/work/${data.imageSrc}`}
          alt={`${data.title} preview`}
          className="object-cover object-top h-full w-full transition-transform duration-500 group-hover:scale-105"
          width={570}
          height={320}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity" />
        <div className="absolute right-3 bottom-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <Link
            href={data.link}
            className="bg-background/90 border border-border backdrop-blur p-2 h-9 w-9 flex items-center justify-center rounded-full hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors"
            target="_blank"
            aria-label="GitHub"
          >
            <i className="icon-github text-base"></i>
          </Link>
          {data.gallery !== null ? (
            <GalleryWrapper
              data={data.gallery}
              btnStyle="bg-background/90 border border-border backdrop-blur p-2 h-9 w-9 flex items-center justify-center rounded-full hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors"
            >
              <i className="icon-images text-base"></i>
            </GalleryWrapper>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 p-5">
        <h3 className="font-semibold text-xl text-foreground group-hover:text-primaryTheme transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {data.description}
        </p>
        <div className="flex flex-wrap mt-auto pt-3 gap-1.5">
          {data.tags.slice(0, 5).map((subItem, index) => (
            <span
              key={index}
              className="text-[10px] font-mono-tech px-2 py-0.5 rounded border border-border bg-background/50 text-muted-foreground"
            >
              {subItem}
            </span>
          ))}
          {data.tags.length > 5 && (
            <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded text-muted-foreground">
              +{data.tags.length - 5}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
