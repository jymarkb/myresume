"use client";
import React, { useEffect, useState } from "react";
import GetInTouch from "./get-in-touch";
import Socials from "./socials";

const Talk = () => {
  const [time, setTime] = useState("00:00:00 AM");

  useEffect(() => {
    const tick = () => {
      const tempTime = new Date();
      setTime(tempTime.toLocaleTimeString("en-PH"));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-max-w w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="relative rounded-2xl border border-border bg-card/40 overflow-hidden p-6 sm:p-12 lg:p-16 text-center hidden-pop">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryTheme/5 pointer-events-none" />

        <div className="relative flex flex-col items-center gap-5">
          <div className="section-eyebrow">Contact</div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
            Have a project in mind?{" "}
            <span className="text-accent-gradient">Let&apos;s talk.</span>
          </h2>

          <p className="text-muted-foreground max-w-md">
            I&apos;m currently available for freelance work and full-time
            opportunities. Drop a message and I&apos;ll get back within a day.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 max-w-full">
            <GetInTouch slideStyle="" />
            <a
              href="mailto:dev.jymarkb@gmail.com"
              className="btn-ghost text-sm break-all"
            >
              <i className="icon-mail flex-shrink-0" />
              <span className="truncate">dev.jymarkb@gmail.com</span>
            </a>
          </div>

          <ul className="flex gap-2 items-center mt-2">
            <Socials />
          </ul>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 font-mono-tech text-xs text-muted-foreground">
            <span className="status-dot" />
            <span>Quezon City, PH</span>
            <span className="opacity-50">·</span>
            <span>{time} (GMT +8)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
