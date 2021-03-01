module.exports = {
  theme: {
    colors: {
      white: '#fff',
      blue: {
        light: "#BFDBFE",
        DEFAULT: "#3B82F6",
        dark: "#1E3A8A",
      },
      pink: {
        light: "#F9A8D4",
        DEFAULT: "#DB2777",
        dark: "#831843",
      },
    },
    extend: {
      flexGrow: {
        2: "2",
        3: "3",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
