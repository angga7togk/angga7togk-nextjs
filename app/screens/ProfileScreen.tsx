import React from "react";
import { ScreenProps } from "./constants";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import ButtonLeft from "@/components/ButtonLeft";
import ButtonLeft2 from "@/components/ButtonLeft2";

const ProfileScreen = ({ active, onChangeScreen }: ScreenProps) => {
  return (
    <main
      className={`w-full h-screen p-4 z-10 animate-scale-up grid grid-rows-7 ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full flex justify-between items-center">
        <button
          onClick={() => {
            if (onChangeScreen) onChangeScreen("home");
          }}
          className="text-start flex items-center font-semibold space-x-2"
        >
          <IoMdArrowRoundBack
            size={30}
            className="bg-red-500/50 rounded-md border border-red-500"
          />
          <span>Back</span>
        </button>
      </div>

      <div className="w-full grid grid-cols-4 gap-3 row-start-2 row-end-8 overflow-hidden">
        <div className="w-full">
          <h1 className="text-md lg:text-xl font-semibold text-center">My Profile</h1>
          <div className="h-dvh w-full overflow-y-auto">
            <ButtonLeft2 icon={<BsPeople />} title="Yeah" />
          </div>
        </div>
        <div className="bg-red-400 w-full col-start-2 col-end-5"></div>
      </div>
    </main>
  );
};

export default ProfileScreen;
