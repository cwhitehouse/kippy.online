export default {
  data() {
    return {
      hovering: false,
      src: null,
      altSrc: null,
    };
  },

  computed: {
    hasAltSrc() {
      const { altSrc } = this;

      return altSrc != null &&
        altSrc.length > 0;
    },

    computedSrc() {
      const { hovering, src, altSrc, hasAltSrc } = this;

      if (hovering && hasAltSrc) return altSrc;
      return src;
    },
  },
}