"use client";
import React from "react";
import ButtonLeft from "@/components/ButtonLeft";
import { GrProjects, GrServices, GrTools } from "react-icons/gr";
import ProfileCard from "@/components/ProfileCard";
import ButtonBottom from "@/components/ButtonBottom";
import { BsPeople } from "react-icons/bs";
import { GiSwordClash } from "react-icons/gi";
import { ScreenProps } from "./constants";
import TimeDate from "@/components/TimeDate";
import CustomTypeWriter from "@/components/CustomTypeWriter";

const HomeScreen = ({ active, onChangeScreen }: ScreenProps) => {
  const handleProfileClick = () => {
    if (onChangeScreen) {
      onChangeScreen("profile");
    }
  };

  const handleProjectsClick = () => {
    if (onChangeScreen) {
      onChangeScreen("projects");
    }
  };

  const handleSkillsClick = () => {
    if (onChangeScreen) {
      onChangeScreen("skills");
    }
  };

  const handleServicesClick = () => {
    if (onChangeScreen) {
      onChangeScreen("services");
    }
  };

  return (
    <main
      className={`w-full h-screen grid grid-cols-2 p-2 lg:p-4 relative z-10 animate-scale-up ${
        active ? "block" : "hidden"
      }`}
    >
      {/* Left */}
      <div className="h-full w-full grid grid-rows-7">
        <div className="">
          <ProfileCard />
        </div>
        <div className="flex flex-col justify-center lg:space-y-4 row-start-2 row-end-7">
          <ButtonLeft
            icon={<BsPeople />}
            title="My Profile"
            subtitle="The services I offer to clients and collaborators"
            // onClick={handleProfileClick}
          />
          <ButtonLeft
            icon={<GrProjects />}
            title="My Projects"
            subtitle="A collection of my recent and notable works"
            onClick={handleProjectsClick}
          />
          <ButtonLeft
            icon={<GrTools />}
            title="My Skills"
            subtitle="An overview of my expertise and abilities"
            onClick={handleSkillsClick}
          />
          <ButtonLeft
            icon={<GrServices />}
            title="My Services"
            subtitle="The services I offer to clients and collaborators"
            onClick={handleServicesClick}
          />
        </div>
        <div className="flex items-end space-x-4">
          <ButtonBottom disable>
            Copyright <br />
            @7TogkID 2024
          </ButtonBottom>
          <ButtonBottom disable>
            Credit <br />
            @NekoUI 2024
          </ButtonBottom>
          <ButtonBottom
            onClick={() => {
              window.location.href =
                "https://github.com/angga7togk/angga7togk-nextjs";
            }}
          >
            SOURCE CODE
          </ButtonBottom>
        </div>
      </div>

      {/* Right */}
      <div className="h-full w-full grid grid-rows-2">
        <div className="flex flex-col items-end justify-start space-y-4">
          <div className="w-1/2 h-24 lg:h-32 bg-red-600/50 border border-red-600 rounded-md shadow-md shadow-red-600">
            <TimeDate />
          </div>
          <div className="w-1/2 h-10 lg:h-12 bg-red-600/50 border border-red-600 rounded-md shadow-md shadow-red-600 text-sm lg:text-base font-semibold flex justify-center items-center">
            <CustomTypeWriter
              strings={[
                "Front-End Developer",
                "Back-End Developer",
                "NextJS",
                "ReactJS",
                "AstroJS",
                "NodeJS",
                "ExpressJS",
                "Vercel",
                "TailwindCSS",
                "Bootstrap",
                "Laravel",
                "JavaScript",
                "TypeScript",
                "SQL and MYSQL",
                "PHP Language",
                "Java Language",
                "Kotlin Language",
                "Maven and Gradle",
                "Python Language",
              ]}
            />
          </div>
        </div>

        <div className="flex items-end justify-end space-x-4">
          <button className="flex items-center w-1/2 bg-gradient-to-r from-gray-200 hover:from-gray-300 to-red-500 hover:to-red-600 h-14 lg:h-20 rounded-md border border-white text-start transition">
            <div
              className={`border-y border-black size-6 lg:size-8 transition duration-300 flex items-center justify-center text-gray-800 text-base lg:text-xl -rotate-45 mx-4`}
            >
              <div className={`transition duration-300 rotate-45 `}>
                <GiSwordClash />
              </div>
            </div>
            <div className="text-black ps-2">
              <h1 className="text-xl font-semibold">MENU</h1>
              <h6 className="text-[10px] lg:text-sm">Open other menus</h6>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
