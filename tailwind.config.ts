import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        responsive: "responsive",
        "motion-safe": "motion-safe",
        "motion-reduce": "motion-reduce",
      },

      colors: {
        "custom-color": "#b96c93",
        "bg-custom-color": "#E6E0E9",
        "bg-custom-color-2": "#DCD1E2",
      },
    },
  },
  plugins: [],
};
export default config;
