import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Affiliation & Transparence",
	description:
		"Découvrez notre politique d'affiliation et comment Setup-Teletravail finance son contenu tout en restant indépendant dans ses recommandations.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function Affiliation() {
	return (
		<div className="min-h-screen bg-(--body)">
			{/* Header */}
			<div className="bg-white border-b border-gray-200">
				<div className="px-[8%] lg:px-[12%] py-16 lg:py-20">
					<nav className="text-sm mb-6">
						<Link
							href="/"
							className="text-gray-500 hover:text-(--prim) transition-colors"
						>
							Accueil
						</Link>
						<span className="mx-2 text-gray-400">/</span>
						<span className="text-gray-800">Affiliation</span>
					</nav>
					<h1 className="text-3xl lg:text-4xl xl:text-5xl Sora font-bold">
						Affiliation & <span className="text-(--prim)">Transparence</span>
					</h1>
					<p className="text-gray-600 mt-4 max-w-2xl GolosText">
						Notre engagement envers la transparence concernant nos partenariats
						commerciaux
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-[8%] lg:px-[12%] py-12 lg:py-16">
				<div className="max-w-4xl">
					{/* Introduction */}
					<section className="mb-12">
						<div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
									<i className="ri-heart-line text-2xl text-(--prim)"></i>
								</div>
								<div>
									<h2 className="text-xl Sora font-semibold mb-2">
										Notre engagement
									</h2>
									<p className="text-gray-700 GolosText leading-relaxed">
										Chez Setup-Teletravail, la transparence est une valeur
										fondamentale. Nous souhaitons vous expliquer clairement
										comment nous finançons notre site tout en maintenant notre
										indépendance éditoriale.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Qu'est-ce que l'affiliation */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-question-line text-(--prim)"></i>
							Qu&apos;est-ce que l&apos;affiliation ?
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								L&apos;affiliation est un partenariat commercial entre notre
								site et des plateformes marchandes (comme Amazon ou Cdiscount).
								Lorsque vous cliquez sur un lien vers un produit et effectuez un
								achat, nous percevons une petite commission sur cette vente.
							</p>
							<div className="bg-gray-50 rounded-lg p-4 mt-4">
								<p className="text-gray-700 GolosText font-medium">
									<i className="ri-information-line mr-2 text-(--prim)"></i>
									Important : Cette commission est versée par le marchand, pas
									par vous. Le prix que vous payez reste exactement le même,
									que vous passiez par notre lien ou non.
								</p>
							</div>
						</div>
					</section>

					{/* Comment ça fonctionne */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-settings-3-line text-(--prim)"></i>
							Comment cela fonctionne-t-il ?
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="w-10 h-10 bg-(--prim) text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
										1
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">
											Vous consultez nos guides
										</h3>
										<p className="text-gray-600 GolosText">
											Vous lisez nos comparatifs, tests et recommandations sur
											les équipements de télétravail.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="w-10 h-10 bg-(--prim) text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
										2
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">
											Vous cliquez sur un lien produit
										</h3>
										<p className="text-gray-600 GolosText">
											Si un produit vous intéresse, vous cliquez sur le lien
											qui vous redirige vers le site marchand (Amazon,
											Cdiscount, etc.).
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="w-10 h-10 bg-(--prim) text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
										3
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">
											Vous effectuez un achat
										</h3>
										<p className="text-gray-600 GolosText">
											Vous décidez librement d&apos;acheter le produit. Le prix
											est identique pour vous.
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="w-10 h-10 bg-(--prim) text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
										4
									</div>
									<div>
										<h3 className="font-semibold text-gray-800 mb-1">
											Nous recevons une commission
										</h3>
										<p className="text-gray-600 GolosText">
											Le marchand nous reverse une petite commission (quelques
											%) pour avoir fait le lien entre vous et le produit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Nos partenaires */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-handshake-line text-(--prim)"></i>
							Nos partenaires d&apos;affiliation
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-6">
								Setup-Teletravail est partenaire des programmes
								d&apos;affiliation suivants :
							</p>

							<div className="grid md:grid-cols-2 gap-4">
								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
										<i className="ri-amazon-fill text-xl text-orange-500"></i>
										Amazon Associates
									</h3>
									<p className="text-gray-600 text-sm GolosText">
										Programme Partenaires d&apos;Amazon EU. En tant que
										Partenaire Amazon, nous réalisons un bénéfice sur les
										achats remplissant les conditions requises.
									</p>
								</div>

								<div className="bg-gray-50 rounded-lg p-4">
									<h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
										<i className="ri-shopping-cart-line text-xl text-blue-600"></i>
										Cdiscount Affiliation
									</h3>
									<p className="text-gray-600 text-sm GolosText">
										Programme d&apos;affiliation Cdiscount. Nous percevons une
										commission sur les ventes réalisées via nos liens.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Notre indépendance */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-shield-star-line text-(--prim)"></i>
							Notre indépendance éditoriale
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Notre modèle économique repose sur l&apos;affiliation, mais cela
								n&apos;influence en aucun cas nos recommandations. Voici nos
								engagements :
							</p>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<i className="ri-checkbox-circle-fill text-(--prim) text-xl mt-0.5"></i>
									<div>
										<h3 className="font-semibold text-gray-800">
											Tests et avis honnêtes
										</h3>
										<p className="text-gray-600 GolosText text-sm">
											Nous testons les produits de manière objective et
											partageons les points positifs comme les points négatifs.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<i className="ri-checkbox-circle-fill text-(--prim) text-xl mt-0.5"></i>
									<div>
										<h3 className="font-semibold text-gray-800">
											Sélection basée sur la qualité
										</h3>
										<p className="text-gray-600 GolosText text-sm">
											Nous recommandons des produits parce qu&apos;ils sont
											bons, pas parce qu&apos;ils nous rapportent plus.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<i className="ri-checkbox-circle-fill text-(--prim) text-xl mt-0.5"></i>
									<div>
										<h3 className="font-semibold text-gray-800">
											Aucune influence des marques
										</h3>
										<p className="text-gray-600 GolosText text-sm">
											Les marques ne peuvent pas payer pour obtenir un meilleur
											classement ou un avis plus favorable.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<i className="ri-checkbox-circle-fill text-(--prim) text-xl mt-0.5"></i>
									<div>
										<h3 className="font-semibold text-gray-800">
											Mise à jour régulière
										</h3>
										<p className="text-gray-600 GolosText text-sm">
											Nos contenus sont régulièrement mis à jour pour refléter
											les évolutions du marché et les nouveaux produits.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Comment nous soutenir */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-hand-heart-line text-(--prim)"></i>
							Comment nous soutenir
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Si notre contenu vous est utile et que vous souhaitez nous
								soutenir, voici comment :
							</p>

							<ul className="space-y-3 text-gray-700 GolosText">
								<li className="flex items-start gap-2">
									<i className="ri-arrow-right-s-line text-(--prim) mt-1"></i>
									<span>
										Utilisez nos liens lorsque vous achetez un produit que nous
										recommandons
									</span>
								</li>
								<li className="flex items-start gap-2">
									<i className="ri-arrow-right-s-line text-(--prim) mt-1"></i>
									<span>
										Partagez nos articles avec vos collègues et amis en
										télétravail
									</span>
								</li>
								<li className="flex items-start gap-2">
									<i className="ri-arrow-right-s-line text-(--prim) mt-1"></i>
									<span>
										Donnez-nous votre avis et suggestions pour améliorer notre
										contenu
									</span>
								</li>
							</ul>

							<div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
								<p className="text-gray-700 GolosText text-sm">
									<i className="ri-heart-fill text-red-500 mr-2"></i>
									Merci ! Votre soutien nous permet de continuer à créer du
									contenu gratuit et de qualité pour vous aider dans votre
									setup télétravail.
								</p>
							</div>
						</div>
					</section>

					{/* Questions */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-questionnaire-line text-(--prim)"></i>
							Questions fréquentes
						</h2>
						<div className="space-y-4">
							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
								<h3 className="font-semibold text-gray-800 mb-2">
									Est-ce que je paie plus cher en passant par vos liens ?
								</h3>
								<p className="text-gray-600 GolosText">
									Non, absolument pas. Le prix est strictement identique. La
									commission est versée par le marchand sur sa marge, pas par
									vous.
								</p>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
								<h3 className="font-semibold text-gray-800 mb-2">
									Pourquoi recommandez-vous certains produits plutôt que
									d&apos;autres ?
								</h3>
								<p className="text-gray-600 GolosText">
									Nos recommandations sont basées sur la qualité, le rapport
									qualité-prix et les retours utilisateurs. Nous ne favorisons
									jamais un produit parce qu&apos;il rapporte plus de
									commission.
								</p>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
								<h3 className="font-semibold text-gray-800 mb-2">
									Recevez-vous des produits gratuits pour les tester ?
								</h3>
								<p className="text-gray-600 GolosText">
									Parfois, certaines marques nous envoient des produits pour
									test. Cela est toujours mentionné dans nos articles et
									n&apos;influence pas notre avis. Nous restons libres de
									donner un avis négatif.
								</p>
							</div>

							<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
								<h3 className="font-semibold text-gray-800 mb-2">
									Comment reconnaître un lien affilié ?
								</h3>
								<p className="text-gray-600 GolosText">
									Considérez que tous les liens vers des produits sur notre
									site sont des liens affiliés. Nous indiquons également dans
									le footer de chaque page notre statut de partenaire.
								</p>
							</div>
						</div>
					</section>

					{/* Contact */}
					<section className="mb-12">
						<div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
							<div className="flex items-center gap-4 mb-4">
								<i className="ri-mail-line text-3xl text-(--prim)"></i>
								<h2 className="text-2xl Sora font-semibold">
									Des questions ?
								</h2>
							</div>
							<p className="text-gray-300 GolosText mb-6">
								Si vous avez des questions concernant notre politique
								d&apos;affiliation ou notre fonctionnement, n&apos;hésitez pas à
								nous contacter.
							</p>
							<a
								href="mailto:contact@setup-teletravail.fr"
								className="inline-flex items-center gap-2 bg-(--prim) text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
							>
								<i className="ri-send-plane-line"></i>
								Nous contacter
							</a>
						</div>
					</section>

					{/* Date de mise à jour */}
					<div className="text-center pt-8 border-t border-gray-200">
						<p className="text-gray-500 text-sm GolosText">
							Dernière mise à jour : Janvier 2026
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
