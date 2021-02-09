export default {
  data() {
    return {
      darkMode: false,
    };
  },

  methods: {
    toggle() {
      this.darkMode = !this.darkMode;
      console.log('dark mode toggled!');
      console.log(`  -> ${this.darkMode}`);
    },
  },
};