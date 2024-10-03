/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom small screen breakpoint
        sm: "640px", // Default small screen, can be overridden
        md: "768px", // Default medium screen
        mmd: "900px",
        lg: "1024px", // Default large screen
        xl: "1280px", // Default extra-large screen
        "2xl": "1536px", // Default 2xl screen
        "3xl": "1920px", // Custom extra-large screen breakpoint
      },
    },
  },
  plugins: [],
};
