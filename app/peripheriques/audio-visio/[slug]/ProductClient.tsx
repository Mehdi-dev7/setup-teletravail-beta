"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import AudioVisioData from "@/JsonData/JsonAudioVisio/AudioVisioData.json";

// Types
type AudioItem = (typeof AudioVisioData.audio)[0];
type VisioItem = (typeof AudioVisioData.visio)[0];

export default function AudioVisioClient({ slug }: { slug: string }) {
	const id = slug;

	// Recherche dans audio et visio
	const audioItem = AudioVisioData.audio.find((item) => item.id === id) as
		| AudioItem
		| undefined;
	const visioItem = AudioVisioData.visio.find((item) => item.id === id) as
		| VisioItem
		| undefined;

	const isAudio = !!audioItem;
	const item = audioItem || visioItem;

	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
	const thumbnailsRef = useRef<HTMLDivElement>(null);

	// Fonction pour naviguer entre les images (change l'image principale + défile les miniatures)
	const navigateImage = (direction: "left" | "right", totalImages: number) => {
		const newIndex =
			direction === "left"
				? (selectedImage - 1 + totalImages) % totalImages
				: (selectedImage + 1) % totalImages;

		setSelectedImage(newIndex);

		// Faire défiler les miniatures pour centrer sur l'image sélectionnée
		if (thumbnailsRef.current) {
			const thumbnailWidth = 96 + 12; // w-24 (96px) + gap-3 (12px)
			thumbnailsRef.current.scrollTo({
				left:
					newIndex * thumbnailWidth -
					thumbnailsRef.current.offsetWidth / 2 +
					thumbnailWidth / 2,
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
					<p className="text-gray-500 mb-6">
						Le produit que vous recherchez n&apos;existe pas.
					</p>
					<Link
						href="/peripheriques/audio-visio"
						className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
					>
						Retour à Audio & Visio
					</Link>
				</div>
			</div>
		);
	}

	// Prix enseignes
	const prixEnseignes = [
		{
			enseigne: "Amazon",
			prix: item.price.amazon.current,
			url: item.price.amazon.url,
		},
		{
			enseigne: "Cdiscount",
			prix: item.price.cdiscount.current,
			url: item.price.cdiscount.url,
		},
		{
			enseigne: "Fnac",
			prix: item.price.fnac.current,
			url: item.price.fnac.url,
		},
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
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-10 md:mt-15">
					{item.category}
				</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-3 gap-0.5 xs:gap-1">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link
						href="/peripheriques/audio-visio"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Audio & Visio
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<span className="GolosText text-white truncate max-w-20 xs:max-w-30 sm:max-w-50 lg:max-w-none">
						{item.name}
					</span>
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
							<div
								className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}
							>
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
												selectedImage === index
													? "border-(--prim)"
													: "border-gray-200 hover:border-gray-400"
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
						<h1 className="text-3xl sm:text-4xl lg:text-5xl Sora mb-4">
							{item.name}
						</h1>

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
								{item.ratings.overall}/5{" "}
								<span className="text-gray-400">
									({item.ratings.reviewCount} avis)
								</span>
							</span>
						</div>

						{/* Specs rapides */}
						<div className="flex flex-wrap gap-2 mb-10 sm:mb-6">
							{isAudio && audioItem ? (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-battery-2-charge-line mr-1"></i>
										{audioItem.features.autonomie.split(",")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-scales-line mr-1"></i>
										{audioItem.features.poids}
									</span>
									{audioItem.features.reductionBruit.includes("Active") && (
										<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-volume-mute-line mr-1"></i>ANC
										</span>
									)}
									{audioItem.features.multipoint?.includes("Oui") && (
										<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-bluetooth-connect-line mr-1"></i>
											Multipoint
										</span>
									)}
								</>
							) : visioItem ? (
								<>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-vidicon-line mr-1"></i>
										{visioItem.features.resolution.includes("4K")
											? "4K"
											: visioItem.features.resolution.includes("1080")
												? "1080p"
												: "720p"}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-speed-line mr-1"></i>
										{visioItem.features.framerate.split(",")[0]}
									</span>
									<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
										<i className="ri-focus-2-line mr-1"></i>
										{visioItem.features.champVision}
									</span>
									{visioItem.features.autofocus?.includes("Oui") && (
										<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
											<i className="ri-focus-3-line mr-1"></i>Autofocus
										</span>
									)}
								</>
							) : null}
						</div>

						{/* Badges */}
						{item.badges && item.badges.length > 1 && (
							<div className="flex flex-wrap gap-2 mb-6">
								{item.badges.slice(1).map((badge, index) => (
									<span
										key={index}
										className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
									>
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
												<span className="font-bold text-sm xs:text-base md:text-lg text-gray-700">
													{priceItem.enseigne}
												</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full font-medium">
													Meilleur prix
												</span>
											)}
										</div>
										<div className="flex items-center gap-3">
											<span className="text-base xs:text-xl sm:text-2xl font-bold text-(--prim)">
												{priceItem.prix}€
											</span>
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
								{isAudio && audioItem ? (
									<>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Connexion</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.typeConnexion}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Réduction bruit</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.reductionBruit}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Autonomie</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.autonomie}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Charge rapide</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.chargeRapide}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Microphones</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.microphones}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Poids</span>
											<span className="font-medium">
												{audioItem.features.poids}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Multipoint</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.multipoint}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Codec</span>
											<span className="font-medium">
												{audioItem.features.codec}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Application</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.application}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Pliable</span>
											<span className="font-medium">
												{audioItem.features.pliable}
											</span>
										</div>
										<div className="flex justify-between py-3">
											<span className="text-gray-500">Certification</span>
											<span className="font-medium text-right max-w-[60%]">
												{audioItem.features.certification}
											</span>
										</div>
									</>
								) : visioItem ? (
									<>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Résolution</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.resolution}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Framerate</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.framerate}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Autofocus</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.autofocus}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Champ de vision</span>
											<span className="font-medium">
												{visioItem.features.champVision}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Microphones</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.microphones}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Connexion</span>
											<span className="font-medium">
												{visioItem.features.connexion}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Montage</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.montage}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Correction lumière</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.correction}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Dimensions</span>
											<span className="font-medium">
												{visioItem.features.dimensions}
											</span>
										</div>
										<div className="flex justify-between py-3 border-b border-gray-100">
											<span className="text-gray-500">Poids</span>
											<span className="font-medium">
												{visioItem.features.poids}
											</span>
										</div>
										<div className="flex justify-between py-3">
											<span className="text-gray-500">Certification</span>
											<span className="font-medium text-right max-w-[60%]">
												{visioItem.features.certification}
											</span>
										</div>
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
						<div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
							{item.description}
						</div>
					</div>
				</div>

				{/* FAQ SEO */}
				<section className="mt-12 bg-white border border-gray-200 rounded-2xl p-3 sm:p-6 md:p-8">
					<h2 className="text-2xl Sora mb-6">Questions fréquentes</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold text-lg mb-2">
								{isAudio
									? `Quel casque audio choisir pour le télétravail et les visioconférences ?`
									: `Comment choisir la meilleure webcam pour le télétravail ?`}
							</h3>
							<p className="text-gray-700">
								{isAudio && audioItem
									? `Le ${item.name} est un casque ${audioItem.features.typeConnexion} avec réduction de bruit ${audioItem.features.reductionBruit.toLowerCase()}. Pour le télétravail, un casque avec une bonne réduction de bruit et des microphones intégrés (${audioItem.features.microphones}) est essentiel pour des appels clairs et une concentration optimale. L\u0027autonomie de ${audioItem.features.autonomie} vous accompagne toute la journée sans interruption.`
									: visioItem
										? `La ${item.name} offre une résolution ${visioItem.features.resolution} à ${visioItem.features.framerate} avec un champ de vision de ${visioItem.features.champVision}. Pour le télétravail, une webcam de qualité améliore votre image professionnelle en visioconférence. L\u0027autofocus ${visioItem.features.autofocus?.toLowerCase() || "intégré"} et la correction lumière ${visioItem.features.correction.toLowerCase()} garantissent une image nette en toutes circonstances.`
										: ""}
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-2">
								{isAudio
									? `Le ${item.name} est-il compatible avec tous les appareils ?`
									: `La ${item.name} est-elle compatible avec les logiciels de visio ?`}
							</h3>
							<p className="text-gray-700">
								{isAudio && audioItem
									? `Ce casque se connecte via ${audioItem.features.typeConnexion} et supporte le multipoint : ${audioItem.features.multipoint}. Il est certifié ${audioItem.features.certification}, garantissant une compatibilité optimale avec les principales plateformes de visioconférence (Zoom, Teams, Google Meet). Le codec ${audioItem.features.codec} assure une qualité audio professionnelle sur tous vos appareils.`
									: visioItem
										? `Cette webcam se connecte en ${visioItem.features.connexion} et est certifiée ${visioItem.features.certification}. Elle est compatible avec tous les principaux logiciels de visioconférence : Zoom, Microsoft Teams, Google Meet, Skype et bien d\u0027autres. Son montage ${visioItem.features.montage.toLowerCase()} s\u0027adapte à la plupart des configurations.`
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
								Son prix de {item.price.amazon.current}€ offre un excellent rapport qualité-prix pour un {isAudio ? "casque audio" : "webcam"} de cette gamme.
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
						Comparez les prix chez nos partenaires et profitez des meilleures
						offres du moment.
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
							href="/peripheriques/audio-visio"
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
