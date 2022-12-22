/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ['Syncopate'],
        'roboto-mono': ['"Roboto Mono"']
      },
      maxWidth: { '8xl': '200rem' }
    }
  },
  daisyui: {
    themes: ['halloween']
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
}
