import React from "react";
import { animateScroll } from "react-scroll";
const ScrollToTarget = (element: React.SyntheticEvent) => {
  element.preventDefault();
  element.stopPropagation();

  const tag = element.target as HTMLAnchorElement;
  const href = tag.getAttribute("href")?.slice(1);

  if (!href) {
    return;
  }

  const section = document.getElementById(href);

  if (!section) {
    return;
  }

  // to-do offset is experimental
  const yAxis = section.getBoundingClientRect().top + window.scrollY - 100;

  const options = {
    duration: 800,
    smooth: true,
  };

  animateScroll.scrollTo(yAxis, options);
};

export default ScrollToTarget;
