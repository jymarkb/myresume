"use client";
import Link from "next/link";
import ScrollToTarget from "./scroll-to-target";

const TargetLink = ({
  style,
  target,
  children,
}: {
  style: string;
  target: string;
  children: React.ReactNode;
}) => {
  return (
    <Link className={style} href={target} onClick={ScrollToTarget}>
      {children}
    </Link>
  );
};
export default TargetLink;
