import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const TITLE = "Mechas Rápidas | Treinamento Online com Fer Gomes";
const DESCRIPTION =
  "Aperfeiçoe sua técnica de mechas, esfumado de raiz, tonalização e finalização com o treinamento online Mechas Rápidas, de Fer Gomes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mechas rápidas",
    "mechas loiras",
    "descoloração",
    "tonalização",
    "esfumado de raiz",
    "treinamento cabelo",
    "curso cabeleireira",
  ],
  alternates: { canonical: "/" },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/banner-hero-desktop.jpg",
        width: 1672,
        height: 941,
        alt: "Fer Gomes — Treinamento Mechas Rápidas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/banner-hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-cream`}>
        {children}
      </body>
    </html>
  );
}
