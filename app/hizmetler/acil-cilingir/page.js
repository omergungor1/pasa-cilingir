import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Acil Çilingir",
  description:
    "Acil gemlik çilingir hizmeti 7/24. Gece gündüz dakikalar içinde kapınızdayız. Umurbey, Adliye, Balıkpazarı dahil. Hemen arayın: 0541 430 37 61",
  openGraph: {
    title: "Acil Çilingir | Gemlik Çilingir",
    description:
      "Acil gemlik çilingir - 7/24 yanınızdayız. Dakikalar içinde kapınızdayız.",
    images: ["/logo.png"],
  },
};

export default function AcilCilingirPage() {
  return (
    <ServiceLayout
      title="Acil Gemlik Çilingir"
      description="Acil gemlik çilingir ihtiyacınızda 7/24 yanınızdayız. Gece gündüz demeden dakikalar içinde adresinizde. Hemen arayın, kapınızdayız."
      imageSrc="/images/clg-img-3.webp"
      imageAlt="Acil çilingir hizmeti"
    >
      <div className="space-y-8 text-[#2E2E2E]">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-3.webp"
            alt="Acil gemlik çilingir"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Acil çilingir mi lazım? Gemlik çilingir numarası ile hemen arayın.
          Gece yarısı, bayram, tatil fark etmez. 7/24 gemlik çilingir ekibimiz
          her an hazır. Bir telefon kadar uzağınızdayız.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Acil Gemlik Çilingir Ne Zaman Gerekir?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Anahtar evde kaldı, kapı kilitli</li>
          <li>Kilit bozuldu, eve giremiyorsunuz</li>
          <li>Araç anahtarı araçta kaldı</li>
          <li>Kasa açılmıyor</li>
          <li>Gece yarısı kilit sorunu</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Neden Acil Gemlik Çilingir?
        </h2>
        <p className="text-[#2E2E2E]">
          Hemen arayın, dakikalar içinde kapınızdayız. Gemlik çilingir yorumlarında
          5 yıldız alan ekibimiz hız, güven ve deneyimle yanınızda. Umurbey
          çilingir, Adliye Mahallesi çilingir, Balıkpazarı çilingir dahil tüm
          bölgelere 7/24 hizmet.
        </p>
        <div className="rounded-xl bg-[#0A2540] p-6 text-white">
          <p className="mb-4 text-lg font-semibold">
            Acil çilingir mi lazım? Şimdi arayın!
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-block rounded-lg bg-[#F5B301] px-6 py-3 font-bold text-[#0A2540]"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </ServiceLayout>
  );
}
