"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// Import JSON Data
import EcranData from "@/JsonData/JsonEcran/EcranData.json";
import ChaiseData from "@/JsonData/JsonChaise/ChaiseData.json";
import BureauData from "@/JsonData/JsonBureau/BureauData.json";
import ClavierSourisData from "@/JsonData/JsonClavierSouris/ClavierSourisData.json";
import AudioVisioData from "@/JsonData/JsonAudioVisio/AudioVisioData.json";
import HubData from "@/JsonData/JsonHub/HubData.json";
import SupportEcranData from "@/JsonData/JsonSupportEcran/SupportEcranData.json";
import TapisSourisData from "@/JsonData/JsonTapisSouris/TapisSourisData.json";
import EclairageData from "@/JsonData/JsonEclairage/EclairageData.json";
import GestionCableData from "@/JsonData/JsonGestionCable/GestionCableData.json";

// Types
interface NormalizedProduct {
	id: string;
	name: string;
	image: string;
	price: number;
	rating: number;
	reviewCount: number;
	pros: string[];
	cons: string[];
	specs: Record<string, string | number | boolean | null>;
	category: string;
	subcategory: string;
	detailLink: string;
}

interface Category {
	id: string;
	name: string;
	icon: string;
	subcategories: { id: string; name: string }[];
	detailPath: string;
}

// Categories configuration
const CATEGORIES: Category[] = [
	{
		id: "ecrans",
		name: "Écrans",
		icon: "ri-computer-line",
		subcategories: [
			{ id: "classiques", name: "Classiques" },
			{ id: "ultrawide", name: "Ultrawide" },
		],
		detailPath: "/ecrans",
	},
	{
		id: "chaises",
		name: "Chaises",
		icon: "ri-armchair-line",
		subcategories: [{ id: "chaises_ergonomiques", name: "Ergonomiques" }],
		detailPath: "/chaises",
	},
	{
		id: "bureaux",
		name: "Bureaux",
		icon: "ri-table-line",
		subcategories: [{ id: "bureaux_assis_debout", name: "Assis-debout" }],
		detailPath: "/bureaux",
	},
	{
		id: "claviers",
		name: "Claviers",
		icon: "ri-keyboard-line",
		subcategories: [{ id: "claviers", name: "Claviers" }],
		detailPath: "/peripheriques/claviers&souris",
	},
	{
		id: "souris",
		name: "Souris",
		icon: "ri-cursor-line",
		subcategories: [{ id: "souris", name: "Souris" }],
		detailPath: "/peripheriques/claviers&souris",
	},
	{
		id: "casques",
		name: "Casques",
		icon: "ri-headphone-line",
		subcategories: [{ id: "audio", name: "Audio" }],
		detailPath: "/peripheriques/audio-visio",
	},
	{
		id: "webcams",
		name: "Webcams",
		icon: "ri-webcam-line",
		subcategories: [{ id: "visio", name: "Visio" }],
		detailPath: "/peripheriques/audio-visio",
	},
	{
		id: "hubs",
		name: "Hubs USB",
		icon: "ri-usb-line",
		subcategories: [{ id: "hubs_stations", name: "Hubs & Stations" }],
		detailPath: "/accessoires/hubUsb",
	},
	{
		id: "supports",
		name: "Supports écran",
		icon: "ri-tv-2-line",
		subcategories: [
			{ id: "supports_simples", name: "Simples" },
			{ id: "supports_doubles", name: "Doubles" },
			{ id: "supports_triples", name: "Triples" },
		],
		detailPath: "/accessoires/supportEcran",
	},
	{
		id: "tapis",
		name: "Tapis souris",
		icon: "ri-checkbox-blank-line",
		subcategories: [
			{ id: "tapis_larges", name: "Larges" },
			{ id: "tapis_souris_ergonomiques", name: "Ergonomiques souris" },
			{ id: "tapis_clavier_ergonomiques", name: "Ergonomiques clavier" },
		],
		detailPath: "/accessoires/tapisSouris",
	},
	{
		id: "eclairage",
		name: "Éclairage",
		icon: "ri-lightbulb-line",
		subcategories: [
			{ id: "eclairage_ecran", name: "Écran" },
			{ id: "eclairage_ambiance", name: "Ambiance" },
		],
		detailPath: "/peripheriques/eclairage",
	},
	{
		id: "cables",
		name: "Gestion câbles",
		icon: "ri-links-line",
		subcategories: [{ id: "rangements_cables", name: "Rangements" }],
		detailPath: "/accessoires/gestionCables",
	},
];

