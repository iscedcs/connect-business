/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xxs': '300px',
        'xs': '475px',
        ...defaultTheme.screens,
      },
      colors: {
        'success': '#00B96B'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        h1: "80px",
        h2: "72px",
        h3: ["64px", "130%"],
        h4: "52px",
        h5: "40px",
        h6: ["27px", "150%"],
        subheading: [
          "18px",
          {
            letterSpacing: "160%",
          },
        ],
        large: ["20px", "150%"],
        regular: ["16px", "160%"],
        small: ["14px", "160%"],
        tiny: ["12px", "160%"],
      },
      boxShadow: {
        'mid': [
          '4px 0px 20px rgba(0, 0, 0, 0.04)',
          '0px 4px 24px rgba(0, 0, 0, 0.04)'
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        scale: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(1.9)', opacity: 0 },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'scale': 'scale 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}