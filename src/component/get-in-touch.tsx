"use client";
import { useState } from "react";
import ContactForm from "./contact-form";

const GetInTouch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onShowForm = () => {
    document.body.style.overflow = "";
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="px-6 sm:px-8 py-2 bg-primary text-white rounded shadow-md transition duration-300 hover:bg-primary/90 hover:scale-105 w-fit"
        name="get in touch"
        onClick={onShowForm}
      >
        Get in touch
      </button>

      {isOpen && <ContactForm onClose={onShowForm} />}
    </>
  );
};

export default GetInTouch;
