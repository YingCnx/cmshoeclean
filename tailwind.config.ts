import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F2F2A",
          primary: "#1F4F46",
          accent: "#6FA6A0",
          soft: "#E9F3F1",
        },
      },
    },
  },
  plugins: [],
};

export default config;
