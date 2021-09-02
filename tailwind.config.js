// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Modernist",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      // gray: colors.trueGray,
      // gray: colors.warmGray,
      red: colors.red,
      // yellow: colors.yellow,
      yellow: colors.amber,
      // green: colors.green,
      green: colors.emerald,
      blue: colors.blue,
      sky: colors.sky,
      lime: colors.lime,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
      // purple: colors.purple,
      purple: colors.violet,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
      blueGray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
