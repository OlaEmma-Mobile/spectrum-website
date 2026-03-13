import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { getAllFontVariables } from "./font";
import { Navbar } from "@/components/sections/navbar";
import CtaSection from "@/components/sections/foooter/cta-section";
import { Footer } from "@/components/sections/foooter/footer";
import { PostContentSections } from "@/components/sections/post-content-sections";


const geist = Geist_Mono({ subsets: ["latin"] });
const instrumetal = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrumetal",
});

export const metadata: Metadata = {
  title: "Spectrum",
  description: "Spectrum is a leading provider of energy performance certificates (EPCs) and energy efficiency solutions in the UK.",
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://spectrum.com"),
  openGraph: {
    title: "Spectrum",
    description: "Spectrum is a leading provider of energy performance certificates (EPCs) and energy efficiency solutions in the UK.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Spectrum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectrum",
    description: "Spectrum is a leading provider of energy performance certificates (EPCs) and energy efficiency solutions in the UK.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getAllFontVariables} ${geist.className} ${instrumetal.className} bg-white`}>

        <Navbar />
        {children}
        <PostContentSections />
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
