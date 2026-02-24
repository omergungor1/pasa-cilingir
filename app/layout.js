import "./globals.css";
import { SITE } from "@/lib/constants";
import { getLocalBusinessSchema } from "@/lib/jsonld";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    template: "%s | Paşa Çilingir",
  },
  description:
    "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız. Hemen arayın: 0541 343 34 90",
  keywords: [
    "mustafakemalpaşa çilingir",
    "kemalpaşa çilingir",
    "kemalpaşa nöbetçi çilingir",
    "karacabey çilingir",
    "karacabey nöbetçi çilingir",
    "bursa çilingir",
    "mustafakemalpaşa anahtarcı",
    "karacabey anahtarcı",
    "7/24 çilingir bursa",
    "acil çilingir mustafakemalpaşa",
    "acil çilingir karacabey",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE.domain,
    siteName: "Paşa Çilingir",
    title: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    description:
      "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir servisi. Ev, oto, kasa çilingir. Dakikalar içinde kapınızdayız.",
    images: [
      {
        url: "https://pasacilingir.com/logo.png",
        width: 512,
        height: 512,
        alt: "Paşa Çilingir Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paşa Çilingir | Bursa Mustafakemalpaşa & Karacabey 7/24 Çilingir",
    description:
      "Bursa Mustafakemalpaşa ve Karacabey'de 7/24 acil çilingir hizmeti. Ev, oto, kasa çilingir.",
    images: ["https://pasacilingir.com/logo.png"],
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

  const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVFPJJ4N');`;

  return (
    <html lang="tr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#2E2E2E] antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVFPJJ4N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
