import type { Metadata } from "next";
import TapisSourisData from "@/JsonData/JsonTapisSouris/TapisSourisData.json";
import TapisSourisClient from "./ProductClient";

export async function generateStaticParams() {
	const allProducts = [
		...TapisSourisData.tapis_larges,
		...TapisSourisData.tapis_souris_ergonomiques,
		...TapisSourisData.tapis_clavier_ergonomiques,
	];
	return allProducts.map((product) => ({
		slug: String(product.id),
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [
		...TapisSourisData.tapis_larges,
		...TapisSourisData.tapis_souris_ergonomiques,
		...TapisSourisData.tapis_clavier_ergonomiques,
	];
	const product = allProducts.find((item) => String(item.id) === slug);

	if (!product) return { title: "Produit non trouvé" };

	return {
		title: `${product.name} - ${product.subcategory} | Setup Télétravail`,
		description: product.description.slice(0, 160),
		alternates: {
			canonical: `https://www.setup-teletravail.fr/accessoires/tapisSouris/${product.id}`,
		},
		openGraph: {
			title: product.name,
			description: product.description.slice(0, 160),
			images: [product.images[0]],
			url: `https://www.setup-teletravail.fr/accessoires/tapisSouris/${product.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <TapisSourisClient slug={slug} />;
}
