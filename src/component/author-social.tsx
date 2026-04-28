"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GetInTouch from "./get-in-touch";
import Socials from "./socials";
import ScrollToTarget from "./scroll-to-target";

const AuthorSocial = () => {
  return (
    <div className="flex flex-col gap-3 mt-2 md:flex-row md:flex-wrap md:items-center md:gap-4 hidden-right">
      {/* Buttons — always on the same row, never wrap text inside */}
      <div className="flex items-center gap-2 sm:gap-3">
        <GetInTouch slideStyle="text-sm sm:text-base whitespace-nowrap" />
        <Link
          className="btn-ghost text-sm sm:text-base whitespace-nowrap"
          href="#projects"
          onClick={ScrollToTarget}
        >
          See my work
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Socials — below the buttons under md, inline at md+ */}
      <ul className="flex gap-2 items-center">
        <Socials />
      </ul>
    </div>
  );
};

export default AuthorSocial;