// Specs configuration by category
const SPECS_CONFIG: Record<string, { key: string; label: string }[]> = {
	ecrans: [
		{ key: "taille", label: "Taille" },
		{ key: "resolution", label: "Résolution" },
		{ key: "dalle", label: "Dalle" },
		{ key: "frequence", label: "Fréquence" },
		{ key: "usbc", label: "USB-C" },
		{ key: "usbcWatt", label: "USB-C Watts" },
		{ key: "hdmi", label: "Ports HDMI" },
		{ key: "displayport", label: "Ports DP" },
		{ key: "reglableHauteur", label: "Réglable hauteur" },
		{ key: "pivot", label: "Pivot" },
		{ key: "vesa", label: "VESA" },
	],
	chaises: [
		{ key: "materiaux", label: "Matériaux" },
		{ key: "supportLombaire", label: "Support lombaire" },
		{ key: "accoudoirs", label: "Accoudoirs" },
		{ key: "appuiTete", label: "Appui-tête" },
		{ key: "reposesPieds", label: "Repose-pieds" },
		{ key: "inclinaison", label: "Inclinaison" },
		{ key: "capaciteCharge", label: "Capacité charge" },
		{ key: "garantie", label: "Garantie" },
	],
	bureaux: [
		{ key: "dimensions", label: "Dimensions" },
		{ key: "hauteurMin", label: "Hauteur min" },
		{ key: "hauteurMax", label: "Hauteur max" },
		{ key: "capaciteCharge", label: "Capacité charge" },
		{ key: "moteurs", label: "Moteurs" },
		{ key: "vitesse", label: "Vitesse" },
		{ key: "niveauSonore", label: "Niveau sonore" },
		{ key: "positionsMemoire", label: "Positions mémoire" },
	],
	claviers: [
		{ key: "typeSwitch", label: "Type switch" },
		{ key: "connectivite", label: "Connectivité" },
		{ key: "multiDevices", label: "Multi-devices" },
		{ key: "retroeclairage", label: "Rétroéclairage" },
		{ key: "autonomie", label: "Autonomie" },
	],
	souris: [
		{ key: "capteur", label: "Capteur" },
		{ key: "precision", label: "Précision" },
		{ key: "connectivite", label: "Connectivité" },
		{ key: "molette", label: "Molette" },
		{ key: "boutons", label: "Boutons" },
		{ key: "autonomie", label: "Autonomie" },
		{ key: "ergonomie", label: "Ergonomie" },
	],
	casques: [
		{ key: "connexion", label: "Connexion" },
		{ key: "reductionBruit", label: "Réduction bruit" },
		{ key: "autonomie", label: "Autonomie" },
		{ key: "microphones", label: "Microphones" },
		{ key: "multipoint", label: "Multipoint" },
	],
	webcams: [
		{ key: "resolution", label: "Résolution" },
		{ key: "framerate", label: "Framerate" },
		{ key: "autofocus", label: "Autofocus" },
		{ key: "champVision", label: "Champ de vision" },
		{ key: "microphones", label: "Microphones" },
	],
	hubs: [
		{ key: "connexionPc", label: "Connexion PC" },
		{ key: "sortiesVideo", label: "Sorties vidéo" },
		{ key: "portsUsb", label: "Ports USB" },
		{ key: "ethernet", label: "Ethernet" },
		{ key: "puissance", label: "Puissance" },
	],
	supports: [
		{ key: "typeFixation", label: "Fixation" },
		{ key: "tailleEcran", label: "Taille écran" },
		{ key: "vesa", label: "VESA" },
		{ key: "mouvements", label: "Mouvements" },
		{ key: "extensionBras", label: "Extension bras" },
	],
	tapis: [
		{ key: "dimensions", label: "Dimensions" },
		{ key: "surface", label: "Surface" },
		{ key: "epaisseur", label: "Épaisseur" },
		{ key: "base", label: "Base" },
	],
	eclairage: [
		{ key: "typeLed", label: "Type LED" },
		{ key: "temperature", label: "Température" },
		{ key: "luminosite", label: "Luminosité" },
		{ key: "alimentation", label: "Alimentation" },
	],
	cables: [
		{ key: "type", label: "Type" },
		{ key: "capacite", label: "Capacité" },
		{ key: "dimensions", label: "Dimensions" },
		{ key: "installation", label: "Installation" },
	],
};

