import { headerLinkData } from "@/lib/static-data";
import Link from "next/link";
const HeaderLink = ({ isActive }: { isActive: string }) => {
  return (
    <>
      <li className={`h-fit ${isActive === "home" ? "active" : ""}`}>
        <Link href="/">Home</Link>
      </li>
      {headerLinkData.map((item, index) => {
        return (
          <li
            key={index}
            className={`h-fit ${isActive === item.target ? "active" : ""}`}
          >
            <Link href={`${item.anchor}${item.target}`}>{item.title}</Link>
          </li>
        );
      })}
    </>
  );
};

export default HeaderLink;
