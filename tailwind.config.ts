import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 0px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        moveLeftRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-5px)" },
        },
        moveAndBlur: {
          "0%, 100%": {
            transform: "translateX(0)",
            filter: "blur(2px)",
          },
          "25%": {
            filter: "blur(1px)",
          },
          "50%": {
            transform: "translateX(-15px)",
            filter: "blur(3px)",
          },
          "75%": {
            filter: "blur(5px)",
          },
        },
      },
      animation: {
        "move-left-right": "moveLeftRight 2s ease-in-out infinite",
        "move-blur": "moveAndBlur 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
