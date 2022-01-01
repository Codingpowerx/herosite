module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#6432f9',
        'my-green': '#01b96b',
        'background': '#2e3035',
        'text-input': 'rgba(255, 255, 255, 0.25)',
        'text-head': "#aed8ea"
      },
      screens: {
        'mid': '1180px'
      },
    },
  },
  plugins: [],
}
