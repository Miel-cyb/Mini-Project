/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      monsterrat:["Monntserrat", "sans-serif"],
      pacifico: ["Pacifico", 'sans-serif']
    },
    backgroundImage:{
      background: "url('src/assets/images/background.png')",
      backgroundrepeat: 'no-repeat'
    },
    colors: {
      netflixRed: '#e50914',
      netflixDark: '#221f1f',
      netflixGray: '#737373',
      white: "#fff",
      light: 'rgb(187, 164, 209)',
      darkBlue: '#191950da',
      deepBlue: '#172554',
    },
  },
},
  plugins: [],
}

