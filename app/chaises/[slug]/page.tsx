import type { Metadata } from "next";
import ChaiseData from "@/JsonData/JsonChaise/ChaiseData.json";
import ChaiseClient from "./ProductClient";

type ChaiseProduct = (typeof ChaiseData.chaises_ergonomiques)[0];

export async function generateStaticParams() {
	const allProducts = [...ChaiseData.chaises_ergonomiques];
	return allProducts.map((product) => ({ slug: String(product.id) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const allProducts = [...ChaiseData.chaises_ergonomiques] as ChaiseProduct[];
	const chaise = allProducts.find((item) => String(item.id) === params.slug);
	if (!chaise) return { title: "Produit non trouvé" };
	return {
		title: `${chaise.nom} - Chaise Ergonomique | Setup Télétravail`,
		description: chaise.description.slice(0, 160),
		alternates: { canonical: `https://www.setup-teletravail.fr/chaises/${chaise.id}` },
		openGraph: {
			title: chaise.nom,
			description: chaise.description.slice(0, 160),
			images: chaise.images?.[0] ? [chaise.images[0]] : [chaise.image],
			url: `https://www.setup-teletravail.fr/chaises/${chaise.id}`,
		},
	};
}

export default function Page({ params }: { params: { slug: string } }) {
	return <ChaiseClient slug={params.slug} />;
}
