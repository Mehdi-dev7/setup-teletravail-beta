import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://setup-teletravail.fr";

	// Pages statiques principales
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/ecrans`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/bureaux`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/chaises`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/guides`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/comparatifs`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		// Périphériques
		{
			url: `${baseUrl}/peripheriques/claviers&souris`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/peripheriques/eclairage`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/peripheriques/audio&visio`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		// Accessoires
		{
			url: `${baseUrl}/accessoires/supportEcran`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/accessoires/tapisSouris`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/accessoires/gestionCables`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/accessoires/hubUsb`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.7,
		},
	];

	// Pages de détail des produits (écrans)
	const ecranIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const ecranPages = ecranIds.map((id) => ({
		url: `${baseUrl}/ecrans/${id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// Pages de détail des bureaux
	const bureauIds = [1, 2, 3, 4, 5];
	const bureauPages = bureauIds.map((id) => ({
		url: `${baseUrl}/bureaux/${id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	// Pages de détail des chaises
	const chaiseIds = [1, 2, 3, 4, 5];
	const chaisePages = chaiseIds.map((id) => ({
		url: `${baseUrl}/chaises/${id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...staticPages, ...ecranPages, ...bureauPages, ...chaisePages];
}
