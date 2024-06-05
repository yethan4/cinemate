module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max':'850px'}
      },
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "#7dd3fc"
        }
      }
    },
  },
  plugins: [],
}