"use client";
import React, { useEffect, useState } from "react";
import GetInTouch from "./get-in-touch";

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
      <p className="text-xl font-semibold hidden-pop">Have project in mind?</p>
      <h1 className="text-4xl font-semibold mb-4 hidden-pop">
        {"Let's discuss your project"}
      </h1>
      <GetInTouch slideStyle="hidden-pop" />
      <p className="hidden-pop">
        <span className="font-semibold text-gray-600">My local time :</span>
        <span className="font-bold"> {time} (GMT +8)</span>
      </p>
    </div>
  );
};

export default Talk;
