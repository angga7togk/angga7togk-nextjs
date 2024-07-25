/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import LayoutFullscreen from "./LayoutFullscreen";
import HomeScreen from "./screens/HomeScreen";
import SkillScreen from "./screens/skills/SkillScreen";
import SplashScreen from "./screens/SplashScreen";
import ProjectScreen from "./screens/projects/ProjectScreen";

const Home: React.FC = () => {
  const [screen, setScreen] = useState("splash");
  const [isLoaded, setLoaded] = useState(false);

  return (
    <LayoutFullscreen
      wallpaper={screen == "splash" ? "/gif/krul-tepes.gif" : "/img/wp1.jpg"}
      onLoadChange={(status) => {
        setLoaded(status);
      }}
    >
      {isLoaded && (
        <>
          <SplashScreen
            active={screen == "splash"}
            onChangeScreen={(s) => {
              setScreen(s);
            }}
          />
          <HomeScreen
            active={screen == "home"}
            onChangeScreen={(s) => {
              setScreen(s);
            }}
          />
          <SkillScreen
            active={screen == "skills"}
            onChangeScreen={(s) => {
              setScreen(s);
            }}
          />
          <ProjectScreen
            active={screen == "projects"}
            onChangeScreen={(s) => {
              setScreen(s);
            }}
          />
        </>
      )}
    </LayoutFullscreen>
  );
};

export default Home;
