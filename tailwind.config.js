/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.15)",
        "button-gradient":
          "linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(217, 100%, 50%, 1) 50%, hsla(152, 100%, 50%, 1) 100%);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      backgroundSize: {
        "size-200": "200% 200%",
        "size-100": "100% 100%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    screens: {
      xxs: "440px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    plugins: [],
  },
};
