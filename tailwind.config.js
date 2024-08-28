/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cosmic: ["CosmicVortex", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

