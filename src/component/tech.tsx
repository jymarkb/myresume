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
    <div>
      <div className="tech-buttons grid grid-cols-4 font-semi-bold gap-8">
        <TechButton selectedId={selectedButton} onSelectBtn={setSelected} />
      </div>

      <div className="grid grid-cols-5 py-8 gap-8">
        {techData[selectedButton].items.map((item, index) => {
          const uniqueKey = `${selectedButton}-${index}`;
          return (
            <div
              key={uniqueKey}
              className="tech-image h-28 w-28 bg-gray-200 rounded flex flex-col justify-center items-center text-center p-1 gap-1"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <Image
                loading="lazy"
                src={`${techDataPath}/${item.imgSrc}`}
                className="h-16 w-16 object-contain bg-gray-200 "
                alt="technology image"
                height={64}
                width={64}
              />
              <p className="text-sm font-semibold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
