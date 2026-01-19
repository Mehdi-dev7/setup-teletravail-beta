"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import EcranData from "@/JsonData/JsonEcran/EcranData.json";

// Type pour les écrans
type Ecran = {
	id: number;
	nom: string;
	marque: string;
	prix: number;
	promo: number | null;
	image: string;
	images?: string[];
	prixEnseignes?: { enseigne: string; prix: number; url: string; logo: string }[];
	taille: string;
	resolution: string;
	ratio?: string;
	dalle: string;
	frequence: string;
	tempsReponse: string;
	usbc: boolean;
	usbcWatt: number | null;
	hdmi: number;
	displayport: number;
	hautParleurs: boolean;
	reglableHauteur: boolean;
	pivot: boolean;
	vesa: string;
	description: string;
	pointsForts: string[];
	pointsFaibles: string[];
	pourQui: string;
	amazonASIN: string;
	amazonURL: string;
	cdiscountURL: string;
	note: number;
	nbAvis: number;
	badge: string;
};

export default function EcranDetails() {
	const params = useParams<{ slug: string }>();
	const id = params?.slug || "";

	// Recherche dans classiques et ultrawide
	const allEcrans: Ecran[] = [...EcranData.classiques, ...EcranData.ultrawide] as Ecran[];
	const ecran = allEcrans.find((item) => String(item.id) === String(id));

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

	if (!ecran) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<i className="ri-error-warning-line text-6xl text-gray-400 mb-4"></i>
					<h1 className="text-3xl GolosText mb-2">Écran non trouvé</h1>
					<p className="text-gray-500 mb-6">L&apos;écran que vous recherchez n&apos;existe pas.</p>
					<Link href="/ecrans" className="bg-(--prim) text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
						Retour aux écrans
					</Link>
				</div>
			</div>
		);
	}

	// Images à afficher (utilise images[] si disponible, sinon image principale)
	const imagesToShow = ecran.images && ecran.images.length > 0 ? ecran.images : [ecran.image];

	// Prix enseignes par défaut si non définis
	const prixEnseignes = ecran.prixEnseignes || [
		{ enseigne: "Amazon", prix: ecran.prix, url: `https://www.amazon.fr/dp/${ecran.amazonASIN}`, logo: "/logos/amazon.svg" },
		{ enseigne: "Cdiscount", prix: Math.round(ecran.prix * 1.02), url: "#", logo: "/logos/cdiscount.svg" },
		{ enseigne: "Fnac", prix: Math.round(ecran.prix * 1.05), url: "#", logo: "/logos/fnac.svg" },
	];

	return (
		<>
			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-5xl md:text-7xl 2xl:text-8xl GolosText mt-10 md:mt-15">{ecran.marque}</h1>
				<div className="flex flex-wrap items-center text-base sm:text-xl mt-3 gap-1">
					<Link href="/" className="hover:text-(--prim) transition-all duration-300">
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<Link href="/ecrans" className="hover:text-(--prim) transition-all duration-300">
						Écrans
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<span className="GolosText text-white truncate max-w-37.5 sm:max-w-50 lg:max-w-none">{ecran.nom}</span>
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
							{ecran.badge && (
								<div className="absolute top-4 left-4 z-10">
									<span className="bg-(--prim) text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
										{ecran.badge}
									</span>
								</div>
							)}
							{/* Icône loupe */}
							<div className={`absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full transition-opacity duration-300 ${isZoomed ? "opacity-0" : "opacity-100"}`}>
								<i className="ri-zoom-in-line text-gray-600 text-xl"></i>
							</div>
							<Image
								src={imagesToShow[selectedImage]}
								alt={ecran.nom}
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
												alt={`${ecran.nom} - vue ${index + 1}`}
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
						{/* Marque et nom */}
						<p className="text-gray-500 text-lg mb-1">{ecran.marque}</p>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl Sora mb-4">{ecran.nom}</h1>

						{/* Note */}
						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<i
										key={i}
										className={`ri-star-${i < Math.floor(ecran.note) ? "fill" : "line"} text-lg sm:text-xl text-yellow-400`}
									></i>
								))}
							</div>
							<span className="text-sm sm:text-lg text-gray-600">
								{ecran.note}/5 <span className="text-gray-400">({ecran.nbAvis} avis)</span>
							</span>
						</div>

						{/* Specs rapides */}
						<div className="flex flex-wrap gap-2 mb-10 sm:mb-6">
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-ruler-line mr-1"></i>{ecran.taille}
							</span>
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-computer-line mr-1"></i>{ecran.resolution.split(" ")[0]}
							</span>
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								{ecran.dalle}
							</span>
							<span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
								<i className="ri-speed-line mr-1"></i>{ecran.frequence}
							</span>
							{ecran.usbc && (
								<span className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									<i className="ri-usb-line mr-1"></i>USB-C {ecran.usbcWatt ? `${ecran.usbcWatt}W` : ""}
								</span>
							)}
							{ecran.ratio && (
								<span className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
									{ecran.ratio}
								</span>
							)}
						</div>

						{/* Prix enseignes */}
						<div className="bg-gray-50 rounded-2xl p-0 sm:p-4  mb-6">
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
												<span className="font-bold text-gray-700">{item.enseigne}</span>
											</div>
											{index === 0 && (
												<span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
													Meilleur prix
												</span>
											)}
										</div>
										<div className="flex items-center gap-3">
											<span className="text-xl sm:text-2xl font-bold text-(--prim)">{item.prix}€</span>
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
							<p className="text-gray-700 text-sm sm:text-base leading-relaxed">{ecran.pourQui}</p>
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
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Taille</span>
									<span className="font-medium">{ecran.taille}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Résolution</span>
									<span className="font-medium">{ecran.resolution}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Dalle</span>
									<span className="font-medium">{ecran.dalle}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Fréquence</span>
									<span className="font-medium">{ecran.frequence}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Temps de réponse</span>
									<span className="font-medium">{ecran.tempsReponse}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">USB-C</span>
									<span className="font-medium">
										{ecran.usbc ? (ecran.usbcWatt ? `Oui (${ecran.usbcWatt}W)` : "Oui") : "Non"}
									</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">HDMI</span>
									<span className="font-medium">{ecran.hdmi} port{ecran.hdmi > 1 ? "s" : ""}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">DisplayPort</span>
									<span className="font-medium">{ecran.displayport} port{ecran.displayport > 1 ? "s" : ""}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Haut-parleurs</span>
									<span className="font-medium">{ecran.hautParleurs ? "Oui" : "Non"}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Réglable en hauteur</span>
									<span className="font-medium">{ecran.reglableHauteur ? "Oui" : "Non"}</span>
								</div>
								<div className="flex justify-between py-3 border-b border-gray-100">
									<span className="text-gray-500">Pivot</span>
									<span className="font-medium">{ecran.pivot ? "Oui" : "Non"}</span>
								</div>
								<div className="flex justify-between py-3">
									<span className="text-gray-500">VESA</span>
									<span className="font-medium">{ecran.vesa}</span>
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
								{ecran.pointsForts.map((point, index) => (
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
								{ecran.pointsFaibles.map((point, index) => (
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
						<h2 className="text-2xl md:text-3xl Sora  mb-6 flex items-center gap-2">
							<i className="ri-file-text-line text-(--prim)"></i>
							Notre avis détaillé
						</h2>
						<p className="text-gray-700 text-base sm:text-lg leading-relaxed">{ecran.description}</p>
					</div>
				</div>

				{/* CTA final */}
				<div className="mt-12 bg-linear-to-l from-gray-900 to-gray-700 rounded-2xl p-4 sm:p-8 md:p-12 text-white text-center">
					<h2 className="text-2xl md:text-3xl Sora font-semibold mb-4">
						Convaincu par le {ecran.nom} ?
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
							href="/ecrans"
							className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
						>
							<i className="ri-arrow-left-line"></i>
							Voir tous les écrans
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
