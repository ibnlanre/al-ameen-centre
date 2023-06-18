/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx,mdx}", "!./node_modules"],
  theme: {
    extend: {
      colors: {
        "india-green": "#0E820E",
      },
    },
  },
  plugins: [],
};
