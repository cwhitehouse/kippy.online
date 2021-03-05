export default {
  usedMouse: false,
  showingModal: false,
  systemDark: false,

  stored: {
    mode: {
      type: 'local',
      defaultValue: 'auto',
    },
  },

  get workHref() {
    const pathname = window.location.pathname;
    const defaultPath = '/';

    if (pathname === defaultPath) return '#work-history';
    return defaultPath;
  },

  get projectsHref() {
    const pathname = window.location.pathname;
    const defaultPath = '/projects/';

    if (pathname === defaultPath) return '#projects';
    return defaultPath;
  },

  get darkMode() {
    const { mode, systemDark } = this;

    console.log('dark mode changed!');
    console.log(` -> ${mode}`);

    if (mode === 'light') return false;
    if (mode === 'dark') return true;
    return systemDark;
  },

  beforeConnected() {
    this.updateSystemDark();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateSystemDark.bind(this));
  },

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
    console.log('Setting the dark mode mode...');
    console.log(` -> ${mode}`);

    this.mode = mode;

    if (!this.usedMouse)
      this.closeModal();
  },

  closeModal() {
    this.usedMouse = false;
    this.showingModal = false;
  },
};