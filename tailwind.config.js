/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "main": "auto 1fr",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
