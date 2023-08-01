/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        background: "#fff",
        borderColor: "#000",
      },
    },
  },
  plugins: [],
};
