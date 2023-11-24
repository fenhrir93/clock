/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
