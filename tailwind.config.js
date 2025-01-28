/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{scripts,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "3px 3px 10px -5px #FF5C00",
      },
    },
  },
  plugins: [],
};
