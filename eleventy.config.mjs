export default async function (eleventyConfig) {
	// Output directory: _site

	eleventyConfig.addPassthroughCopy("universal");
	eleventyConfig.addPassthroughCopy("media");
};