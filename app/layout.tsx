import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.natflipswhips.com"),
  title: {
    default: "Mobile Car Detailing in Tucson, AZ | NatFlipsWhips",
    template: "%s | NatFlipsWhips",
  },
  description:
    "Mobile auto detailing in Tucson, Arizona. Interior and exterior detailing for cars, trucks, SUVs and motorcycles, brought to your home or workplace.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.natflipswhips.com",
    siteName: "NatFlipsWhips",
    title: "Mobile Car Detailing in Tucson, AZ | NatFlipsWhips",
    description:
      "Interior and exterior auto detailing brought to your home or workplace anywhere in the Tucson area.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Car Detailing in Tucson, AZ | NatFlipsWhips",
    description:
      "Interior and exterior auto detailing brought to your home or workplace anywhere in the Tucson area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "@id": "https://www.natflipswhips.com/#business",
  name: "NatFlipsWhips",
  url: "https://www.natflipswhips.com",
  telephone: "+1-520-305-6529",
  description:
    "Mobile auto detailing in Tucson, Arizona. Interior and exterior detailing for cars, trucks, SUVs, motorcycles and fleet equipment, brought to your home or workplace.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Tucson" },
    { "@type": "City", name: "Marana" },
    { "@type": "City", name: "Oro Valley" },
    { "@type": "City", name: "Catalina Foothills" },
    { "@type": "City", name: "Sahuarita" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Detailing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Detail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Detail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Detail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheels and Tires" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Protection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motorcycle Detailing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Detailing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
