import type { Metadata } from "next";
import SupportEcranData from "@/JsonData/JsonSupportEcran/SupportEcranData.json";
import SupportEcranClient from "./ProductClient";

export async function generateStaticParams() {
	const allProducts = [
		...SupportEcranData.supports_simples,
		...SupportEcranData.supports_doubles,
		...SupportEcranData.supports_triples,
	];
	return allProducts.map((product) => ({
		slug: String(product.id),
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [
		...SupportEcranData.supports_simples,
		...SupportEcranData.supports_doubles,
		...SupportEcranData.supports_triples,
	];
	const product = allProducts.find((item) => String(item.id) === slug);

	if (!product) return { title: "Produit non trouvé" };

	return {
		title: `${product.name} - ${product.subcategory} | Setup Télétravail`,
		description: product.description.slice(0, 160),
		alternates: {
			canonical: `https://www.setup-teletravail.fr/accessoires/supportEcran/${product.id}`,
		},
		openGraph: {
			title: product.name,
			description: product.description.slice(0, 160),
			images: [product.images[0]],
			url: `https://www.setup-teletravail.fr/accessoires/supportEcran/${product.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <SupportEcranClient slug={slug} />;
}
