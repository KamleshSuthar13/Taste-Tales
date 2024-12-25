/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F3C", // Burnt Orange
        secondary: "#4E342E", // Dark Chocolate Brown
        accent: "#FFF8E7", // Cream
        textPrimary: "#212121", // Deep Black
      },
    },
  },
  plugins: [],
}

