/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajustez si vous avez d'autres types de fichiers
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};
