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
    workHref() {
      const pathname = window.location.pathname;
      const defaultPath = '/';

      if (pathname === defaultPath) return '#work-history';
      return defaultPath;
    },

    projectsHref() {
      const pathname = window.location.pathname;
      const defaultPath = '/projects/';

      if (pathname === defaultPath) return '#projects';
      return defaultPath;
    },

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
      this.usedMouse = true;
      this.showingModal = true;
    },

    clickedDarkMode(e) {
      this.usedMouse = false;
      this.showingModal = true;

      // triggered by the keyboard
      if (e.detail === 0) {
        this.$nextRender(() => {
          this.$refs.auto.focus();
        });
      }
    },

    clickedOutside() {
      if (!this.usedMouse)
        this.closeModal();
    },

    setMode(mode) {
      this.mode = mode;

      if (!this.usedMouse)
        this.closeModal();
    },

    closeModal() {
      this.usedMouse = false;
      this.showingModal = false;
    },
  },

  beforeConnected() {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  },
};