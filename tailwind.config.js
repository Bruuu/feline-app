/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{ts,tsx}",
    "./src/components/*.{ts,tsx}",
    "./src/components/*.stories.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        lavender: "#E6E5FE",
      },
    },
  },
  plugins: [],
};
