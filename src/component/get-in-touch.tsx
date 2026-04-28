"use client";
import { useState } from "react";
import ContactForm from "./contact-form";
const GetInTouch = ({ slideStyle }: { slideStyle: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onShowForm = () => {
    document.body.style.overflow = "";
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`btn-primary w-fit ${slideStyle}`}
        name="get in touch"
        onClick={onShowForm}
      >
        Get in touch
        <i className="icon-arrow-right" />
      </button>

      {isOpen && <ContactForm onClose={onShowForm} />}
    </>
  );
};

export default GetInTouch;
