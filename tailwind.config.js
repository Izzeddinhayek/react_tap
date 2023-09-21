/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimaryLight: "#0768AC",
        brandSecondaryLight: "#03C180",
        bgDefaultLight: "#FFFFFF",
        bgBodyLight: "#F0F9FF",
        lineColorLight: "#DDDDDD",
        bodyTextLight: "#333333",
        heartColor: "#DC143C",
        brandPrimaryDark: "#0768AC",
        brandSecondaryDark: "#03C180",
        bgDefaultDark: "#1A1A1A",
        bgBodyDark: "#282828",
        lineColorDark: "#000000",
        bodyTextDark: "#EDEDED",
      },
    },

    fontFamily: {
      nunito: ['"Nunito Sans"'],
    },
  },
  plugins: [],
};
