"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import GestionCableData from "@/JsonData/JsonGestionCable/GestionCableData.json";

// Type pour les produits
type GestionCable = {
	id: string;
	name: string;
	category: string;
	subcategory: string;
	images: string[];
	price: {
		amazon: { current: number; original: number; currency: string; asin: string; url: string };
		cdiscount?: { current: number; original: number; currency: string; url: string };
		fnac?: { current: number; original: number; currency: string; url: string };
	};
	features: {
		type: string;
		capacite?: string;
		dimensions?: string;
		longueur?: string;
		largeur?: string;
		profondeur?: string;
		sorties?: string;
		materiaux: string;
		pieds?: string;
		couvercle?: string;
		couleurs: string;
		poids: string;
		installation?: string;
		quantite?: string;
		aimant?: string;
		decoupage?: string;
		accessoires?: string;
		certification?: string;
		garantie?: string;
		vis?: string;
		applications?: string;
	};
	description: string;
	prosAndCons: {
		pros: string[];
		cons: string[];
	};
	targetAudience: string[];
	ratings: {
		overall: number;
		design: number;
		functionality: number;
		buildQuality: number;
		easeOfUse: number;
		valueForMoney: number;
		reviewCount: number;
	};
	badges: string[];
};

export default function GestionCablesDetails() {
	const params = useParams<{ slug: string }>();
	const id = params?.slug || "";

	// Recherche dans rangements_cables
	const allProducts: GestionCable[] = [...GestionCableData.rangements_cables] as GestionCable[];
	const product = allProducts.find((item) => String(item.id) === String(id));

	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
	const thumbnailsRef = useRef<HTMLDivElement>(null);

	// Fonction pour naviguer entre les images
	const navigateImage = (direction: "left" | "right", totalImages: number) => {
		const newIndex = direction === "left"
			? (selectedImage - 1 + totalImages) % totalImages
			: (selectedImage + 1) % totalImages;

		setSelectedImage(newIndex);

		if (thumbnailsRef.current) {
			const thumbnailWidth = 96 + 12;
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

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<i className="ri-error-warning-line text-6xl text-gray-400 mb-4"></i>
					<h1 className="text-3xl GolosText mb-2">Produit non trouvé</h1>
					<p className="text-gray-500 mb-6">Le produit que vous recherchez n&apos;existe pas.</p>
					<Link href="/accessoires/gestionCables" className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
						Retour à la gestion des câbles
					</Link>
				</div>
			</div>
		);
	}

	// Images à afficher
	const imagesToShow = product.images && product.images.length > 0 ? product.images : ["/placeholder.jpg"];

	// Prix enseignes
	const prixEnseignes = [
		{ enseigne: "Amazon", prix: product.price.amazon.current, url: product.price.amazon.url, logo: "/logos/amazon.svg" },
		...(product.price.cdiscount ? [{ enseigne: "Cdiscount", prix: product.price.cdiscount.current, url: product.price.cdiscount.url, logo: "/logos/cdiscount.svg" }] : []),
		...(product.price.fnac ? [{ enseigne: "Fnac", prix: product.price.fnac.current, url: product.price.fnac.url, logo: "/logos/fnac.svg" }] : []),
	];

	return (
		<>
			{/* Header */}
			<div className="section-bg text-white flex  flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-10 md:mt-15">{product.category}</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-4 gap-0.5 xs:gap-1">
					<Link href="/" className="hover:text-(--prim) transition-all duration-300">
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link href="/accessoires/gestionCables" className="hover:text-(--prim) transition-all duration-300">
						Gestion Câbles
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<span className="GolosText text-white truncate max-w-20 xs:max-w-30 sm:max-w-50 lg:max-w-none">{product.name}</span>
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
							{product.badges && product.badges[0] && (
								<div className="absolute top-4 left-4 z-10">
									<span className="bg-(--prim) text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
										{product.badges[0]}
									</span>
								</div>
							)}
							{/* Icône loupe */}
							<div className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}>
								<i className="ri-zoom-in-line text-gray-600 text-xl"></i>
							</div>
							<Image
								src={imagesToShow[selectedImage]}
								alt={product.name}
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
												alt={`${product.name} - vue ${index + 1}`}
												fill
												className="object-contain p-2 bg-gray-50"
											/>
										</button>
									))}
								</div>

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
						<p className="text-gray-500 text-lg mb-1">{product.subcategory}</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl Sora mb-4">{product.name}</h1>

						{/* Note */}
						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<i
										key={i}
										className={`ri-star-${i < Math.floor(product.ratings.overall) ? "fill" : "line"} text-lg sm:text-xl text-yellow-400`}
									></i>
								))}
							</div>
							<span className="text-sm sm:text-lg text-gray-600">
								{product.ratings.overall}/5 <span className="text-gray-400">({product.ratings.reviewCount} avis)</span>
							</span>
						</div>

						{/* Specs rapides */}
						<div className="flex flex-wrap gap-2 mb-10 sm:mb-6">
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-box-3-line mr-1"></i>{product.features.type}
							</span>
							{product.features.dimensions && (
								<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									<i className="ri-ruler-line mr-1"></i>{product.features.dimensions}
								</span>
							)}
							{product.features.longueur && (
								<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									<i className="ri-ruler-line mr-1"></i>{product.features.longueur}
								</span>
							)}
							<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-shield-check-line mr-1"></i>{product.features.materiaux}
							</span>
						</div>

						{/* Prix enseignes */}
						<div className="bg-gray-50 rounded-2xl p-0 sm:p-4 mb-6">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<i className="ri-price-tag-3-line text-(--prim)"></i>
								Comparer les prix
							</h3>
							<div className="space-y-3">
								{prixEnseignes.map((item, index) => (
									<a
										key={index}
										href={item.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-(--prim) hover:shadow-md transition-all duration-300 group"
									>
										<div className="flex items-center gap-3">
											<div className="w-24 h-8 flex items-center sm:justify-center">
												<span className="font-bold text-sm xs:text-base md:text-lg text-gray-700">{item.enseigne}</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full font-medium">
													Meilleur prix
												</span>
											)}
										</div>
										<div className="flex items-center gap-3">
											<span className="text-base xs:text-xl sm:text-2xl font-bold text-(--prim)">{item.prix}€</span>
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
								{product.targetAudience.map((audience, index) => (
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
							<div className="space-y-4 text-sm xs:text-base">
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Type</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.type}</span>
								</div>
								{product.features.dimensions && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Dimensions</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.dimensions}</span>
									</div>
								)}
								{product.features.longueur && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Longueur</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.longueur}</span>
									</div>
								)}
								{product.features.capacite && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Capacité</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.capacite}</span>
									</div>
								)}
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Matériaux</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.materiaux}</span>
								</div>
								{product.features.installation && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Installation</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.installation}</span>
									</div>
								)}
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Couleurs</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.couleurs}</span>
								</div>
								<div className="flex justify-between py-3">
									<span className="text-gray-500">Poids</span>
									<span className="font-medium">{product.features.poids}</span>
								</div>
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
								{product.prosAndCons.pros.map((point, index) => (
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
								{product.prosAndCons.cons.map((point, index) => (
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
						<p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">{product.description}</p>
					</div>
				</div>

				{/* CTA final */}
				<div className="mt-12 bg-linear-to-l from-gray-900 to-gray-700 rounded-2xl p-4 sm:p-8 md:p-12 text-white text-center">
					<h2 className="text-xl xs:text-2xl md:text-3xl Sora font-semibold mb-4">
						Convaincu par le {product.name} ?
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
							href="/accessoires/gestionCables"
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
