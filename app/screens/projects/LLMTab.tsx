/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabProps } from "../constants";

const LLMTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main
      className={`w-full h-[75dvh] ${
        active ? "block" : "hidden"
      } overflow-auto`}
    >
      <div className="mb-4">
        <h1 className="text-md lg:text-xl font-bold">
          7TogkID Machine Learning
        </h1>
        <a
          href="https://llm.7togksmp.com/"
          className="my-2 text-[10px] lg:text-base text-blue-500 underline block"
        >
          https://llm.7togksmp.com/
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <img src="/img/llm/1.png" alt="" className="w-full h-full" />
        <img src="/img/llm/2.png" alt="" className="w-full h-full" />
      </div>
    </main>
  );
};

export default LLMTab;
