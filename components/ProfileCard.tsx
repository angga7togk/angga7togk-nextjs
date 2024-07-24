/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-4">
      <img
        src="/img/profile.jpg"
        className="size-12 lg:size-20 rounded-md shadow-custom shadow-red-500"
      />
      <div>
        <h1 className=" lg:text-2xl font-semibold">Angga7Togk</h1>
        <h6 className="text-sm lg:text-base font-thin">Front-end Developer</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
