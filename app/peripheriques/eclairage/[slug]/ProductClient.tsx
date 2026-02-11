"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import EclairageData from "@/JsonData/JsonEclairage/EclairageData.json";

// Types
type EclairageEcranItem = (typeof EclairageData.eclairage_ecran)[0];
type EclairageAmbianceItem = (typeof EclairageData.eclairage_ambiance)[0];

export default function EclairageClient({ slug }: { slug: string }) {
	const id = slug;

	// Recherche dans eclairage_ecran et eclairage_ambiance
	const ecranItem = EclairageData.eclairage_ecran.find((item) => item.id === id) as EclairageEcranItem | undefined;
	const ambianceItem = EclairageData.eclairage_ambiance.find((item) => item.id === id) as EclairageAmbianceItem | undefined;

	const isEcran = !!ecranItem;
	const item = ecranItem || ambianceItem;

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
					<Link href="/peripheriques/eclairage" className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
						Retour à l&apos;éclairage
					</Link>
				</div>
			</div>
		);
	}

	// Prix enseignes
	const prixEnseignes = [
		{ enseigne: "Amazon", prix: item.price.amazon.current, url: item.price.amazon.url },
		{ enseigne: "Cdiscount", prix: item.price.cdiscount.current, url: item.price.cdiscount.url },
		{ enseigne: "Fnac", prix: item.price.fnac.current, url: item.price.fnac.url },
	].sort((a, b) => a.prix - b.prix);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						name: item.name,
						description: item.description,
						image: item.images,
						brand: { "@type": "Brand", name: item.name.split(" ")[0] },
						offers: {
							"@type": "Offer",
							url: item.price.amazon.url,
							priceCurrency: "EUR",
							price: item.price.amazon.current,
							availability: "https://schema.org/InStock",
						},
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: item.ratings.overall,
							reviewCount: item.ratings.reviewCount,
						},
					}),
				}}
			/>

			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-10 md:mt-15">{item.category}</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-3 gap-0.5 xs:gap-1">
					<Link href="/" className="hover:text-(--prim) transition-all duration-300">
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link href="/peripheriques/eclairage" className="hover:text-(--prim) transition-all duration-300">
						Éclairage
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
								src={item.images[selectedImage]}
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
						{item.images.length > 1 && (
							<div className="flex items-center gap-2">
								{/* Flèche gauche - cachée sur mobile */}
								<button
									onClick={() => navigateImage("left", item.images.length)}
									className="hidden md:flex shrink-0 w-9 h-9 bg-white shadow-md rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer"
								>
									<i className="ri-arrow-left-s-line text-lg text-gray-600"></i>
								</button>

								<div
									ref={thumbnailsRef}
									className="flex gap-3 overflow-x-auto pb-2 scroll-smooth flex-1"
									style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
								>
									{item.images.map((img, index) => (
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
									onClick={() => navigateImage("right", item.images.length)}
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
							{isEcran && ecranItem ? (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-sun-line mr-1"></i>{ecranItem.features.luminosite}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-temp-hot-line mr-1"></i>{ecranItem.features.temperature}
									</span>
									{ecranItem.features.capteurAuto?.includes("Oui") && (
										<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-sensor-line mr-1"></i>Auto-dimming
										</span>
									)}
									{ecranItem.features.antiReflet?.includes("Oui") && (
										<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-eye-line mr-1"></i>Anti-reflet
										</span>
									)}
								</>
							) : ambianceItem ? (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-palette-line mr-1"></i>{ambianceItem.features.couleurs}
									</span>
									{ambianceItem.features.connectivite && (
										<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-wifi-line mr-1"></i>{ambianceItem.features.connectivite.split(" ")[0]}
										</span>
									)}
									{ambianceItem.features.sync && ambianceItem.features.sync !== "Non" && (
										<span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-rhythm-line mr-1"></i>Sync
										</span>
									)}
									{ambianceItem.features.extensible?.includes("Oui") && (
										<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-add-circle-line mr-1"></i>Extensible
										</span>
									)}
								</>
							) : null}
						</div>

						{/* Badges */}
						{item.badges && item.badges.length > 1 && (
							<div className="flex flex-wrap gap-2 mb-6">
								{item.badges.slice(1).map((badge, index) => (
									<span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
										{badge}
									</span>
								))}
							</div>
						)}

						{/* Prix enseignes */}
						<div className="bg-gray-50 rounded-2xl p-0 sm:p-4 mb-6">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<i className="ri-price-tag-3-line text-(--prim)"></i>
								Comparer les prix
							</h3>
							<div className="space-y-3">
								{prixEnseignes.map((priceItem, index) => (
									<a
										key={index}
										href={priceItem.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-(--prim) hover:shadow-md transition-all duration-300 group"
									>
										<div className="flex items-center gap-3">
											<div className="w-24 h-8 flex items-center sm:justify-center">
												<span className="font-bold text-sm xs:text-base md:text-lg text-gray-700">{priceItem.enseigne}</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full font-medium">
													Meilleur prix
												</span>
											)}
										</div>
										<div className="flex items-center gap-3">
											<span className="text-base xs:text-xl sm:text-2xl font-bold text-(--prim)">{priceItem.prix}€</span>
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
								{item.targetAudience.map((target, index) => (
									<li key={index} className="flex items-start gap-2">
										<i className="ri-arrow-right-s-line text-blue-600 mt-0.5"></i>
										{target}
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
							<div className="space-y-4 text-sm xs:text-base">
								{isEcran && ecranItem ? (
									<>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Type LED</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.typeLed}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Température</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.temperature}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Luminosité</span>
											<span className="font-medium">{ecranItem.features.luminosite}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Anti-reflet</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.antiReflet}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Filtre bleu</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.filtreBleu}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Capteur auto</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.capteurAuto}</span>
										</div>
										{ecranItem.features.telecommande && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Télécommande</span>
												<span className="font-medium text-right max-w-[60%]">{ecranItem.features.telecommande}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Alimentation</span>
											<span className="font-medium">{ecranItem.features.alimentation}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Montage</span>
											<span className="font-medium text-right max-w-[60%]">{ecranItem.features.montage}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Dimensions</span>
											<span className="font-medium">{ecranItem.features.dimensions}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Poids</span>
											<span className="font-medium">{ecranItem.features.poids}</span>
										</div>
										{ecranItem.features.compatibilite && (
											<div className="flex justify-between py-3">
												<span className="text-gray-500">Compatibilité</span>
												<span className="font-medium text-right max-w-[60%]">{ecranItem.features.compatibilite}</span>
											</div>
										)}
									</>
								) : ambianceItem ? (
									<>
										{ambianceItem.features.longueur && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Longueur</span>
												<span className="font-medium">{ambianceItem.features.longueur}</span>
											</div>
										)}
										{ambianceItem.features.nombre && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Nombre</span>
												<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.nombre}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Type LED</span>
											<span className="font-medium">{ambianceItem.features.typeLed}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Couleurs</span>
											<span className="font-medium">{ambianceItem.features.couleurs}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Luminosité</span>
											<span className="font-medium">{ambianceItem.features.luminosite}</span>
										</div>
										{ambianceItem.features.connectivite && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Connectivité</span>
												<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.connectivite}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Contrôle</span>
											<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.controle}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Effets</span>
											<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.effets}</span>
										</div>
										{ambianceItem.features.sync && (
											<div className="flex justify-between py-3 border-b border-gray-100">
												<span className="text-gray-500">Sync</span>
												<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.sync}</span>
											</div>
										)}
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Alimentation</span>
											<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.alimentation}</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Installation</span>
											<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.installation}</span>
										</div>
										{ambianceItem.features.extensible && (
											<div className="flex justify-between py-3">
												<span className="text-gray-500">Extensible</span>
												<span className="font-medium text-right max-w-[60%]">{ambianceItem.features.extensible}</span>
											</div>
										)}
									</>
								) : null}
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
						<div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">{item.description}</div>
					</div>
				</div>

				{/* FAQ SEO */}
				<section className="mt-12 bg-white border border-gray-200 rounded-2xl p-3 sm:p-6 md:p-8">
					<h2 className="text-2xl Sora mb-6">Questions fréquentes</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold text-lg mb-2">
								{isEcran
									? `Pourquoi utiliser une barre lumineuse d\u0027écran comme le ${item.name} en télétravail ?`
									: `Quel éclairage d\u0027ambiance choisir pour un bureau de télétravail ?`}
							</h3>
							<p className="text-gray-700">
								{isEcran && ecranItem
									? `Le ${item.name} utilise des LED ${ecranItem.features.typeLed} avec une température de couleur de ${ecranItem.features.temperature}. Une barre lumineuse d\u0027écran éclaire votre bureau sans créer de reflets sur le moniteur, réduisant la fatigue oculaire lors de longues sessions de travail. Le filtre bleu ${ecranItem.features.filtreBleu.toLowerCase()} protège vos yeux tout au long de la journée.`
									: ambianceItem
										? `Le ${item.name} propose ${ambianceItem.features.couleurs} avec des LED ${ambianceItem.features.typeLed}. Un éclairage d\u0027ambiance améliore le confort visuel en réduisant le contraste entre votre écran et l\u0027environnement. Les effets ${ambianceItem.features.effets.toLowerCase()} permettent de créer une atmosphère de travail agréable et personnalisée.`
										: ""}
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-2">
								{isEcran
									? `Comment installer le ${item.name} sur son écran ?`
									: `Comment installer le ${item.name} sur son bureau ?`}
							</h3>
							<p className="text-gray-700">
								{isEcran && ecranItem
									? `Ce produit se monte via ${ecranItem.features.montage.toLowerCase()} et mesure ${ecranItem.features.dimensions}. L\u0027alimentation se fait par ${ecranItem.features.alimentation.toLowerCase()}, ce qui simplifie l\u0027installation. ${ecranItem.features.compatibilite ? `Il est compatible avec ${ecranItem.features.compatibilite.toLowerCase()}.` : ""} Aucun outil n\u0027est nécessaire pour le montage, ce qui le rend accessible à tous.`
									: ambianceItem
										? `L\u0027installation se fait par ${ambianceItem.features.installation.toLowerCase()} avec une alimentation ${ambianceItem.features.alimentation.toLowerCase()}. Le contrôle s\u0027effectue via ${ambianceItem.features.controle.toLowerCase()}${ambianceItem.features.connectivite ? ` grâce à la connectivité ${ambianceItem.features.connectivite}` : ""}. ${ambianceItem.features.extensible?.includes("Oui") ? "Le système est extensible pour agrandir votre installation par la suite." : ""}`
										: ""}
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-2">
								Pourquoi choisir le {item.name} pour votre setup télétravail ?
							</h3>
							<p className="text-gray-700">
								Le {item.name} se distingue par ses points forts : {item.prosAndCons.pros.slice(0, 2).join(", ").toLowerCase()}.
								Avec une note de {item.ratings.overall}/5 basée sur {item.ratings.reviewCount} avis, il s&apos;impose comme un choix fiable pour les télétravailleurs exigeants.
								Son prix de {item.price.amazon.current}€ offre un excellent rapport qualité-prix pour un {isEcran ? "éclairage d\u0027écran" : "éclairage d\u0027ambiance"} de cette qualité.
							</p>
						</div>
					</div>
				</section>

				{/* CTA final */}
				<div className="mt-12 bg-linear-to-l from-gray-900 to-gray-700 rounded-2xl p-4 sm:p-8 md:p-12 text-white text-center">
					<h2 className="text-xl xs:text-2xl md:text-3xl Sora font-semibold mb-4">
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
							className="bg-(--prim) text-white text-sm xs:text-base px-4 xs:px-8 py-2 xs:py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
						>
							<i className="ri-shopping-cart-line"></i>
							Voir sur {prixEnseignes[0]?.enseigne} - {prixEnseignes[0]?.prix}€
						</a>
						<Link
							href="/peripheriques/eclairage"
							className="bg-white/10 text-white text-sm xs:text-base px-4 xs:px-8 py-2 xs:py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
						>
							<i className="ri-arrow-left-line"></i>
							Voir tous les produits
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
