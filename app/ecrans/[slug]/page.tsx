import type { Metadata } from "next";
import EcranData from "@/JsonData/JsonEcran/EcranData.json";
import EcranClient from "./ProductClient";

type EcranProduct = (typeof EcranData.classiques)[0];

export async function generateStaticParams() {
	const allProducts = [...EcranData.classiques, ...EcranData.ultrawide];
	return allProducts.map((product) => ({ slug: String(product.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [...EcranData.classiques, ...EcranData.ultrawide] as EcranProduct[];
	const ecran = allProducts.find((item) => String(item.id) === slug);
	if (!ecran) return { title: "Produit non trouvé" };
	return {
		title: `${ecran.nom} - Écran ${ecran.taille} | Setup Télétravail`,
		description: ecran.description.slice(0, 160),
		alternates: { canonical: `https://www.setup-teletravail.fr/ecrans/${ecran.id}` },
		openGraph: {
			title: ecran.nom,
			description: ecran.description.slice(0, 160),
			images: ecran.images?.[0] ? [ecran.images[0]] : [ecran.image],
			url: `https://www.setup-teletravail.fr/ecrans/${ecran.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <EcranClient slug={slug} />;
}
