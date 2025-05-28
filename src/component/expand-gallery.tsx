"use client";

import { workData } from "@/lib/static-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ExpandedGallery = ({
  selectedImg,
  onClose,
}: {
  selectedImg: string;
  onClose: () => void;
}) => {
  const [selectedImgId, setSelectedImgId] = useState(0);

  const onSelectedImage = (id: string) => {
    const tempId = Number(id);
    setSelectedImgId(tempId);
  };

  const scrollToTarget = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const onWrapperClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.getAttribute("id") !== "modalWrapper") {
      return;
    }

    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tempId = Number(selectedImg);
    setSelectedImgId(tempId);
    scrollToTarget(`wrapper-img-${tempId}`);
  }, [selectedImg]);

  return (
    <div
      id="modalWrapper"
      className="fixed top-0 left-0 h-screen w-screen z-50 bg-black/80 "
      onClickCapture={onWrapperClick}
    >
      <div className="relative">
        <div className="fixed top-0 right-0 m-2 sm:mt-4">
          <button
            onClick={onClose}
            className="text-red-500 bg-white hover:text-white hover:bg-red-500 rounded flex items-center"
            aria-label="close button"
          >
            <i className="h-8 w-8 text-2xl icon-x"></i>
          </button>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div
          className=" 
        flex w-full
        flex-col xl:flex-row
      w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[850px] xl:max-w-[1100px] 2xl:max-w-[1280px]
      h-full max-h-[70%] sm:max-h-[80%]  md:max-h-[85%] lg:max-h-[720px]
      bg-white"
        >
          <div className="relative w-full h-full max-h-[560px] sm:max-h-[540px] lg:max-h-[520px] xl:max-h-full flex items-center bg-primary">
            <Image
              src={workData[selectedImgId].imgSrc}
              alt="selected work image"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 850px, (max-width: 1536px) 780px, 960px"
              loading="lazy"
            />
          </div>
          <div className="bg-gray-200  w-full xl:max-w-[320px] h-full max-h-[160px] sm:max-h-[180px] lg:max-h-[200px] xl:max-h-full">
            <div className="flex flex-nowrap items-center xl:flex-col gap-2 xl:gap-2 py-2 xl:px-2 h-full w-full  overflow-y-hidden overflow-x-scroll xl:overflow-y-scroll xl:overflow-x-hidden">
              {workData.map((item, index) => {
                return (
                  <div
                    key={index}
                    id={`wrapper-img-${index}`}
                    className="bg-white flex-none w-full h-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320]  xl:max-w-full max-h-[180px] shadow-md"
                  >
                    <button
                      id={index.toString()}
                      onClick={() => onSelectedImage(index.toString())}
                      className={`h-full w-full border-2 relative ${index === selectedImgId ? "border-primaryTheme" : "border-gray-700"}`}
                    >
                      <Image
                        src={item.imgSrc}
                        alt={`work image # ${index + 1}`}
                        className="h-full w-full object-cover"
                        width={280}
                        height={150}
                        loading="lazy"
                      />
                      <p
                        className={`h-10 w-10 p-2 ${index === selectedImgId ? "bg-primaryTheme" : "bg-gray-700"} font-semibold text-white absolute top-0 right-0`}
                      >
                        {index + 1}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedGallery;
