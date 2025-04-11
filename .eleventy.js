module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Add a shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Customize the repository name as path prefix for GitHub Pages
  // If your repository is username.github.io, you can leave this empty
  // Otherwise, use the repository name: /repository-name
  const pathPrefix = "/mtm6407-static-site-trev0035";

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: pathPrefix
  };
}; 