/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabProps } from "../constants";

const AnimakuTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main
      className={`w-full h-[75dvh] ${
        active ? "block" : "hidden"
      } overflow-auto`}
    >
      <div className="mb-4">
        <h1 className="text-md lg:text-xl font-bold">
          PT. Yuniar Satya Wiguna
        </h1>
        <p className="text-[10px] lg:text-base">
          PT. Yuniar Satya Wiguna is a company established with the main aim to
          become a trusted partner in providing high quality electrical
          installation materials and services. With a commitment to guaranteed
          quality, PT. Yuniar Satya Wiguna is determined to be the first choice
          for the industrial sector that needs reliable electricity solutions.
        </p>
        <a
          href="#"
          className="my-2 text-[10px] lg:text-base text-blue-500 underline block"
        >
          Kunjungi Website...
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <img src="/img/yuniarsatyawiguna/1.png" alt="" className="w-full h-full" />
        <img src="/img/yuniarsatyawiguna/2.png" alt="" className="w-full h-full" />
        <img src="/img/yuniarsatyawiguna/3.png" alt="" className="w-full h-full" />
        <img src="/img/yuniarsatyawiguna/4.png" alt="" className="w-full h-full" />
      </div>
    </main>
  );
};

export default AnimakuTab;
