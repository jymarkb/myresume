"use client";
import { useEffect } from "react";
import { AnimateElement, AnimateInfo } from "@/lib/animate-element";
import ObserveWrapper from "./observer-wrapper";
import MonoObserver from "./mono-observer";

export const PageObserver = () => {
  useEffect(() => {
    const sideLeft = document.querySelectorAll(".hidden-left");
    const sideRight = document.querySelectorAll(".hidden-right");
    const up = document.querySelectorAll(".hidden-up");
    const pop = document.querySelectorAll(".hidden-pop");
    const leftUp = document.querySelectorAll(".hidden-left-up");

    const options = {
      // threshold: 0.25123456789,
      threshold: 0.23,
      rootMargin: "100px 0px 0px 0px",
    };

    ObserveWrapper({
      target: sideLeft,
      options: options,
      animate: AnimateElement,
    });
    ObserveWrapper({
      target: sideRight,
      options: options,
      animate: AnimateElement,
    });
    ObserveWrapper({
      target: up,
      options: options,
      animate: AnimateElement,
    });
    ObserveWrapper({
      target: pop,
      options: options,
      animate: AnimateElement,
    });
    ObserveWrapper({
      target: leftUp,
      options: options,
      animate: AnimateElement,
    });

    const descInfo = document.getElementById("desc-info");
    if (!descInfo) return;

    console.log(descInfo);

    MonoObserver({ target: descInfo, options, animate: AnimateInfo });
  }, []);

  return null;
};
