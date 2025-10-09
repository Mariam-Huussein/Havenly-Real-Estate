/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        "primary-dull": "#f0f0f0",
        secondary: "#fdc700",
        tertiary: "#fadd6c",
        "gray-50": "#7b7b7b",
        "custom-gray-50": "#7b7b7b",
      },
    },
  },
  plugins: [],
};
