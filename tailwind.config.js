import shadows from "@mui/material/styles/shadows";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Define 'font-roboto'
        lobster: ["Lobster", "cursive"], // Define 'font-lobster'
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        titleFadeIn: "titleFadeIn 3s ease-out forwards", // New animation for title
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        titleFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20%)", // Start slightly below
          },
          "100%": {
            opacity: "1",
            transform: "translateY(10%)", // End at the original position
          },
        },
      },
    },
  },
  plugins: [],
};
