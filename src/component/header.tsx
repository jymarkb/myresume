"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MobileHeader from "./mobile-header";
import HeaderLink from "./header-link";
import ThemeToggle from "./theme-toggle";
import { sectionType, debounce } from "@/lib/utils";

const Header = () => {
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setMobileHeader = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section.wrapper");
    let sectionData: sectionType[] = [];

    const setData = () => {
      //clear last data, some section has
      //different height due to lazy load
      sectionData = [];
      let totalH = 80; // set header height
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const target = section.getAttribute("id") as string;
        const prevHeight = totalH;
        totalH += rect.height;

        sectionData.push({
          target: target,
          top: prevHeight,
          bot: totalH,
        });
      });
    };

    const setActive = () => {
      setData();
      const yAxis = window.scrollY;
      const windowInner = window.innerHeight;
      const currentScroll = windowInner * 0.3 + yAxis;

      const match = sectionData.find(
        (item) => item.top < currentScroll && item.bot > currentScroll,
      );

      const target = match?.target as string;
      if (match) setIsActive(target);

      const isScrolledToBottom =
        windowInner + yAxis >= document.body.offsetHeight;

      //force set, due to contact section height is small
      //might need to update for new design
      if (isScrolledToBottom) {
        setIsActive("contact");
      }
    };

    setActive();
    const navLinkDebounce = debounce(setActive, 100);
    window.addEventListener("scroll", navLinkDebounce);
    window.addEventListener("resize", navLinkDebounce);

    return () => {
      window.removeEventListener("scroll", navLinkDebounce);
      window.removeEventListener("resize", navLinkDebounce);
    };
  }, []);

  return (
    <header className="h-16 sticky top-0 bg-background/70 backdrop-blur-md z-50 flex items-center justify-center border-b border-border">
      <nav className="container-max-w w-full flex items-center py-3 px-4 md:px-8 lg:px-12 xl:px-16">
        <Link href="/" aria-label="home">
          <div className="logo flex items-center gap-2">
            <span className="font-mono-tech text-primaryTheme text-xl font-bold">
              {"<jmb/>"}
            </span>
            {/* <span className="font-mono-tech text-foreground text-sm hidden sm:inline">
              jymark.dev
            </span> */}
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="menu button"
            onClick={setMobileHeader}
            className="h-10 w-10 flex items-center justify-center border border-border rounded text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="ml-auto hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex gap-5 xl:gap-7 2xl:gap-8 nav-header items-center">
            <HeaderLink isActive={isActive} />
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      {/* mobile popup nav link */}
      {isOpen && <MobileHeader isActive={isActive} onClose={setMobileHeader} />}
    </header>
  );
};

export default Header;
