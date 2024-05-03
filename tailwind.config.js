/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx,css}"],
  theme: {
    fontFamily: {
      'oddval': ['Oddval'],
      'onest': ['Onest']
    },
    extend: {
      transitionDelay: {
        '160': '160ms',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}