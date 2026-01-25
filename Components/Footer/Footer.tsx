import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="px-[8%] lg:px-[12%] py-20 pb-0 footer relative">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-15">
					{/* Colonne 1 - Brand */}
					<div className="footer-content">
						<Link
							href="/"
							className="text-3xl lg:text-3xl xl:text-4xl font-bold AudioWide text-white"
						>
							Setup-<span className="text-(--prim)">Teletravail</span>
						</Link>
						<p className="text-gray-300 text-base my-5 GolosText leading-relaxed">
							Votre guide pour un setup télétravail ergonomique et performant.
						</p>
					</div>

					{/* Colonne 2 - Légal */}
					<div className="footer-content">
						<h3 className="text-xl text-white font-semibold mb-4 GolosText">
							Légal
						</h3>
						<ul className="footer-links flex flex-col space-y-2">
							<Link
								href="/mentions-legales"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Mentions légales
							</Link>
							<Link
								href="/politique-confidentialite"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Politique de confidentialité
							</Link>
							<Link
								href="/affiliation"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Affiliation
							</Link>
						</ul>
					</div>

					{/* Colonne 3 - Ressources */}
					<div className="footer-content">
						<h3 className="text-xl text-white font-semibold mb-4 GolosText">
							Ressources
						</h3>
						<ul className="footer-links flex flex-col space-y-2">
							<Link
								href="/blog"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Blog / Articles
							</Link>
							<Link
								href="/guides"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Guides
							</Link>
							<Link
								href="/comparatifs"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Comparatifs
							</Link>
							
						</ul>
					</div>

					{/* Colonne 4 - Catégories */}
					<div className="footer-content">
						<h3 className="text-xl text-white font-semibold mb-4 GolosText">
							Catégories
						</h3>
						<ul className="footer-links flex flex-col space-y-2">
							<Link
								href="/chaises"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Chaises ergonomiques
							</Link>
							<Link
								href="/bureaux"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Bureaux réglables
							</Link>
							<Link
								href="/ecrans"
								className="text-gray-300 text-base transition-all duration-300 hover:text-(--prim) hover:ml-2"
							>
								Écrans
							</Link>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="footer-bottom flex flex-col justify-center items-center py-8 border-t border-gray-500">
					<p className="text-gray-300 text-base text-center">
						© 2026 Setup-Teletravail - Tous droits réservés. Créé par{" "}
						<Link
							href="https://github.com/Mehdi-dev7"
							target="_blank"
							rel="noopener noreferrer"
							className="transition-all duration-300 text-white font-semibold hover:text-(--prim)"
						>
							Mehdi.dev7
						</Link>
					</p>
					<p className="text-gray-400 text-sm mt-3 text-center max-w-3xl leading-relaxed">
						En tant que Partenaires Amazon et Cdiscount, nous réalisons un
						bénéfice sur les achats remplissant les conditions requises.
					</p>
				</div>
			</div>
		</>
	);
}