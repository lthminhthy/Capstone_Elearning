/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      colors: {
        'retro-primary': '#313552',
        'retro-red': '#B8405E',
        'retro-green': '#2EB086',
        'retro-beige': '#EEE6CE',
      },
    },
  },
  plugins: [],
}