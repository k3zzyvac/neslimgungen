import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Neslim Güngen Malatya | Malatya Güzellik Merkezi & Cilt Bakımı",
  description: "Neslim Güngen Malatya'da uzman kadromuzla profesyonel cilt bakımı, bölgesel incelme ve güzellik hizmetleri. Premium estetik anlayışı.",
  keywords: ["Neslim Güngen Malatya", "Malatya Güzellik Merkezi", "Malatya Cilt Bakımı", "Neslim Güngen", "Güzellik Merkezi Malatya"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
