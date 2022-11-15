/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#009FFF",
          2: "#1B998B",
          3: "#EC1B22",
        },
      },
    },
  },
  plugins: [],
};
