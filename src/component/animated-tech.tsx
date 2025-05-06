"use client";

import { useEffect, useState } from "react";
import { techData } from "@/lib/static-data";
import Image from "next/image";

const AnimatedTech = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const techDataPath = "/images/techstack";

  useEffect(() => {
    // escape hydration errors
    setHasMounted(true);
  }, []);

  const animateDirection = (index: number) => {
    return index === 1 ? "down" : "up";
  };

  if (!hasMounted) return null;

  const allItems = techData.flatMap((group) => group.items);
  const chunkedTechData = Array.from({ length: 3 }, (_, i) =>
    allItems.slice(i * 12, i * 12 + 12)
  );

  return (
    <>
      {chunkedTechData.map((data, index) => (
        <div
          key={index}
          className={`relative overflow-hidden col-wrapper-${animateDirection(index)}`}
        >
          {data.map((item, jindex) => (
            <div
              key={jindex}
              className={`mono aspect-square bg-gray-300 w-full absolute shadow-md rounded-md flex items-center justify-center p-2 delay-${animateDirection(index)}-${jindex}`}
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
          ))}
        </div>
      ))}
    </>
  );
};

export default AnimatedTech;
