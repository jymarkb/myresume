"use client";
import { useState } from "react";
import TechButton from "./tech-buttons";
import { techData } from "@/lib/static-data";
import Image from "next/image";

const Tech = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const techDataPath = "/images/techstack";

  const setSelected = (id: number) => {
    setSelectedButton(id);
  };

  return (
    <>
      <div className="tech-buttons grid grid-cols-4 font-semi-bold sm:gap-4 gap-4 md:gap-8 lg:gap-4 xl:gap-8 text-xs md:text-base">
        <TechButton selectedId={selectedButton} onSelectBtn={setSelected} />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 py-8 gap-4 md:gap-8 lg:gap-4 xl:gap-8">
        {techData[selectedButton].items.map((item, index) => {
          const uniqueKey = `${selectedButton}-${index}`;
          return (
            <div
              key={uniqueKey}
              className="tech-image aspect-square bg-gray-200 rounded flex flex-col justify-center items-center text-center gap-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-10 w-10 md:h-12 md:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 aspect-square flex items-center">
                <Image
                  loading="lazy"
                  src={`${techDataPath}/${item.imgSrc}`}
                  className=" object-cover bg-gray-200"
                  alt="technology image"
                  height={64}
                  width={64}
                />
              </div>

              <p className="text-xs md:text-sm font-semibold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech;
