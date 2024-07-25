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
          Animaku - Nonton & Download Anime Gratis
        </h1>
        <p className="text-[10px] lg:text-base">
          Animaku adalah tempat untuk menonton dan mendownload anime secara
          gratis.
        </p>
        <a
          href="https://animaku.my.id"
          className="my-2 text-[10px] lg:text-base text-blue-500 underline block"
        >
          https://animaku.my.id
        </a>
        <a
          href="https://global.app.mi.com/details?lo=ID&la=in_ID&id=com.angga7togk.animemaku"
          className="my-2 text-[10px] lg:text-base text-blue-500 underline block"
        >
          Download APK
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <img src="/img/animaku/1.png" alt="" className="w-full h-full" />
        <img src="/img/animaku/2.png" alt="" className="w-full h-full" />
        <img src="/img/animaku/3.png" alt="" className="w-full h-full" />
        <img src="/img/animaku/4.png" alt="" className="w-full h-full" />
      </div>
    </main>
  );
};

export default AnimakuTab;
