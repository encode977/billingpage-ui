module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: "#F8F8FF",
        primary: "#1A194D",
        secondary: "#62618F",
        border: "#CBCBD9",
        orange: "#EE4D38",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: "14px",
      tiny: ".875rem",
      base: "16px",
      lg: "1.125rem",
      xl: "20px",
      title: "32px",
      "2xl": "24px",
      "3xl": "48px",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
