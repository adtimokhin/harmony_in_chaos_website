/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-text": "#000000",
        "subtitle-text": "#9A9A9A",
        "side-text-title": "#ADABAB",
        "side-text": "#BBBBBB",
        "secondary-title-decoration": "#8B8B8B"
      },
      screens:{
        "sm_phone": "320px",
        "phone": "430px",
        "tablet": "744px",
        "laptop": "1024px",
      }
    },
  },
  plugins: [],
};
