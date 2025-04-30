import Link from "next/link";
import { socialData } from "@/lib/static-data";
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
            >
              <i className={`text-xl icon-${item.icon}`}></i>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Socials;
