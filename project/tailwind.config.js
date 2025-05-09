/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        burgundy: {
          50: '#fcf5f5',
          100: '#f9ebeb',
          200: '#f2d6d6',
          300: '#e8b5b5',
          400: '#da8a8a',
          500: '#c96060',
          600: '#b63f3f',
          700: '#97302f',
          800: '#7c2a2a',
          900: '#672727',
          950: '#381313',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f6ebc7',
          200: '#eedb8f',
          300: '#e7c757',
          400: '#e2b73e',
          500: '#d89f2a',
          600: '#c07d21',
          700: '#9d5c1d',
          800: '#81481d',
          900: '#6c3b1b',
          950: '#3f1f0d',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};