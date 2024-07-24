import React, { PropsWithChildren, ReactElement, useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactElement;
  onClick?: () => void;
}

const ButtonLeft: React.FC<Props> = ({ title, subtitle, icon, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`w-1/2 flex items-center space-x-4 lg:space-x-6  text-start transition duration-300 ${hover && "translate-x-5"}`}
    >
      <div className="relative">
        <div
          className={`bg-white size-6 lg:size-8 transition duration-300 flex items-center justify-center text-gray-800 text-base lg:text-xl ${
            hover ? "rotate-45" : "-rotate-45"
          }`}
        >
          <div
            className={`transition duration-300 ${
              hover ? "-rotate-180" : "rotate-45"
            }`}
          >
            {icon}
          </div>
        </div>
      </div>
      <div>
        <div className="font-semibold text-base lg:text-xl p-0 translate-y-1">{title}</div>
        <div className="text-[10px] lg:text-base text-gray-200">{subtitle}</div>
      </div>
    </button>
  );
};

export default ButtonLeft;
