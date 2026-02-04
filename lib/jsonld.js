import { SITE } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gemlik Çilingir",
    image: `${SITE.domain}/logo.png`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamidiye, Cumhuriyet Cd. No:62",
      addressLocality: "Gemlik",
      addressRegion: "Bursa",
      postalCode: "16600",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.43,
      longitude: 29.15,
    },
    url: SITE.domain,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.googleRating.toString(),
      reviewCount: SITE.reviewCount.toString(),
      bestRating: "5",
    },
    areaServed: {
      "@type": "City",
      name: "Gemlik",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bursa",
      },
    },
  };
}
