/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // blue
        secondary: '#7A1C1C', // amber
        accent: '#000000', // emerald
        dark: '#1A1A1D', // gray-900
        light: '#FFF8F1', // gray-100
      },
      fontFamily: {
        TanNimbus: ['TAN-NIMBUS', 'sans-serif'],
        InstrumentserifItalic: ['Instrumentserif-italic', 'serif'],
        InstrumentserifRegular: ['Instrumentserif-regular', 'serif'],
        DMSansRegular: ['DMSans-Regular', 'serif'],
      },
    },
  },
  plugins: [],
}