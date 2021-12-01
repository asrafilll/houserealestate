module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "3.5xl": "28px",
      },
      colors: {
        gray: {
          850: "#232323",
          950: "#101419",
          750: "#ADB2B8",
        },
        blue: {
          450: "#739AD4",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/assets/img/herobackground.png')",
      },
    },
  },
  variants: {
    extend: {
      colors: ["active"],
      fontWeight: ["hover", "focus"],
    },
  },
  plugins: [],
};
