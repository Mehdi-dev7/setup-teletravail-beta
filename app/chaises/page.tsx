import Link from "next/link";
import Image from "next/image";
import ChaiseData from "@/JsonData/JsonChaise/ChaiseData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meilleures Chaises Ergonomiques 2026 | Comparatif SIHOO, FlexiSpot",
	description:
		"Comparatif des meilleures chaises ergonomiques pour le télétravail en 2026. SIHOO Doro C300, M57, FlexiSpot C7 : trouvez la chaise idéale pour préserver votre dos.",
	keywords: [
		"chaise ergonomique",
		"chaise bureau",
		"SIHOO Doro C300",
		"SIHOO M57",
		"FlexiSpot C7",
		"chaise télétravail",
		"fauteuil ergonomique",
		"support lombaire",
		"chaise gaming ergonomique",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/chaises",
	},
	openGraph: {
		title: "Meilleures Chaises Ergonomiques 2026 | Comparatif Complet",
		description:
			"Trouvez la chaise ergonomique parfaite pour votre télétravail. Comparatif détaillé SIHOO, FlexiSpot et plus.",
		url: "https://setup-teletravail.fr/chaises",
		type: "website",
	},
};

export default function Chaises() {
	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-4xl md:text-6xl xl:text-8xl text-center GolosText pt-10">Nos Chaises</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText">Chaises</h2>
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
						Les meilleures chaises pour{" "}
						<span className="text-(--prim)">le télétravail</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed mb-4">
						Découvrez notre classement des chaises ergonomiques les plus adaptées au
						télétravail. Après des heures de tests et de comparaisons, nous
						avons sélectionné pour vous les modèles offrant le{" "}
						<strong>meilleur rapport qualité/prix</strong>, un{" "}
						<strong>support lombaire optimal</strong> et des{" "}
						<strong>réglages ergonomiques</strong> essentiels pour préserver
						votre dos.
					</p>
					<p className="text-lg text-gray-600 leading-relaxed">
						Que vous cherchiez une chaise premium avec accoudoirs 6D, un modèle
						milieu de gamme polyvalent ou une option budget pour débuter, vous
						trouverez ici la chaise idéale pour votre setup.
					</p>
				</div>

				{/* Section Chaises Ergonomiques */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Chaises Ergonomiques
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{ChaiseData.chaises_ergonomiques.length} modèles
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Confort et soutien optimal pour votre dos
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{ChaiseData.chaises_ergonomiques.map((chaise, index) => (
							<Link href={`/chaises/${chaise.id}`} key={chaise.id}>
								<div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-(--prim)/30 transition-all duration-300 h-full">
									{/* Image */}
									<div className="relative h-64 bg-gray-50 overflow-hidden">
										{/* Numéro */}
										<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-bold text-gray-700">
											#{index + 1}
										</div>
										{/* Badge */}
										{chaise.badge && (
											<div className="absolute top-3 right-3 z-10">
												<span className="bg-(--prim) text-white px-3 py-1 rounded-full text-xs font-semibold">
													{chaise.badge}
												</span>
											</div>
										)}
										<Image
											src={chaise.image}
											alt={chaise.nom}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
											className="object-contain pt-10 mt-2 px-6 pb-4 group-hover:scale-105 transition-transform duration-300"
										/>
									</div>

									{/* Content */}
									<div className="p-5">
										<p className="text-sm text-gray-500 mb-1">{chaise.marque}</p>
										<h4 className="text-xl GolosText font-semibold mb-3 group-hover:text-(--prim) transition-colors duration-300 line-clamp-2">
											{chaise.nom}
										</h4>

										{/* Specs rapides */}
										<div className="flex flex-wrap gap-2 mb-4">
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{chaise.accoudoirs}
											</span>
											<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
												{chaise.revetement.split(" ")[0]}
											</span>
											{chaise.reposePieds && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
													Repose-pieds
												</span>
											)}
											<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
												{chaise.garantie}
											</span>
										</div>

										{/* Note */}
										<div className="flex items-center gap-2 mb-4">
											<div className="flex items-center">
												{[...Array(5)].map((_, i) => (
													<i
														key={i}
														className={`ri-star-${
															i < Math.floor(chaise.note) ? "fill" : "line"
														} text-yellow-400`}
													></i>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{chaise.note} ({chaise.nbAvis} avis)
											</span>
										</div>

										{/* Prix */}
										<div className="flex items-center justify-between">
											<div>
												<span className="text-2xl font-bold text-(--prim)">
													{chaise.prix}€
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
