import Link from "next/link";
import { socialData } from "@/lib/static-data";

const Socials = () => {
  return (
    <>
      {socialData.map((item, index) => (
        <li key={index}>
          <Link
            href={item.url}
            aria-label={item.title}
            className="border border-border bg-card/50 rounded-full p-2 flex items-center justify-center h-10 w-10 text-muted-foreground hover:text-primaryTheme hover:border-primaryTheme/60 transition-colors"
            target="_blank"
          >
            <i className={`text-lg icon-${item.icon}`} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default Socials;
