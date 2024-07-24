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
        scaleUp: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          }
        },
        leftShow: {
          '0%': {
            transform: 'translateX(-1000px)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        rightShow: {
          '0%': {
            transform: 'translateX(1000px)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        leftHide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-1000px)',
          }
        },
        rightHide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(1000px)',
          }
        },
      },
      animation: {
        "move-left-right": "moveLeftRight 2s ease-in-out infinite",
        "move-blur": "moveAndBlur 15s ease-in-out infinite",
        'scale-up': 'scaleUp 0.5s ease-in-out forwards',
        'left-show': 'leftShow 0.5s ease-in-out forwards',
        'right-show': 'rightShow 0.5s ease-in-out forwards',
        'left-hide': 'leftHide 0.5s ease-in-out forwards',
        'right-hide': 'rightHide 0.5s ease-in-out forwards'
      },
    },
  },
  plugins: [],
};

export default config;
