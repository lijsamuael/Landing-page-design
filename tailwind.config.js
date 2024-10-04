/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", 
        sm: "640px", 
        md: "768px", 
        mmd: "900px",
        lg: "1024px",
        xl: "1280px", 
        "2xl": "1536px", 
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
