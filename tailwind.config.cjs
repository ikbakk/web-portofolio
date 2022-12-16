/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
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
        offset3tl: "-3px -3px 0 1px",
        offset4: "4px 4px 0 1px",
        offset4tl: "-4px -4px 0 1px",
        offset5: "5px 5px 0 1px",
        offset5tl: "-5px -5px 0 1px",
        offset6: "6px 6px 0 1px",
        offset6tl: "-6px -6px 0 1px",
        offset7: "7px 7px 0 1px",
        offset7tl: "-7px -7px 0 1px",
        offset8: "8px 8px 0 1px",
        offset8tl: "-8px -8px 0 1px",
        offset9: "9px 9px 0 1px",
        offset9tl: "-9px -9px 0 1px",
        offset10: "10px 10px 0 2px",
        offset10tl: "-10px -10px 0 2px",
        offset10l: "-8px 8px 0 3px",
        offset8l: "-7px 7px 0 1px",
      },
      zIndex: {
        "-1": -1,
        1: 1,
      },
      inset: {
        "inset-x-35": "35% 35% 35% 35%",
      },
    },
  },
  plugins: [],
};
