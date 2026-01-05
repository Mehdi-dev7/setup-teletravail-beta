import type { Metadata } from "next";
import { Geist, Geist_Mono, Audiowide, Golos_Text, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",})


const audioWide =  Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",})

const golostext =  Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-golostext",})

export const metadata: Metadata = {
  title: "Meilleurs Setup Télétravail 2025 | Comparatif & Guide Complet",
  description: "Découvrez notre sélection des meilleurs équipements pour votre setup télétravail : bureaux ergonomiques, chaises, écrans, claviers et souris. Comparatifs détaillés et prix en temps réel.",
  keywords: 'setup télétravail, équipement télétravail, bureau ergonomique, chaise bureau, écran pc, clavier souris, home office, travail à domicile',
  openGraph: {
    title: 'Meilleurs Setup Télétravail 2025',
    description: 'Trouvez le setup parfait pour votre espace de travail à domicile',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audioWide.variable} ${golostext.variable} ${sora.variable} `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
