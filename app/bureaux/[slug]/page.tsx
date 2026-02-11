import type { Metadata } from "next";
import BureauData from "@/JsonData/JsonBureau/BureauData.json";
import BureauClient from "./ProductClient";

type BureauProduct = (typeof BureauData.bureaux_assis_debout)[0];

export async function generateStaticParams() {
	const allProducts = [...BureauData.bureaux_assis_debout];
	return allProducts.map((product) => ({ slug: String(product.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const allProducts = [...BureauData.bureaux_assis_debout] as BureauProduct[];
	const bureau = allProducts.find((item) => String(item.id) === slug);
	if (!bureau) return { title: "Produit non trouvé" };
	return {
		title: `${bureau.nom} - Bureau Assis-Debout | Setup Télétravail`,
		description: bureau.description.slice(0, 160),
		alternates: { canonical: `https://www.setup-teletravail.fr/bureaux/${bureau.id}` },
		openGraph: {
			title: bureau.nom,
			description: bureau.description.slice(0, 160),
			images: bureau.images?.[0] ? [bureau.images[0]] : [bureau.image],
			url: `https://www.setup-teletravail.fr/bureaux/${bureau.id}`,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return <BureauClient slug={slug} />;
}
