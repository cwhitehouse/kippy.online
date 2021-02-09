module.exports = {
  purge: [
    'src/**/*.html',
    'src/**/*.js',
    'src/**/*.ejs',
    'src/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
    },
    extend: {
      colors: {
        donut: '#7f4fff',
        cover: '#6c1adb',
        kullect: '#ff5509',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
