import service6 from "@/public/img-casque.jpg";
import service7 from "@/public/img-accesoire.jpg";
import service1 from "@/public/img-bureau1.jpg";
import service3 from "@/public/img-chaiseErgo.jpg";
import service4 from "@/public/img-clavier.jpg";
import service2 from "@/public/img-ecran.jpg";
import service5 from "@/public/img-led.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
	return (
		<>
			<div className="px-4 sm:px-[8%] lg:px-[12%] pt-20 pb-60 service relative">
				<div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
					<div className="w-full lg:w-1/3 title pt-4 sm:pt-8">
						<span className="rounded-full title-span border border-gray-400 px-6 sm:px-5 GolosText uppercase font-bold py-2 text-sm md:text-base">
							Catégories
						</span>
					</div>
					<div className="w-full lg:w-2/3">
						<h1 className="Sora text-4xl sm:text-4xl md:text-6xl lg:text-7xl  mb-5 leading-tight my-4 sm:my-5">
							{" "}
							Découvrez nos{" "}
							<span className="text-(--prim)">Catégories de produits</span> pour
							votre télétravail
						</h1>
						<p className="text-gray-400 GolosText">
							{" "}
							Du bureau réglable à l&apos;éclairage adapté, découvrez notre
							sélection d&apos;équipements ergonomiques testés et comparés pour
							transformer votre espace de télétravail en véritable poste
							professionnel. Chaque catégorie regroupe nos recommandations
							basées sur des critères stricts : confort, qualité et rapport
							qualité-prix.
						</p>
					</div>
				</div>
				<Link href="/bureaux/bureauxElectriques">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">01</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">Bureaux Réglables</h2>
								<p className="GolosText text-gray-400">
									Un bureau réglable en hauteur révolutionne votre posture et
									votre santé. Alternez entre position assise et debout pour
									réduire les maux de dos, améliorer votre circulation sanguine
									et augmenter votre productivité. Découvrez notre sélection de
									bureaux électriques et manuels testés pour leur stabilité,
									leur amplitude de réglage et leur rapport qualité-prix. Du
									bureau compact pour petits espaces au plateau XXL pour setup
									gaming, trouvez le bureau qui transformera votre télétravail.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service1}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/ecrans">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">02</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">Écrans</h2>
								<p className="GolosText text-gray-400">
									Un bon écran réduit la fatigue oculaire et booste votre
									efficacité. Résolution 4K pour une netteté parfaite, dalle IPS
									pour des angles de vision larges, USB-C pour simplifier vos
									branchements : nous avons comparé des dizaines de modèles pour
									vous. Écran simple 27 pouces, ultrawide 34 pouces immersif ou
									configuration double écran avec support articulé, chaque setup
									répond à un besoin précis. Avec nos guides d&apos; achat
									détaillés, choisissez l&apos;écran idéal pour votre usage et
									votre budget.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service2}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/chaises">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">03</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">Chaises Ergonomiques</h2>
								<p className="GolosText text-gray-400">
									Votre chaise est l&apos;investissement santé le plus important
									de votre setup. Un bon siège ergonomique prévient les troubles
									musculo-squelettiques, soutient votre colonne vertébrale et
									vous permet de rester concentré pendant des heures. Support
									lombaire réglable, accoudoirs 4D, appui-tête ajustable, tissu
									respirant : tous les critères comptent. De la chaise
									ergonomique d&apos;entrée de gamme au fauteuil premium Herman
									Miller, nous décortiquons chaque modèle pour vous aider à
									choisir le siège qui protégera votre dos sur le long terme.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service3}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/peripheriques/claviers&souris">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">04</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">Claviers & Souris</h2>
								<p className="GolosText text-gray-400">
									Des périphériques inadaptés provoquent tendinites, syndrome du
									canal carpien et douleurs chroniques. Un clavier ergonomique
									split, une souris verticale ou un trackball réduisent
									drastiquement les tensions sur vos poignets et avant-bras.
									Nous testons switches mécaniques, repose-poignets,
									connectivité sans fil et autonomie pour vous recommander les
									combos clavier-souris qui préservent votre santé tout en
									améliorant votre confort de frappe. Gaming, bureautique ou
									programmation : chaque usage a son équipement optimal.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service4}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/peripheriques/eclairage">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">05</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">
									Éclairage LED & Lampes
								</h2>
								<p className="GolosText text-gray-400">
									Un éclairage inadapté fatigue vos yeux, provoque des maux de
									tête et réduit votre productivité. Les lampes LED avec
									température réglable (lumière chaude le soir, froide le matin)
									respectent votre rythme circadien et limitent la fatigue
									oculaire. Lampe de bureau architecte, barre LED à clipser sur
									écran, panneau lumineux ambiant : nous comparons puissance en
									lumens, indice de rendu des couleurs (IRC) et fonctionnalités
									pour vous guider vers l&apos;éclairage qui transformera votre
									espace de travail en environnement sain et confortable.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service5}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/peripheriques/audio&visio">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">06</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">
									Audio & Visioconférence
								</h2>
								<p className="GolosText text-gray-400">
									La qualité audio et vidéo est essentielle pour les appels
									professionnels. Un casque avec micro antibruit, une webcam 4K
									et des haut-parleurs stéréo transforment vos réunions
									virtuelles. Microphone USB studio, casque sans fil avec
									batterie longue durée, webcam HD avec autofocus : nous testons
									chaque produit pour garantir clarté vocale et image
									cristalline. Que vous fassiez des appels occasionnels ou des
									présentations quotidiennes, trouvez l&apos;équipement
									audio-vidéo qui professionnalisera votre télétravail.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service6}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
				<Link href="/accesoires/supportEcran">
					<div className="service-card border-b border-gray-400 cursor-pointer py-3 sm:py-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-5 mt-4 sm:mt-6">
						<div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 sm:gap-3 md:gap-8">
							<h4 className="text-4xl Sora">07</h4>
							<div className="service-content">
								<h2 className="mb-3 text-4xl CalSans">
									Accessoires & Rangements
								</h2>
								<p className="GolosText text-gray-400">
									Les petits détails qui optimisent votre productivité. Supports
									d&apos;écran ajustables, repose-poignets ergonomiques,
									organiseurs de câbles, tapis de souris XXL : chaque accessoire
									compte pour créer un espace de travail fonctionnel et
									agréable. Nous sélectionnons des solutions de rangement qui
									maximisent votre surface de travail sans sacrifier
									l&apos;esthétique. Étagères flottantes, bras articulés pour
									écrans, câbles de gestion : découvrez comment transformer
									votre bureau en espace professionnel bien organisé et
									accueillant.
								</p>
							</div>
						</div>
						<div className="overflow-hidden h-full md:h-[210px] w-full md:w-[300px]">
							<Image
								src={service7}
								alt="service-img"
								className="w-full service-img object-cover rounded-2xl border-2 border-black"
							/>
						</div>
						<i className="bi bi-arrow-up-right transition-all duration-300"></i>
					</div>
				</Link>
			</div>
		</>
	);
}
