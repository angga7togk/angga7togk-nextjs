/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TabProps } from "../constants";

const MydlyTab: React.FC<TabProps> = ({ active, onChangeTab }) => {
  return (
    <main className={`w-full h-[75dvh] ${active ? "block" : "hidden"} overflow-auto`}>
      <div className="mb-4">
        <h1 className="text-md lg:text-xl font-bold">Mydly | Shorten Url</h1>
        <p className="text-[10px] lg:text-base">Use our URL shortener, QR Codes and Short Links pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Mydly Connections Platform.</p>
        <a href="https://mydly.com" className="my-2 text-[10px] lg:text-base text-blue-500 underline">https://mydly.com</a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <img src="/img/mydly/1.png" alt="" className="w-full h-full" />
        <img src="/img/mydly/4.png" alt="" className="w-full h-full" />
        <img src="/img/mydly/2.png" alt="" className="w-full h-full" />
        <img src="/img/mydly/3.png" alt="" className="w-full h-full" />
      </div>
    </main>
  );
};

export default MydlyTab;
