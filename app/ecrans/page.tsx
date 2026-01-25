import Link from "next/link";
import Image from "next/image";
import EcranData from "@/JsonData/JsonEcran/EcranData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meilleurs Écrans Télétravail 2026 | Comparatif 4K, USB-C & Ultrawide",
	description:
		"Comparatif des meilleurs écrans pour le télétravail en 2026. Écrans 4K, QHD, USB-C avec Power Delivery et ultrawide. Dell, LG, Samsung : trouvez l'écran idéal pour votre setup.",
	keywords: [
		"écran télétravail",
		"écran 4K",
		"écran USB-C",
		"écran ultrawide",
		"Dell UltraSharp",
		"LG 27UK850",
		"meilleur écran bureau",
		"écran ergonomique",
		"moniteur télétravail",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/ecrans",
	},
	openGraph: {
		title: "Meilleurs Écrans Télétravail 2026 | Comparatif Complet",
		description:
			"Trouvez l'écran parfait pour votre télétravail. Comparatif détaillé des meilleurs moniteurs 4K, USB-C et ultrawide.",
		url: "https://setup-teletravail.fr/ecrans",
		type: "website",
	},
};

export default function Ecrans() {
	const allEcrans = [...EcranData.classiques, ...EcranData.ultrawide];

	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText pt-10">Nos Ecrans</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText">Ecrans</h2>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[12%] py-20">
				{/* Introduction */}
				<div className="max-w-4xl mb-16">
					<span className="inline-block border border-gray-400 text-(--text) px-4 py-2 rounded-full text-sm md:text-base font-bold mb-4">
						<i className="ri-award-line mr-2 text-(--prim)"></i>Notre sélection
						2026
					</span>
					<h2 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl  mb-5 leading-tight my-4 sm:my-5">
						Les meilleurs écrans pour{" "}
						<span className="text-(--prim)">le télétravail</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed mb-4">
						Découvrez notre classement des écrans les plus adaptés au
						télétravail. Après des heures de tests et de comparaisons, nous
						avons sélectionné pour vous les modèles offrant le{" "}
						<strong>meilleur rapport qualité/prix</strong>, une{" "}
						<strong>ergonomie optimale</strong> et des{" "}
						<strong>fonctionnalités essentielles</strong> comme l&apos;USB-C
						avec Power Delivery.
					</p>
					<p className="text-lg text-gray-600 leading-relaxed">
						Que vous cherchiez un écran 4K pour le travail de précision, un
						ultrawide pour le multitâche ou un modèle budget pour débuter, vous
						trouverez ici l&apos;écran idéal pour votre setup.
					</p>
				</div>

				{/* Section Écrans Classiques */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Écrans Classiques
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{EcranData.classiques.length} modèles
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Idéal en double écran
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{EcranData.classiques.map((ecran, index) => (
							<Link href={`/ecrans/${ecran.id}`} key={ecran.id}>
								<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-(--prim)/30 transition-all duration-300 h-full">
									{/* Image */}
									<div className="relative h-64 bg-gray-50 overflow-hidden">
										{/* Numéro */}
										<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-gray-700">
											#{index + 1}
										</div>
										{/* Badge */}
										{ecran.badge && (
											<div className="absolute top-3 right-3 z-10">
												<span className="bg-(--prim) text-white px-3 py-1 rounded-full text-xs font-semibold">
													{ecran.badge}
												</span>
											</div>
										)}
										<Image
											src={ecran.image}
											alt={ecran.nom}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											className="object-contain pt-10 mt-2 px-6 pb-4 group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-5">
										<p className="text-sm text-gray-500 mb-1">{ecran.marque}</p>
										<h4 className="text-xl GolosText font-semibold mb-3 group-hover:text-(--prim) transition-colors duration-300 line-clamp-2">
											{ecran.nom}
										</h4>

										{/* Specs rapides */}
										<div className="flex flex-wrap gap-2 mb-4">
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{ecran.taille}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{ecran.resolution.split(" ")[0]}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{ecran.dalle}
											</span>
											{ecran.usbc && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
													USB-C {ecran.usbcWatt ? `${ecran.usbcWatt}W` : ""}
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
															i < Math.floor(ecran.note) ? "fill" : "line"
														} text-yellow-400`}
													></i>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{ecran.note} ({ecran.nbAvis} avis)
											</span>
										</div>

										{/* Prix */}
										<div className="flex items-center justify-between">
											<div>
												<span className="text-2xl font-bold text-(--prim)">
													{ecran.prix}€
												</span>
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

				{/* Section Écrans Ultrawide */}
				<div>
					<div className="flex items-center gap-3 mb-8">
						<div className="w-1 h-10 bg-(--prim) rounded-full"></div>
						<h3 className="text-2xl sm:text-4xl Sora font-semibold">
							Écrans Ultrawide
						</h3>
						<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
							{EcranData.ultrawide.length} modèles
						</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{EcranData.ultrawide.map((ecran, index) => (
							<Link href={`/ecrans/${ecran.id}`} key={ecran.id}>
								<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-(--prim)/30 transition-all duration-300 h-full">
									{/* Image */}
									<div className="relative h-64 bg-gray-50 overflow-hidden">
										{/* Numéro */}
										<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-gray-700">
											#{index + 1}
										</div>
										{/* Badge */}
										{ecran.badge && (
											<div className="absolute top-3 right-3 z-10">
												<span className="bg-(--prim) text-white px-3 py-1 rounded-full text-xs font-semibold">
													{ecran.badge}
												</span>
											</div>
										)}
										<Image
											src={ecran.image}
											alt={ecran.nom}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											className="object-contain pt-10 px-6 pb-4 group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-5">
										<p className="text-sm text-gray-500 mb-1">{ecran.marque}</p>
										<h4 className="text-xl GolosText font-semibold mb-3 group-hover:text-(--prim) transition-colors duration-300 line-clamp-2">
											{ecran.nom}
										</h4>

										{/* Specs rapides */}
										<div className="flex flex-wrap gap-2 mb-4">
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{ecran.taille}
											</span>
											<span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
												{ecran.ratio}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{ecran.dalle}
											</span>
											<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
												{ecran.frequence}
											</span>
											{ecran.usbc && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
													USB-C {ecran.usbcWatt ? `${ecran.usbcWatt}W` : ""}
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
															i < Math.floor(ecran.note) ? "fill" : "line"
														} text-yellow-400`}
													></i>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{ecran.note} ({ecran.nbAvis} avis)
											</span>
										</div>

										{/* Prix */}
										<div className="flex items-center justify-between">
											<div>
												<span className="text-2xl font-bold text-(--prim)">
													{ecran.prix}€
												</span>
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
