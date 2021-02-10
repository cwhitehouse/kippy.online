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
      mono: ['IBM Plex Mono', 'mono'],
    },
    extend: {
      colors: {
        donut: {
          DEFAULT: '#7f4fff',
          dark: '#c2acff',
        },
        cover: {
          DEFAULT: '#6c1adb',
          dark: '#ae8dda',
        },
        kullect: {
          DEFAULT: '#ff5509',
          dark: '#f88856',
        },
      },
      maxHeight: {
        '800': '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
