import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005CCB",
        secondary: "#56BFF4",
        tertiary: "#A1A1A1",
      },
      fontFamily: {
        CoHeadlineBold: ["CoHeadlineBold", "sans-serif"],
        CoText: ["CoText", "sans-serif"],
      },
      backgroundImage: {
        home: "url('/bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
