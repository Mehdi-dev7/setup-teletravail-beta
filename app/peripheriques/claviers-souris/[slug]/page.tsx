"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import ClavierSourisData from "@/JsonData/JsonClavierSouris/ClavierSourisData.json";

// Type pour les claviers
type Clavier = {
	id: string;
	name: string;
	category: string;
	subcategory: string;
	images: string[];
	price: {
		amazon: { current: number; original: number; currency: string; asin: string; url: string };
		cdiscount: { current: number; original: number; currency: string; url: string };
		fnac: { current: number; original: number; currency: string; url: string };
	};
	features: {
		typeSwitch: string;
		forceActuation: string;
		courbure?: string;
		format?: string;
		connectivite: string;
		multiDevices: string;
		retroeclairage?: string;
		pavéNumerique?: string;
		reposePoignets?: string;
		autonomie: string;
		chargeRapide?: string;
		compatibilite: string;
		programmation?: string;
		dimensions: string;
		poids: string;
		layout: string;
		couleurs?: string;
	};
	description: string;
	prosAndCons: { pros: string[]; cons: string[] };
	targetAudience: string[];
	ratings: {
		overall: number;
		typingComfort: number;
		buildQuality: number;
		batteryLife: number;
		connectivity: number;
		valueForMoney: number;
		reviewCount: number;
	};
	badges: string[];
};

// Type pour les souris
type Souris = {
	id: string;
	name: string;
	category: string;
	subcategory: string;
	images: string[];
	price: {
		amazon: { current: number; original: number; currency: string; asin: string; url: string };
		cdiscount: { current: number; original: number; currency: string; url: string };
		fnac: { current: number; original: number; currency: string; url: string };
	};
	features: {
		typeCapteur: string;
		precision: string;
		connectivite: string;
		multiDevices: string;
		molette?: string;
		boutons: string;
		angle?: string;
		silencieux?: string;
		autonomie: string;
		chargeRapide?: string;
		ergonomie: string;
		compatibilite: string;
		dimensions: string;
		poids: string;
	};
	description: string;
	prosAndCons: { pros: string[]; cons: string[] };
	targetAudience: string[];
	ratings: {
		overall: number;
		comfort: number;
		precision: number;
		batteryLife: number;
		connectivity: number;
		valueForMoney: number;
		reviewCount: number;
	};
	badges: string[];
};

