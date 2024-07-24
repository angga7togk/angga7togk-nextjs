import Link from "next/link";
import React from "react";
import {
  BsArrowRight,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";

const ModalFullscreen = ({
  toggleFullscreen,
}: {
  toggleFullscreen: () => void;
}) => {
  return (
    <div className="bg-black/50 w-screen h-screen absolute top-0 left-0 backdrop-blur-sm flex   justify-center items-center z-50 ">
      <div className="w-1/2 md:w-1/3 min-h-60 bg-red-500/50 p-4 pt-12 rounded-xl border border-red-500 relative shadow-2xl shadow-red-500">
        <div className="absolute top-2 right-0 px-4 py-2 text-white flex items-center space-x-2">
          <small className="animate-move-left-right flex items-center space-x-1">
            <span>Tap to fullscreen</span>
            <BsArrowRight />
          </small>
          <button
            onClick={toggleFullscreen}
            className=" cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <SlSizeFullscreen />
          </button>
        </div>
        <h1 className="text-xl font-bold ">Welcome to Angga7Togk Profile</h1>
        <h1 className="font-semibold mt-2">Require to enter:</h1>
        <ul className="list-disc list-inside ml-4">
          <li className="text-sm">
            If you are using a mobile device, please use landscape mode.
          </li>
          <li className="text-sm">Use fullscreen mode to enter the web.</li>
        </ul>

        <div className="w-full flex justify-center items-center absolute bottom-3 left-0 space-x-3">
          <Link href="https://youtube.com/@angga7togk_">
            <BsYoutube size={24} />
          </Link>
          <Link href="https://wa.me/62882009557659">
            <BsWhatsapp size={24} />
          </Link>
          <Link href="https://github.com/angga7togk">
            <BsGithub size={24} />
          </Link>
          <Link href="https://www.instagram.com/angga7togk/">
            <BsInstagram size={24} />
          </Link>
          <Link href="#">
            <BsFacebook size={24} />
          </Link>
          <Link href="#">
            <BsLinkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalFullscreen;
