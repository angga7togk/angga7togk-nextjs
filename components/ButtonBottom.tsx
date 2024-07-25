import React, { PropsWithChildren } from "react";

interface Props {
  disable?: boolean;
  onClick?: () => void;
}

const ButtonBottom = ({
  disable,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`${disable ? 'bg-red-800/50 border-red-800  px-2' : 'bg-red-500/50 border-red-500  px-4 hover:bg-red-500/80'} border h-9 lg:h-12 text-[10px] py-0.5 lg:text-sm font-bold text-gray-200  transition duration-300`}
    >
      {children}
    </button>
  );
};

export default ButtonBottom;
