import Link from "next/link";
import Image from "next/image";
import SupportEcranData from "@/JsonData/JsonSupportEcran/SupportEcranData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meilleurs Bras & Supports Écran 2026 | Ergotron, Double Écran",
	description:
		"Comparatif des meilleurs bras et supports d'écran pour le télétravail. Ergotron LX, supports double écran, rehausseurs : libérez votre espace de travail.",
	keywords: [
		"bras écran",
		"support moniteur",
		"Ergotron LX",
		"bras double écran",
		"support écran réglable",
		"bras articulé écran",
		"rehausseur écran",
		"VESA",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/accessoires/supportEcran",
	},
	openGraph: {
		title: "Meilleurs Bras & Supports Écran 2026",
		description:
			"Trouvez le support d'écran parfait pour votre setup. Bras articulés, supports double écran et rehausseurs.",
		url: "https://setup-teletravail.fr/accessoires/supportEcran",
		type: "website",
	},
};

export default function SupportEcran() {
	// Combiner tous les supports
	const allSupports = [
		...SupportEcranData.supports_simples,
		...SupportEcranData.supports_doubles,
		...SupportEcranData.supports_triples,
	];

	return (
		<>
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-6xl md:text-8xl GolosText pt-10">Supports Écran</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText">Supports Écran</h2>
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
						Les meilleurs{" "}
						<span className="text-(--prim)">supports et bras écran</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed mb-4">
						Découvrez notre sélection des meilleurs supports et bras articulés pour écran.
						Des{" "}
						<strong>bras premium Ergotron</strong> aux{" "}
						<strong>rehausseurs économiques</strong>, en passant par les{" "}
						<strong>supports double et triple écrans</strong>.
					</p>
					<p className="text-lg text-gray-600 leading-relaxed">
						Améliorez votre ergonomie et libérez de l&apos;espace sur votre bureau avec
						un support adapté à vos besoins et votre budget.
					</p>
				</div>

				{/* Section Supports Simples */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Supports Simple Écran
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{SupportEcranData.supports_simples.length} produits
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Bras articulés et rehausseurs pour un écran
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{SupportEcranData.supports_simples.map((item, index) => (
							<Link href={`/accessoires/supportEcran/${item.id}`} key={item.id}>
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
												{item.features.typeFixation}
											</span>
											{item.features.tailleEcran && (
												<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
													{item.features.tailleEcran}
												</span>
											)}
											{item.features.garantie && (
												<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
													{item.features.garantie}
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

				{/* Section Supports Doubles */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Supports Double Écran
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{SupportEcranData.supports_doubles.length} produits
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Bras articulés pour deux écrans
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{SupportEcranData.supports_doubles.map((item, index) => (
							<Link href={`/accessoires/supportEcran/${item.id}`} key={item.id}>
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
												{item.features.typeFixation}
											</span>
											<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
												{item.features.nombreEcrans}
											</span>
											{item.features.garantie && (
												<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
													{item.features.garantie}
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

				{/* Section Supports Triples */}
				<div className="mb-20">
					<div className="flex items-start gap-3 mb-8">
						<div className="w-1 h-12 md:h-14 bg-(--prim) rounded-full mt-1"></div>
						<div className="flex flex-col flex-1">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl md:text-4xl Sora font-semibold">
									Supports Triple Écran
								</h3>
								<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
									{SupportEcranData.supports_triples.length} produits
								</span>
							</div>
							<span className="text-base md:text-lg text-gray-500 mt-1">
								Supports pour setup gaming et trading
							</span>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{SupportEcranData.supports_triples.map((item, index) => (
							<Link href={`/accessoires/supportEcran/${item.id}`} key={item.id}>
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
												{item.features.typeFixation}
											</span>
											<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
												{item.features.nombreEcrans}
											</span>
											{item.features.garantie && (
												<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
													{item.features.garantie}
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
