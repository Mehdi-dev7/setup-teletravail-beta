"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import SupportEcranData from "@/JsonData/JsonSupportEcran/SupportEcranData.json";

// Type pour les produits
type SupportEcran = {
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
		typeFixation: string;
		tailleEcran?: string;
		nombreEcrans?: string;
		vesa?: string;
		mouvements?: string;
		extensionBras?: string;
		reglageHauteur?: string;
		hauteurReglable?: string;
		plateau?: string;
		rangementDessous?: string;
		capaciteCharge?: string;
		capaciteTotal?: string;
		espacementVertical?: string;
		ressort?: string;
		gestionCables?: string;
		materiaux: string;
		garantie: string;
		poids: string;
		couleurs: string;
		pieds?: string;
		assemblage?: string;
		dimensions?: string;
	};
	description: string;
	prosAndCons: {
		pros: string[];
		cons: string[];
	};
	targetAudience: string[];
	ratings: {
		overall: number;
		buildQuality: number;
		flexibility: number;
		stability: number;
		easeOfInstall: number;
		valueForMoney: number;
		reviewCount: number;
	};
	badges: string[];
};

export default function SupportEcranClient({ slug }: { slug: string }) {
	const id = slug;

	// Recherche dans tous les supports
	const allProducts: SupportEcran[] = [
		...SupportEcranData.supports_simples,
		...SupportEcranData.supports_doubles,
		...SupportEcranData.supports_triples,
	] as SupportEcran[];
	const product = allProducts.find((item) => String(item.id) === String(id));

	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
	const thumbnailsRef = useRef<HTMLDivElement>(null);

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
					<Link href="/accessoires/supportEcran" className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
						Retour aux supports écran
					</Link>
				</div>
			</div>
		);
	}

	const imagesToShow = product.images && product.images.length > 0 ? product.images : ["/placeholder.jpg"];

	const prixEnseignes = [
		{ enseigne: "Amazon", prix: product.price.amazon.current, url: product.price.amazon.url, logo: "/logos/amazon.svg" },
		...(product.price.cdiscount ? [{ enseigne: "Cdiscount", prix: product.price.cdiscount.current, url: product.price.cdiscount.url, logo: "/logos/cdiscount.svg" }] : []),
		...(product.price.fnac ? [{ enseigne: "Fnac", prix: product.price.fnac.current, url: product.price.fnac.url, logo: "/logos/fnac.svg" }] : []),
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						name: product.name,
						description: product.description,
						image: product.images,
						brand: { "@type": "Brand", name: product.name.split(" ")[0] },
						offers: {
							"@type": "Offer",
							url: product.price.amazon.url,
							priceCurrency: "EUR",
							price: product.price.amazon.current,
							availability: "https://schema.org/InStock",
						},
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: product.ratings.overall,
							reviewCount: product.ratings.reviewCount,
						},
					}),
				}}
			/>

			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText mt-10 md:mt-15">{product.category}</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-3 gap-0.5 xs:gap-1">
					<Link href="/" className="hover:text-(--prim) transition-all duration-300">Accueil</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link href="/accessoires/supportEcran" className="hover:text-(--prim) transition-all duration-300">Supports Écran</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<span className="GolosText text-white truncate max-w-20 xs:max-w-30 sm:max-w-50 lg:max-w-none">{product.name}</span>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[10%] py-10 md:py-16">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
					<div className="w-full lg:w-1/2">
						<div
							className="relative bg-gray-50 rounded-2xl overflow-hidden h-72 sm:h-96 lg:h-[450px] mb-4 cursor-zoom-in group"
							onMouseEnter={() => setIsZoomed(true)}
							onMouseLeave={() => setIsZoomed(false)}
							onMouseMove={handleMouseMove}
						>
							{product.badges && product.badges[0] && (
								<div className="absolute top-4 left-4 z-10">
									<span className="bg-(--prim) text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">{product.badges[0]}</span>
								</div>
							)}
							<div className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}>
								<i className="ri-zoom-in-line text-gray-600 text-xl"></i>
							</div>
							<Image src={imagesToShow[selectedImage]} alt={product.name} fill className="object-contain p-6 transition-transform duration-200" style={{ transform: isZoomed ? "scale(2)" : "scale(1)", transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }} priority />
						</div>

						{imagesToShow.length > 1 && (
							<div className="flex items-center gap-2">
								<button onClick={() => navigateImage("left", imagesToShow.length)} className="hidden md:flex shrink-0 w-9 h-9 bg-white shadow-md rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer">
									<i className="ri-arrow-left-s-line text-lg text-gray-600"></i>
								</button>
								<div ref={thumbnailsRef} className="flex gap-3 overflow-x-auto pb-2 scroll-smooth flex-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
									{imagesToShow.map((img, index) => (
										<button key={index} onClick={() => setSelectedImage(index)} className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${selectedImage === index ? "border-(--prim)" : "border-gray-200 hover:border-gray-400"}`}>
											<Image src={img} alt={`${product.name} - vue ${index + 1}`} fill className="object-contain p-2 bg-gray-50" />
										</button>
									))}
								</div>
								<button onClick={() => navigateImage("right", imagesToShow.length)} className="hidden md:flex shrink-0 w-9 h-9 bg-white shadow-md rounded-full items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 cursor-pointer">
									<i className="ri-arrow-right-s-line text-lg text-gray-600"></i>
								</button>
							</div>
						)}
					</div>

					<div className="w-full lg:w-1/2">
						<p className="text-gray-500 text-lg mb-1">{product.subcategory}</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl Sora mb-4">{product.name}</h1>

						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<i key={i} className={`ri-star-${i < Math.floor(product.ratings.overall) ? "fill" : "line"} text-lg sm:text-xl text-yellow-400`}></i>
								))}
							</div>
							<span className="text-sm sm:text-lg text-gray-600">
								{product.ratings.overall}/5 <span className="text-gray-400">({product.ratings.reviewCount} avis)</span>
							</span>
						</div>

						<div className="flex flex-wrap gap-2 mb-10 sm:mb-6">
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-tools-line mr-1"></i>{product.features.typeFixation}
							</span>
							{product.features.tailleEcran && (
								<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									<i className="ri-tv-line mr-1"></i>{product.features.tailleEcran}
								</span>
							)}
							{product.features.nombreEcrans && (
								<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									<i className="ri-layout-column-line mr-1"></i>{product.features.nombreEcrans}
								</span>
							)}
							<span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-shield-check-line mr-1"></i>{product.features.garantie}
							</span>
						</div>

						<div className="bg-gray-50 rounded-2xl p-0 sm:p-4 mb-6">
							<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
								<i className="ri-price-tag-3-line text-(--prim)"></i>Comparer les prix
							</h3>
							<div className="space-y-3">
								{prixEnseignes.map((item, index) => (
									<a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-(--prim) hover:shadow-md transition-all duration-300 group">
										<div className="flex items-center gap-3">
											<div className="w-24 h-8 flex items-center sm:justify-center">
												<span className="font-bold text-sm xs:text-base md:text-lg text-gray-700">{item.enseigne}</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full font-medium">Meilleur prix</span>
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

						<div className="bg-blue-50 rounded-2xl p-0 sm:p-4">
							<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
								<i className="ri-user-star-line text-blue-600"></i>Pour qui ?
							</h3>
							<ul className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-1">
								{product.targetAudience.map((audience, index) => (
									<li key={index} className="flex items-start gap-2">
										<i className="ri-check-line text-blue-600 mt-0.5"></i>{audience}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
					<div className="lg:col-span-1">
						<div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2">
								<i className="ri-settings-3-line text-(--prim)"></i>Caractéristiques
							</h2>
							<div className="space-y-4 text-sm xs:text-base">
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Type fixation</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.typeFixation}</span>
								</div>
								{product.features.tailleEcran && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Taille écran</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.tailleEcran}</span>
									</div>
								)}
								{product.features.nombreEcrans && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Nombre écrans</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.nombreEcrans}</span>
									</div>
								)}
								{product.features.vesa && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">VESA</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.vesa}</span>
									</div>
								)}
								{product.features.mouvements && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Mouvements</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.mouvements}</span>
									</div>
								)}
								{product.features.extensionBras && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Extension bras</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.extensionBras}</span>
									</div>
								)}
								{product.features.reglageHauteur && (
									<div className="flex justify-between py-3 border-b border-gray-100">
										<span className="text-gray-500">Réglage hauteur</span>
										<span className="font-medium text-right max-w-[60%]">{product.features.reglageHauteur}</span>
									</div>
								)}
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Matériaux</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.materiaux}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Couleurs</span>
									<span className="font-medium text-right max-w-[60%]">{product.features.couleurs}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Poids</span>
									<span className="font-medium">{product.features.poids}</span>
								</div>
								<div className="flex justify-between py-3">
									<span className="text-gray-500">Garantie</span>
									<span className="font-medium">{product.features.garantie}</span>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:col-span-2 space-y-6">
						<div className="bg-green-50 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2 text-green-800">
								<i className="ri-thumb-up-fill text-green-600"></i>Points forts
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
						<div className="bg-red-50 rounded-2xl p-3 sm:p-6">
							<h2 className="text-2xl Sora font-semibold mb-6 flex items-center gap-2 text-red-800">
								<i className="ri-thumb-down-fill text-red-500"></i>Points faibles
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

				<div className="mt-12">
					<div className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6 md:p-8">
						<h2 className="text-2xl md:text-3xl Sora mb-6 flex items-center gap-2">
							<i className="ri-file-text-line text-(--prim)"></i>Notre avis détaillé
						</h2>
						<p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">{product.description}</p>
					</div>
				</div>

				{/* FAQ SEO */}
				<section className="mt-12 bg-gray-50 rounded-2xl p-6">
					<h2 className="text-2xl Sora mb-6">Questions fréquentes</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold text-lg mb-2">
								Quel type de fixation choisir pour un support écran ?
							</h3>
							<p className="text-gray-700">
								Le choix de la fixation dépend de votre bureau : le clamp (pince) s&apos;adapte à la plupart des bureaux
								sans perçage, le grommet (trou) offre plus de stabilité, et le support sur pied est idéal
								si vous ne pouvez pas fixer au bureau. Ce {product.name} utilise une fixation {product.features.typeFixation},
								adaptée aux configurations de télétravail modernes.
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-2">
								Mon écran est-il compatible avec ce support ?
							</h3>
							<p className="text-gray-700">
								La compatibilité dépend principalement du standard VESA de votre écran.
								{product.features.vesa ? ` Ce support est compatible VESA ${product.features.vesa}.` : ""}
								{product.features.tailleEcran ? ` Il accepte les écrans de ${product.features.tailleEcran}.` : ""}
								Vérifiez l&apos;arrière de votre écran : les trous de fixation espacés de 75x75mm ou 100x100mm
								correspondent au standard VESA le plus courant.
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-2">
								Pourquoi choisir le {product.name} ?
							</h3>
							<p className="text-gray-700">
								Le {product.name} se distingue par {product.prosAndCons.pros[0].toLowerCase()}.
								Fabriqué en {product.features.materiaux} avec une garantie de {product.features.garantie},
								il offre un excellent rapport qualité-prix à {product.price.amazon.current}€
								pour les télétravailleurs qui souhaitent optimiser leur espace de travail.
							</p>
						</div>
					</div>
				</section>

				<div className="mt-12 bg-linear-to-l from-gray-900 to-gray-700 rounded-2xl p-4 sm:p-8 md:p-12 text-white text-center">
					<h2 className="text-xl xs:text-2xl md:text-3xl Sora font-semibold mb-4">
						Convaincu par le {product.name} ?
					</h2>
					<p className="text-gray-300 mb-8 max-w-2xl mx-auto">
						Comparez les prix chez nos partenaires et profitez des meilleures offres du moment.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a href={prixEnseignes[0]?.url || "#"} target="_blank" rel="noopener noreferrer" className="bg-(--prim) text-white text-sm xs:text-base px-4 xs:px-8 py-2 xs:py-4 rounded-full font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
							<i className="ri-shopping-cart-line"></i>
							Voir sur {prixEnseignes[0]?.enseigne} - {prixEnseignes[0]?.prix}€
						</a>
						<Link href="/accessoires/supportEcran" className="bg-white/10 text-white text-sm xs:text-base px-4 xs:px-8 py-2 xs:py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
							<i className="ri-arrow-left-line"></i>
							Voir tous les supports
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
