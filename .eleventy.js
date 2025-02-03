
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("bio", function(name) {
    return `<p class="credits">Written by ${name}, the space traveler who is currently stuck in time`;
  });
};