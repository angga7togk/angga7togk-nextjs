/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import LayoutFullscreen from "./LayoutFullscreen";
import ButtonLeft from "@/components/ButtonLeft";
import { GrProjects, GrServices, GrTools } from "react-icons/gr";
import ProfileCard from "@/components/ProfileCard";
import ButtonBottom from "@/components/ButtonBottom";
import { BsPeople } from "react-icons/bs";
import { GiSwordClash } from "react-icons/gi";

const Home: React.FC = () => {
  
  return (
    <LayoutFullscreen>
      <main className="w-full h-screen grid grid-cols-2 p-2 lg:p-4 relative z-10">
        {/* Left */}
        <div className="h-full w-full grid grid-rows-7">
          <div className="">
            <ProfileCard />
            
          </div>
          <div className=" flex flex-col justify-center lg:space-y-4 row-start-2 row-end-7 ">
            <ButtonLeft
              icon={<BsPeople />}
              title="My Profile"
              subtitle="The services I offer to clients and collaborators"
            />
            <ButtonLeft
              icon={<GrProjects />}
              title="My Projects"
              subtitle="A collection of my recent and notable works"
            />
            <ButtonLeft
              icon={<GrTools />}
              title="My Skills"
              subtitle="An overview of my expertise and abilities"
            />
            <ButtonLeft
              icon={<GrServices />}
              title="My Services"
              subtitle="The services I offer to clients and collaborators"
            />
          </div>
          <div className="flex items-end space-x-4">
            <ButtonBottom disable>
              Copyright <br />
              @7TogkID 2024
            </ButtonBottom>
            <ButtonBottom disable>
              Refrence <br />
              @NekoUI 2024
            </ButtonBottom>
            <ButtonBottom>FEEDBACK</ButtonBottom>
          </div>
        </div>

        {/* Right */}
        <div className="h-full w-full grid grid-rows-2">
          <div className="flex flex-col items-end justify-start space-y-4">
            <div className="w-1/2 h-24 lg:h-32 bg-red-500/50 border border-red-500 rounded-md">

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
                <h6 className="text-[10px] lg:text-sm" >Open other menus</h6>
              </div>
            </button>
          </div>
        </div>
      </main>
    </LayoutFullscreen>
  );
};

export default Home;
