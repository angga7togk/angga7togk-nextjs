/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Cursor from "@/components/Cursor";
import ModalFullscreen from "@/components/ModalFullscreen";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface Props {
  onLoadChange?: (isLoaded: boolean) => void;
  wallpaper?: string;
}

const LayoutFullscreen = ({
  children,
  wallpaper,
  onLoadChange,
}: PropsWithChildren<Props>) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isLandscape, setLandscape] = useState(false);

  const toggleFullscreen = () => {
    const elem = elementRef.current;
    if (elem) {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen(); /* Safari */
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen(); /* IE11 */
        }
        setFullscreen(false);
      } else {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if ((elem as any).webkitRequestFullscreen) {
          (elem as any).webkitRequestFullscreen(); /* Safari */
        } else if ((elem as any).msRequestFullscreen) {
          (elem as any).msRequestFullscreen(); /* IE11 */
        }
        setFullscreen(true);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    // Add event listeners
    window.addEventListener("resize", handleResize);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullscreenChange
    ); /* Safari */
    document.addEventListener(
      "msfullscreenchange",
      handleFullscreenChange
    ); /* IE11 */

    // Initial check
    handleResize();

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      ); /* Safari */
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      ); /* IE11 */
    };
  }, []);

  if (onLoadChange) onLoadChange(isFullscreen && isLandscape);

  return (
    <div
      ref={elementRef}
      className="w-screen h-screen relative overflow-hidden bg-red-500/30"
    >
      {isFullscreen && isLandscape ? (
        <video
          src="https://static.moewalls.com/videos/preview/2023/umbrella-kazuha-in-the-rain-genshin-impact-preview.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute z-[-1] "
        />
      ) : (
        <div className="w-full h-full absolute z-[-1] animate-move-blur">
          <img
            src={
              isFullscreen && isLandscape
                ? wallpaper || "/gif/krul-tepes.gif"
                : "/gif/krul-tepes.gif"
            }
            className="w-full h-full object-cover scale-105"
            alt="Background"
          />
        </div>
      )}

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <Cursor />

      {(!isFullscreen || !isLandscape) && (
        <ModalFullscreen toggleFullscreen={toggleFullscreen} />
      )}
      {children}
    </div>
  );
};

export default LayoutFullscreen;