// Helper function to normalize products from different data structures
function normalizeProduct(
	product: Record<string, unknown>,
	categoryId: string,
	subcategoryId: string,
	detailPath: string,
): NormalizedProduct {
	// Handle legacy format (ecrans, chaises, bureaux)
	if ("nom" in product) {
		const p = product as {
			id: number | string;
			nom: string;
			image: string;
			prix: number;
			note: number;
			nbAvis: number;
			pointsForts: string[];
			pointsFaibles: string[];
			[key: string]: unknown;
		};
		return {
			id: String(p.id),
			name: p.nom,
			image: p.image,
			price: p.prix,
			rating: p.note,
			reviewCount: p.nbAvis,
			pros: p.pointsForts || [],
			cons: p.pointsFaibles || [],
			specs: extractSpecs(p, categoryId),
			category: categoryId,
			subcategory: subcategoryId,
			detailLink: `${detailPath}/${p.id}`,
		};
	}

	// Handle new format (claviers, souris, audio, visio, hubs, etc.)
	const p = product as {
		id: string;
		name: string;
		images?: string[];
		price?: {
			amazon?: { current: number };
		};
		ratings?: {
			overall: number;
			reviewCount: number;
		};
		prosAndCons?: {
			pros: string[];
			cons: string[];
		};
		features?: Record<string, unknown>;
		[key: string]: unknown;
	};

	return {
		id: p.id,
		name: p.name,
		image: p.images?.[0] || "",
		price: p.price?.amazon?.current || 0,
		rating: p.ratings?.overall || 0,
		reviewCount: p.ratings?.reviewCount || 0,
		pros: p.prosAndCons?.pros || [],
		cons: p.prosAndCons?.cons || [],
		specs: extractSpecs(
			{ ...p, ...(p.features || {}) } as Record<string, unknown>,
			categoryId,
		),
		category: categoryId,
		subcategory: subcategoryId,
		detailLink: `${detailPath}/${p.id}`,
	};
}

function extractSpecs(
	product: Record<string, unknown>,
	categoryId: string,
): Record<string, string | number | boolean | null> {
	const specs: Record<string, string | number | boolean | null> = {};
	const config = SPECS_CONFIG[categoryId] || [];

	for (const { key } of config) {
		if (key in product) {
			specs[key] = product[key] as string | number | boolean | null;
		}
	}

	return specs;
}

