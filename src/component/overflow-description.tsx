"use client";
import { useEffect, useState } from "react";
import ExpandedGallery from "./expand-gallery";
import FeatureDescription from "./feature-description";

const OverflowDescription = ({ imageId }: { imageId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImgId, setSelectedImgId] = useState("");

  const onShowGallery = () => {
    document.body.style.overflow = "";
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setSelectedImgId(imageId);
  }, [imageId]);

  return (
    <>
      <div
        className={`absolute top-0 right-0 ${imageId === "0" ? "h-full w-[60%] sm:w-1/2 lg:w-[40%]" : "w-fit h-fit"} bg-gray-800/95 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 `}
      >
        <div className="flex justify-end p-2">
          <button className="h-6 w-6 sm:h-8 sm:w-8" onClick={onShowGallery}>
            <i className="h-6 w-6 sm:h-8 sm:w-8 text-xl icon-expand"></i>
          </button>
        </div>
        {imageId === "0" ? <FeatureDescription /> : ""}
      </div>

      {/* gallery here */}
      {isOpen && (
        <ExpandedGallery selectedImg={selectedImgId} onClose={onShowGallery} />
      )}
    </>
  );
};

export default OverflowDescription;
