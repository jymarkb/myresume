import { serviceData } from "@/lib/static-data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container-max-w w-full p-16">
      <div className="flex items-center flex-col text-center gap-2 text-primary/85 mb-16">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          My Services
        </p>
        <h1 className="text-6xl max-w-[900px] font-semibold">
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Designing Solution
          </span>{" "}
          Customized to Meet Your Requirement
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8 w-fit">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className={`max-w-md grid border rounded-lg p-8 py-4 shadow-lg ${(index + 1) % 2 == 0 ? "border-primary bg-gradient-to-r from-primary/90 to-primary/80 text-white" : "bg-gradient-to-r from-gray-200 to-gray-100 border-primaryTheme"}`}
            >
              <Image
                src={item.imgSrc}
                width={64}
                height={64}
                alt="services images"
                unoptimized
                loading="lazy"
              ></Image>
              <h3 className="text-2xl font-bold text-primaryTheme">
                {item.title}
              </h3>
              <p className="text-md text-justify">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
