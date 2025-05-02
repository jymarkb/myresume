"use client";
import React, { useEffect, useState } from "react";

const Talk = () => {
  const [time, setTime] = useState("00:00:00 AM");

  useEffect(() => {
    setTimeout(() => {
      const tempTime = new Date();
      setTime(tempTime.toLocaleTimeString("en-PH"));
    }, 1000);
  }, [time]);

  return (
    <div className="container-max-w w-full flex flex-col py-16 text-center items-center gap-4">
      <p className="text-xl font-semibold">Have project in mind?</p>
      <h1 className="text-4xl font-semibold mb-4">
        {"Let's discuss your project"}
      </h1>
      <a
        className="px-8 py-2 bg-primary text-white rounded shadow-md transition duration-300 hover:bg-primary/90 hover:scale-105 w-fit"
        href="/get-in-touch"
      >
        Get in touch
      </a>
      <p>
        <span className="font-semibold text-gray-600">My local time :</span>
        <span className="font-bold"> {time} (GMT +8)</span>
      </p>
    </div>
  );
};

export default Talk;
