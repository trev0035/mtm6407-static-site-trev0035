module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Pass through .nojekyll file
  eleventyConfig.addPassthroughCopy(".nojekyll");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Add a shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Determine if we're building for GitHub Pages
  // If NETLIFY environment variable exists, we're on Netlify
  const isNetlify = process.env.NETLIFY === 'true';
  
  // For GitHub Pages, use the repository name as path prefix
  // For Netlify, no path prefix is needed
  const pathPrefix = isNetlify 
    ? '/' 
    : "/mtm6407-static-site-trev0035";

  console.log(`Building for ${isNetlify ? 'Netlify' : 'GitHub Pages'} with pathPrefix: ${pathPrefix}`);

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