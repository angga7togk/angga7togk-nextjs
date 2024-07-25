import React, { PropsWithChildren } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ScreenProps } from "./constants";

const ScreenLayout = ({
  active,
  onChangeScreen,
  children,
}: PropsWithChildren<ScreenProps>) => {
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

      {children}
    </main>
  );
};

export default ScreenLayout;
