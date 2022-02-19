module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'hsl(231, 69%, 60%)',
          red: 'hsl(0, 94%, 66%)'
        },

        secondary: {
          blue:{
            100: 'hsl(229, 8%, 60%)',
            200: 'hsl(229, 31%, 21%)'
          }
        },
      },
    },
    plugins: [],
  }
}
