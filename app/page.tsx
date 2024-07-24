/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import LayoutFullscreen from "./LayoutFullscreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Home: React.FC = () => {
  const [screen, setScreen] = useState("home");
  const [isLoaded, setLoaded] = useState(false);

  return (
    <LayoutFullscreen onLoadChange={(status) => {setLoaded(status)}}>
      {isLoaded && (
        <>
          <HomeScreen
            active={screen == "home"}
            onChangeScreen={(s) => {
              setScreen(s);
            }}
          />
          <ProfileScreen
            active={screen == "profile"}
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
