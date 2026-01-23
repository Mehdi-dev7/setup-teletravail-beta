import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Comparateur Produits Télétravail | Comparez Écrans, Bureaux, Chaises",
	description:
		"Outil de comparaison interactif pour équipements de télétravail. Comparez jusqu'à 4 produits côte à côte : écrans, bureaux assis-debout, chaises ergonomiques et accessoires.",
	keywords: [
		"comparateur télétravail",
		"comparer écrans",
		"comparer bureaux",
		"comparer chaises",
		"outil comparaison",
		"versus télétravail",
		"comparatif prix",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/comparatifs",
	},
	openGraph: {
		title: "Comparateur Produits Télétravail | Outil Interactif",
		description:
			"Comparez facilement les équipements de télétravail. Trouvez le meilleur produit selon vos critères.",
		url: "https://setup-teletravail.fr/comparatifs",
		type: "website",
	},
};

export default function ComparatifLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
