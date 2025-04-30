import { techData } from "@/lib/static-data";
import Tech from "./tech";
import Image from "next/image";

const TechStack = () => {
  const techDataPath = "/images/techstack";

  const allItems = techData.flatMap((group) => group.items);
  const chunkedTechData = Array.from({ length: 3 }, (_, i) =>
    allItems.slice(i * 12, i * 12 + 12)
  );

  return (
    <div className="container-max-w w-full p-16">
      <div className="flex items-center flex-col text-center gap-2 text-primary/85 mb-16">
        <p className="text-xl text-white font-semibold bg-gradient-to-r from-primaryTheme to-indigo-500 filter animate-subtlePulse px-8 py-2 rounded-sm">
          Experties
        </p>
        <h1 className="text-6xl max-w-[900px] font-semibold">
          <span className="bg-gradient-to-r from-primaryTheme to-indigo-500 bg-clip-text text-transparent filter animate-subtlePulse">
            Skills and Knowledge
          </span>{" "}
          Across Diverse Technologies
        </h1>
      </div>

      <div className="flex gap-16 justify-center">
        <div className="w-[calc(100%-500px)] h-fit bg-primary rounded-2xl p-8 gap-4">
          <Tech />
        </div>
        <div className="w-[400px] h-[400px] overflow-hidden grid grid-cols-3 gap-4 text-white">
          {chunkedTechData.map((data, index) => {
            return (
              <div
                key={index}
                className={`relative overflow-hidden col-wrapper-${index === 1 ? "down" : "up"}`}
              >
                {data.map((item, jindex) => {
                  return (
                    <div
                      key={jindex}
                      className="mono h-[120px] w-[120px] bg-gray-300 w-full absolute shadow-md rounded-md flex items-center justify-center"
                      style={{
                        animationDelay: `calc(${index === 1 ? "120s" : "45s"} / 12 * (12 - ${jindex + 1}) * -1  )`,
                      }}
                    >
                      <Image
                        loading="lazy"
                        className="object-cover"
                        src={`${techDataPath}/${item.imgSrc}`}
                        alt={`tech stack image ${jindex + 1}`}
                        width={80}
                        height={80}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TechStack;
