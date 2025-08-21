/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        light: "rgb(var(--background-light))",
        dark: "rgb(var(--background-dark))",
      },
      gray: {
        50: "rgb(var(--gray-50))",
        100: "rgb(var(--gray-100))",
        200: "rgb(var(--gray-200))",
        300: "rgb(var(--gray-300))",
        400: "rgb(var(--gray-400))",
        600: "rgb(var(--gray-600))",
        700: "rgb(var(--gray-700))",
        800: "rgb(var(--gray-800))",
        900: "rgb(var(--gray-900))",
        950: "rgb(var(--gray-950))",
      },
      primary: {
        DEFAULT: "rgb(var(--primary))",
        light: "rgb(var(--primary-light))",
        dark: "rgb(var(--primary-dark))",
      },
      white: {
        DEFAULT: "rgb(255,255,255)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
