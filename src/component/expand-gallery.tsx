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

  const selectedImage = (id: string) => {
    const tempId = Number(id);
    setSelectedImgId(tempId);
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
  }, [selectedImg]);

  return (
    <div
      id="modalWrapper"
      className="fixed top-0 left-0 h-screen w-screen z-50 bg-black/80 flex items-center justify-center"
      onClickCapture={onWrapperClick}
    >
      <div className="max-w-[1280px] h-[720px] flex bg-white mx-auto">
        {/* Left: 960px image section */}
        <div className="w-[960px] h-full">
          <Image
            src={`${workData[selectedImgId].imgSrc}`}
            alt="selected work image"
            className="h-full w-full object-cover"
            width={960}
            height={720}
          />
        </div>

        {/* Right: 320px side section */}
        <div className="w-[320px] h-full bg-gray-100 overflow-auto relative">
          <div className="fixed top-0 right-0 m-10">
            <button
              onClick={onClose}
              className="text-primaryTheme bg-white hover:text-white hover:bg-primaryTheme rounded flex items-center"
              aria-label="close button"
            >
              <i className="h-8 w-8 text-2xl icon-x"></i>
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 p-4 overflow overflow-y">
            {workData.map((item, index) => {
              return (
                <button
                  key={index}
                  id={index.toString()}
                  onClick={() => selectedImage(index.toString())}
                  className={`w-[280px] h-[150px] border-2 shadow-md relative ${index === selectedImgId ? "border-primaryTheme" : "border-gray-700"}`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={`work image # ${index + 1}`}
                    className="h-full w-full object-cover"
                    width={280}
                    height={150}
                  />
                  <p
                    className={`h-10 w-10 p-2 ${index === selectedImgId ? "bg-primaryTheme" : "bg-gray-700"} font-semibold text-white absolute top-0 right-0`}
                  >
                    {index + 1}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedGallery;
