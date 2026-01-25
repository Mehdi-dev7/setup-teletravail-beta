import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Mentions Légales",
	description:
		"Mentions légales du site Setup-Teletravail.fr - Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
	robots: {
		index: true,
		follow: true,
	},
};

export default function MentionsLegales() {
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
						<span className="text-gray-800">Mentions légales</span>
					</nav>
					<h1 className="text-3xl lg:text-4xl xl:text-5xl Sora font-bold">
						Mentions <span className="text-(--prim)">Légales</span>
					</h1>
					<p className="text-gray-600 mt-4 max-w-2xl GolosText">
						Informations légales concernant le site Setup-Teletravail.fr
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-[8%] lg:px-[12%] py-12 lg:py-16">
				<div className="max-w-4xl">
					{/* Éditeur du site */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-user-line text-(--prim)"></i>
							Éditeur du site
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Le site <strong>setup-teletravail.fr</strong> est édité par :
							</p>
							<ul className="mt-4 space-y-2 text-gray-700 GolosText">
								<li>
									<strong>Nom / Raison sociale :</strong> [VOTRE NOM OU SOCIÉTÉ]
								</li>
								<li>
									<strong>Statut :</strong> [Auto-entrepreneur / SARL / SAS /
									etc.]
								</li>
								<li>
									<strong>Adresse :</strong> [VOTRE ADRESSE]
								</li>
								<li>
									<strong>Email :</strong> contact@setup-teletravail.fr
								</li>
								<li>
									<strong>SIRET :</strong> [NUMÉRO SIRET]
								</li>
								<li>
									<strong>Numéro TVA :</strong> [SI APPLICABLE]
								</li>
							</ul>
						</div>
					</section>

					{/* Directeur de publication */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-shield-user-line text-(--prim)"></i>
							Directeur de la publication
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Le directeur de la publication est : <strong>[VOTRE NOM]</strong>
							</p>
						</div>
					</section>

					{/* Hébergeur */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-server-line text-(--prim)"></i>
							Hébergeur
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Ce site est hébergé par :
							</p>
							<ul className="mt-4 space-y-2 text-gray-700 GolosText">
								<li>
									<strong>Société :</strong> Vercel Inc.
								</li>
								<li>
									<strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
									91723, États-Unis
								</li>
								<li>
									<strong>Site web :</strong>{" "}
									<a
										href="https://vercel.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-(--prim) hover:underline"
									>
										https://vercel.com
									</a>
								</li>
							</ul>
						</div>
					</section>

					{/* Propriété intellectuelle */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-copyright-line text-(--prim)"></i>
							Propriété intellectuelle
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								L&apos;ensemble du contenu de ce site (textes, images, vidéos,
								graphismes, logo, icônes, etc.) est la propriété exclusive de
								Setup-Teletravail, sauf mention contraire.
							</p>
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Toute reproduction, représentation, modification, publication,
								transmission, ou dénaturation, totale ou partielle du site ou de
								son contenu, par quelque procédé que ce soit, et sur quelque
								support que ce soit, est interdite sans l&apos;autorisation
								écrite préalable de Setup-Teletravail.
							</p>
							<p className="text-gray-700 GolosText leading-relaxed">
								Les marques et logos des partenaires (Amazon, Cdiscount,
								FlexiSpot, SIHOO, Logitech, etc.) sont la propriété de leurs
								détenteurs respectifs.
							</p>
						</div>
					</section>

					{/* Liens hypertextes */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-link text-(--prim)"></i>
							Liens hypertextes
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Le site Setup-Teletravail contient des liens hypertextes vers
								d&apos;autres sites internet, notamment vers des sites
								marchands partenaires (Amazon, Cdiscount, etc.).
							</p>
							<p className="text-gray-700 GolosText leading-relaxed">
								Ces liens sont proposés à titre informatif. Setup-Teletravail
								n&apos;exerce aucun contrôle sur le contenu de ces sites tiers
								et décline toute responsabilité quant à leur contenu.
							</p>
						</div>
					</section>

					{/* Affiliation */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-hand-coin-line text-(--prim)"></i>
							Programme d&apos;affiliation
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Setup-Teletravail participe au Programme Partenaires d&apos;Amazon
								EU et au programme d&apos;affiliation Cdiscount, des programmes
								d&apos;affiliation conçus pour permettre à des sites de percevoir
								une rémunération grâce à la création de liens vers leurs
								plateformes.
							</p>
							<p className="text-gray-700 GolosText leading-relaxed">
								Pour plus d&apos;informations, consultez notre{" "}
								<Link
									href="/affiliation"
									className="text-(--prim) hover:underline font-medium"
								>
									page dédiée à l&apos;affiliation
								</Link>
								.
							</p>
						</div>
					</section>

					{/* Limitation de responsabilité */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-error-warning-line text-(--prim)"></i>
							Limitation de responsabilité
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Les informations contenues sur ce site sont aussi précises que
								possible et sont mises à jour régulièrement. Cependant, elles
								peuvent contenir des inexactitudes ou des omissions.
							</p>
							<p className="text-gray-700 GolosText leading-relaxed mb-4">
								Les prix affichés sur ce site sont donnés à titre indicatif et
								peuvent varier. Seul le prix affiché sur le site marchand au
								moment de l&apos;achat fait foi.
							</p>
							<p className="text-gray-700 GolosText leading-relaxed">
								Setup-Teletravail ne pourra être tenu responsable des dommages
								directs ou indirects résultant de l&apos;accès ou de
								l&apos;utilisation de ce site.
							</p>
						</div>
					</section>

					{/* Droit applicable */}
					<section className="mb-12">
						<h2 className="text-2xl Sora font-semibold mb-4 flex items-center gap-3">
							<i className="ri-scales-3-line text-(--prim)"></i>
							Droit applicable
						</h2>
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
							<p className="text-gray-700 GolosText leading-relaxed">
								Les présentes mentions légales sont soumises au droit français.
								En cas de litige, et après échec de toute tentative de recherche
								d&apos;une solution amiable, les tribunaux français seront seuls
								compétents.
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
