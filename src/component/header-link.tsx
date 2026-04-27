import { headerLinkData } from "@/lib/static-data";
import Link from "next/link";
import ScrollToTarget from "./scroll-to-target";

const HeaderLink = ({
  isActive,
  onLinkClick,
}: {
  isActive: string;
  onLinkClick?: () => void;
}) => {
  return (
    <>
      {headerLinkData.map((item, index) => {
        return (
          <li
            key={index}
            className={`h-fit ${isActive === item.target ? "active" : ""}`}
          >
            <Link
              href={`#${item.target}`}
              onClick={(e) => {
                ScrollToTarget(e);
                onLinkClick?.();
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default HeaderLink;
