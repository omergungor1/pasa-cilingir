import Image from "next/image";
import { SITE } from "@/lib/constants";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Oto Çilingir",
  description:
    "Gemlik oto çilingir hizmeti. Araç anahtarı kilitte kaldı mı? Gemlik çilingir numarası ile hemen arayın. Dakikalar içinde yanınızdayız: 0541 430 37 61",
  openGraph: {
    title: "Oto Çilingir | Gemlik Çilingir",
    description:
      "Gemlik oto çilingir - Araç kilidi, anahtar sorunları. Hemen arayın.",
    images: ["/logo.png"],
  },
};

export default function OtoCilingirPage() {
  return (
    <ServiceLayout
      title="Gemlik Oto Çilingir"
      description="Gemlik oto çilingir hizmeti ile araç kilidi ve anahtar sorunlarınızda yanınızdayız. Anahtar kilitte kaldı mı? Gemlik çilingir numarası ile hemen arayın."
      imageSrc="/images/clg-img-4.jpg"
      imageAlt="Oto çilingir hizmeti"
    >
      <div className="space-y-8 text-[#2E2E2E]">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl">
          <Image
            src="/images/clg-img-4.jpg"
            alt="Gemlik oto çilingir"
            width={800}
            height={450}
            className="h-auto max-h-80 w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-lg leading-relaxed">
          Gemlik oto çilingir hizmeti. Araç anahtarı kilitte mi kaldı? Kapı
          kilidi açılmıyor mu? Gemlik çilingir numarası ile hemen arayın.
          Profesyonel ekip dakikalar içinde yanınızda. Tüm marka ve modellere
          hizmet veriyoruz.
        </p>
        <h2 className="text-xl font-bold text-[#0A2540]">
          Gemlik Oto Çilingir Hizmetleri
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Araç kapısı kilidi açma</li>
          <li>Anahtar kilitte kaldı çözümü</li>
          <li>Uzaktan kumanda tamiri</li>
          <li>Yedek anahtar yapımı</li>
          <li>Akıllı anahtar programlama</li>
        </ul>
        <h2 className="text-xl font-bold text-[#0A2540]">
          7/24 Gemlik Oto Çilingir
        </h2>
        <p className="text-[#2E2E2E]">
          Gece yarısı araç sorunu mu yaşadınız? Gemlik oto çilingir ekibimiz 7/24
          hazır. Hemen arayın, dakikalar içinde kapınızdayız. Gemlik çilingir
          yorumlarında müşteri memnuniyeti birinci önceliğimiz.
        </p>
        <div className="rounded-xl bg-gray-50 p-6">
          <p className="mb-4 font-semibold text-[#0A2540]">
            Araç kilidi mi sorun? Şimdi arayın!
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
