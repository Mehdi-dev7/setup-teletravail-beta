import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Politique de Confidentialité",
	description:
		"Politique de confidentialité de Setup-Teletravail.fr - Découvrez comment nous protégeons vos données personnelles conformément au RGPD.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function PolitiqueConfidentialite() {
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
						<span className="text-gray-800">Politique de confidentialité</span>
					</nav>
					<h1 className="text-3xl lg:text-4xl xl:text-5xl Sora font-bold">
						Politique de{" "}
						<span className="text-(--prim)">Confidentialité</span>
					</h1>
					<p className="text-gray-600 mt-4 max-w-2xl GolosText">
						Comment nous collectons, utilisons et protégeons vos données
						personnelles
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-[8%] lg:px-[12%] py-12 lg:py-16">
				<div className="max-w-4xl">
					{/* Introduction */}
					<section className="mb-12">
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								La protection de vos données personnelles est une priorité pour
								Setup-Teletravail. Cette politique de confidentialité vous
								informe sur la manière dont nous collectons, utilisons et
								protégeons vos informations conformément au Règlement Général
								sur la Protection des Données (RGPD).
							</p>
							<p className="text-gray-700 GolosText leading-relaxed">
								En naviguant sur notre site, vous acceptez les pratiques
								décrites dans cette politique.
							</p>
						</div>
					</section>

					{/* Responsable du traitement */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-user-settings-line text-(--prim)"></i>
							Responsable du traitement
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Le responsable du traitement des données personnelles est :
							</p>
							<ul className="mt-4 space-y-2 text-gray-700 GolosText">
								<li>
									<strong>Nom :</strong> [VOTRE NOM OU SOCIÉTÉ]
								</li>
								<li>
									<strong>Adresse :</strong> [VOTRE ADRESSE]
								</li>
								<li>
									<strong>Email :</strong> contact@setup-teletravail.fr
								</li>
							</ul>
						</div>
					</section>

					{/* Données collectées */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-database-2-line text-(--prim)"></i>
							Données collectées
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Nous pouvons collecter les types de données suivants :
							</p>

							<h3 className="font-semibold text-gray-800 mt-6 mb-3">
								Données de navigation
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700 GolosText ml-4">
								<li>Adresse IP (anonymisée)</li>
								<li>Type de navigateur et version</li>
								<li>Pages visitées et durée de visite</li>
								<li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
								<li>Appareil utilisé (ordinateur, mobile, tablette)</li>
							</ul>

							<h3 className="font-semibold text-gray-800 mt-6 mb-3">
								Données de contact (si vous nous contactez)
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700 GolosText ml-4">
								<li>Nom et prénom</li>
								<li>Adresse email</li>
								<li>Contenu de votre message</li>
							</ul>

							<h3 className="font-semibold text-gray-800 mt-6 mb-3">
								Données de newsletter (si vous vous inscrivez)
							</h3>
							<ul className="list-disc list-inside space-y-2 text-gray-700 GolosText ml-4">
								<li>Adresse email</li>
								<li>Préférences de contenu</li>
							</ul>
						</div>
					</section>

					{/* Finalités du traitement */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-focus-3-line text-(--prim)"></i>
							Finalités du traitement
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Vos données sont collectées pour les finalités suivantes :
							</p>
							<ul className="list-disc list-inside space-y-2 text-gray-700 GolosText ml-4">
								<li>
									Améliorer l&apos;expérience utilisateur et le contenu du site
								</li>
								<li>
									Analyser le trafic et les performances du site (statistiques)
								</li>
								<li>Répondre à vos demandes de contact</li>
								<li>Envoyer notre newsletter (avec votre consentement)</li>
								<li>
									Détecter et prévenir les fraudes ou problèmes techniques
								</li>
							</ul>
						</div>
					</section>

					{/* Base légale */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-scales-line text-(--prim)"></i>
							Base légale du traitement
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Le traitement de vos données repose sur les bases légales
								suivantes :
							</p>
							<ul className="space-y-4 text-gray-700 GolosText">
								<li>
									<strong className="text-gray-800">Consentement :</strong> pour
									les cookies non essentiels, la newsletter et les communications
									marketing
								</li>
								<li>
									<strong className="text-gray-800">Intérêt légitime :</strong>{" "}
									pour l&apos;analyse des statistiques de fréquentation et
									l&apos;amélioration du site
								</li>
								<li>
									<strong className="text-gray-800">
										Exécution contractuelle :
									</strong>{" "}
									pour répondre à vos demandes de contact
								</li>
							</ul>
						</div>
					</section>

					{/* Cookies */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-pie-chart-line text-(--prim)"></i>
							Cookies et traceurs
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Notre site utilise des cookies pour améliorer votre expérience.
								Les types de cookies utilisés sont :
							</p>

							<div className="overflow-x-auto">
								<table className="w-full mt-4 text-sm">
									<thead>
										<tr className="border-b border-gray-200">
											<th className="text-left py-3 px-4 font-semibold text-gray-800">
												Type
											</th>
											<th className="text-left py-3 px-4 font-semibold text-gray-800">
												Finalité
											</th>
											<th className="text-left py-3 px-4 font-semibold text-gray-800">
												Durée
											</th>
										</tr>
									</thead>
									<tbody className="text-gray-700">
										<tr className="border-b border-gray-100">
											<td className="py-3 px-4">Essentiels</td>
											<td className="py-3 px-4">
												Fonctionnement du site
											</td>
											<td className="py-3 px-4">Session</td>
										</tr>
										<tr className="border-b border-gray-100">
											<td className="py-3 px-4">Analytiques</td>
											<td className="py-3 px-4">
												Statistiques de visite (Google Analytics)
											</td>
											<td className="py-3 px-4">13 mois</td>
										</tr>
										<tr className="border-b border-gray-100">
											<td className="py-3 px-4">Affiliation</td>
											<td className="py-3 px-4">
												Suivi des partenaires (Amazon, Cdiscount)
											</td>
											<td className="py-3 px-4">30 jours</td>
										</tr>
									</tbody>
								</table>
							</div>

							<p className="text-gray-700 GolosText leading-relaxed mt-4">
								Vous pouvez gérer vos préférences de cookies à tout moment via
								les paramètres de votre navigateur.
							</p>
						</div>
					</section>

					{/* Partage des données */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-share-line text-(--prim)"></i>
							Partage des données
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Vos données peuvent être partagées avec les tiers suivants :
							</p>
							<ul className="space-y-4 text-gray-700 GolosText">
								<li>
									<strong className="text-gray-800">Google Analytics :</strong>{" "}
									pour l&apos;analyse du trafic (données anonymisées)
								</li>
								<li>
									<strong className="text-gray-800">Amazon Associates :</strong>{" "}
									pour le suivi des commissions d&apos;affiliation
								</li>
								<li>
									<strong className="text-gray-800">Cdiscount Affiliation :</strong>{" "}
									pour le suivi des commissions d&apos;affiliation
								</li>
								<li>
									<strong className="text-gray-800">Vercel :</strong> notre
									hébergeur (traitement nécessaire au fonctionnement du site)
								</li>
							</ul>
							<p className="text-gray-700 GolosText leading-relaxed mt-4">
								Nous ne vendons jamais vos données personnelles à des tiers.
							</p>
						</div>
					</section>

					{/* Durée de conservation */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-time-line text-(--prim)"></i>
							Durée de conservation
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Vos données sont conservées pendant les durées suivantes :
							</p>
							<ul className="space-y-2 text-gray-700 GolosText">
								<li>
									<strong>Données de navigation :</strong> 13 mois maximum
								</li>
								<li>
									<strong>Données de contact :</strong> 3 ans après le dernier
									contact
								</li>
								<li>
									<strong>Données de newsletter :</strong> jusqu&apos;à
									désinscription
								</li>
							</ul>
						</div>
					</section>

					{/* Vos droits */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-shield-check-line text-(--prim)"></i>
							Vos droits
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Conformément au RGPD, vous disposez des droits suivants :
							</p>
							<ul className="list-disc list-inside space-y-2 text-gray-700 GolosText ml-4">
								<li>
									<strong>Droit d&apos;accès :</strong> obtenir une copie de vos
									données
								</li>
								<li>
									<strong>Droit de rectification :</strong> corriger vos données
									inexactes
								</li>
								<li>
									<strong>Droit à l&apos;effacement :</strong> demander la
									suppression de vos données
								</li>
								<li>
									<strong>Droit à la limitation :</strong> limiter le traitement
									de vos données
								</li>
								<li>
									<strong>Droit à la portabilité :</strong> recevoir vos données
									dans un format structuré
								</li>
								<li>
									<strong>Droit d&apos;opposition :</strong> vous opposer au
									traitement de vos données
								</li>
								<li>
									<strong>Droit de retrait du consentement :</strong> retirer
									votre consentement à tout moment
								</li>
							</ul>
							<div className="mt-6 p-4 bg-gray-50 rounded-lg">
								<p className="text-gray-700 GolosText">
									Pour exercer ces droits, contactez-nous à :{" "}
									<a
										href="mailto:contact@setup-teletravail.fr"
										className="text-(--prim) hover:underline font-medium"
									>
										contact@setup-teletravail.fr
									</a>
								</p>
							</div>
						</div>
					</section>

					{/* Réclamation CNIL */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-government-line text-(--prim)"></i>
							Réclamation auprès de la CNIL
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Si vous estimez que le traitement de vos données n&apos;est pas
								conforme à la réglementation, vous avez le droit de déposer une
								réclamation auprès de la Commission Nationale de
								l&apos;Informatique et des Libertés (CNIL) :{" "}
								<a
									href="https://www.cnil.fr"
									target="_blank"
									rel="noopener noreferrer"
									className="text-(--prim) hover:underline"
								>
									www.cnil.fr
								</a>
							</p>
						</div>
					</section>

					{/* Sécurité */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-lock-line text-(--prim)"></i>
							Sécurité des données
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Nous mettons en œuvre des mesures techniques et
								organisationnelles appropriées pour protéger vos données contre
								tout accès non autorisé, modification, divulgation ou
								destruction. Notre site utilise le protocole HTTPS pour
								sécuriser les échanges de données.
							</p>
						</div>
					</section>

					{/* Modifications */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-edit-line text-(--prim)"></i>
							Modifications de cette politique
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Nous nous réservons le droit de modifier cette politique de
								confidentialité à tout moment. Les modifications seront publiées
								sur cette page avec une nouvelle date de mise à jour. Nous vous
								encourageons à consulter régulièrement cette page.
							</p>
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
