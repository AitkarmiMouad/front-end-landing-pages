module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          blue: 'hsl(231, 69%, 60%)',
          red: 'hsl(0, 94%, 66%)'
        },

        secondary: {
          blue: {
            100: 'hsl(229, 8%, 60%)',
            200: 'hsl(229, 31%, 21%)'
          }
        },
      },
    },
    plugins: [],
    screens: {
      'sm-max': { 'max': '480px' },
      'md-max': { 'max': '768px' },
      'lg': '768px',
    },
  }
}
