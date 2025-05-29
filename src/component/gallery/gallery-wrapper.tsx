"use client";

import React, { useState } from "react";
// import ExpandedGallery from "../expand-gallery";
import GalleryModal from "./gallery-modal";
import { WorkDataType } from "@/lib/utils";

const GalleryWrapper = ({
  btnStyle,
  children,
  data,
}: {
  btnStyle: string;
  children: React.ReactNode;
  data: WorkDataType[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${btnStyle}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="gallery"
      >
        {children}
      </button>
      {isOpen && <GalleryModal onClose={() => setIsOpen(false)} data={data} />}
    </>
  );
};

export default GalleryWrapper;
