import "./globals.css";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/jsonld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Gemlik Çilingir | 7/24 Acil Oto & Ev Çilingir Hizmeti",
    template: "%s | Gemlik Çilingir",
  },
  description:
    "Gemlik'te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız. Hemen arayın: 0541 430 37 61",
  keywords: [
    "gemlik çilingir",
    "gemlik anahtarcı",
    "çilingir gemlik",
    "gemlik çilingir numarası",
    "gemlik oto çilingir",
    "7/24 gemlik çilingir",
    "acil gemlik çilingir",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.domain,
    siteName: "Gemlik Çilingir",
    title: "Gemlik Çilingir | 7/24 Acil Oto & Ev Çilingir Hizmeti",
    description:
      "Gemlik'te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız. Hemen arayın: 0541 430 37 61",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Gemlik Çilingir Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemlik Çilingir | 7/24 Acil Oto & Ev Çilingir Hizmeti",
    description:
      "Gemlik'te 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.domain,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#2E2E2E] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
