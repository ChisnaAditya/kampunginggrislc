import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primaryLC: "#EA1E24",
        secondaryLC: "#FCCF00",
      },
      animation: {
        "infinite-floating": "infinite-floating 5s infinite",
        "infinite-slide-left": "infinite-slide-left 1s linear infinite",
        "infinite-scroll-x": "infinite-scroll-x 25s linear infinite",
        "infinite-scroll-y": "infinite-scroll-y 15s linear infinite",
        "infinite-scroll-x-reverse":
          "infinite-scroll-x-reverse 25s linear infinite",
        "infinite-scroll-y-reverse":
          "infinite-scroll-y-reverse 15s linear infinite",
      },
      keyframes: {
        "infinite-floating": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10%)" },
        },
        "infinite-slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-20%)" },
        },
        "infinite-scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "infinite-scroll-x-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "infinite-scroll-y-reverse": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), nextui()],
};
export default config;
