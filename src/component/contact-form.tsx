import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "sonner";
import { closeModal, formInputClass } from "@/lib/utils";
import { contactSubjects } from "@/lib/static-data";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById("form-contact") as HTMLFormElement;
    const formData = new FormData(form);

    try {
      fetch(form.action, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      toast.success("Success: Form Submit", {
        position: "top-center",
        description: (
          <p className="text-sm font-semibold">
            {"Thanks so much! I’ll be in contact soon."}
          </p>
        ),
      });

      form.reset();
      onClose();
    } catch (error) {
      toast.error("Error: Form Submit", {
        position: "top-center",
        description: (
          <div>
            <p>Cannot submit form at the moment.</p>
            <p>{`${error}`}</p>
          </div>
        ),
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-overlay");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      id="popupWrapper"
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClickCapture={(e) => closeModal({ e, onClose })}
    >
      <div className="my-auto w-full max-w-[460px]">
        <div className="form-container w-full bg-card border border-border rounded-xl animate-slideIn shadow-2xl overflow-hidden">
          <div className="flex items-start justify-between p-6 pb-2">
            <div>
              <div className="section-eyebrow">Contact</div>
              <h1 className="text-2xl font-bold mt-2 text-foreground">
                Get in touch.
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Tell me about your project — I&apos;ll reply within a day.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1 -mr-1 -mt-1"
              aria-label="close"
            >
              <i className="text-xl icon-x"></i>
            </button>
          </div>

          <form
            id="form-contact"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdHG9E2rTHTsQMX8YOHA9bp8qDr9VtoV124q-zG0HX2InEgRA/formResponse"
            method="post"
          >
            <div className="grid gap-3 p-6 pt-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-mono-tech text-muted-foreground">
                  Full name
                </span>
                <input
                  type="text"
                  name="entry.107559119"
                  className={formInputClass}
                  placeholder="Jane Doe"
                  required
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs font-mono-tech text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  name="entry.777016354"
                  className={formInputClass}
                  placeholder="email@domain.com"
                  required
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs font-mono-tech text-muted-foreground">
                  Subject
                </span>
                <div className="relative select-container">
                  <select
                    name="entry.1032562887"
                    defaultValue=""
                    className={`${formInputClass} pr-10 appearance-none bg-secondary`}
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {contactSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <i className="icon-chevron-down absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground transition-transform duration-200" />
                </div>
              </label>

              <label className="grid gap-1.5">
                <span className="text-xs font-mono-tech text-muted-foreground">
                  Message
                </span>
                <textarea
                  className={`${formInputClass} h-auto py-2 leading-relaxed`}
                  placeholder="Tell me about your project..."
                  name="entry.552486820"
                  rows={5}
                  required
                />
              </label>

              <button
                className="btn-primary justify-center mt-2"
                type="submit"
                onClick={onSubmit}
              >
                Submit <i className="icon-send" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ContactForm;

