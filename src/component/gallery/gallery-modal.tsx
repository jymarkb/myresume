import { closeModal, WorkDataType } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose: () => void;
  data: WorkDataType[];
};

const GalleryModal = ({ onClose, data }: ModalProps) => {
  const modalRoot = document.getElementById("modal-overlay");
  const [selectedImgId, setSelectedImgId] = useState(0);

  const onSelectedImage = (id: string) => {
    const tempId = Number(id);
    setSelectedImgId(tempId);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        id="popupWrapper"
        className="h-full w-full flex flex-col gap-2 items-center justify-center animate-slideIn"
        onClickCapture={(e) => closeModal({ e, onClose })}
      >
        <div
          className="flex w-full justify-end
            w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[850px] xl:max-w-[1100px] 2xl:max-w-[1280px]"
        >
          <button
            onClick={onClose}
            className="text-red-500 bg-white hover:text-white hover:bg-red-500 rounded flex items-center"
            aria-label="close button"
          >
            <i className="h-8 w-8 text-2xl icon-x"></i>
          </button>
        </div>
        <div
          className="flex w-full flex-col xl:flex-row
            w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[850px] xl:max-w-[1100px] 2xl:max-w-[1280px]
            h-full max-h-[70%] sm:max-h-[80%]  md:max-h-[85%] lg:max-h-[720px]
            bg-white"
        >
          <div className="relative w-full h-full max-h-[560px] sm:max-h-[540px] lg:max-h-[520px] xl:max-h-full flex items-center bg-primary">
            <Image
              src={data[selectedImgId].imgSrc}
              alt="selected work image"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 850px, (max-width: 1536px) 780px, 960px"
              loading="lazy"
            />
          </div>
          <div className="bg-gray-200  w-full xl:max-w-[320px] h-full max-h-[160px] sm:max-h-[180px] lg:max-h-[200px] xl:max-h-full">
            <div className="flex flex-nowrap items-center xl:flex-col gap-2 xl:gap-2 py-2 xl:px-2 h-full w-full  overflow-y-hidden overflow-x-scroll xl:overflow-y-scroll xl:overflow-x-hidden">
              {data.map((item, index) => {
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
                        alt={item.title}
                        className="h-full w-full object-cover object-top"
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
    </div>,
    modalRoot
  );
};

export default GalleryModal;
