import { serviceData } from "@/lib/static-data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container-max-w w-full py-8 px-6 sm:px-8 lg:p-12 xl:p-16 md:gap-8 lg:gap-12 xl:gap-16">
      <div className="flex items-center flex-col text-center gap-2 text-primary/85 mb-4 sm:mb-8 lg:mb-12 xl:mb-16">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          My Services
        </p>
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full md:max-w-[700px] lg:max-w-[900px] font-semibold">
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Designing Solution
          </span>
          <span> Customized to Meet Your Requirement</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-fit">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className={`max-w-md flex flex-col border rounded-lg py-4 px-4 md:px-6 lg:px-8 shadow-lg ${(index + 1) % 2 == 0 ? "border-primary bg-gradient-to-r from-primary/90 to-primary/80 text-white" : "bg-gradient-to-r from-gray-200 to-gray-100 border-primaryTheme"}`}
            >
              <div className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 aspect-square">
                <Image
                  src={item.imgSrc}
                  width={64}
                  height={64}
                  alt="services images"
                  unoptimized
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-primaryTheme">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm xl:text-md text-justify">
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
