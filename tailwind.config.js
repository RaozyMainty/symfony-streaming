/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#333',
        "select-color": '#222',
        "dark":"#1b1b1b",
        "dark-gradient":"rgba(0,0,0,0.9)",
        "dark-light":"rgba(0,0,0,0.6)",
        "dark-transparent":"rgba(0,0,0,0.6)",
        "darker":"#121212"
      },
      strokeWidth: {
        '4': '4px',
      },
      height: {
        "450":"450px"
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
