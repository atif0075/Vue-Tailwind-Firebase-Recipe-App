
module.exports = {
  mode: 'jit',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow: '#fec303',
        dark: '#1A2238',
        blue: "#9DAAF2",
        red: '#FF6A3D',
        'dark-red': '#e2613a',
        yellow: '#F4DB7D',
      },
    },
    container: {
      center: true
    }
  },
  plugins: [
 
 
  ],
}