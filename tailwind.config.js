module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'
    ,'./src/HomePage.js'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        gradient: {
          from: '#F87516',
          to: '#5E11FF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
