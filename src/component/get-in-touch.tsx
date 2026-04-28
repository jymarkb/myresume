"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
        <ArrowRight className="h-4 w-4" />
      </button>

      {isOpen && <ContactForm onClose={onShowForm} />}
    </>
  );
};

export default GetInTouch;
