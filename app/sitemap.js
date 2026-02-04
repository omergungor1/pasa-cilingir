import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = SITE.domain;

  const routes = [
    "",
    "/hizmetler/ev-cilingir",
    "/hizmetler/acil-cilingir",
    "/hizmetler/oto-cilingir",
    "/hizmetler/kasa-cilingir",
    "/hizmetler/7-24-cilingir",
    "/hizmet-bolgelerimiz",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi",
  ];

  return routes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
