import React, { ReactElement, useState } from 'react'
interface Props {
  title: string;
  icon: ReactElement;
  onClick?: () => void;
}
const ButtonLeft2: React.FC<Props> = ({ title, icon, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={onClick}
      className={`px-2 py-2 flex items-center space-x-4 lg:space-x-6  text-start transition duration-300 hover:translate-x-5 hover:bg-gradient-to-l from-red-500/50 to-transparent`}
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
        <div className="font-semibold text-base lg:text-xl p-0 translate-y-1">
          {title}
        </div>
      </div>
    </button>
  );
}

export default ButtonLeft2