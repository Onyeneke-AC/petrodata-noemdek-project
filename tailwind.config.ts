import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backBlack: "#171717",
        backGray: "#262626",
        tableBorder: "#36353A",
        primaryRed: "#F04438",
        primaryGraphRed: "#FD3B31",
        primaryWhite: "#FAFAFA",
        secondaryWhite: "#F5F5F5",
        primaryBlue: "#1E88E5",
        primaryYellow: "#F79009",
        primaryGreen: "#12B76A",
        primaryGraphGreen: "#34C85A",
        primarySideGreen: "#009688",
        primaryIceGreen: "#00796B",
        secondaryGreen: "#26A69A",
        specialGreen: "#00897B",
        primaryTextGray: "#D4D4D4",
        sideTextGray: "#A3A3A3",
        darkerGray: "#525252",
        lightGray: "#404040",
        secondaryGray: "#737373",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
