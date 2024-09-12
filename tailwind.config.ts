import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },

      colors: {
        //Stellar colors (for navbar, etc)
        "stellar-icon-color": "#BFBFBF",
        "stellar-blue": "#0B103D",
        "stellar-white": "#EDF0F7",
        "stellar-grey": "#565555",
        "stellar-text": "000000a3",

        //strong colors
        "strong-blue": "#14162E",
        "strong-red": "#Eb2828",
        'purple-strong': '#763DF2',

        //light colors
        "light-White": "#EDF0F7",
        "light-yellow": "#F9B742",
        "light-blue": "#4461F2",
        "light-green": "#48BC5E",
        "light-red": "#EF4545",
        'purple-light': '#C364FF',
      },
      
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  }
}

export default config