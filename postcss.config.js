module.exports = ({ env }) => {
  const plugins = {
    tailwindcss: {},
    autoprefixer: {},
  };

  if (env === 'production') {
    plugins.cssnano = {
      preset: 'default',
    };
  }

  return {
    plugins,
  };
};