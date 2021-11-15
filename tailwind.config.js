module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("assets/images/0002.jpg")',
        intro: 'url("assets/images/0001.jpg")',
        "custom-gradient": 'url("assets/images/gradient.jpg")',
      },
      colors: {
        primary: "#20BEE3",
        "primary-light": "#48DFD0",
        "custom-orange": "#f0a401",
        "custom-yellow": "#d1c120",
        "custom-green": "#3edb51",
        "custom-blue-1": "#038587",
        "custom-blue-2": "#133d8f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
