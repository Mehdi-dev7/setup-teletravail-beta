"use client";

import AboutImg3 from "@/public/img-13.jpg";
import AboutImg1 from "@/public/img-2.jpg";
import AboutImg2 from "@/public/img-6.jpg";
import Image from "next/image";
import CountUp from "react-countup";

const statsData = [
	{
		value: +800,
		suffix: "%",
		title: "de croissance depuis 2019",
		desc: "Le télétravail est passé de 4% à 36% des salariés en seulement 5 ans. Ce qui était une exception est devenu la norme pour près d'un Français sur trois.",
	},
	{
		value: 36,
		suffix: "%",
		title: "des salariés télétravaillent",
		desc: "Les télétravailleurs affirment être plus concentrés et efficaces chez eux. Moins d'interruptions, moins de bruit, plus de focus sur les tâches importantes.",
	},
	{
		value: 76,
		suffix: "%",
		title: "n'ont pas d'espace dédié adapté",
		desc: "Seulement 1 télétravailleur sur 4 dispose d'une pièce dédiée avec équipement ergonomique. La majorité travaille depuis la table de cuisine ou le canapé.",
	},
	{
		value: 2,
		suffix: "j",
		title: "de télétravail par semaine en moyenne",
		desc: "Le modèle hybride s'est imposé : 46% des entreprises autorisent 2 jours de télétravail hebdomadaire. Un équilibre parfait entre flexibilité et cohésion d'équipe.",
	},
];

export default function Statistique() {
	return (
		<>
			<div className="px-4 sm:px-[8%] lg:px-[12%] py-10 about">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-1/3 title pt-8">
						<span className="rounded-full title-span border border-gray-400 px-6 sm:px-5 GolosText uppercase font-bold py-2 text-sm md:text-base">
							Stats Tele-Travail
						</span>
					</div>
					<div className="w-full lg:w-2/3">
						<h1 className="Sora text-4xl sm:text-5xl md:text-5xl 2xl:text-7xl leading-tight">
							{" "}
							Le Télétravail <span className="text-(--prim)">
								améliore la productivité
							</span>{" "}
							à condition d&apos;avoir le bon équipement
						</h1>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
					<div className="about-image">
						<Image
							src={AboutImg1}
							alt="About-img"
							width={450}
							height={450}
							className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 object-cover w-[450px] h-[450px]"
						/>
					</div>
					<div className="about-image lg:pt-10">
						<Image
							src={AboutImg2}
							alt="About-img"
							width={450}
							height={450}
							className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 object-cover w-[450px] h-[450px]"
						/>
					</div>
					<div className="about-image lg:pt-20">
						<Image
							src={AboutImg3}
							alt="About-img"
							width={450}
							height={450}
							className="rounded-3xl transition-all duration-300 hover:-translate-y-1.5 object-cover w-[450px] h-[450px]"
						/>
					</div>
				</div>
			</div>
			<div className="px-4 sm:px-[8%] lg:px-[12%] py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
				{statsData.map((item, index) => (
					<div key={index} className="abouit-card">
						<h2 className="text-4xl md:text-5xl tracking-wider CalSans font-bold mb-4 md:mb-6">
							<CountUp
								start={0}
								end={item.value}
								duration={2.5}
								enableScrollSpy
								scrollSpyOnce
							>
								{({ countUpRef }) => <span ref={countUpRef} />}
							</CountUp>
							{item.suffix}
						</h2>
						<div className="about-content py-4 md:py-6 border-t border-gray-400">
							<h3 className="mb-3 text-2xl CalSans">{item.title}</h3>
							<p className="text-gray-400 GolosText">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
