import { ProjectCardType } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import GalleryWrapper from "./gallery/gallery-wrapper";

const ProjectCard = ({ data }: { data: ProjectCardType }) => {
  const isWip = data.status === "wip";
  const isCompany = data.kind === "company";
  const hasLink = !!data.link && data.link !== "/" && data.link !== "";

  const badgeLabel = isWip ? "In progress" : isCompany ? "Company" : "Personal";
  const badgeClass = isWip
    ? "bg-amber-500 text-amber-950"
    : isCompany
      ? "bg-primaryTheme text-[hsl(var(--hint-color))]"
      : "bg-violet-500 text-violet-950";

  return (
    <article
      className={`project-card-modern h-full flex flex-col group ${
        isWip ? "opacity-90" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={`/images/webp/work/${data.imageSrc}`}
          alt={`${data.title} preview`}
          className={`object-cover object-top h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            isWip ? "grayscale" : ""
          }`}
          width={570}
          height={320}
          loading="lazy"
        />

        {/* Status / kind badge */}
        <div
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-md font-mono-tech text-[11px] font-semibold uppercase tracking-wider shadow-md ${badgeClass}`}
        >
          {badgeLabel}
        </div>

        {/* Action overlay (only when there are actions to show) */}
        {!isWip && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity" />
            <div className="absolute right-3 bottom-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              {hasLink && (
                <Link
                  href={data.link}
                  className="bg-background/90 border border-border backdrop-blur p-2 h-9 w-9 flex items-center justify-center rounded-full hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors"
                  target="_blank"
                  aria-label={isCompany ? "Visit site" : "GitHub"}
                >
                  <i
                    className={`text-base ${isCompany ? "icon-arrow-right" : "icon-github"}`}
                  />
                </Link>
              )}
              {data.gallery !== null ? (
                <GalleryWrapper
                  data={data.gallery}
                  btnStyle="bg-background/90 border border-border backdrop-blur p-2 h-9 w-9 flex items-center justify-center rounded-full hover:border-primaryTheme/60 hover:text-primaryTheme transition-colors"
                >
                  <i className="icon-images text-base"></i>
                </GalleryWrapper>
              ) : null}
            </div>
          </>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-xl text-foreground group-hover:text-primaryTheme transition-colors">
            {data.title}
          </h3>
        </div>

        {data.role && data.company ? (
          <p className="text-[11px] font-mono-tech text-muted-foreground -mt-1">
            {data.role}
            <span className="opacity-50"> · </span>
            <span className="text-primaryTheme/80">{data.company}</span>
          </p>
        ) : null}

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
