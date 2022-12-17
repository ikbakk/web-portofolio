/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ["Syncopate"],
        "roboto-mono": ['"Roboto Mono"'],
      },
    },
  },
  daisyui: {
    themes: ["forest", "garden"],
  },
  plugins: [require("daisyui")],
};
