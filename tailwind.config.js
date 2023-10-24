/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-bg": "#F9F8F0",
        "blue-primary": "#5BA4FA",
        "gray-primary": "#B8C6D7",
        "gray-dark": "#858A8F",
        "red-primary": "#EE4A4A",
        "gray-red-l-h": "#F5DFDF",
      }
    },
  },
  plugins: [],
}

