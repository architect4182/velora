/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brown: {
          950: '#080403',
          900: '#2A1810',
          800: '#6B4423',
        },
        cream: {
          100: '#FFF8EC',
          200: '#F4E8D0',
          300: '#B89D6A',
        },
        navy: {
          950: '#020617',
          900: '#172554',
          800: '#3B82F6',
        },
        pista: {
          950: '#13200B',
          900: '#567A36',
          200: '#CDE8B5',
        }
      }
    },
  },
  plugins: [],
}
