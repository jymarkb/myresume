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
            className={`h-fit ${isActive === item.targetSection ? "active" : ""}`}
          >
            <Link href={`#${item.targetSection}`}>{item.title}</Link>
          </li>
        );
      })}
      <li className="h-fit8">
        <Link href="/projects">Projects</Link>
      </li>
    </>
  );
};

export default HeaderLink;
