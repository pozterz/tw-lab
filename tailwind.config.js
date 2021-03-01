const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  presets: [require("./themeA.presets.js")],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      gray: '#878C8E',
    },
    extend: {
      screens: {
        "3xl": "1600px",
        ...defaultTheme.screens,
      },
      colors: {
        ...defaultTheme.colors
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
