"use client";
import React, { useState, useEffect } from "react";
import { GiClockwork } from "react-icons/gi";

const TimeDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full h-full flex items-center p-2">
      <GiClockwork className="size-16 lg:size-20" />
      <div className="ps-2 lg:ps-6">
        <div className="text-2xl lg:text-5xl font-bold">{formattedTime}</div>
        <div className="text-[10px] lg:text-sm font-medium">{formattedDate}</div>
      </div>
    </div>
  );
};

export default TimeDate;
