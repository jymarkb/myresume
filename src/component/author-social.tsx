"use client";
import Link from "next/link";
import GetInTouch from "./get-in-touch";
import Socials from "./socials";
import ScrollToTarget from "./scroll-to-target";
// import TargetLink from "./target-link";
const AuthorSocial = () => {
  return (
    <>
      <div className="flex gap-4">
        <GetInTouch slideStyle="hidden-right" />
        {/* <TargetLink
          style="px-5 sm:px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105"
          target="#projects"
        >
         
        </TargetLink> */}
        <Link
          className="px-5 sm:px-8 py-2 text-primary border rounded shadow-md transition duration-300 hover:scale-105 hidden-right"
          href="#projects"
          onClick={ScrollToTarget}
        >
          See my work
        </Link>
      </div>
      <ul className="flex font-thin gap-2 items-center sm:ml-auto md:ml-0 lg:ml-auto hidden-right">
        <Socials />
      </ul>
    </>
  );
};

export default AuthorSocial;
