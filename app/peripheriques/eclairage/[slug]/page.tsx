import type { Metadata } from "next";
import EclairageData from "@/JsonData/JsonEclairage/EclairageData.json";
import EclairageClient from "./ProductClient";

export async function generateStaticParams() {
  const allProducts = [...EclairageData.eclairage_ecran, ...EclairageData.eclairage_ambiance];
  return allProducts.map((product) => ({ slug: String(product.id) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const allProducts = [...EclairageData.eclairage_ecran, ...EclairageData.eclairage_ambiance];
  const product = allProducts.find((item) => String(item.id) === params.slug);
  if (!product) return { title: "Produit non trouvé" };
  return {
    title: `${product.name} - ${product.subcategory} | Setup Télétravail`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `https://www.setup-teletravail.fr/peripheriques/eclairage/${product.id}` },
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: [product.images[0]],
      url: `https://www.setup-teletravail.fr/peripheriques/eclairage/${product.id}`,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <EclairageClient slug={params.slug} />;
}
