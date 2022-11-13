/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      colors: {
        'retro-primary': '#343434',
        'retro-second': '#E6B31E',
        'retro-third':'#CACACA' ,
        'retro-beige': '#FCFAF1',


        // 'retro-primary': '#EFEFEF',
        // 'retro-second': '#FFDE00',
        // 'retro-third':'#FFFAE7' ,
        // 'retro-beige': '#D2001A' ,



        // 'retro-primary': '#313552',
        // 'retro-red': '#B8405E',
        // 'retro-green': '#2EB086',
        // 'retro-beige': '#EEE6CE',
        // retro-red: second
        // retro-green:third
        
      },
    },
  },
  plugins: [],
}