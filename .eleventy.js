// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("tmp/styles/main.css");
  eleventyConfig.addPassthroughCopy({ "tmp/styles": "styles" });

  eleventyConfig.addWatchTarget("srcp/scripts/**/*.js");

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      output: "dist"
    },
    markdownTemplateEngine: 'ejs',
  };
};