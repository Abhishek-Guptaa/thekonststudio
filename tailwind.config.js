/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["NeueMachina"], 
        second: ["PPMori"],
        third: ["FontSpring"],
      },
      colors: { // ✅ Now correctly placed
        primary: "#FAEBD7",
        secondary: "#5EEAD4",
        accent: "#4f4537",
      },
    },
  },
  plugins: [],
};
