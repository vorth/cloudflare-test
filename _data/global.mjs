

// This lets us use the local /media folder to store images for development,
// but in production we can use another source by setting the IMAGES_URL environment variable.
// Currently, we use CloudFlare R2 to serve images in production.

export default function () {
	return {
		imagesUrl: process.env.IMAGES_URL || "/media",
	};
}