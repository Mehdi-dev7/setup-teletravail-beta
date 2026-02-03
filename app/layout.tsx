import type { Metadata, Viewport } from "next";
import {
	Geist,
	Geist_Mono,
	Audiowide,
	Golos_Text,
	Sora,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const sora = Sora({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-sora",
});

const audioWide = Audiowide({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-audiowide",
});

const golostext = Golos_Text({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-golostext",
});

// Configuration du viewport
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#0ea5e9",
};

// Métadonnées globales optimisées
export const metadata: Metadata = {
	metadataBase: new URL("https://setup-teletravail.fr"),
	title: {
		default: "Setup Télétravail 2026 | Guide & Comparatif Équipement Home Office",
		template: "%s | Setup Télétravail",
	},
	description:
		"Le guide ultime pour équiper votre espace de télétravail en 2026. Comparatifs détaillés : bureaux assis-debout, chaises ergonomiques, écrans 4K, claviers et souris. Trouvez le setup parfait selon votre budget.",
	keywords: [
		"setup télétravail",
		"équipement télétravail",
		"bureau assis-debout",
		"bureau ergonomique",
		"chaise ergonomique",
		"écran télétravail",
		"écran 4K",
		"clavier ergonomique",
		"souris ergonomique",
		"home office",
		"travail à domicile",
		"espace de travail",
		"comparatif bureau",
		"meilleur écran télétravail",
		"FlexiSpot",
		"SIHOO",
		"Logitech MX",
	],
	authors: [{ name: "Setup-Teletravail", url: "https://setup-teletravail.fr" }],
	creator: "Setup-Teletravail",
	publisher: "Setup-Teletravail",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: "https://setup-teletravail.fr",
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://setup-teletravail.fr",
		siteName: "Setup Télétravail",
		title: "Setup Télétravail 2026 | Guide & Comparatif Équipement Home Office",
		description:
			"Le guide ultime pour équiper votre espace de télétravail. Comparatifs détaillés, prix en temps réel et configurations complètes pour tous les budgets.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Setup Télétravail - Votre guide pour un espace de travail optimal",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Setup Télétravail 2026 | Guide Complet",
		description:
			"Trouvez le setup parfait pour votre télétravail. Comparatifs, guides et prix.",
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
    google: 'uAJhuUkAIKAwMq87ATIyxmp_UvYtKWFQbaTM99rTTSo',
  },
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
	},
	manifest: "/site.webmanifest",
	category: "technology",
};

// Schema.org JSON-LD pour l'organisation
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Setup Télétravail",
	url: "https://setup-teletravail.fr",
	logo: "https://setup-teletravail.fr/logo.png",
	description:
		"Guide expert pour équiper votre espace de télétravail avec les meilleurs équipements ergonomiques.",
	sameAs: [],
};

// Schema.org JSON-LD pour le site web
const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Setup Télétravail",
	url: "https://setup-teletravail.fr",
	description:
		"Le guide ultime pour équiper votre espace de télétravail en 2026.",
	publisher: {
		"@type": "Organization",
		name: "Setup Télétravail",
	},
	potentialAction: {
		"@type": "SearchAction",
		target: "https://setup-teletravail.fr/recherche?q={search_term_string}",
		"query-input": "required name=search_term_string",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<head>
				{/* Schema.org JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteSchema),
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${audioWide.variable} ${golostext.variable} ${sora.variable}`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
