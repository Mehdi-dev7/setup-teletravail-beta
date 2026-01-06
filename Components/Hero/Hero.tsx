import Image from "next/image";

import HeroImg from "@/public/img-1.jpg";

export default function Hero() {
	return (
		<>
			<div className="hero">
				<div className="hero-bg-elm"></div>
				<div className="hero-bg-elm2"></div>
				<div className="w-full px-[8%] lg:px-[12%] py-10">
					<div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
						<div className="w-full lg:w-1/2 relative">
							<div className="">
								<span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
									Guide Expert 2026
								</span>
								<h1 className="text-6xl lg:text-8xl Sora my-5">
									Trouvez votre Setup{" "}
									<span className="text-(--prim)">Télétravail idéal</span>
								</h1>
								<p className="text-gray-600 w-full md:w-[60%]">
									"Découvrez notre classement des meilleurs équipements de télétravail. Nous analysons et comparons les produits de différents fournisseurs pour vous proposer le meilleur choix pour votre équipement. Notre site est conçu pour vous aider à trouver le meilleur équipement pour votre travail, votre vie personnelle et votre environnement."
								</p>
							</div>
						</div>
						{/* Image */}
						<div className="w-full lg:w-1/2 z-10">
							<div className="mt-20">
								<Image
									src={HeroImg}
									alt="hero-img"
									className="w-full h-full rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
