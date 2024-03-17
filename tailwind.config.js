/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {
      colors:{
        primary: '#F7B035',
        secondary: '#1d1d1d',
        subsecondary: "#343434",
        tertiary: "#256b3e"
      },
      fontFamily: {
        headerFont: ['Catamaran'],
        headerTitleFont: ['Lemonada']
      },
      backgroundImage:{
        'cement-texture': "url('/img/sement.jpg')",
        'twocards1': "url('/img/twocards1.webp')",
        'twocards2': "url('/img/twocards2.webp')",
      },
    },
  },
  plugins: [],
}

