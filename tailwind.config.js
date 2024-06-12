/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage : {
        'shopImage' : "url('shop_bg.webp')"
      }
    },
  },
  plugins: [],
}

