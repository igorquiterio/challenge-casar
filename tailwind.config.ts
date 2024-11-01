import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primaryLight: '#D4EDEE',
        primary: '#32C0C6',
        primaryDark:'#329599',
        placeholder: '#8C8C8C',
        greyNeutral: '#616161',
        greyDark:'#4E4E4E',
        whiteMatte: '#F3F3F5',
        borderAndLine: '#E3E6E9',
        success: '#5CBB5C',
        warning:'#FFB22B',
        danger:'#FC4B6C'
      },
      fontSize: {
        h1: '1.3125rem',
        h2: '1.125rem',
        h3: '1.125rem',
        h4: '1rem',
        h5: '1rem',
        md: '0.875rem',
        sm: '0.75rem'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
