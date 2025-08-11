/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7A1C1C', // Assuming primary is the same as secondary in your context
        secondary: '#7A1C1C', // Assuming secondary is the same as primary in your context
        accent: '#000000', // Assuming accent is the same as dark in your context
        dark: '#1A1A1D', // Assuming dark is the same as light in your context
        light: '#FFF8F1', // Assuming light is the same as light in your context
      },
      fontFamily: {
        TanNimbus: ['TAN-NIMBUS', 'sans-serif'],
        InstrumentserifItalic: ['Instrumentserif-italic', 'serif'],
        InstrumentserifRegular: ['Instrumentserif-regular', 'serif'],
        DMSansRegular: ['DMSans-Regular', 'serif'],
        DMSansMedium: ['DMSans-Medium', 'serif'],
        DMSansBold: ['DMSans-Bold', 'serif'],
        DegularSemibold: ['Degular-Semibold', 'serif'],
      },
      boxShadow: {
        'inner-white': 'inset 0 -4px 6px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}