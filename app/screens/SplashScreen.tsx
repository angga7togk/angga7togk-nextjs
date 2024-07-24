'use client'
import React, { useState, useEffect } from "react";
import { ScreenProps } from "./constants";
import CustomTypeWriter from "@/components/CustomTypeWriter";

const SplashScreen = ({ active, onChangeScreen }: ScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (active) {
      let progressInterval: NodeJS.Timeout;

      const startProgress = () => {
        setProgress(0);
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              if (onChangeScreen) {
                onChangeScreen("home");
              }
              return 100;
            }
            return prev + 1;
          });
        }, 100); // 5000ms / 100 = 50ms
      };

      startProgress();

      return () => clearInterval(progressInterval);
    }
  }, [active, onChangeScreen]);

  return (
    <main
      className={`w-full h-screen p-4 z-10 relative animate-scale-up grid grid-rows-7 ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-24 bg-black/30 absolute bottom-0 left-0 flex flex-col items-center justify-end">
        <CustomTypeWriter strings={['Selamat Datang di Angga7Togk Profile...']} />
        <div
          className="h-0.5 bg-red-500 mb-2"
          style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
        ></div>
      </div>
    </main>
  );
};

export default SplashScreen;
