import React, { useEffect } from "react";
import { toast } from "sonner";
import { closeModal } from "@/lib/utils";

const ContactForm = ({ onClose }: { onClose: () => void }) => {
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
          <p className="text-sm font-semibold text-green-900">
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
            <p className="text-red-900"> Cannot submit form at the moment.</p>
            <p> {`${error}`} </p>
          </div>
        ),
      });
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 n z-50">
      <div
        id="popupWrapper"
        className="form-wrapper h-full w-full flex items-center justify-center"
        onClickCapture={(e) => closeModal({ e, onClose })}
      >
        <div className="form-container h-fit w-full max-w-[95%] sm:max-w-[400px] xl:max-w-[450px] bg-white border rounded-xl animate-slideIn">
          <div className="flex justify-end px-2 py-2">
            <button onClick={onClose}>
              <i className="text-2xl icon-x"></i>
            </button>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-800">
            Get in touch!
          </h1>

          <form
            id="form-contact"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdHG9E2rTHTsQMX8YOHA9bp8qDr9VtoV124q-zG0HX2InEgRA/formResponse"
            method="post"
          >
            <div className="form-body grid gap-4 p-8">
              <input
                type="text"
                name="entry.107559119"
                className="border border-input bg-white/50 px-3 text-base rounded-md shadow placeholder:text-muted-foreground text-sm h-10 w-full"
                placeholder="Fullname"
                required
              />
              <input
                type="email"
                name="entry.777016354"
                className="border border-input bg-white/50 px-3 text-base rounded-md shadow placeholder:text-muted-foreground text-sm h-10 w-full"
                placeholder="Email@domain.com"
                required
              />

              <div className="relative select-container">
                <select
                  name="entry.1032562887"
                  id="category"
                  defaultValue=""
                  className="select-input border border-input bg-white px-3 text-base rounded-md shadow text-sm h-10 w-full text-muted-foreground appearance-none"
                  required
                >
                  <option className="hidden" value="">
                    Subject
                  </option>
                  <option className="text-base" value="Web Development">
                    Web Development
                  </option>
                  <option className="text-base" value="Database Management">
                    Database Management
                  </option>
                  <option className="text-base" value="Deployment & DevOps">
                    Deployment & DevOps
                  </option>
                  <option
                    className="text-base"
                    value="Performance Optimization"
                  >
                    Performance Optimization
                  </option>
                  <option
                    className="text-base"
                    value="Cloud Storage Integration"
                  >
                    Cloud Storage Integration
                  </option>
                  <option className="text-base" value="API Development">
                    API Development
                  </option>
                </select>
                <div className="absolute right-3 h-4 w-4 flex items-center justify-center aspect-square top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <i className="icon-chevron-down transition-transform duration-200"></i>
                </div>
              </div>
              <textarea
                className="border border-input bg-white/50 px-3 py-2 text-base rounded-md shadow placeholder:text-muted-foreground text-sm"
                placeholder="Message . . ."
                name="entry.552486820"
                rows={8}
                required
              ></textarea>

              <button
                className="flex items-center justify-center gap-2 bg-primary text-white text-sm py-2 rounded-md shadow"
                type="submit"
                onClick={onSubmit}
              >
                Submit <i className="icon-send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
