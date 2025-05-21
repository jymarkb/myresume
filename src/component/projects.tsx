import Image from "next/image";
import ProjectCarousel from "./project-carousel";
const Projects = () => {
  return (
    <div className="container-max-w w-full lg:p-12 xl:p-16 flex flex-col items-center">
      <div className="pt-8 px-6 sm:px-8 lg:p-0 flex items-center justify-center text-center w-full flex flex-col gap-2 mb-8">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          Projects
        </p>
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] font-semibold text-white">
          <span>A Snapshot of My Most Recent </span>
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Development Efforts
          </span>
        </div>
      </div>

      <div className="feature-project-container flex flex-col lg:flex-row flex-nowrap h-full w-full lg:gap-4 xl:gap-8 mb-20 xl:mb-24">
        <div className="feature-image h-full aspect-video lg:max-w-[580px] xl:max-w-[720px] 2xl:max-w-[854px] lg:rounded-tl-4xl lg:rounded-br-4xl overflow-hidden">
          <Image
            src="/images/webp/work/image-1.webp"
            alt="project feature image"
            className="object-cover object-top h-full w-full"
            width={854}
            height={480}
          />
        </div>
        <div className="flex-1 feature-description bg-gradient-to-r from-gray-300 to-gray-100 lg:rounded-r-4xl border-t-4 sm:border-t-6 md:border-t-8 border-primary lg:border-t-0">
          <div className="flex flex-col h-full gap-4 md:gap-6 lg:gap-8 py-4 px-6 sm:py-8 sm:px-12 md:px-16 lg:p-8 justify-center">
            <div className="grid gap-2 lg:gap-4">
              <h1 className="font-bold text-primaryTheme text-3xl xl:text-4xl">
                {"The </blog> Blog"}
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                The
                <span className="span-text font-bold">{" </blog> "}</span>
                is a full-featured blogging CMS built with Symfony 7, React 18,
                and Tailwind CSS. It supports dynamic content management, a
                WYSIWYG editor, and a responsive layout for publishing and
                showcasing blog posts with smooth user interactions.
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <a
                href="https://github.com/jymarkb/symfonyBlog"
                aria-label="github repository link"
                className="md:text-xl"
                target="_blank"
                rel="noreferrer"
              >
                <i className="rounded-full border-2 border-primaryTheme p-2 sm:h-6 sm:w-6 md:h-8 md:w-8 icon-github transition duration-300 hover:bg-primary hover:text-white"></i>
              </a>
              <a
                href="https://myblog.jymarkb.cloud/"
                className="flex items-center gap-2 border-2 border-primaryTheme w-fit px-2 md:px-4 py-2 rounded-sm transition duration-300 hover:bg-primary hover:text-white text-sm md:text-base"
                target="_blank"
                rel="noreferrer"
              >
                Visit Page <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 px-6 sm:px-8 lg:p-0 card-project-container w-full">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Projects;
