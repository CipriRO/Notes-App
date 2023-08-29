/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "divider-white": "#E8E8E8",
        "divider-dark": "#ffffff1a",
        "box-primary-dark": "#2b2d2e",
        "box-primary-light": "#e4e4e4",
        "box-secondary-dark": "#242627",
        "box-secondary-light": "#dbdada",
        "subtle-light": "#969696",
        "subtle-dark": "#ffffff66",
        success: "#22c55e",
        error: "#ef4444",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