export default function ClavierSourisDetails() {
	const params = useParams<{ slug: string }>();
	const id = params?.slug || "";

	// Recherche dans claviers et souris
	const clavierItem = ClavierSourisData.claviers.find((item) => item.id === id) as Clavier | undefined;
	const sourisItem = ClavierSourisData.souris.find((item) => item.id === id) as Souris | undefined;
	const isClavier = !!clavierItem;
	const item = clavierItem || sourisItem;

	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
	const thumbnailsRef = useRef<HTMLDivElement>(null);

	// Fonction pour naviguer entre les images (change l'image principale + défile les miniatures)
	const navigateImage = (direction: "left" | "right", totalImages: number) => {
		const newIndex = direction === "left"
			? (selectedImage - 1 + totalImages) % totalImages
			: (selectedImage + 1) % totalImages;

		setSelectedImage(newIndex);

		// Faire défiler les miniatures pour centrer sur l'image sélectionnée
		if (thumbnailsRef.current) {
			const thumbnailWidth = 96 + 12; // w-24 (96px) + gap-3 (12px)
			thumbnailsRef.current.scrollTo({
				left: newIndex * thumbnailWidth - thumbnailsRef.current.offsetWidth / 2 + thumbnailWidth / 2,
				behavior: "smooth",
			});
		}
	};

	// Gestion de l'effet loupe
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		setZoomPosition({ x, y });
	};

	if (!item) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<i className="ri-error-warning-line text-6xl text-gray-400 mb-4"></i>
					<h1 className="text-3xl GolosText mb-2">Produit non trouvé</h1>
					<p className="text-gray-500 mb-6">Le produit que vous recherchez n&apos;existe pas.</p>
					<Link href="/peripheriques/claviers-souris" className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
						Retour aux claviers & souris
					</Link>
				</div>
			</div>
		);
	}

	// Images à afficher
	const imagesToShow = item.images && item.images.length > 0 ? item.images : [item.images[0]];

	// Prix enseignes
	const prixEnseignes = [
		{ enseigne: "Amazon", prix: item.price.amazon.current, url: item.price.amazon.url, logo: "/logos/amazon.svg" },
		{ enseigne: "Cdiscount", prix: item.price.cdiscount.current, url: item.price.cdiscount.url, logo: "/logos/cdiscount.svg" },
		{ enseigne: "Fnac", prix: item.price.fnac.current, url: item.price.fnac.url, logo: "/logos/fnac.svg" },
	];

	return (
		<>
			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-10 md:mt-15">{item.name}</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-3 gap-0.5 xs:gap-1">
					<Link href="/" className="hover:text-(--prim) transition-all duration-300">
						Accueil
					</Link>
					
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link href="/peripheriques/claviers-souris" className="hover:text-(--prim) transition-all duration-300">
						Claviers & Souris
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<span className="GolosText text-white truncate max-w-20 xs:max-w-30 sm:max-w-50 lg:max-w-none">{item.name}</span>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[10%] py-10 md:py-16">
				{/* Section principale */}
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					{/* Galerie d'images */}
					<div className="w-full lg:w-1/2">
						{/* Image principale avec effet loupe */}
						<div
							className="relative bg-gray-50 rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[450px] mb-4 cursor-zoom-in group"
							onMouseEnter={() => setIsZoomed(true)}
							onMouseLeave={() => setIsZoomed(false)}
							onMouseMove={handleMouseMove}
						>
							{item.badges && item.badges[0] && (
								<div className="absolute top-4 left-4 z-10">
									<span className="bg-(--prim) text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
										{item.badges[0]}
									</span>
								</div>
							)}
							{/* Icône loupe */}
							<div className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}>
								<i className="ri-zoom-in-line text-gray-600 text-xl"></i>
							</div>
							<Image
								src={imagesToShow[selectedImage]}
								alt={item.name}
								fill
								className="object-contain p-6 transition-transform duration-200"
								style={{
									transform: isZoomed ? "scale(2)" : "scale(1)",
									transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
								}}
								priority
							/>
						</div>

						{/* Thumbnails */}
						{imagesToShow.length > 1 && (
							<div className="flex items-center gap-2">
								{/* Flèche gauche - cachée sur mobile */}
								<button
									onClick={() => navigateImage("left", imagesToShow.length)}
									className="hidden md:flex shrink-0 w-9 h-9 bg-white shadow-md rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer"
								>
									<i className="ri-arrow-left-s-line text-lg text-gray-600"></i>
								</button>

								<div
									ref={thumbnailsRef}
									className="flex gap-3 overflow-x-auto pb-2 scroll-smooth flex-1"
									style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
								>
									{imagesToShow.map((img, index) => (
										<button
											key={index}
											onClick={() => setSelectedImage(index)}
											className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${
												selectedImage === index ? "border-(--prim)" : "border-gray-200 hover:border-gray-400"
											}`}
										>
											<Image
												src={img}
												alt={`${item.name} - vue ${index + 1}`}
												fill
												className="object-contain p-2 bg-gray-50"
											/>
										</button>
									))}
								</div>

								{/* Flèche droite - cachée sur mobile */}
								<button
									onClick={() => navigateImage("right", imagesToShow.length)}
									className="hidden md:flex shrink-0 w-9 h-9 bg-white shadow-md rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer"
								>
									<i className="ri-arrow-right-s-line text-lg text-gray-600"></i>
								</button>
							</div>
						)}
					</div>

					{/* Infos principales */}
					<div className="w-full lg:w-1/2">
						{/* Catégorie et nom */}
						<p className="text-gray-500 text-lg mb-1">{item.subcategory}</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl Sora mb-4">{item.name}</h1>

						{/* Note */}
						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<i
										key={i}
										className={`ri-star-${i < Math.floor(item.ratings.overall) ? "fill" : "line"} text-lg sm:text-xl text-yellow-400`}
									></i>
								))}
							</div>
							<span className="text-sm sm:text-lg text-gray-600">
								{item.ratings.overall}/5 <span className="text-gray-400">({item.ratings.reviewCount} avis)</span>
							</span>
						</div>

						{/* Specs rapides */}
						<div className="flex flex-wrap gap-2 mb-10 sm:mb-6">
							{isClavier ? (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-keyboard-line mr-1"></i>{(item as Clavier).features.typeSwitch.split(" ")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-bluetooth-line mr-1"></i>{(item as Clavier).features.connectivite.split(",")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-battery-2-charge-line mr-1"></i>{(item as Clavier).features.autonomie.split(" ")[0]}
									</span>
									{(item as Clavier).features.multiDevices?.includes("Oui") && (
										<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-device-line mr-1"></i>Multi-devices
										</span>
									)}
									{(item as Clavier).features.retroeclairage?.includes("Oui") && (
										<span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-sun-line mr-1"></i>Rétroéclairé
										</span>
									)}
								</>
							) : (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-focus-3-line mr-1"></i>{(item as Souris).features.typeCapteur.split(" ")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-bluetooth-line mr-1"></i>{(item as Souris).features.connectivite.split(",")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-battery-2-charge-line mr-1"></i>{(item as Souris).features.autonomie}
									</span>
									{(item as Souris).features.multiDevices?.includes("Oui") && (
										<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-device-line mr-1"></i>Multi-devices
										</span>
									)}
									{((item as Souris).features.silencieux === "Oui" || (item as Souris).features.silencieux?.includes("Oui")) && (
										<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-volume-mute-line mr-1"></i>Silencieuse
										</span>
									)}
								</>
							)}
						</div>

						{/* Prix enseignes */}
						<div className="bg-gray-50 rounded-2xl p-0 sm:p-4 mb-6">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<i className="ri-price-tag-3-line text-(--prim)"></i>
								Comparer les prix
							</h3>
							<div className="space-y-3">
								{prixEnseignes.map((enseigne, index) => (
									<a
										key={index}
										href={enseigne.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-(--prim) hover:shadow-md transition-all duration-300 group"
									>
										<div className="flex items-center gap-3">
											<div className="w-24 h-8 flex items-center sm:justify-center">
												<span className="font-bold text-gray-700">{enseigne.enseigne}</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
													Meilleur prix
												</span>
											)}
										</div>
										<div className="flex items-center gap-3">
											<span className="text-xl sm:text-2xl font-bold text-(--prim)">{enseigne.prix}€</span>
											<i className="ri-external-link-line text-gray-400 group-hover:text-(--prim) transition-colors"></i>
										</div>
									</a>
								))}
							</div>
						</div>

						{/* Pour qui */}
						<div className="bg-blue-50 rounded-2xl p-0 sm:p-4">
							<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
								<i className="ri-user-star-line text-blue-600"></i>
								Pour qui ?
							</h3>
							<ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-1">
								{item.targetAudience.map((audience, index) => (
									<li key={index} className="flex items-start gap-2">
										<i className="ri-check-line text-blue-600 mt-0.5"></i>
										{audience}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Section caractéristiques et points forts/faibles */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
					{/* Caractéristiques techniques */}
					<div className="lg:col-span-1">
						<div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2">
								<i className="ri-settings-3-line text-(--prim)"></i>
								Caractéristiques
							</h2>
							<div className="space-y-4">
								{isClavier ? (
									<>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Type de switch</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.typeSwitch}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Force actuation</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.forceActuation}</span>
										</div>
										{(item as Clavier).features.courbure && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Courbure</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.courbure}</span>
											</div>
										)}
										{(item as Clavier).features.format && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Format</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.format}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Connectivité</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.connectivite}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Multi-devices</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.multiDevices}</span>
										</div>
										{(item as Clavier).features.retroeclairage && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Rétroéclairage</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.retroeclairage}</span>
											</div>
										)}
										{(item as Clavier).features.reposePoignets && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Repose-poignets</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.reposePoignets}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Autonomie</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.autonomie}</span>
										</div>
										{(item as Clavier).features.chargeRapide && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Charge rapide</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.chargeRapide}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Compatibilité</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.compatibilite}</span>
										</div>
										{(item as Clavier).features.programmation && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Programmation</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.programmation}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Dimensions</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.dimensions}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Poids</span>
											<span className="font-medium">{(item as Clavier).features.poids}</span>
										</div>
										<div className="flex justify-between py-3">
											<span className="text-gray-500">Layout</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Clavier).features.layout}</span>
										</div>
									</>
								) : (
									<>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Type capteur</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.typeCapteur}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Précision</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.precision}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Connectivité</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.connectivite}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Multi-devices</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.multiDevices}</span>
										</div>
										{(item as Souris).features.molette && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Molette</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.molette}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Boutons</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.boutons}</span>
										</div>
										{(item as Souris).features.angle && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Angle</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.angle}</span>
											</div>
										)}
										{(item as Souris).features.silencieux && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Silencieux</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.silencieux}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Autonomie</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.autonomie}</span>
										</div>
										{(item as Souris).features.chargeRapide && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Charge rapide</span>
												<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.chargeRapide}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Ergonomie</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.ergonomie}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Compatibilité</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.compatibilite}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Dimensions</span>
											<span className="font-medium text-right max-w-[60%]">{(item as Souris).features.dimensions}</span>
										</div>
										<div className="flex justify-between py-3">
											<span className="text-gray-500">Poids</span>
											<span className="font-medium">{(item as Souris).features.poids}</span>
										</div>
									</>
								)}
							</div>
						</div>
					</div>

					{/* Points forts et faibles */}
					<div className="lg:col-span-2 space-y-6">
						{/* Points forts */}
						<div className="bg-green-50 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2 text-green-800">
								<i className="ri-thumb-up-fill text-green-600"></i>
								Points forts
							</h2>
							<ul className="space-y-3">
								{item.prosAndCons.pros.map((point, index) => (
									<li key={index} className="flex items-start gap-3">
										<i className="ri-check-line text-green-600 text-xl mt-0.5"></i>
										<span className="text-gray-700">{point}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Points faibles */}
						<div className="bg-red-50 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2 text-red-800">
								<i className="ri-thumb-down-fill text-red-500"></i>
								Points faibles
							</h2>
							<ul className="space-y-3">
								{item.prosAndCons.cons.map((point, index) => (
									<li key={index} className="flex items-start gap-3">
										<i className="ri-close-line text-red-500 text-xl mt-0.5"></i>
										<span className="text-gray-700">{point}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Description complète */}
				<div className="mt-12">
					<div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6 md:p-8">
						<h2 className="text-2xl md:text-3xl Sora mb-6 flex items-center gap-2">
							<i className="ri-file-text-line text-(--prim)"></i>
							Notre avis détaillé
						</h2>
						<p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">{item.description}</p>
					</div>
				</div>

				{/* CTA final */}
				<div className="mt-12 bg-linear-to-l from-gray-900 to-gray-700 rounded-2xl p-4 sm:p-8 md:p-12 text-white text-center">
					<h2 className="text-2xl md:text-3xl Sora font-semibold mb-4">
						Convaincu par le {item.name} ?
					</h2>
					<p className="text-gray-300 mb-8 max-w-2xl mx-auto">
						Comparez les prix chez nos partenaires et profitez des meilleures offres du moment.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href={prixEnseignes[0]?.url || "#"}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-(--prim) text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
						>
							<i className="ri-shopping-cart-line"></i>
							Voir sur {prixEnseignes[0]?.enseigne} - {prixEnseignes[0]?.prix}€
						</a>
						<Link
							href="/peripheriques/claviers-souris"
							className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
						>
							<i className="ri-arrow-left-line"></i>
							Voir tous les claviers & souris
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
