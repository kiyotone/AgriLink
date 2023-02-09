/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1024px" },

      md: { max: "768px" },

      sm: { max: "639px" },

      xs: { max: "380px" },
    },
    extend: {
      colors:{
        primary: "#18332f",
        secondary: "#19a463",
        button_secondary: "#19a463",
        background_color : "##dbd9d9"
      }
    },
  },
  plugins: [],
};
