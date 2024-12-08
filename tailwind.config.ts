import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FB2E86',
        offNavyBlue: '#3F509E',
        purple: '#7E33E0',
        navyBlue: '#151875',
        offPurple: '#9F63B5',
        red: '#FB2448',
        skyBlue: '#F1F0FF',
        blue: '#2F1AC4',
        pantonePurple: '#E0D3F5',
        offBlue: '#151875',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

