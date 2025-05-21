import Image from "next/image";
import Link from "next/link";

type projectCard = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const ProjectCard = ({ data }: { data: projectCard }) => {
  return (
    <div className="p-2">
      <div className="card-image aspect-video rounded-tl-xl overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src="/images/webp/work/image-1.webp"
            alt="project image i"
            className="object-cover object-top h-full w-full"
            width={570}
            height={320}
          />
          <Link
            href={data.link}
            className="absolute right-0 bottom-0 bg-primary mr-1 mb-1 p-2 h-12 w-12 flex items-center justify-center rounded-full hover:bg-primary/90"
          >
            <i className="icon-github text-2xl text-white"></i>
          </Link>
        </div>
      </div>
      <div className="card-body py-4 rounded-br-xl grid gap-4">
        <h1 className="font-semibold text-3xl text-primaryTheme">
          {data.title}
        </h1>
        <p className="text-justify text-base text-white">{data.description}</p>
      </div>
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
