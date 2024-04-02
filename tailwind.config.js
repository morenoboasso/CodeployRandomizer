/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-custom': "url('/assets/backgroundCodeploy.png')",
      },
      colors : {
        'white-custom':'#FFFAFA',
        'blue-custom':'#D7E4E8',
        'green-custom':'#509994',
        'black-custom':'#060505',
        'blue-night-custom':'#297189',
      }
    },
  },
  plugins: [],
}

