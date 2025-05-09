import Image from "next/image";
import Link from "next/link";

type projectCard = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({ data }: { data: projectCard }) => {
  return (
    <div className="px-2">
      <Link href="/" aria-label={`project link for ${data.title}`}>
        <div className="card-image aspect-video rounded-tl-xl overflow-hidden">
          <Image
            src="/images/webp/work/image-1.webp"
            alt="project image i"
            className="object-cover h-full w-full"
            width={570}
            height={320}
          />
        </div>
        <div className="card-body py-4 rounded-br-xl grid gap-4">
          <h1 className="font-semibold text-3xl text-primaryTheme">
            {data.title}
          </h1>
          <p className="text-justify text-base text-white">
            {data.description}
          </p>
        </div>
      </Link>
      <div className="container-tag flex flex-wrap mt-3 gap-3 text-white">
        {data.tags.map((subItem, index) => {
          return (
            <p
              key={index}
              className="text-xs sm:text-base border border-white px-3 py-1 rounded-full"
            >
              {subItem}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
