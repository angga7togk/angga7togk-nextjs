"use client";

import React, { act, useState } from "react";
import { ScreenProps } from "../constants";
import { IoMdArrowRoundBack } from "react-icons/io";
import ButtonLeft2 from "@/components/ButtonLeft2";
import { SiFramework } from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import FrameworkTab from "./FrameworkTab";
import LanguageTab from "./LanguageTab";
import SoftwareTab from "./SoftwareTab";
import ScreenLayout from "../ScreenLayout";

const SkillScreen = ({ active, onChangeScreen }: ScreenProps) => {
  const [tab, setTab] = useState("frameworks");

  return (
    <ScreenLayout
      active={active}
      onChangeScreen={(s) => {
        if (onChangeScreen) onChangeScreen(s);
      }}
    >
      <div className="w-full grid grid-cols-4 gap-3 row-start-2 row-end-8 overflow-hidden">
        <div className="w-full bg-red-500/10 border border-red-500/50 py-2">
          <h1 className="text-md lg:text-xl font-semibold text-center mb-4">
            My Skills
          </h1>
          <div className=" w-full h-[65dvh] overflow-y-auto lg:space-y-2">
            <ButtonLeft2
              icon={<SiFramework />}
              active={tab == "frameworks"}
              onClick={() => {
                setTab("frameworks");
              }}
              title="Tech Stacks"
            />
            <ButtonLeft2
              icon={<FaLanguage />}
              active={tab == "languages"}
              onClick={() => {
                setTab("languages");
              }}
              title="Languages"
            />
            <ButtonLeft2
              icon={<BsTools />}
              active={tab == "softwares"}
              onClick={() => {
                setTab("softwares");
              }}
              title="Softwares"
            />
          </div>
        </div>
        <div className=" w-full col-start-2 col-end-5 bg-red-500/10 border border-red-500/50 p-4">
          <FrameworkTab active={tab == "frameworks"} />
          <LanguageTab active={tab == "languages"} />
          <SoftwareTab active={tab == "softwares"} />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default SkillScreen;
