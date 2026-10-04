import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        emerald: "#1F3A2E",
        gold: "#C6A15B",
        ivory: "#FBF7F0",
        ink: "#242019",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-garamond)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
