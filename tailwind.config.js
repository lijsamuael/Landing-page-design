/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxxs: "350px",
        xxs: "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        mmd: "900px",
        llg: "1000px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

// className=" w-2/6 md:w-2/12 relative bottom-64 xxxs:bottom-80 xxs:bottom-64 xs:bottom-72 md:bottom-48 mmd:bottom-24 llg:bottom-[600px]    sm:left-4 md:left-0   flex flex-col text-white text-center justify-center items-center logo-placer"
