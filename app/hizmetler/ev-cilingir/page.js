import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Ev Çilingir Hizmeti",
  description:
    "Gemlik ev çilingir hizmeti. Anahtar kilit sorunlarında hız, güven ve deneyim. Orhaniye, Küçükkumla, Kurşunlu dahil tüm mahallelere. Hemen arayın: 0541 430 37 61",
  openGraph: {
    title: "Ev Çilingir Hizmeti | Gemlik Çilingir",
    description:
      "Gemlik ev çilingir hizmeti. Anahtar kilit sorunlarında dakikalar içinde kapınızdayız.",
    images: ["/logo.png"],
  },
};

export default function EvCilingirPage() {
  return (
    <ServiceLayout
      title="Gemlik Ev Çilingir Hizmeti"
      description="Gemlik ev çilingir hizmeti ile anahtar ve kilit sorunlarınızda yanınızdayız. Orhaniye Mahallesi, Küçükkumla, Kurşunlu dahil tüm Gemlik mahallelerine hızlı ulaşıyoruz."
      imageSrc="/images/clg-img-2.jpg"
      imageAlt="Ev çilingir hizmeti"
    >
      <div className="space-y-8 text-[#2E2E2E]">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-2.jpg"
            alt="Gemlik ev çilingir hizmeti"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed text-[#2E2E2E]">
          Gemlik ev çilingir hizmeti ile kapınızda. Anahtar kilitte mi kaldı?
          Kilit bozuldu mu? Gemlik anahtarcı olarak yılların deneyimiyle evinize
          hızlı ve güvenli çözümler sunuyoruz. Bir telefon kadar uzağınızdayız.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Gemlik Ev Çilingir Neler Yapar?
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Kapı kilidi açma (kilitte kalan anahtar)</li>
          <li>Kilit değişimi ve tamiri</li>
          <li>Anahtar kopyalama</li>
          <li>Çoklu kilit sistemleri</li>
          <li>Akıllı kilit kurulumu</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Hizmet Verdiğimiz Mahalleler
        </h2>
        <p className="text-[#2E2E2E]">
          Orhaniye Mahallesi Gemlik çilingir hizmeti, Küçükkumla çilingir,
          Kurşunlu çilingir, Umurbey çilingir, Adliye Mahallesi çilingir,
          Balıkpazarı çilingir, Eşref Dinçer Mahallesi çilingir dahil tüm
          bölgelere 7/24 ulaşıyoruz.
        </p>
        <div className="rounded-xl bg-gray-50 p-6">
          <p className="mb-4 font-semibold text-[#0A2540]">
            Acil ev çilingir mi lazım? Şimdi arayın!
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
