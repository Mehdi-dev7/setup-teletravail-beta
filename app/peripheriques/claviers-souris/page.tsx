import Link from "next/link";
import Image from "next/image";
import ClavierSourisData from "@/JsonData/JsonClavierSouris/ClavierSourisData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meilleurs Claviers & Souris Télétravail 2026 | Logitech MX, Ergonomique",
	description:
		"Comparatif des meilleurs claviers et souris pour le télétravail. Logitech MX Keys, MX Master 3S, claviers ergonomiques et souris verticales pour une productivité optimale.",
	keywords: [
		"clavier télétravail",
		"souris ergonomique",
		"Logitech MX Keys",
		"Logitech MX Master 3S",
		"clavier sans fil",
		"souris verticale",
		"Keychron",
		"clavier ergonomique",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/peripheriques/claviers-souris",
	},
	openGraph: {
		title: "Meilleurs Claviers & Souris Télétravail 2026",
		description:
			"Trouvez le duo clavier-souris parfait pour votre télétravail. Comparatif Logitech MX, ergonomique et plus.",
		url: "https://setup-teletravail.fr/peripheriques/claviers-souris",
		type: "website",
	},
};

export default function ClavierSouris() {
	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-5xl md:text-8xl GolosText pt-10">Claviers & Souris</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					
					<h2 className="GolosText">Claviers & Souris</h2>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[12%] py-20">
				{/* Introduction */}
				<div className="max-w-4xl mb-16">
					<span className="inline-block border border-gray-400 text-(--text) px-4 py-2 rounded-full text-sm md:text-base font-bold mb-4">
						<i className="ri-award-line mr-2 text-(--prim)"></i>Notre sélection
						2026
					</span>
					<h2 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl mb-5 leading-tight my-4 sm:my-5">
						Les meilleurs claviers et souris{" "}
						<span className="text-(--prim)">pour le télétravail</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed mb-4">
						Découvrez notre sélection de claviers et souris pour optimiser votre
						confort en télétravail. Après des heures de tests, nous avons choisi les modèles
						offrant la <strong>meilleure ergonomie</strong>, une{" "}
						<strong>frappe/glisse optimale</strong> et des{" "}
						<strong>fonctionnalités essentielles</strong> comme le multi-devices,
						la connectivité sans fil et la réduction des TMS.
					</p>
					<p className="text-lg text-gray-600 leading-relaxed">
						Que vous cherchiez un clavier mécanique premium, une souris ergonomique
						verticale ou un combo compact pour le nomadisme, vous trouverez ici
						le périphérique idéal pour votre productivité.
					</p>
				</div>

				{/* Section Claviers */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Claviers
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{ClavierSourisData.claviers.length} modèles
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Ergonomiques, mécaniques et sans fil pour une frappe optimale
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{ClavierSourisData.claviers.map((item, index) => (
							<Link href={`/peripheriques/claviers-souris/${item.id}`} key={item.id}>
								<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-(--prim)/30 transition-all duration-300 h-full">
									{/* Image */}
									<div className="relative h-64 bg-gray-50 overflow-hidden">
										{/* Numéro */}
										<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-gray-700">
											#{index + 1}
										</div>
										{/* Badge */}
										{item.badges && item.badges[0] && (
											<div className="absolute top-3 right-3 z-10">
												<span className="bg-(--prim) text-white px-3 py-1 rounded-full text-xs font-semibold">
													{item.badges[0]}
												</span>
											</div>
										)}
										<Image
											src={item.images[0]}
											alt={item.name}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											className="object-contain pt-10 mt-2 px-6 pb-4 group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-5">
										<p className="text-sm text-gray-500 mb-1">{item.category}</p>
										<h4 className="text-xl GolosText font-semibold mb-3 group-hover:text-(--prim) transition-colors duration-300 line-clamp-2">
											{item.name}
										</h4>

										{/* Specs rapides */}
										<div className="flex flex-wrap gap-2 mb-4">
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{item.features.typeSwitch.split(" ")[0]}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{item.features.autonomie.split(" ")[0]}
											</span>
											{item.features.multiDevices?.includes("Oui") && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
													Multi-devices
												</span>
											)}
											{item.features.retroeclairage?.includes("Oui") && (
												<span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
													Rétroéclairé
												</span>
											)}
										</div>

										{/* Note */}
										<div className="flex items-center gap-2 mb-4">
											<div className="flex items-center">
												{[...Array(5)].map((_, i) => (
													<i
														key={i}
														className={`ri-star-${
															i < Math.floor(item.ratings.overall) ? "fill" : "line"
														} text-yellow-400`}
													></i>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{item.ratings.overall} ({item.ratings.reviewCount} avis)
											</span>
										</div>

										{/* Prix */}
										<div className="flex items-center justify-between">
											<div>
												<span className="text-2xl font-bold text-(--prim)">
													{item.price.amazon.current}€
												</span>
												{item.price.amazon.original > item.price.amazon.current && (
													<span className="text-sm text-gray-400 line-through ml-2">
														{item.price.amazon.original}€
													</span>
												)}
											</div>
											<div className="flex items-center text-(--prim) font-medium group-hover:translate-x-1 transition-transform duration-300">
												Voir détails
												<i className="ri-arrow-right-line ml-1"></i>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Section Souris */}
				<div>
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Souris
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{ClavierSourisData.souris.length} modèles
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Ergonomiques, verticales et trackballs pour prévenir les TMS
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{ClavierSourisData.souris.map((item, index) => (
							<Link href={`/peripheriques/claviers-souris/${item.id}`} key={item.id}>
								<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-(--prim)/30 transition-all duration-300 h-full">
									{/* Image */}
									<div className="relative h-64 bg-gray-50 overflow-hidden">
										{/* Numéro */}
										<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-gray-700">
											#{index + 1}
										</div>
										{/* Badge */}
										{item.badges && item.badges[0] && (
											<div className="absolute top-3 right-3 z-10">
												<span className="bg-(--prim) text-white px-3 py-1 rounded-full text-xs font-semibold">
													{item.badges[0]}
												</span>
											</div>
										)}
										<Image
											src={item.images[0]}
											alt={item.name}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											className="object-contain pt-10 mt-2 px-6 pb-4 group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-5">
										<p className="text-sm text-gray-500 mb-1">{item.category}</p>
										<h4 className="text-xl GolosText font-semibold mb-3 group-hover:text-(--prim) transition-colors duration-300 line-clamp-2">
											{item.name}
										</h4>

										{/* Specs rapides */}
										<div className="flex flex-wrap gap-2 mb-4">
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{item.features.typeCapteur.split(" ")[0]}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{item.features.autonomie}
											</span>
											{item.features.multiDevices?.includes("Oui") && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
													Multi-devices
												</span>
											)}
											{item.features.silencieux === "Oui" || item.features.silencieux?.includes("Oui") ? (
												<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
													Silencieuse
												</span>
											) : null}
										</div>

										{/* Note */}
										<div className="flex items-center gap-2 mb-4">
											<div className="flex items-center">
												{[...Array(5)].map((_, i) => (
													<i
														key={i}
														className={`ri-star-${
															i < Math.floor(item.ratings.overall) ? "fill" : "line"
														} text-yellow-400`}
													></i>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{item.ratings.overall} ({item.ratings.reviewCount} avis)
											</span>
										</div>

										{/* Prix */}
										<div className="flex items-center justify-between">
											<div>
												<span className="text-2xl font-bold text-(--prim)">
													{item.price.amazon.current}€
												</span>
												{item.price.amazon.original > item.price.amazon.current && (
													<span className="text-sm text-gray-400 line-through ml-2">
														{item.price.amazon.original}€
													</span>
												)}
											</div>
											<div className="flex items-center text-(--prim) font-medium group-hover:translate-x-1 transition-transform duration-300">
												Voir détails
												<i className="ri-arrow-right-line ml-1"></i>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
