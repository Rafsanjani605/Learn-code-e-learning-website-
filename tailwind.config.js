/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '110' : '500px',
        '115' : '620px',
        '120': '900px',
      },

    },
  },
  plugins: [require("daisyui")],

}

