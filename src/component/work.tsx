import Image from "next/image";
import { workData } from "@/lib/static-data";
import OverflowDescription from "./overflow-description";
import ButtonExpandImage from "./expand-button";
const Work = () => {
  return (
    <div className="grid-wrapper grid grid-cols-3 container-max-w w-full gap-8 p-16 rounded-lg">
      <div className="col-span-3">
        <div className="flex flex-col items-center text-center bg-none gap-2 mb-8">
          <p className="w-fit text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
            My Recent Work
          </p>
          <h1 className="text-6xl max-w-[900px] font-semibold text-white">
            A Snapshot of My Most Recent
            <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
              {" "}
              Development Efforts
            </span>
          </h1>
        </div>
      </div>
      <div className="col-span-2 row-span-2 relative group">
        <Image
          src="/images/webp/work/image-1.webp"
          alt="my work image 1"
          className="h-full w-full object-cover"
          width={840}
          height={535}
        />

        {/* Bottom Title Bar */}
        <div className="card-title bg-gradient-to-r from-gray-400/95 to-gray-200/90 absolute w-full bottom-0">
          <h3 className="text-primary font-semibold text-2xl px-4 py-2">
            Landing Page
          </h3>
        </div>

        {/* Hover-right Reveal */}
        <OverflowDescription />
      </div>

      {workData.map((item, index) => {
        if (index > 0) {
          return (
            <div key={index} className="relative group">
              <Image
                className="h-full w-full object-cover"
                src={item.imgSrc}
                alt={`my work image ${index + 1}`}
                height={250}
                width={400}
              />
              <div className="card-title bg-gradient-to-r from-gray-400/95 to-gray-200/90 absolute w-full bottom-0">
                <h3 className="text-primary font-semibold text-e px-4 py-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover-right Reveal */}
              <div
                className="absolute top-0 right-0 bg-gray-800/95 text-white 
                opacity-0 group-hover:opacity-100
                transition-all duration-300 
                p-2 flex flex-col justify-center"
              >
                <ButtonExpandImage buttonId={`${index}`} />
              </div>
            </div>
          );
        }
      })}

      <div className="">
        <a
          href="/my-work"
          className="h-full w-full flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary hover:to-primary/90 transition-all duration-500 group"
        >
          <p className="font-semibold text-2xl text-primary group-hover:text-white flex items-center gap-2">
            Browse more of my work
            <span className="icon-move-right text-3xl font-bold group-hover:translate-x-1 transition-transform duration-300"></span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Work;