// Get products for a category/subcategory
function getProducts(
	categoryId: string,
	subcategoryId: string,
): NormalizedProduct[] {
	const category = CATEGORIES.find((c) => c.id === categoryId);
	if (!category) return [];

	let rawProducts: Record<string, unknown>[] = [];

	switch (categoryId) {
		case "ecrans":
			rawProducts =
				(EcranData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "chaises":
			rawProducts =
				(ChaiseData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "bureaux":
			rawProducts =
				(BureauData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "claviers":
		case "souris":
			rawProducts =
				(ClavierSourisData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "casques":
		case "webcams":
			rawProducts =
				(AudioVisioData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "hubs":
			rawProducts =
				(HubData as Record<string, Record<string, unknown>[]>)[subcategoryId] ||
				[];
			break;
		case "supports":
			rawProducts =
				(SupportEcranData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "tapis":
			rawProducts =
				(TapisSourisData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "eclairage":
			rawProducts =
				(EclairageData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
		case "cables":
			rawProducts =
				(GestionCableData as Record<string, Record<string, unknown>[]>)[
					subcategoryId
				] || [];
			break;
	}

	return rawProducts.map((p) =>
		normalizeProduct(p, categoryId, subcategoryId, category.detailPath),
	);
}

// Format spec value for display
function formatSpecValue(
	value: string | number | boolean | null | undefined,
): string {
	if (value === null || value === undefined) return "-";
	if (typeof value === "boolean") return value ? "Oui" : "Non";
	if (typeof value === "number") return String(value);
	return value;
}

export default function Comparatifs() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
		null,
	);
	const [selectedProducts, setSelectedProducts] = useState<NormalizedProduct[]>(
		[],
	);
	const [viewMode, setViewMode] = useState<"selection" | "comparison">(
		"selection",
	);

	// Get current category
	const currentCategory = useMemo(
		() => CATEGORIES.find((c) => c.id === selectedCategory),
		[selectedCategory],
	);

	// Get available products
	const availableProducts = useMemo(() => {
		if (!selectedCategory || !selectedSubCategory) return [];
		return getProducts(selectedCategory, selectedSubCategory);
	}, [selectedCategory, selectedSubCategory]);

	// Handle category selection
	const handleCategorySelect = (categoryId: string) => {
		setSelectedCategory(categoryId);
		const category = CATEGORIES.find((c) => c.id === categoryId);
		if (category && category.subcategories.length === 1) {
			setSelectedSubCategory(category.subcategories[0].id);
		} else {
			setSelectedSubCategory(null);
		}
		setSelectedProducts([]);
		setViewMode("selection");
	};

	// Handle product toggle
	const handleProductToggle = (product: NormalizedProduct) => {
		const isSelected = selectedProducts.some((p) => p.id === product.id);
		if (isSelected) {
			setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
		} else if (selectedProducts.length < 4) {
			setSelectedProducts([...selectedProducts, product]);
		}
	};

	// Reset selection
	const handleReset = () => {
		setSelectedCategory(null);
		setSelectedSubCategory(null);
		setSelectedProducts([]);
		setViewMode("selection");
	};

	// Back to selection from comparison
	const handleBackToSelection = () => {
		setViewMode("selection");
	};

	return (
		<>
			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-6xl md:text-8xl GolosText pt-10">Comparateur</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText">Comparatifs</h2>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[12%] py-12 md:py-20">
				{/* Introduction */}
				<div className="max-w-4xl mb-12">
					<span className="inline-block border border-gray-400 text-(--text) px-4 py-2 rounded-full text-sm md:text-base font-bold mb-4">
						<i className="ri-scales-3-line mr-2 text-(--prim)"></i>Outil de
						comparaison
					</span>
					<h2 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl mb-5 leading-tight my-4 sm:my-5">
						Comparez les produits{" "}
						<span className="text-(--prim)">côte à côte</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed">
						Sélectionnez jusqu&apos;à 4 produits d&apos;une même catégorie pour
						comparer leurs caractéristiques, prix, points forts et points
						faibles en un coup d&apos;œil.
					</p>
				</div>

				{viewMode === "selection" ? (
					<>
						{/* Step 1: Category Selection */}
						{!selectedCategory && (
							<div className="mb-12">
								<div className="flex items-start gap-3 mb-8">
									<div className="flex items-center justify-center w-10 h-10 bg-(--prim) text-white rounded-full font-bold">
										1
									</div>
									<div>
										<h3 className="text-2xl md:text-3xl Sora font-semibold">
											Choisissez une catégorie
										</h3>
										<p className="text-gray-500 mt-1">
											Sélectionnez le type de produit à comparer
										</p>
									</div>
								</div>

								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
									{CATEGORIES.map((category) => (
										<button
											key={category.id}
											onClick={() => handleCategorySelect(category.id)}
											className="group flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-(--prim) hover:shadow-lg transition-all duration-300 cursor-pointer"
										>
											<i
												className={`${category.icon} text-4xl text-gray-400 group-hover:text-(--prim) transition-colors duration-300 mb-3`}
											></i>
											<span className="text-sm font-medium text-gray-700 group-hover:text-(--prim) transition-colors duration-300 text-center">
												{category.name}
											</span>
										</button>
									))}
								</div>
							</div>
						)}

						{/* Step 2: Subcategory Selection (if applicable) */}
						{selectedCategory &&
							currentCategory &&
							currentCategory.subcategories.length > 1 &&
							!selectedSubCategory && (
								<div className="mb-12">
									<div className="flex items-center justify-between mb-6">
										<div className="flex items-start gap-3">
											<div className="flex items-center justify-center w-10 h-10 bg-(--prim) text-white rounded-full font-bold">
												2
											</div>
											<div>
												<h3 className="text-2xl md:text-3xl Sora font-semibold">
													Choisissez une sous-catégorie
												</h3>
												<p className="text-gray-500 mt-1">
													{currentCategory.name} - Sélectionnez le type
													spécifique
												</p>
											</div>
										</div>
										<button
											onClick={handleReset}
											className="text-gray-500 hover:text-(--prim) transition-colors duration-300 cursor-pointer"
										>
											<i className="ri-arrow-left-line mr-1"></i>Retour
										</button>
									</div>

									<div className="flex flex-wrap gap-3">
										{currentCategory.subcategories.map((sub) => (
											<button
												key={sub.id}
												onClick={() => setSelectedSubCategory(sub.id)}
												className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-(--prim) hover:bg-(--prim)/5 transition-all duration-300 font-medium cursor-pointer"
											>
												{sub.name}
											</button>
										))}
									</div>
								</div>
							)}

						{/* Step 3: Product Selection */}
						{selectedCategory && selectedSubCategory && (
							<div className="mb-12">
								<div className="flex items-center justify-between mb-6">
									<div className="flex items-start gap-3">
										<div className="flex items-center justify-center w-10 h-10 bg-(--prim) text-white rounded-full font-bold">
											{currentCategory &&
											currentCategory.subcategories.length > 1
												? "3"
												: "2"}
										</div>
										<div>
											<h3 className="text-2xl md:text-3xl Sora font-semibold">
												Sélectionnez les produits
											</h3>
											<p className="text-gray-500 mt-1">
												Cochez 2 à 4 produits à comparer
											</p>
										</div>
									</div>
									<button
										onClick={handleReset}
										className="text-gray-500 hover:text-(--prim) transition-colors duration-300 cursor-pointer"
									>
										<i className="ri-refresh-line mr-1"></i>Réinitialiser
									</button>
								</div>

								{/* Product Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
									{availableProducts.map((product) => {
										const isSelected = selectedProducts.some(
											(p) => p.id === product.id,
										);
										const isDisabled =
											selectedProducts.length >= 4 && !isSelected;

										return (
											<div
												key={product.id}
												onClick={() =>
													!isDisabled && handleProductToggle(product)
												}
												className={`relative group bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
													isSelected
														? "border-(--prim) shadow-lg ring-2 ring-(--prim)/20"
														: isDisabled
															? "border-gray-200 opacity-50 cursor-not-allowed"
															: "border-gray-200 hover:border-(--prim)/50 hover:shadow-md"
												}`}
											>
												{/* Checkbox */}
												<div className="absolute top-4 left-4 z-10">
													<div
														className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
															isSelected
																? "bg-(--prim) border-(--prim)"
																: "bg-white border-gray-300"
														}`}
													>
														{isSelected && (
															<i className="ri-check-line text-white text-sm"></i>
														)}
													</div>
												</div>

												{/* Image */}
												<div className="relative h-48 bg-gray-50 overflow-hidden">
													{product.image && (
														<Image
															src={product.image}
															alt={product.name}
															fill
															sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
															className="object-contain p-4"
														/>
													)}
												</div>

												{/* Content */}
												<div className="p-4">
													<h4 className="text-lg font-semibold mb-2 line-clamp-2">
														{product.name}
													</h4>

													{/* Rating */}
													<div className="flex items-center gap-2 mb-3">
														<div className="flex items-center">
															{[...Array(5)].map((_, i) => (
																<i
																	key={i}
																	className={`ri-star-${
																		i < Math.floor(product.rating)
																			? "fill"
																			: "line"
																	} text-yellow-400 text-sm`}
																></i>
															))}
														</div>
														<span className="text-sm text-gray-500">
															({product.reviewCount})
														</span>
													</div>

													{/* Price */}
													<div className="text-xl font-bold text-(--prim)">
														{product.price}€
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</>
				) : (
					/* Comparison Table View */
					<div>
						<div className="flex items-center justify-between mb-8">
							<button
								onClick={handleBackToSelection}
								className="flex items-center text-gray-600 hover:text-(--prim) transition-colors duration-300 cursor-pointer"
							>
								<i className="ri-arrow-left-line mr-2"></i>
								Modifier la sélection
							</button>
							<button
								onClick={handleReset}
								className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-300 cursor-pointer"
							>
								<i className="ri-refresh-line mr-2"></i>
								Réinitialiser
							</button>
						</div>

						{/* Comparison Table */}
						<div className="overflow-x-auto -mx-4 sm:mx-0">
							<div className="min-w-[600px] px-4 sm:px-0">
								<table className="w-full border-collapse">
									<thead>
										<tr>
											<th className="sticky left-0 bg-gray-100 p-4 text-left font-semibold text-gray-700 min-w-[140px] sm:min-w-[180px] rounded-tl-2xl z-10">
												Caractéristique
											</th>
											{selectedProducts.map((product, index) => (
												<th
													key={product.id}
													className={`bg-gray-100 p-4 text-center min-w-[160px] sm:min-w-[200px] relative ${
														index === selectedProducts.length - 1
															? "rounded-tr-2xl"
															: ""
													}`}
												>
													<span className="text-sm font-medium text-gray-700 line-clamp-2">
														{product.name}
													</span>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{/* Image Row */}
										<tr className="border-b border-gray-200">
											<td className="sticky left-0 bg-white p-4 font-medium text-gray-600 z-10">
												Photo
											</td>
											{selectedProducts.map((product) => (
												<td key={product.id} className="bg-white p-4">
													<div className="relative h-24 sm:h-32 mx-auto w-full">
														{product.image && (
															<Image
																src={product.image}
																alt={product.name}
																fill
																sizes="200px"
																className="object-contain"
															/>
														)}
													</div>
												</td>
											))}
										</tr>

										{/* Price Row */}
										<tr className="border-b border-gray-200 bg-gray-50">
											<td className="sticky left-0 bg-gray-50 p-4 font-medium text-gray-600 z-10">
												Prix
											</td>
											{selectedProducts.map((product) => (
												<td
													key={product.id}
													className="bg-gray-50 p-4 text-center"
												>
													<span className="text-xl sm:text-2xl font-bold text-(--prim)">
														{product.price}€
													</span>
												</td>
											))}
										</tr>

										{/* Rating Row */}
										<tr className="border-b border-gray-200">
											<td className="sticky left-0 bg-white p-4 font-medium text-gray-600 z-10">
												Note
											</td>
											{selectedProducts.map((product) => (
												<td
													key={product.id}
													className="bg-white p-4 text-center"
												>
													<div className="flex items-center justify-center gap-1 flex-wrap">
														{[...Array(5)].map((_, i) => (
															<i
																key={i}
																className={`ri-star-${
																	i < Math.floor(product.rating)
																		? "fill"
																		: "line"
																} text-yellow-400`}
															></i>
														))}
													</div>
													<span className="text-xs sm:text-sm text-gray-500">
														{product.rating} ({product.reviewCount} avis)
													</span>
												</td>
											))}
										</tr>

										{/* Specs Rows */}
										{selectedCategory &&
											SPECS_CONFIG[selectedCategory]?.map((spec, index) => (
												<tr
													key={spec.key}
													className={`border-b border-gray-200 ${
														index % 2 === 0 ? "bg-gray-50" : "bg-white"
													}`}
												>
													<td
														className={`sticky left-0 ${
															index % 2 === 0 ? "bg-gray-50" : "bg-white"
														} p-4 font-medium text-gray-600 z-10`}
													>
														{spec.label}
													</td>
													{selectedProducts.map((product) => (
														<td
															key={product.id}
															className={`${
																index % 2 === 0 ? "bg-gray-50" : "bg-white"
															} p-4 text-center text-sm`}
														>
															{formatSpecValue(product.specs[spec.key])}
														</td>
													))}
												</tr>
											))}

										{/* Pros Row */}
										<tr className="border-b border-gray-200 bg-green-50/50">
											<td className="sticky left-0 bg-green-50/50 p-4 font-medium text-green-700 z-10">
												<i className="ri-thumb-up-line mr-1 sm:mr-2"></i>
												<span className="hidden sm:inline">Points forts</span>
												<span className="sm:hidden">+</span>
											</td>
											{selectedProducts.map((product) => (
												<td
													key={product.id}
													className="bg-green-50/50 p-3 sm:p-4 text-left"
												>
													<ul className="text-xs sm:text-sm text-gray-700 space-y-1">
														{product.pros.slice(0, 4).map((pro, i) => (
															<li
																key={i}
																className="flex items-start gap-1 sm:gap-2"
															>
																<i className="ri-check-line text-green-500 mt-0.5 flex-shrink-0"></i>
																<span className="line-clamp-2">{pro}</span>
															</li>
														))}
													</ul>
												</td>
											))}
										</tr>

										{/* Cons Row */}
										<tr className="border-b border-gray-200 bg-red-50/50">
											<td className="sticky left-0 bg-red-50/50 p-4 font-medium text-red-700 z-10">
												<i className="ri-thumb-down-line mr-1 sm:mr-2"></i>
												<span className="hidden sm:inline">Points faibles</span>
												<span className="sm:hidden">-</span>
											</td>
											{selectedProducts.map((product) => (
												<td
													key={product.id}
													className="bg-red-50/50 p-3 sm:p-4 text-left"
												>
													<ul className="text-xs sm:text-sm text-gray-700 space-y-1">
														{product.cons.slice(0, 3).map((con, i) => (
															<li
																key={i}
																className="flex items-start gap-1 sm:gap-2"
															>
																<i className="ri-close-line text-red-500 mt-0.5 flex-shrink-0"></i>
																<span className="line-clamp-2">{con}</span>
															</li>
														))}
													</ul>
												</td>
											))}
										</tr>

										{/* Detail Link Row */}
										<tr>
											<td className="sticky left-0 bg-white p-4 font-medium text-gray-600 rounded-bl-2xl z-10">
												Fiche détaillée
											</td>
											{selectedProducts.map((product, index) => (
												<td
													key={product.id}
													className={`bg-white p-4 text-center ${
														index === selectedProducts.length - 1
															? "rounded-br-2xl"
															: ""
													}`}
												>
													<Link
														href={product.detailLink}
														className="inline-flex items-center text-(--prim) font-medium hover:underline text-sm sm:text-base"
													>
														<span className="hidden sm:inline">
															Voir détails
														</span>
														<span className="sm:hidden">Détails</span>
														<i className="ri-arrow-right-line ml-1"></i>
													</Link>
												</td>
											))}
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Fixed Bottom Bar for Selection */}
			{viewMode === "selection" &&
				selectedCategory &&
				selectedSubCategory &&
				selectedProducts.length > 0 && (
					<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
						<div className="px-4 sm:px-[8%] lg:px-[12%] py-4 flex items-center justify-between">
							<div className="flex items-center gap-2 sm:gap-4">
								<div className="flex -space-x-2 sm:-space-x-3">
									{selectedProducts.map((product) => (
										<div
											key={product.id}
											className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
										>
											{product.image && (
												<Image
													src={product.image}
													alt={product.name}
													fill
													sizes="48px"
													className="object-contain p-1"
												/>
											)}
										</div>
									))}
								</div>
								<span className="text-gray-600 text-sm sm:text-base">
									<span className="font-semibold text-(--prim)">
										{selectedProducts.length}
									</span>
									/4{" "}
									<span className="hidden sm:inline">
										produits sélectionnés
									</span>
								</span>
							</div>

							<div className="flex items-center gap-2 sm:gap-3">
								<button
									onClick={() => setSelectedProducts([])}
									className="px-3 sm:px-4 py-2 text-gray-500 hover:text-red-500 transition-colors duration-300 text-sm cursor-pointer"
								>
									<span className="hidden sm:inline">Effacer</span>
									<i className="ri-delete-bin-line sm:hidden"></i>
								</button>
								<button
									onClick={() => setViewMode("comparison")}
									disabled={selectedProducts.length < 2}
									className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
										selectedProducts.length >= 2
											? "bg-(--prim) text-white hover:bg-(--prim)/90"
											: "bg-gray-200 text-gray-400 cursor-not-allowed"
									}`}
								>
									Comparer
									<i className="ri-arrow-right-line ml-1 sm:ml-2"></i>
								</button>
							</div>
						</div>
					</div>
				)}

			{/* Spacer for fixed bottom bar */}
			{viewMode === "selection" &&
				selectedCategory &&
				selectedSubCategory &&
				selectedProducts.length > 0 && <div className="h-20 sm:h-24"></div>}
		</>
	);
}
