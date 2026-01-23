import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Setups Télétravail Complets 2026 | Premium, Standard & Budget",
	description:
		"3 configurations télétravail clé en main pour tous les budgets. Setup Premium (2200€), Standard (1000€) et Budget (615€). Bureau, chaise, écran, clavier, souris : tout inclus.",
	keywords: [
		"setup télétravail complet",
		"configuration bureau maison",
		"pack télétravail",
		"setup home office",
		"équipement télétravail budget",
		"setup premium",
		"bureau complet télétravail",
	],
	alternates: {
		canonical: "https://setup-teletravail.fr/guides",
	},
	openGraph: {
		title: "Setups Télétravail Complets 2026 | Clé en Main",
		description:
			"3 configurations complètes pour votre télétravail. Bureau, chaise, écran, périphériques : trouvez le setup adapté à votre budget.",
		url: "https://setup-teletravail.fr/guides",
		type: "website",
	},
};

// Données des setups complets
const setups = {
	premium: {
		nom: "Setup Premium",
		description:
			"Le setup ultime pour les professionnels exigeants. Qualité premium, ergonomie maximale et productivité optimale. Inclut un bras double écran pour passer en configuration dual monitor et booster votre productivité de 30%.",
		badge: "Premium",
		badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-400",
		couleur: "amber",
		icon: "ri-vip-crown-fill",
		produits: [
			{
				categorie: "Écran",
				nom: "Dell UltraSharp U2723QE",
				marque: "Dell",
				prix: 750,
				image: "/Img-Ecran/Dell-Ultrasharp/Dell-img-1.avif",
				specs: ["27 pouces", "4K UHD", "IPS Black", "USB-C 90W"],
				lien: "/ecrans/1",
			},
			{
				categorie: "Bras Double",
				nom: "Ergotron LX Dual",
				marque: "Ergotron",
				prix: 350,
				image: "/Img-SupportEcran/Ergotron-LX-Dual/img-p.jpg",
				specs: ['2x 34" max', "Garantie 10 ans", "Constant Force"],
				lien: "/accessoires/supportEcran",
			},
			{
				categorie: "Bureau",
				nom: "FlexiSpot E7 PRO",
				marque: "FlexiSpot",
				prix: 550,
				image: "/Img-Bureau/Flexispot-E7/img-p.avif",
				specs: ["160 kg charge", "Triple moteur", "Garantie 10 ans"],
				lien: "/bureaux/1",
			},
			{
				categorie: "Chaise",
				nom: "SIHOO Doro C300",
				marque: "SIHOO",
				prix: 350,
				image: "/Img-Chaise/Sihoo-doro-C300/img-p.jpg",
				specs: ["Lombaire anti-gravité", "Accoudoirs 6D", "Repose-pieds"],
				lien: "/chaises/1",
			},
			{
				categorie: "Clavier",
				nom: "Logitech MX Keys",
				marque: "Logitech",
				prix: 100,
				image: "/Img-clavier-souris/logitech-mx-keys/img-p.jpg",
				specs: ["Sans fil", "Rétroéclairage", "Multi-devices"],
				lien: "/peripheriques/claviers&souris",
			},
			{
				categorie: "Souris",
				nom: "Logitech MX Master 3S",
				marque: "Logitech",
				prix: 100,
				image: "/Img-clavier-souris/Logitech-MX-Master3/img-p.jpg",
				specs: ["Ergonomique", "8000 DPI", "Molette MagSpeed"],
				lien: "/peripheriques/claviers&souris",
			},
		],
	},
	standard: {
		nom: "Setup Standard",
		description:
			"L'équilibre parfait entre qualité et budget. Tout ce qu'il faut pour un télétravail efficace et confortable. Le bras double écran inclus vous permettra d'ajouter un second moniteur pour optimiser votre espace de travail et gagner en efficacité.",
		badge: "Recommandé",
		badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
		couleur: "blue",
		icon: "ri-award-fill",
		produits: [
			{
				categorie: "Écran",
				nom: "Dell S2722DC",
				marque: "Dell",
				prix: 280,
				image: "/Img-Ecran/Dell-S2722DC/s2722dc_cfp_00000ff090_gy.avif",
				specs: ["27 pouces", "QHD", "USB-C 65W", "75Hz"],
				lien: "/ecrans/3",
			},
			{
				categorie: "Bras Double",
				nom: "North Bayou Dual Arm",
				marque: "North Bayou",
				prix: 90,
				image: "/Img-SupportEcran/NorthBayou-Dual/img-p.jpg",
				specs: ['2x 32" max', "Extension 45cm", "Inclinaison ±85°"],
				lien: "/accessoires/supportEcran",
			},
			{
				categorie: "Bureau",
				nom: "MAIDeSITe SN1",
				marque: "MAIDeSITe",
				prix: 350,
				image: "/Img-Bureau/Maidesite-SN1/img-p.jpg",
				specs: ["125 kg charge", "USB intégré", "Garantie 5 ans"],
				lien: "/bureaux/4",
			},
			{
				categorie: "Chaise",
				nom: "SIHOO M57",
				marque: "SIHOO",
				prix: 180,
				image: "/Img-Chaise/Sihoo-M57/img-p.jpg",
				specs: ["Maille respirante", "Lombaire réglable", "Accoudoirs 3D"],
				lien: "/chaises/2",
			},
			{
				categorie: "Clavier",
				nom: "Logitech K380",
				marque: "Logitech",
				prix: 35,
				image: "/Img-clavier-souris/logitech-K380/img-p.jpg",
				specs: ["Compact", "Multi-devices", "24 mois autonomie"],
				lien: "/peripheriques/claviers&souris",
			},
			{
				categorie: "Souris",
				nom: "Logitech Lift Vertical",
				marque: "Logitech",
				prix: 65,
				image: "/Img-clavier-souris/Logitech-Lift-Vertical/img-p.jpg",
				specs: ["Verticale 57°", "Silencieuse", "24 mois autonomie"],
				lien: "/peripheriques/claviers&souris",
			},
		],
	},
	budget: {
		nom: "Setup Budget",
		description:
			"Un setup complet et fonctionnel pour les petits budgets. L'essentiel pour bien démarrer en télétravail. Nous avons inclus un bras double écran empilé pour préparer l'évolution vers deux écrans — un vrai game changer pour la productivité même avec un budget serré.",
		badge: "Économique",
		badgeColor: "bg-gradient-to-r from-emerald-500 to-green-400",
		couleur: "emerald",
		icon: "ri-money-euro-circle-fill",
		produits: [
			{
				categorie: "Écran",
				nom: "AOC U27B3AF",
				marque: "AOC",
				prix: 180,
				image: "/Img-Ecran/AOC-U27B3AF/71CXOAMPPWL._AC_SL1500_.jpg",
				specs: ["27 pouces", "4K UHD", "IPS", "60Hz"],
				lien: "/ecrans/5",
			},
			{
				categorie: "Bras Double",
				nom: "BONTEC Double Empilé",
				marque: "BONTEC",
				prix: 65,
				image: "/Img-SupportEcran/Bontec-SupportEmpilé/img-p.jpg",
				specs: ['2x 27" max', "Empilé vertical", "Gain de place"],
				lien: "/accessoires/supportEcran",
			},
			{
				categorie: "Bureau",
				nom: "SANODESK QS1",
				marque: "SANODESK",
				prix: 200,
				image: "/Img-Bureau/Sanodesk-QS1/img-p.jpg",
				specs: ["70 kg charge", "Double moteur", "4 mémoires"],
				lien: "/bureaux/3",
			},
			{
				categorie: "Chaise",
				nom: "SONGMICS OBN37BK",
				marque: "SONGMICS",
				prix: 90,
				image: "/Img-Chaise/Songmics-OBN37BK/img-p.jpg",
				specs: ["Maille respirante", "Accoudoirs rabattables", "120 kg"],
				lien: "/chaises/5",
			},
			{
				categorie: "Clavier",
				nom: "Logitech K380",
				marque: "Logitech",
				prix: 35,
				image: "/Img-clavier-souris/logitech-K380/img-p.jpg",
				specs: ["Compact", "Multi-devices", "24 mois autonomie"],
				lien: "/peripheriques/claviers&souris",
			},
			{
				categorie: "Souris",
				nom: "Logitech M720 Triathlon",
				marque: "Logitech",
				prix: 45,
				image: "/Img-clavier-souris/Logitech-M720-Triathlon/img-p.jpg",
				specs: ["Multi-devices", "24 mois autonomie", "8 boutons"],
				lien: "/peripheriques/claviers&souris",
			},
		],
	},
};

