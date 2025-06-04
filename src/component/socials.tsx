import Link from "next/link";
import { socialData } from "@/lib/static-data";
import Image from "next/image";
const Socials = () => {
  return (
    <>
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.url}
              aria-label="social media links"
              className="border-2 rounded-full p-2 flex items-center h-10 w-10"
              target="_blank"
            >
              {item.icon ? (
                <i className={`text-xl icon-${item.icon}`}></i>
              ) : (
                <Image
                  src={item.imgSrc ?? "/images/mobile-logo.svg"}
                  alt={item.title}
                  height={20}
                  width={20}
                ></Image>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Socials;
