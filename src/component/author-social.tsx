"use client";
import Link from "next/link";
import GetInTouch from "./get-in-touch";
import Socials from "./socials";
import ScrollToTarget from "./scroll-to-target";

const AuthorSocial = () => {
  return (
    <>
      <GetInTouch slideStyle="hidden-right" />
      <Link
        className="btn-ghost hidden-right"
        href="#projects"
        onClick={ScrollToTarget}
      >
        See my work
        <i className="icon-arrow-right" />
      </Link>
      <ul className="flex gap-2 items-center sm:ml-2 hidden-right">
        <Socials />
      </ul>
    </>
  );
};

export default AuthorSocial;
