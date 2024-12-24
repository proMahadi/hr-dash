/** @type {import('tailwindcss').Config} */

const plugin = require('tailwind-scrollbar');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1920px",
        // container: "1440px", // according to figma
      },
      colors: {
        background: "#F9FAF5",
        darkBackground: "#475569",
        reverseWhite: "#1e293b",
        alert:"#F96767",
        textLight: "#718096",
        textDark: "#393C43",
        borderColor: "#EEEEEF",
        primary: "#D9F27E",
        dark: "#222222",
      },
    },
    fontFamily: {
      inter: ["Inter", "serif"],
    },
  },
  plugins: [
    plugin({ nocompatible: true }),
  ],
};
