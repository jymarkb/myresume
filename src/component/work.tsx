import Image from "next/image";
import { workData } from "@/lib/static-data";
import OverflowDescription from "./overflow-description";
const Work = () => {
  return (
    <div className="container-max-w w-full py-8 px-6 sm:px-8 lg:p-12 xl:p-16 flex flex-col items-center">
      <div className="flex items-center justify-center text-center w-full flex flex-col gap-2 mb-8">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          My Recent Work
        </p>
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] font-semibold text-white">
          <span>A Snapshot of My Most Recent </span>
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Development Efforts
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-[1000px]">
        <div className="bg-white w-full col-span-2 sm:col-span-2 sm:row-span-2 aspect-square">
          <div className="relative h-full w-full group">
            <Image
              src="/images/webp/work/image-1.webp"
              alt="my work image 1"
              className="object-cover h-full w-full"
              width={900}
              height={900}
            />

            {/* tite */}
            <div className="card-title bg-gradient-to-r from-gray-400/95 to-gray-200/90 absolute w-full bottom-0">
              <h3 className="text-primary font-semibold md:text-lg xl:text-2xl px-4 py-2">
                Landing Page
              </h3>
            </div>

            {/* hidden description */}
            <OverflowDescription imageId="0" />
          </div>
        </div>

        {workData.map((item, index) => {
          if (index === 0) {
            return;
          }
          return (
            <div key={index} className="bg-white w-full aspect-square">
              <div className="relative h-full w-full group">
                <Image
                  className="h-full w-full object-cover"
                  src={item.imgSrc}
                  alt={`my work image ${index + 1}`}
                  height={400}
                  width={400}
                />
                <div className="card-title bg-gradient-to-r from-gray-400/95 to-gray-200/90 absolute w-full bottom-0">
                  <h3 className="text-primary font-semibold text-xs md:text-base px-4 py-2">
                    {item.title}
                  </h3>
                </div>
                <OverflowDescription imageId={`${index}`} />
              </div>
            </div>
          );
        })}

        <div className="bg-white w-full col-span-2 sm:col-span-1 md:aspect-square">
          <a
            href="/projects"
            className="h-full w-full flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary hover:to-primary/90 transition-all duration-500 group py-4"
          >
            <div className="font-semibold text-lg md:text-xl lg:text-2xl text-primary group-hover:text-white flex flex-col items-center gap-2">
              <span>Browse my projects</span>
              <span className="icon-move-right text-3xl font-bold group-hover:translate-x-2 transition-transform duration-300"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
