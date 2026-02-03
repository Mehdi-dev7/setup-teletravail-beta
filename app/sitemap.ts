import { MetadataRoute } from "next";

// ============================================
// IMPORTS DES FICHIERS JSON DE DONNÉES
// ============================================

// Produits principaux
import EcranData from "@/JsonData/JsonEcran/EcranData.json";
import BureauData from "@/JsonData/JsonBureau/BureauData.json";
import ChaiseData from "@/JsonData/JsonChaise/ChaiseData.json";

// Périphériques
import ClavierSourisData from "@/JsonData/JsonClavierSouris/ClavierSourisData.json";
import EclairageData from "@/JsonData/JsonEclairage/EclairageData.json";
import AudioVisioData from "@/JsonData/JsonAudioVisio/AudioVisioData.json";

// Accessoires
import SupportEcranData from "@/JsonData/JsonSupportEcran/SupportEcranData.json";
import TapisSourisData from "@/JsonData/JsonTapisSouris/TapisSourisData.json";
import GestionCableData from "@/JsonData/JsonGestionCable/GestionCableData.json";
import HubData from "@/JsonData/JsonHub/HubData.json";

// Blog
import BlogData from "@/JsonData/JsonBlog/BlogData.json";

// ============================================
// CONFIGURATION
// ============================================

const baseUrl = "https://www.setup-teletravail.fr";

// ============================================
// TYPES
// ============================================

type SitemapEntry = {
	url: string;
	lastModified: Date;
	changeFrequency:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";
	priority: number;
};

// Type générique pour les produits avec id ou slug
type Product = {
	id?: string | number;
	slug?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};

// ============================================
// HELPERS
// ============================================

/**
 * Génère un identifiant URL à partir d'un produit
 * Utilise le slug si disponible, sinon l'id
 */
function getProductIdentifier(product: Product): string {
	if (product.slug) return product.slug;
	if (product.id !== undefined) return String(product.id);
	return "";
}

/**
 * Génère les entrées sitemap pour une liste de produits
 */
function generateProductEntries(
	products: Product[],
	basePath: string,
	priority: number = 0.7
): SitemapEntry[] {
	return products
		.filter((product) => getProductIdentifier(product))
		.map((product) => ({
			url: `${baseUrl}${basePath}/${getProductIdentifier(product)}`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority,
		}));
}

// ============================================
// SITEMAP GENERATOR
// ============================================

export default function sitemap(): MetadataRoute.Sitemap {
	// ----------------------------------------
	// PAGES STATIQUES PRINCIPALES
	// Priority: 1.0 (homepage) / 0.9 (catégories) / 0.8 (secondaires)
	// ----------------------------------------

	const staticPages: SitemapEntry[] = [
		// Homepage
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},

		// Pages catégories principales (priority 0.9)
		{
			url: `${baseUrl}/ecrans`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/bureaux`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/chaises`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/guides`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/comparatifs`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},

		// Blog (priority 0.8)
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},

		// Périphériques (priority 0.8)
		{
			url: `${baseUrl}/peripheriques/claviers-souris`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/peripheriques/eclairage`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/peripheriques/audio-visio`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},

		// Accessoires (priority 0.8)
		{
			url: `${baseUrl}/accessoires/supportEcran`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/accessoires/tapisSouris`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/accessoires/gestionCables`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/accessoires/hubUsb`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - ÉCRANS
	// ----------------------------------------

	const ecranClassiques = EcranData.classiques || [];
	const ecranUltrawide = EcranData.ultrawide || [];
	const allEcrans = [...ecranClassiques, ...ecranUltrawide];
	const ecranPages = generateProductEntries(allEcrans, "/ecrans", 0.7);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - BUREAUX
	// ----------------------------------------

	const bureaux = BureauData.bureaux_assis_debout || [];
	const bureauPages = generateProductEntries(bureaux, "/bureaux", 0.7);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - CHAISES
	// ----------------------------------------

	const chaises = ChaiseData.chaises_ergonomiques || [];
	const chaisePages = generateProductEntries(chaises, "/chaises", 0.7);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - CLAVIERS & SOURIS
	// ----------------------------------------

	const claviers = ClavierSourisData.claviers || [];
	const souris = ClavierSourisData.souris || [];
	const allClavierSouris = [...claviers, ...souris];
	const clavierSourisPages = generateProductEntries(
		allClavierSouris,
		"/peripheriques/claviers-souris",
		0.6
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - ÉCLAIRAGE
	// ----------------------------------------

	const eclairageEcran = EclairageData.eclairage_ecran || [];
	const eclairageAmbiance = EclairageData.eclairage_ambiance || [];
	const allEclairage = [...eclairageEcran, ...eclairageAmbiance];
	const eclairagePages = generateProductEntries(
		allEclairage,
		"/peripheriques/eclairage",
		0.6
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - AUDIO & VISIO
	// ----------------------------------------

	const audio = AudioVisioData.audio || [];
	const visio = AudioVisioData.visio || [];
	const allAudioVisio = [...audio, ...visio];
	const audioVisioPages = generateProductEntries(
		allAudioVisio,
		"/peripheriques/audio-visio",
		0.6
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - SUPPORTS ÉCRAN
	// ----------------------------------------

	const supportsSimples = SupportEcranData.supports_simples || [];
	const supportsDoubles = SupportEcranData.supports_doubles || [];
	const supportsTriples = SupportEcranData.supports_triples || [];
	const allSupports = [...supportsSimples, ...supportsDoubles, ...supportsTriples];
	const supportPages = generateProductEntries(
		allSupports,
		"/accessoires/supportEcran",
		0.6
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - TAPIS SOURIS
	// ----------------------------------------

	const tapisLarges = TapisSourisData.tapis_larges || [];
	const tapisSourisPages = generateProductEntries(
		tapisLarges,
		"/accessoires/tapisSouris",
		0.5
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - GESTION CÂBLES
	// ----------------------------------------

	const rangementsCables = GestionCableData.rangements_cables || [];
	const gestionCablePages = generateProductEntries(
		rangementsCables,
		"/accessoires/gestionCables",
		0.5
	);

	// ----------------------------------------
	// PAGES PRODUITS DYNAMIQUES - HUBS USB
	// ----------------------------------------

	const hubsStations = HubData.hubs_stations || [];
	const hubPages = generateProductEntries(hubsStations, "/accessoires/hubUsb", 0.5);

	// ----------------------------------------
	// PAGES BLOG DYNAMIQUES
	// ----------------------------------------

	const blogArticles = Array.isArray(BlogData) ? BlogData : [];
	const blogPages = generateProductEntries(blogArticles, "/blog", 0.6);

	// ----------------------------------------
	// ASSEMBLAGE FINAL DU SITEMAP
	// ----------------------------------------

	return [
		// Pages statiques
		...staticPages,

		// Produits principaux (priority 0.7)
		...ecranPages,
		...bureauPages,
		...chaisePages,

		// Périphériques (priority 0.6)
		...clavierSourisPages,
		...eclairagePages,
		...audioVisioPages,

		// Accessoires (priority 0.5-0.6)
		...supportPages,
		...tapisSourisPages,
		...gestionCablePages,
		...hubPages,

		// Blog (priority 0.6)
		...blogPages,
	];
}
