import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/_next/", "/private/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
			},
			{
				userAgent: "Bingbot",
				allow: "/",
			},
		],
		sitemap: "https://setup-teletravail.fr/sitemap.xml",
		host: "https://setup-teletravail.fr",
	};
}
