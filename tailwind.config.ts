import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
