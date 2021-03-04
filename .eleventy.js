// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addWatchTarget("tmp/main.css");
  eleventyConfig.addWatchTarget("tmp/main.js");
  eleventyConfig.addPassthroughCopy({ "tmp": "." });

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