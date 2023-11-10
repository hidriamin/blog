/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "300px" },
        // => @media (max-width: 300px) { ... }
      },
    },
  },
  plugins: [],
}
