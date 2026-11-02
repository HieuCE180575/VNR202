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
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F3EDE2',
          300: '#E8DFD1',
          400: '#D5C7B2',
        },
        crimson: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          600: '#9B111E',
          700: '#850E1A',
          800: '#6F0C16',
          900: '#580A11',
          primary: '#8B1515',
          dark: '#6E0F0F',
          light: '#A82020',
        },
        gold: {
          500: '#B47B16',
          600: '#99630E',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
        heading: ['Merriweather', 'Georgia', 'Cambria', 'serif'],
      },
      lineHeight: {
        'relaxed-vn': '1.7',
      }
    },
  },
  plugins: [],
};
export default config;
