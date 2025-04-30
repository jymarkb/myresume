import React, { useEffect } from "react";

const MobileHeader = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.getAttribute("id") !== "popupWrapper") {
      return;
    }

    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      id="popupWrapper"
      className="fixed inset-0 bg-gray-700/70 z-50"
      onClickCapture={closeModal}
    >
      <div className="absolute bottom-0 left-0 max-h-[80%] w-full bg-white rounded-t-2xl p-8">
        <ul className="flex flex-col text-xl font-semibold gap-2 mobile-header mb-4">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
