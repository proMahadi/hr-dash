/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1920px",
      },
      colors: {
        background: "#F9FAF5",
        darkBackground: "#475569",
        reverseWhite: "#1e293b",
        textLight: "#718096",
        primary: "#D9F27E",
        dark: "#222222",
      },
    },
    fontFamily: {
      inter: ["Inter", "serif"],
    },
  },
  plugins: [],
};
