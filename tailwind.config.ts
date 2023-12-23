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
      },
      fontFamily: {
        oswald: "var(--font-oswald)",
        "roboto-condensed": "var(--font-roboto-condensed)",
        roboto: "var(--font-roboto)",
      },
      colors: {
        "menubar-bg": "#272a31",
        "custom-red": "#ec5242",
        "text-primary": "#fbfbfb",
        "text-secondary": "#575863",
        "text-light": "#a4abba",
      },
    },
  },
  plugins: [],
};
export default config;
