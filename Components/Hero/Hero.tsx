import Image from "next/image";

import HeroImg2 from "@/public/img-2.jpg";

export default function Hero() {
	return (
		<>
			<div className="hero">
				<div className="hero-bg-elm"></div>
				<div className="hero-bg-elm2"></div>
				<div className="w-full px-4 sm:px-[8%] lg:px-[12%] py-18 xl:py-10">
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-8 justify-between items-center">
						<div className="w-full lg:w-1/2 relative">
							<div className="">
								<span className="hero-span border border-gray-400 GolosText font-bold px-6 sm:px-5 py-2 rounded-full text-sm md:text-base">
									Guide Expert 2026
								</span>
								<h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl Sora my-4 sm:my-5 leading-tight">
									Trouvez votre Setup{" "}
									<span className="text-(--prim)">Télétravail idéal</span>
								</h1>
								<p className="text-base text-gray-600 w-full md:w-[90%] lg:w-[80%]">
									&quot;Découvrez notre classement des meilleurs équipements de
									télétravail. Nous analysons et comparons les produits de
									différents fournisseurs pour vous proposer le meilleur choix
									pour votre équipement. Notre site est conçu pour vous aider à
									trouver le meilleur équipement pour votre travail, votre vie
									personnelle et votre environnement.&quot;
								</p>
							</div>
						</div>
						{/* Image */}
						<div className="w-full lg:w-1/2 z-10">
							<div className="hero-image">
								<Image
									src={HeroImg2}
									alt="hero-img"
									width={1700}
									height={1000}
									priority
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
