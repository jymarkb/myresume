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
      <div className="tech-buttons grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <TechButton selectedId={selectedButton} onSelectBtn={setSelected} />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mt-8 gap-3 md:gap-4">
        {techData[selectedButton].items.map((item, index) => {
          const uniqueKey = `${selectedButton}-${index}`;
          return (
            <div
              key={uniqueKey}
              className="tech-image group aspect-square rounded-lg border border-border bg-card hover:border-primaryTheme/50 hover:bg-primaryTheme/5 flex flex-col justify-center items-center text-center gap-2 p-2 transition-colors"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 flex items-center justify-center">
                <Image
                  loading="lazy"
                  src={`${techDataPath}/${item.imgSrc}`}
                  className="object-contain group-hover:scale-110 transition-transform"
                  alt="technology image"
                  height={48}
                  width={48}
                />
              </div>

              <p className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech;
