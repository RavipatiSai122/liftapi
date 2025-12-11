/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        softBeige: "#EFF3FF",      // very light blue (background tint)
        warmCream: "#FFFFFF",      // pure white
        elevatorYellow: "#F59E0B", // strong amber gold (highlight)
        elevatorOrange: "#E7661F", // Premium bold orange (main brand color)
        darkText: "#0F172A",       // deep slate (almost black)
      },
    },
  },
  plugins: [],
};
