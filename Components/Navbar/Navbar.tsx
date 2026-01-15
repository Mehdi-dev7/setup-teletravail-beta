"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavLink = {
	label: string;
	href: string;
	dropdown?: { label: string; href: string }[];
};

const links: NavLink[] = [
	{
		label: "Espace de travail",
		href: "/espace-de-travail",
		dropdown: [
			{ label: "Bureaux", href: "/bureaux" },
			{ label: "Ecrans", href: "/ecrans" },
			{ label: "Chaises Ergonomiques", href: "/chaises" },
		],
	},
	{
		label: "Périphériques",
		href: "/peripheriques",
		dropdown: [
			{ label: "Claviers & souris", href: "/peripheriques/claviers&souris" },
			{ label: "Eclairage", href: "/peripheriques/eclairage" },
			{ label: "Audio & visio", href: "/peripheriques/audio&visio" },
		],
	},
	{
		label: "Accessoires",
		href: "/accessoires",
		dropdown: [
			{ label: "Support écran", href: "/accessoires/supportEcran" },
			{ label: "Tapis souris", href: "/accessoires/tapisSouris" },
			{ label: "Gestion de cables ", href: "/accessoires/gestionCables" },
		],
	},
	{
		label: "Blog",
		href: "/blog",
		
	}
];

// Liens de la section droite

const rightLinks = [
	{ label: "Guides", href: "/guides", icon: "ri-book-open-line" },
	{ label: "Comparatifs", href: "/comparatifs", icon: "ri-contrast-line" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleDropdown = (label: string) => {
		setOpenDropdown((prevState) => ({
			...prevState,
			[label]: !prevState[label],
		}));
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`w-full transition-all duration-500 fixed top-0 left-0 bg-white z-[999]${
				isScrolled ? "bg-(--white) shadow-md" : "bg-transparent"
			}`}
		>
			<div className="navbar-content flex items-center justify-between px-[8%] lg:px-[5%] 2xl:px-[10%] py-5">
				{/* Logo */}
				<div className="flex items-center gap-2 xl:gap-4 2xl:gap-5">
					<Link href="/" className="text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold AudioWide whitespace-nowrap">
						Setup-<span className="text-(--prim) ">Teletravail</span>
					</Link>

					{/* desktop menu */}

					<nav className="hidden lg:flex space-x-3 xl:space-x-5 2xl:space-x-8 menu-link relative ml-10 xl:ml-8 2xl:ml-16">
						{links.map((link) =>
							link.dropdown ? (
								<div key={link.label} className="relative group z-50">
									<Link
										href={link.href}
										className="flex menu-links text-base xl:text-lg 2xl:text-xl items-center gap-1 hover:text-(--prim) transition-all duration-300 whitespace-nowrap"
									>
										{link.label} <i className="ri-arrow-down-s-line"></i>
									</Link>
									<div className="absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--white) shadow-xl border border-gray-50/10 rounded-lg z-50 min-w-55">
										{link.dropdown.map((item) => (
											<Link
												href={item.href}
												key={item.label}
												className="block px-4 py-2 text-md rounded-md hover:text-(--prim) transition-all duration-300"
											>
												{" "}
												<i className="bi bi-gear text-xs mr-1"></i>
												{item.label}
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link
									href={link.href}
									key={link.label}
									className="text-base xl:text-lg 2xl:text-xl hover:text-(--prim) transition-all duration-300 whitespace-nowrap"
								>
									{link.label}
								</Link>
							)
						)}
					</nav>
				</div>

				{/* Section droite */}

				<div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6 ml-4 xl:ml-8 2xl:ml-12">
					{rightLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="flex items-center gap-2 text-xl 2xl:text-lg hover:text-(--prim) transition-all duration-300 whitespace-nowrap"
						>
							<i className={link.icon}></i>
							<span className="hidden 3xl:inline">{link.label}</span>
						</Link>
					))}
				</div>

				{/* Bouton menu mobile */}
				<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-2xl"><i className={`ri-${mobileMenuOpen ? "close-line" : "menu-3-line"} transition-all duration-300`}></i></button>
			</div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-(--white) border-t border-gray-400 overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-250 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
        <div className="px-[8%] space-y-3">
          {links.map((link) => (
            <div key={link.label} className="border border-gray-700/50 rounded-lg overflow-hidden">
              {link.dropdown ? (
                <>
                 <button onClick={() => toggleDropdown(link.label)} className="w-full flex items-center justify-between px-4 py-2 sm:py-4 text-left text-(--text) font-medium hover:text-(--prim) transition">{link.label} <i className={`ri-arrow-down-s-line text-2xl transition-all duration-300 ${openDropdown[link.label] ? "rotate-180" : ""}`}></i></button>
                 <div className={`pl-6 pr-4 bg-gray-800/10 border-t border-gray-700/40 transition-all duration-300 ${openDropdown[link.label] ? "max-h-75 opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
                   {link.dropdown.map((item) => (
                     <Link
                       href={item.href}
                       key={item.label}
                       className="block py-2 font-semibold hover:text-(--prim)  transition border-b border-gray-700/60"
                       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     >
                       {item.label}
                     </Link>
                   ))}
                 </div>
                </>
                ) : (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="block px-4 py-3 sm:py-4 text-(--text) hover:text-(--prim) transition font-medium"
                  >
                    {link.label}
                  </Link>
                )
              }
            </div>
          ))}

          {/* Guides et Comparatifs */}
          <div className="flex gap-3 pt-2">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:py-4 border border-gray-700/50 rounded-lg text-(--text) font-medium hover:text-(--prim) transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={link.icon}></i>
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
		</nav>
	);
}
