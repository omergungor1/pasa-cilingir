export const SITE = {
  name: "Pasa Çilingir",
  domain: "https://pasacilingir.com",
  phone: "+905413433490",
  phoneDisplay: "0541 343 34 90",
  whatsapp: "905413433490",
  address: "Barış mahallesi fatih caddesi No:16 Mustafakemalpaşa/Bursa",
  mapLink: "https://maps.app.goo.gl/4KGgWaF9ZrWrLQpXA",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1518.6267679483988!2d28.38352181538763!3d40.03806336057369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1771002936698!5m2!1str!2str",
  googleRating: 5.0,
  reviewCount: 48,
};

/** Bursa Mustafakemalpaşa ilçesi mahalleleri */
export const MUSTAFAKEMALPASA_MAHALLELER = [
  "Hamidiye Mahallesi",
  "Yalıntaş Mahallesi",
  "Barış Mahallesi",
  "Tatkavaklı Mahallesi",
  "Atatürk Mahallesi",
  "Hamzabey Mahallesi",
  "Yunus Emre Mahallesi",
  "Atariye Mahallesi",
  "Selimiye Mahallesi",
  "Lalaşahin Mahallesi",
];

/** Bursa Karacabey ilçesi mahalleleri */
export const KARACABEY_MAHALLELER = [
  "Gazi Mahallesi",
  "Emirsultan Mahallesi",
  "Sırabademler Mahallesi",
  "Esentepe Mahallesi",
  "Saadet Mahallesi",
  "Tavşanlı Mahallesi",
  "Hamidiye Mahallesi",
  "Yeni Mahallesi",
  "Hüdavendigar Mahallesi",
  "Karacaahmet Mahallesi",
];

/** Tüm hizmet bölgelerindeki mahalleler (liste gösterimi için) */
export const MAHALLELER = [
  ...MUSTAFAKEMALPASA_MAHALLELER,
  ...KARACABEY_MAHALLELER,
];
