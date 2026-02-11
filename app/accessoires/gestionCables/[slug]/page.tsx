import type { Metadata } from "next";
import GestionCableData from "@/JsonData/JsonGestionCable/GestionCableData.json";
import GestionCablesClient from "./ProductClient";

type GestionCableProduct = (typeof GestionCableData.rangements_cables)[0];

export async function generateStaticParams() {
	const allProducts = [...GestionCableData.rangements_cables];
	return allProducts.map((product) => ({
		slug: String(product.id),
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [...GestionCableData.rangements_cables] as GestionCableProduct[];
	const product = allProducts.find((item) => String(item.id) === slug);

	if (!product) return { title: "Produit non trouvé" };

	return {
		title: `${product.name} - ${product.subcategory} | Setup Télétravail`,
		description: product.description.slice(0, 160),
		alternates: {
			canonical: `https://www.setup-teletravail.fr/accessoires/gestionCables/${product.id}`,
		},
		openGraph: {
			title: product.name,
			description: product.description.slice(0, 160),
			images: [product.images[0]],
			url: `https://www.setup-teletravail.fr/accessoires/gestionCables/${product.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <GestionCablesClient slug={slug} />;
}
