export default {
  stored: {
    darkMode: {
      type: 'session',
      defaultValue() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      },
    },
  },
};