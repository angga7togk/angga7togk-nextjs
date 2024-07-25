"use client";

import React, {  useState } from "react";
import { ScreenProps } from "../constants";
import ButtonLeft2 from "@/components/ButtonLeft2";
import ScreenLayout from "../ScreenLayout";
import { GoProject } from "react-icons/go";
import MydlyTab from "./MydlyTab";
import AnimakuTab from "./AnimakuTab";
import YuniarTab from "./YuniarTab";
import LLMTab from "./LLMTab";

const ProjectScreen = ({ active, onChangeScreen }: ScreenProps) => {
  const [tab, setTab] = useState("mydly");

  return (
    <ScreenLayout
      active={active}
      onChangeScreen={(s) => {
        if (onChangeScreen) onChangeScreen(s);
      }}
    >
      <div className="w-full grid grid-cols-4 gap-3 row-start-2 row-end-8 overflow-hidden">
        <div className="w-full bg-black/50 border border-black py-2">
          <h1 className="text-md lg:text-xl font-semibold text-center mb-4">
            My Projects
          </h1>
          <div className=" w-full h-[65dvh] overflow-y-auto lg:space-y-2">
            <ButtonLeft2
              icon={<GoProject />}
              active={tab == "mydly"}
              onClick={() => {
                setTab("mydly");
              }}
              title="Mydly"
            />
            <ButtonLeft2
              icon={<GoProject />}
              active={tab == "animaku"}
              onClick={() => {
                setTab("animaku");
              }}
              title="Animaku"
            />
            <ButtonLeft2
              icon={<GoProject />}
              active={tab == "yuniar"}
              onClick={() => {
                setTab("yuniar");
              }}
              title="PT YSW"
            />
            <ButtonLeft2
              icon={<GoProject />}
              active={tab == "llm"}
              onClick={() => {
                setTab("llm");
              }}
              title="Machine"
            />
          </div>
        </div>
        <div className=" w-full col-start-2 col-end-5 bg-black/50 border border-black p-4">
          <MydlyTab active={tab == "mydly"} />
          <AnimakuTab active={tab == "animaku"} />
          <YuniarTab active={tab == "yuniar"} />
          <LLMTab active={tab == "llm"} />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default ProjectScreen;
