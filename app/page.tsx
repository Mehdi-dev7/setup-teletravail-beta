import type { Metadata } from "next";
import Hero from "@/Components/Hero/Hero";
import Statistique from "@/Components/Statistique/Statistique";
import Categories from "@/Components/Categories/Categories";
import Blog from "@/Components/Blog/Blog";

export const metadata: Metadata = {
  title: "Setup Télétravail - Guide Équipement Bureau 2026",
  description:
    "Comparatifs des meilleurs équipements télétravail : bureaux assis-debout, écrans 4K, chaises ergonomiques. Conseils experts 2026.",
  alternates: {
    canonical: "https://www.setup-teletravail.fr",
  },
  openGraph: {
    title: "Setup Télétravail - Guide Équipement Bureau 2026",
    description:
      "Comparatifs des meilleurs équipements télétravail : bureaux assis-debout, écrans 4K, chaises ergonomiques. Conseils experts 2026.",
    url: "https://www.setup-teletravail.fr",
    siteName: "Setup Télétravail",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
     <Hero />
     <Statistique />
     <Categories />
     <Blog />
    </>
  );
}
