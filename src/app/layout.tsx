import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Miguel Cantu — Consultor en Marketing Digital, Transformacion Digital e Inteligencia Artificial",
    template: "%s | Miguel Cantu",
  },
  description:
    "Miguel Cantu es consultor en marketing digital, transformacion digital, estrategia digital e inteligencia artificial. Ayuda a empresas a crecer con claridad y datos.",
  keywords: [
    "Miguel Cantu",
    "consultor marketing digital",
    "consultor transformacion digital",
    "consultor estrategia digital",
    "consultor inteligencia artificial",
    "consultoria digital Monterrey",
    "transformacion digital Mexico",
  ],
  metadataBase: new URL("https://www.miguelcantu.mba"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Miguel Cantu",
    title: "Miguel Cantu — Consultor en Marketing Digital y Transformacion Digital",
    description:
      "Consultoria estrategica en marketing digital, transformacion digital e inteligencia artificial para empresas que quieren crecer con claridad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
