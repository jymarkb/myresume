"use client";
import { aboutMeSocial } from "@/lib/static-data";
import { toast } from "sonner";

const AboutSocial = () => {
  const onCopy = (target: string) => {
    navigator.clipboard.writeText(target);
    toast.info("📋 Copied!", {
      description: target,
    });
  };
  return (
    <>
      {aboutMeSocial.map((item, index) => {
        return (
          <div
            className="flex items-center gap-2 md:gap-3 xl:gap-4 observe-left hidden-left"
            key={index}
          >
            <i
              className={`flex items-center justify-center p-4 text-lg lg:text-xl xl:text-2xl  icon-${item.icon} rounded-full bg-white/20 h-12 w-12 lg:h-14 lg:w-14`}
            ></i>
            <div className="relative group">
              <h1 className="text-base md:text-lg lg:text-xl font-bold">
                {item.data}
              </h1>
              <p className="text-xs md:text-sm lg:text-md font-thin">
                {item.title}
              </p>
              {index !== 0 ? (
                <button
                  className="absolute top-0 right-0 -mt-[20px] -mr-[30px] text-xs flex gap-1 bg-white/30 p-0.5 rounded opacity-0 group-hover:opacity-100 transition"
                  onClick={() => onCopy(item.target)}
                >
                  <span>Copy</span>
                  <i className="icon-clipboard-copy"></i>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AboutSocial;
