/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'sans': ["Calibre","Inter","San Francisco","SF Pro Text","-apple-system", "system-ui","sans-serif"]
      }
    },
  },
  plugins: [],
}
