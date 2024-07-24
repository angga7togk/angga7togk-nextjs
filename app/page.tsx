/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import LayoutFullscreen from "./LayoutFullscreen";
import HomeScreen from "./screens/HomeScreen";

const Home: React.FC = () => {
  const [screen, setScreen] = useState("home");

  return (
    <LayoutFullscreen>
      <HomeScreen
        active={screen == "home"}
        onChangeScreen={(s) => {
          setScreen(s);
        }}
      />
    </LayoutFullscreen>
  );
};

export default Home;
