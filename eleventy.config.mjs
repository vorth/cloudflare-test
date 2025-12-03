
export default async function (eleventyConfig) {

  // These folders must get copied to the output folder without processing;
  //   they do not contain any templates, just static assets.
  //
  eleventyConfig.addPassthroughCopy("universal");
  eleventyConfig.addPassthroughCopy("media");

};