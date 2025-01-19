/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{scripts,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        1: "0 0 0 0 #FF5C00",
      },
    },
  },
  plugins: [],
};
