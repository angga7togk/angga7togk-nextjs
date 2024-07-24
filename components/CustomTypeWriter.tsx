"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const CustomTypeWriter = ({ strings }: { strings: string[] }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        cursorClassName: "text-white",
        wrapperClassName: "text-white",
      }}
    />
  );
};

export default CustomTypeWriter;
