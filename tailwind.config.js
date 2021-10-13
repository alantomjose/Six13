module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("assets/images/0002.jpg")',
        intro: 'url("assets/images/0001.jpg")',
      },
      colors: {
        primary: "#20BEE3",
        "primary-light": "#48DFD0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
