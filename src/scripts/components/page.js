export default {
  data() {
    return {
      usedMouse: false,
      showingModal: false,
      systemDark: false,
    };
  },

  stored: {
    mode: {
      type: 'local',
      defaultValue: 'auto',
    },
  },

  computed: {
    darkMode() {
      const { mode, systemDark } = this;

      if (mode === 'light') return false;
      if (mode === 'dark') return true;
      return systemDark;
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    updateSystemDark() {
      this.systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    mouseOverDarkMode() {
      // this.usedMouse = true;
      this.showingModal = true;
    },

    clickedDarkMode() {
      console.log('clikceddarkmode!');

      this.usedMouse = false;
      this.showingModal = true;
    },

    setMode(mode) {
      if (!this.usedMouse)
        this.showingModal = false;

      this.mode = mode;
    },
  },

  beforeConnected() {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  },
};