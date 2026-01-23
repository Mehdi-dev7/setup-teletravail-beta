import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center px-4">
			<div className="text-center max-w-xl">
				{/* Code 404 */}
				<h1 className="text-9xl font-bold text-(--prim) GolosText">404</h1>

				{/* Message */}
				<h2 className="text-3xl sm:text-4xl Sora font-semibold mt-4 mb-4">
					Page introuvable
				</h2>
				<p className="text-gray-600 text-lg mb-8">
					Oups ! La page que vous recherchez n&apos;existe pas ou a été
					déplacée. Pas de panique, votre setup parfait vous attend ailleurs.
				</p>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center gap-2 bg-(--prim) text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
					>
						<i className="ri-home-line"></i>
						Retour à l&apos;accueil
					</Link>
					<Link
						href="/guides"
						className="inline-flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
					>
						<i className="ri-layout-grid-fill"></i>
						Voir nos setups
					</Link>
				</div>

				{/* Liens rapides */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500 mb-4">
						Peut-être cherchez-vous :
					</p>
					<div className="flex flex-wrap justify-center gap-3">
						<Link
							href="/ecrans"
							className="text-sm text-gray-600 hover:text-(--prim) transition-colors"
						>
							Écrans
						</Link>
						<span className="text-gray-300">•</span>
						<Link
							href="/bureaux"
							className="text-sm text-gray-600 hover:text-(--prim) transition-colors"
						>
							Bureaux
						</Link>
						<span className="text-gray-300">•</span>
						<Link
							href="/chaises"
							className="text-sm text-gray-600 hover:text-(--prim) transition-colors"
						>
							Chaises
						</Link>
						<span className="text-gray-300">•</span>
						<Link
							href="/comparatifs"
							className="text-sm text-gray-600 hover:text-(--prim) transition-colors"
						>
							Comparatifs
						</Link>
						<span className="text-gray-300">•</span>
						<Link
							href="/blog"
							className="text-sm text-gray-600 hover:text-(--prim) transition-colors"
						>
							Blog
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
