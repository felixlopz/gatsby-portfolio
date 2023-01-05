/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat"],
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1440px",
    },
    container: {
      padding: {
        DEFAULT: "1.5625rem",
        lg: "4.375rem",
      },
    },
    extend: {
      colors: {
        light: "#FAFAF7",
        dark: "#17181A",
      },
    },
  },
  plugins: [],
};
