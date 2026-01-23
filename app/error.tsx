"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log l'erreur côté client (optionnel: envoyer à un service de monitoring)
		console.error("Erreur attrapée:", error);
	}, [error]);

	return (
		<div className="min-h-[80vh] flex items-center justify-center px-4">
			<div className="text-center max-w-xl">
				{/* Icône d'erreur */}
				<div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
					<i className="ri-error-warning-line text-5xl text-red-500"></i>
				</div>

				{/* Message */}
				<h2 className="text-3xl sm:text-4xl Sora font-semibold mb-4">
					Une erreur est survenue
				</h2>
				<p className="text-gray-600 text-lg mb-8">
					Quelque chose s&apos;est mal passé. Nous nous excusons pour ce
					désagrément. Vous pouvez réessayer ou retourner à l&apos;accueil.
				</p>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						onClick={() => reset()}
						className="inline-flex items-center justify-center gap-2 bg-(--prim) text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
					>
						<i className="ri-refresh-line"></i>
						Réessayer
					</button>
					<a
						href="/"
						className="inline-flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-full font-semibold hover:border-(--prim) hover:text-(--prim) transition-all duration-300"
					>
						<i className="ri-home-line"></i>
						Retour à l&apos;accueil
					</a>
				</div>

				{/* Info technique (en dev uniquement) */}
				{process.env.NODE_ENV === "development" && (
					<div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
						<p className="text-xs text-gray-500 font-mono break-all">
							{error.message}
						</p>
						{error.digest && (
							<p className="text-xs text-gray-400 mt-2">
								Digest: {error.digest}
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
