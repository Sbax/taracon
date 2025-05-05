import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import timeslotColors from "./tailwind-plugins/timeslot-colors";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff9770",
          "primary-content": "#100016",

          secondary: "#ff70a6",
          "secondary-content": "#000700",

          accent: "#70d6ff",
          "accent-content": "#d2e2e3",

          neutral: "#282828",
          "neutral-content": "#c8c8c6",

          "base-100": "#f2f2f2",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#2e2e2c",

          info: "#60a5fa",
          "info-content": "#d3e3f0",

          success: "#84cc16",
          "success-content": "#000f09",

          warning: "#fde047",
          "warning-content": "#160d00",

          error: "#be123c",
          "error-content": "#f9d6d3",
        },
      },
    ],
  },

  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [daisyui, timeslotColors],
};
export default config;
