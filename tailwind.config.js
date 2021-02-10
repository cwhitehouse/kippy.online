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
      sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ['IBM Plex Serif', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
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
