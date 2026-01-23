import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog Télétravail | Conseils, Guides & Actualités Home Office",
	description:
		"Articles et conseils pour optimiser votre télétravail. Ergonomie, productivité, aménagement bureau : retrouvez nos guides experts pour travailler efficacement de chez vous.",
	keywords: [
		"blog télétravail",
		"conseils home office",
		"ergonomie bureau",
		"productivité télétravail",
		"aménagement bureau maison",
		"bien-être télétravail",
		"guide travail à domicile",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/blog",
	},
	openGraph: {
		title: "Blog Télétravail | Conseils & Guides",
		description:
			"Articles experts pour optimiser votre espace de télétravail. Ergonomie, productivité et bien-être.",
		url: "https://setup-teletravail.fr/blog",
		type: "website",
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
