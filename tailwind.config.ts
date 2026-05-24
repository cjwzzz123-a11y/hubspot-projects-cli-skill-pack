import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201b",
        muted: "#5f6f66",
        line: "#d8e0da",
        paper: "#f8faf8",
        primary: "#176b4d",
        amber: "#c77700",
        code: "#111816",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 27, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

