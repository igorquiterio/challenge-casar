import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: '#32C0C6',
        greyNeutral: '#616161',
        borderAndLine: '#E3E6E9',
        placeholder: '#8C8C8C'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
