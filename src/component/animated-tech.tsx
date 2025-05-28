"use client";

import { useEffect, useState } from "react";
import { techData } from "@/lib/static-data";
import Image from "next/image";
import { AnimateElement } from "@/lib/animate-element";
import ObserveWrapper from "./animation/observer-wrapper";

const AnimatedTech = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const techDataPath = "/images/techstack";

  useEffect(() => {
    // escape hydration errors
    setHasMounted(true);

    setTimeout(() => {
      // added timeout due to lazyload image
      const up = document.querySelectorAll(".tech-up");
      const down = document.querySelectorAll(".tech-down");

      ObserveWrapper({
        target: up,
        options: { threshold: 0.1, rootMargin: "100px 0px 0px 0px" },
        animate: AnimateElement,
      });
      ObserveWrapper({
        target: down,
        options: { threshold: 0.25, rootMargin: "100px 0px 0px 0px" },
        animate: AnimateElement,
      });
    }, 200);
  }, []);

  const animateDirection = (index: number) => {
    return index === 1 ? "down" : "up";
  };

  const animateSlide = (index: number) => {
    return index === 1 ? "tech-down" : "tech-up";
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
          className={`relative overflow-hidden col-wrapper-${animateDirection(index)} ${animateSlide(index)}`}
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
