/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const ProfileCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="flex items-center space-x-2 lg:space-x-4"
    >
      <img
        src="/img/profile.jpg"
        className={`size-12 lg:size-20 transition duration-300 rounded-md shadow-custom ${
          hover ? "shadow-white" : "shadow-red-500"
        }`}
      />
      <div>
        <h1 className=" lg:text-2xl font-semibold">Angga7Togk</h1>
        <h6 className="text-sm lg:text-base font-thin">Front-end Developer</h6>
      </div>
    </button>
  );
};

export default ProfileCard;
