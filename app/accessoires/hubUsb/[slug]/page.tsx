import type { Metadata } from "next";
import HubData from "@/JsonData/JsonHub/HubData.json";
import HubUsbClient from "./ProductClient";

type HubProduct = (typeof HubData.hubs_stations)[0];

export async function generateStaticParams() {
	const allProducts = [...HubData.hubs_stations];
	return allProducts.map((product) => ({
		slug: String(product.id),
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [...HubData.hubs_stations] as HubProduct[];
	const product = allProducts.find((item) => String(item.id) === slug);

	if (!product) return { title: "Produit non trouvé" };

	return {
		title: `${product.name} - ${product.subcategory} | Setup Télétravail`,
		description: product.description.slice(0, 160),
		alternates: {
			canonical: `https://www.setup-teletravail.fr/accessoires/hubUsb/${product.id}`,
		},
		openGraph: {
			title: product.name,
			description: product.description.slice(0, 160),
			images: [product.images[0]],
			url: `https://www.setup-teletravail.fr/accessoires/hubUsb/${product.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <HubUsbClient slug={slug} />;
}
