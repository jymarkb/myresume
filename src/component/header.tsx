"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileHeader from "./mobile-header";
import HeaderLink from "./header-link";
const Header = () => {
  const [isActive, setIsActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const setMobileHeader = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
          const target = entry.target.getAttribute("id");
          if (target) {
            setIsActive(target);
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [isActive]);

  return (
    <header className="h-20 sticky top-0 bg-background/95 z-50 flex items-center justify-center border-b-4 border-primary shadow-lg">
      <nav className="container-max-w w-full flex items-center py-4 px-4 md:px-8 lg:px-12 xl:px-16">
        <Link href="/">
          <div className="logo">
            <Image
              className="h-12 w-40 object-contain hidden lg:block"
              src="/images/logo.svg"
              alt="website logo"
              width={160}
              height={48}
            />
            <Image
              className="h-16 w-16 object-contain lg:hidden"
              src="/images/mobile-logo.svg"
              alt="website logo"
              width={64}
              height={64}
            />
          </div>
        </Link>
        <button className="ml-auto md:hidden" onClick={setMobileHeader}>
          <i className="icon-nav-menu text-2xl h-10 w-10 border-2 rounded-sm p-1 border-primary text-primary"></i>
        </button>
        <div className="ml-auto font-semibold flex gap-8 hidden md:block">
          <ul className="flex md:gap-6 lg:gap-8 nav-header">
            <HeaderLink isActive={isActive} />
          </ul>
        </div>
      </nav>
      {/* mobile popup nav link */}
      {isOpen && (
        <MobileHeader onClose={setMobileHeader}>
          <HeaderLink isActive={isActive} />
        </MobileHeader>
      )}
    </header>
  );
};

export default Header;
