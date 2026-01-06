"use client";
import Link from "next/link";
import { useState } from "react";

type NavLink = {
	label: string;
	href: string;
	dropdown?: { label: string; href: string }[];
};

const links: NavLink[] = [
	{ label: "Accueil", href: "/" },
	{
		label: "Catégories",
		href: "/categories",
		dropdown: [
			{ label: "bureaux", href: "categories/bureaux" },
			{ label: "écrans", href: "categories/ecrans" },
			{ label: "chaises", href: "categories/chaises" },
			{ label: "claviers & souris", href: "categories/claviers&souris" },
			{ label: "eclairage", href: "categories/eclairage" },
			{ label: "audio & visio", href: "categories/audio&visio" },
		],
	},
	{ label: "Accessoires", href: "/accessoires" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	return (
		<nav
			className={`w-full transition-all duration-500 fixed top-0 left-0 bg-yellow-300 z-[999]${
				isScrolled ? "bg-(--white) shadow-md" : "bg-transparent"
			}`}
		>
			<div className="navbar-content flex items-center justify-between px-[8%] lg:px-[12%] py-5">
				{/* Logo */}
				<div className="flex items-center gap-5">
					<Link href="/" className="text-5xl font-bold AudioWide">
						Setup-<span className="text-(--prim) ">Teletravail</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
