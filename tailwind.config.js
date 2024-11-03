/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E76FE",
        dark: "#111827",
      },
      fontFamily: {
        inter: "Inter, serif",
      },
    },
  },
  plugins: [],
};
