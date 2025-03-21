/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "69xl": "3px 3px 6px rgba(1,1,1,0.2)",
        "99xl": "0 3px 15px rgba(0, 0, 0, 0.89)",
      },
      minWidth: {
        "7" : "160px"
      }
    },
  },
  plugins: [],
};
