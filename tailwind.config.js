module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Libre Baskerville', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        maintitle: ['Rokkitt', 'serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
}
