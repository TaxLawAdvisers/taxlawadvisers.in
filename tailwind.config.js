const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        "tla-green": {
          50: "#f4fbf8",
          100: "#eaf6f1",
          200: "#cae9db",
          300: "#aadbc5",
          400: "#6ac19a",
          500: "#2aa66e",
          600: "#269563",
          700: "#207d53",
          800: "#196442",
          900: "#155136",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
