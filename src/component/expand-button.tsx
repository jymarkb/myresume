"use client";
import ExpandedGallery from "./expand-gallery";
import { useEffect, useState } from "react";
const ButtonExpandImage = ({ buttonId }: { buttonId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImgId, setSelectedImgId] = useState("");

  const onShowGallery = () => {
    document.body.style.overflow = "";
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setSelectedImgId(buttonId);
  }, [buttonId]);

  return (
    <>
      <button
        id={`${buttonId}`}
        className="h-8 w-8"
        onClick={() => onShowGallery()}
      >
        <i className="h-8 w-8 text-xl icon-expand"></i>
      </button>

      {isOpen && (
        <ExpandedGallery selectedImg={selectedImgId} onClose={onShowGallery} />
      )}
    </>
  );
};

export default ButtonExpandImage;
