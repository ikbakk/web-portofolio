/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#2E2E2E",
        primaryLight: "#F2ED72",
        palePink: "#FFB9DB",
        fadeBlack: "#3E3E3E",
        lightBlue: "#C2F4FF",
        paleViolet: "#C0C4E9",
        paleGreen: "#DAF6CC",
        paleYellow: "#FFEBB9",
        paleSkin: "#FFE3CE",
        white: "#FFFFFF",
      },
      flexBasis: {
        5: "5%",
        40: "40%",
        50: "50%",
        60: "60",
        90: "90%",
      },
      fontFamily: {
        syncopate: ["Syncopate"],
        "roboto-mono": ['"Roboto Mono"'],
      },
      boxShadow: {
        offset3: "3px 3px 0 1px",
      },
      zIndex: {
        "-1": -1,
        1: 1,
      },
    },
  },
  plugins: [],
};
