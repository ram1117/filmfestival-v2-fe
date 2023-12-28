import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg": "url('/images/main-page-bg.svg')",
        "cross-bg": "url('/icons/cross-icon-1.svg')",
        "jury-tile-bg": "url('/images/jury/checkered-box-light.svg')",
        "about-bg": "url('/images/about-page-bg.svg')",
        "past-event-1": "url('/images/festival-bg-1.svg')",
        "past-event-2": "url('/images/festival-bg-2.svg')",
      },
      backgroundColor: {
        "bg-color-primary": "#f7f7f7",
      },
      boxShadow: {
        "custom-light": "0 4px 6px -1px #e2e8f0, 0 2px 4px -2px #e2e8f0",
        custom: "0 4px 6px -1px #cbd5e1, 0 2px 4px -2px #cbd5e1",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        oswald: "var(--font-oswald)",
        "roboto-condensed": "var(--font-roboto-condensed)",
        roboto: "var(--font-roboto)",
        lato: "var(--font-lato)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 500ms linear forwards",
      },
      colors: {
        "menubar-bg": "#272a31",
        "custom-red": "#ec5242",
        "custom-red-light": "#fee1d9",
        "text-primary": "#fbfbfb",
        "text-secondary": "#272a31",
        "text-light": "#a4abba",
        "gray-dark": "#272a31",
        "gray-light": "#acadb1",
        "program-tile-bg": "#494a4c",
        "button-light": "#ebebeb",
      },
    },
  },
  plugins: [],
};
export default config;
