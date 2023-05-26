/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      display1: ['64px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      display2: ['58px', '80px'],
      H1: ['44px', '140%'],
      H2: ['40px', '140%'],
      H3: ['32px', '140%'],
      H4: ['24px', '140%'],
      H5: ['20px', '140%'],
      H6: ['16px', '140%'],
      "Body-XL": ['20px', '180%'],
      "Body-LG": ['18px', '180%'],
      "Body-MD": ['16px', '180%'],
      "Body-SM": ['14px', '180%'],
      "Body-XS": ['12px', '180%'],
      "Caption-md": ['12px', '180%'],
      "Button-LG": ['16px', 'auto'],
      "Button-SM": ['14px', '24px'],
      "Overline-LG": ['16px', 'auto'],
      "Overline-SM": ['12px', '170%'],
    },
    extend: {
      colors: {
        primary: "#0182FE",
        secondary: "#FE3E01",
        "main-black": "#171F26",
        "blue-100": "#DFEFFF",
        "blue-200": "#60B1FE",
        "blue-300": "#0172DE",
        "orange-100": "#FFE7DF",
        "orange-200": "#FE8660",
        "orange-300": "#DE3601",
      },
    },
  },
  plugins: [],
}