function calculateTotal(produits: typeof setups.premium.produits) {
	return produits.reduce((total, produit) => total + produit.prix, 0);
}

export default function Guides() {
	return (
		<>
			{/* Header */}
			<div className="section-bg text-white flex flex-col">
				<h1 className="text-5xl md:text-8xl GolosText pt-10">Nos Setups</h1>
				<div className="flex items-center text-xl mt-3">
					<Link
						href="/"
						className="hover:text-(--prim) transition-all duration-300"
					>
						Accueil
					</Link>
					<i className="ri-arrow-right-wide-fill mt-1"></i>
					<h2 className="GolosText">Setups</h2>
				</div>
			</div>

			<div className="px-4 sm:px-[8%] lg:px-[12%] py-20">
				{/* Introduction */}
				<div className="max-w-4xl mb-16">
					<span className="inline-block border border-gray-400 text-(--text) px-4 py-2 rounded-full text-sm md:text-base font-bold mb-4">
						<i className="ri-layout-grid-fill mr-2 text-(--prim)"></i>
						Configurations complètes 2026
					</span>
					<h2 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-6xl mb-5 leading-tight my-4 sm:my-5">
						Votre setup télétravail{" "}
						<span className="text-(--prim)">clé en main</span>
					</h2>
					<p className="md:text-lg text-base text-gray-600 leading-relaxed mb-4">
						Nous avons sélectionné pour vous{" "}
						<strong>3 configurations complètes</strong> adaptées à différents
						budgets et besoins. Chaque setup a été pensé pour offrir un{" "}
						<strong>équilibre optimal entre ergonomie, qualité et prix</strong>.
					</p>
					<p className="text-lg text-gray-600 leading-relaxed">
						Que vous ayez un budget serré ou que vous cherchiez le meilleur
						absolu, vous trouverez ici une configuration prête à l&apos;emploi
						pour votre espace de travail idéal.
					</p>
				</div>

				{/* Comparatif rapide */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{Object.values(setups).map((setup) => (
						<div
							key={setup.nom}
							className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
						>
							<div
								className={`inline-flex items-center justify-center w-14 h-14 ${setup.badgeColor} rounded-full mb-4`}
							>
								<i className={`${setup.icon} text-2xl text-white`}></i>
							</div>
							<h3 className="text-xl GolosText font-semibold mb-2">
								{setup.nom}
							</h3>
							<p className="text-3xl font-bold text-(--prim) mb-2">
								{calculateTotal(setup.produits)}€
							</p>
							<p className="text-sm text-gray-500">
								{setup.produits.length} produits
							</p>
						</div>
					))}
				</div>

				{/* Setups détaillés */}
				<div className="space-y-20">
					{Object.entries(setups).map(([key, setup]) => (
						<div key={key} className="relative">
							{/* Badge flottant */}
							<div
								className={`absolute -top-4 left-6 z-10 ${setup.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}
							>
								<i className={setup.icon}></i>
								{setup.badge}
							</div>

							<div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
								{/* Header du setup */}
								<div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
										<div>
											<h3 className="text-2xl sm:text-3xl Sora font-bold mb-2">
												{setup.nom}
											</h3>
											<p className="text-gray-600 max-w-xl">
												{setup.description}
											</p>
										</div>
										<div className="flex flex-col items-end">
											<span className="text-sm text-gray-500 mb-1">
												Prix total estimé
											</span>
											<span className="text-4xl font-bold text-(--prim)">
												{calculateTotal(setup.produits)}€
											</span>
										</div>
									</div>
								</div>

								{/* Grille des produits */}
								<div className="p-6 sm:p-8">
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
										{setup.produits.map((produit, index) => (
											<Link href={produit.lien} key={index}>
												<div className="group bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
													{/* Catégorie badge */}
													<span className="text-xs font-semibold text-(--prim) bg-(--prim)/10 px-2 py-1 rounded-full self-start mb-3">
														{produit.categorie}
													</span>

													{/* Image */}
													<div className="relative h-32 mb-4 flex items-center justify-center">
														<Image
															src={produit.image}
															alt={produit.nom}
															fill
															sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
															className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
														/>
													</div>

													{/* Infos */}
													<div className="flex-1 flex flex-col">
														<span className="text-xs text-gray-400 mb-1">
															{produit.marque}
														</span>
														<h4 className="text-sm GolosText font-semibold mb-2 line-clamp-2 group-hover:text-(--prim) transition-colors">
															{produit.nom}
														</h4>

														{/* Specs */}
														<div className="flex flex-wrap gap-1 mb-3">
															{produit.specs.slice(0, 2).map((spec, i) => (
																<span
																	key={i}
																	className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded"
																>
																	{spec}
																</span>
															))}
														</div>

														{/* Prix */}
														<div className="mt-auto">
															<span className="text-lg font-bold text-(--prim)">
																{produit.prix}€
															</span>
														</div>
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>

								{/* Footer avec récapitulatif */}
								<div className="px-6 sm:px-8 pb-6 sm:pb-8">
									<div className="bg-gray-50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
										<div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
											{setup.produits.map((produit, index) => (
												<div
													key={index}
													className="flex items-center gap-2 text-sm"
												>
													<span className="text-gray-500">
														{produit.categorie}:
													</span>
													<span className="font-semibold">{produit.prix}€</span>
													{index < setup.produits.length - 1 && (
														<span className="text-gray-300 ml-2">+</span>
													)}
												</div>
											))}
										</div>
										<div className="flex items-center gap-2 bg-(--prim) text-white px-4 py-2 rounded-full font-semibold">
											<span>=</span>
											<span className="text-xl">
												{calculateTotal(setup.produits)}€
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Section conseils */}
				<div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
					<div className="max-w-3xl">
						<span className="inline-block border border-gray-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
							<i className="ri-lightbulb-fill mr-2 text-yellow-400"></i>
							Conseils d&apos;achat
						</span>
						<h3 className="text-3xl sm:text-4xl Sora font-bold mb-6">
							Comment choisir votre setup ?
						</h3>
						<div className="grid sm:grid-cols-2 gap-6">
							<div className="flex gap-4">
								<div className="shrink-0 w-10 h-10 bg-(--prim) rounded-full flex items-center justify-center">
									<i className="ri-time-line text-white"></i>
								</div>
								<div>
									<h4 className="font-semibold mb-1">Heures de travail</h4>
									<p className="text-gray-400 text-sm">
										Plus de 6h/jour ? Privilégiez le setup Standard ou Premium
										pour une meilleure ergonomie.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="shrink-0 w-10 h-10 bg-(--prim) rounded-full flex items-center justify-center">
									<i className="ri-computer-line text-white"></i>
								</div>
								<div>
									<h4 className="font-semibold mb-1">Type de travail</h4>
									<p className="text-gray-400 text-sm">
										Design, vidéo ou code ? Le setup Premium avec écran 4K sera
										plus adapté.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="shrink-0 w-10 h-10 bg-(--prim) rounded-full flex items-center justify-center">
									<i className="ri-home-office-line text-white"></i>
								</div>
								<div>
									<h4 className="font-semibold mb-1">Espace disponible</h4>
									<p className="text-gray-400 text-sm">
										Petit espace ? Le setup Budget avec bureau compact
										s&apos;adaptera mieux.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="shrink-0 w-10 h-10 bg-(--prim) rounded-full flex items-center justify-center">
									<i className="ri-health-book-line text-white"></i>
								</div>
								<div>
									<h4 className="font-semibold mb-1">Santé</h4>
									<p className="text-gray-400 text-sm">
										Douleurs au dos ou poignets ? Investissez dans une bonne
										chaise et souris ergonomique.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA vers catégories */}
				<div className="mt-16 text-center">
					<h3 className="text-2xl Sora font-semibold mb-6">
						Explorez nos catégories
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							href="/ecrans"
							className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
						>
							<i className="ri-computer-line"></i>
							Écrans
						</Link>
						<Link
							href="/bureaux"
							className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
						>
							<i className="ri-table-line"></i>
							Bureaux
						</Link>
						<Link
							href="/chaises"
							className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
						>
							<i className="ri-armchair-line"></i>
							Chaises
						</Link>
						<Link
							href="/peripheriques/claviers&souris"
							className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
						>
							<i className="ri-keyboard-line"></i>
							Claviers & Souris
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
