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
      colors: {
        "menubar-bg": "#272a31",
        "custom-red": "#ec5242",
        "text-primary": "#fbfbfb",
        "text-secondary": "#272a31",
        "text-light": "#a4abba",
        "gray-dark": "#272a31",
        "program-tile-bg": "#494a4c",
      },
    },
  },
  plugins: [],
};
export default config;
