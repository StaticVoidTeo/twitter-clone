/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "narrow":{"raw":"(max-width:1320px)"},
        "narrow1":{"raw":"(max-width:1110px)"},
        "narrow2":{"raw":"(max-width:770px)"},
        "narrow3":{"raw":"(max-width:670px)"},
      },
      spacing:{
        "520":"520px",
        "518":"518px",
        "noScBar":"calc(100vw - 20px)"
      }
    },
  },
  plugins: [],
}

