module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '29': '7.125rem',
        '54': '13.438rem'
      },
      width: {
        '76': '21.438rem'
      },
      colors: {
        'swello-dark': '#161724',
        'main-content': '#0E0F1B',
        'btn-pink': '#FA55FF'
      },
      boxShadow: {
        'swello-shadow': '0px 28px 42px rgba(250, 85, 255, 0.2)',
      },
      fontFamily: {
        'blender': ['Blender', 'sans-serif'],
        'axi': ['Axiforma', 'sans-serif'],
      },
      fontSize: {
        'xxl': '1.375'
      },
      margin: {
        '13': '3.125rem',
        '15': '3.75rem',
        '70': '17rem',
      }
    },
  },
  plugins: [],
}