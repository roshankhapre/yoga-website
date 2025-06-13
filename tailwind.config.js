// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Poppins", "sans-serif"],
        heading: ["Caveat", "cursive"],
      },
      fontSize: {
        sm: "0.95rem", // slightly larger than 0.875rem
        base: "1.1rem", // default text
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "2.75rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
};
