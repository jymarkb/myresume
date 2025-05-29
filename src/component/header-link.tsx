import { headerLinkData } from "@/lib/static-data";
import Link from "next/link";
import ScrollToTarget from "./scroll-to-target";
// import TargetLink from "./target-link";

const HeaderLink = ({ isActive }: { isActive: string }) => {
  return (
    <>
      {/* <li className={`h-fit ${isActive === "home" ? "active" : ""}`}>
        <Link href="/">Home</Link>
      </li> */}
      {headerLinkData.map((item, index) => {
        return (
          <li
            key={index}
            className={`h-fit ${isActive === item.target ? "active" : ""}`}
          >
            <Link href={`#${item.target}`} onClick={ScrollToTarget}>
              {item.title}
            </Link>
            {/* <TargetLink style="" target={`#${item.target}`}>
              {item.title}
            </TargetLink> */}
          </li>
        );
      })}
    </>
  );
};

export default HeaderLink;
