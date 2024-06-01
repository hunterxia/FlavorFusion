import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: "hsl(14, 45%, 36%)",
          dark_raspberry: "hsl(332, 51%, 32%)",
        },
        neutral: {
          white: " hsl(0, 0%, 100%)",
          rose_white: "hsl(330, 100%, 98%)",
          eggshell: "hsl(30, 54%, 90%)",
          light_grey: " hsl(30, 18%, 87%)",
          wenge_brown: "hsl(30, 10%, 34%)",
          dark_charcoal: "hsl(24, 5%, 18%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
