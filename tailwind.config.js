/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0182FE",
        secondary: "#FE3E01",
        "main-black": "#171F26",
        "blue-100": "#DFEFFF",
        "blue-200": "#090325",
        "blue-300": "#0172DE",
        "orange-100": "#FFE7DF",
        "orange-200": "#FE8660",
        "orange-300": "#DE3601",
      },
    },
  },
  plugins: [],
}