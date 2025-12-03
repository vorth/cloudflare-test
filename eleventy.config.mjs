import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {

  // These folders must get copied to the output folder without processing;
  //   they do not contain any templates, just static assets.
  //
  eleventyConfig.addPassthroughCopy("universal");
  eleventyConfig.addPassthroughCopy("media");

  // This gives us the ability to create breadcrumb navigation structures.
  // See https://www.11ty.dev/docs/plugins/navigation/
  //
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

};