
// Çalışan verisi
const calisanlar = [
  { isim: "Ahmet", soyisim: "Yılmaz", yas: 30, cinsiyet: "erkek", maas: 8000, departman: "Ar-Ge", deneyim: 14, proje: "Proje A" },
  { isim: "Ayşe", soyisim: "Kaya", yas: 25, cinsiyet: "kadın", maas: 7500, departman: "İK", deneyim: 6, proje: "Proje B" },
  { isim: "Mehmet", soyisim: "Çelik", yas: 28, cinsiyet: "erkek", maas: 7000, departman: "Operasyon", deneyim: 8, proje: "Proje C" },
  { isim: "Fatma", soyisim: "Demir", yas: 29, cinsiyet: "kadın", maas: 8500, departman: "Ar-Ge", deneyim: 16, proje: null },
  { isim: "Ali", soyisim: "Şahin", yas: 27, cinsiyet: "erkek", maas: 6700, departman: "Operasyon", deneyim: 5, proje: "Proje A" },
];


// Proje verisi
const projeler = [
  { projeAdi: "Proje A", maasCarpani: 1.5 },
  { projeAdi: "Proje B", maasCarpani: 1.3 },
  { projeAdi: "Proje C", maasCarpani: 1.2 },
];




// Maaş zammını hesaplayan fonksiyon

function zamHesapla(calisan) {
  

  // Yaş kontrolü

  if (calisan.yas < 22 || !Number.isInteger(calisan.yas)) {
    console.log(`${calisan.isim} ${calisan.soyisim}: Yaş 22'den küçük olamaz ve tam sayı olmalıdır.`);
    return 0; // Hatalı yaş verisi durumunda maaş hesaplamayı durdur
  }

  // Cinsiyet kontrolü

  if (calisan.cinsiyet !== "erkek" && calisan.cinsiyet !== "kadın") {
    console.log(`${calisan.isim} ${calisan.soyisim}: Cinsiyet "erkek" veya "kadın" olmalıdır.`);
    return 0; // Hatalı cinsiyet durumu, fonksiyonu durdur.
  }





let zamOrani = 0;

  // 1 seneden az çalışanlar için zam oranı; 

  if (calisan.deneyim >= 6 && calisan.deneyim < 12) {
    zamOrani += 0.15;
  } else if (calisan.deneyim >= 3 && calisan.deneyim < 6) {
    zamOrani += 0.10;
  } else if (calisan.deneyim < 3) {
    zamOrani += 0.05;
  }



  // 1 seneden fazla çalışanlar için zam oranı;

  if (calisan.deneyim >= 12) {
    switch (calisan.departman) {
      case "Ar-Ge":
        zamOrani += 0.20;
        break;
      case "İK":
        zamOrani += 0.22;
        break;
      case "Operasyon":
        zamOrani += 0.30;
        break;
    }
  }

 // Kadın çalışanlara ek %3 zam

  if (calisan.cinsiyet === "kadın") {
    zamOrani += 0.03;
  }

 // Projeye bağlı maaş çarpanı

  if (calisan.proje) {
    const proje = projeler.find(p => p.projeAdi === calisan.proje);
    if (proje) {
      zamOrani += proje.maasCarpani - 1; // Çarpan 1.5 ise, %50 artış.
    }
  }

  // Zamlı maaşı hesapla
  return calisan.maas * (1 + zamOrani);
}

// Maaşları güncelleme fonksiyonu
function maaslariGuncelle() {
  console.log(" Yeni Maaşlar ");

  calisanlar.forEach(calisan => {
    const yeniMaas = zamHesapla(calisan);
    console.log(
      `Ad: ${calisan.isim}, Soyad: ${calisan.soyisim}, Maaş (Zamlı): ${yeniMaas.toFixed(2)}, Proje: ${
        calisan.proje ? calisan.proje : "Yok"
      }`
    );
  });

}


// Maaşları güncelle ve göster
maaslariGuncelle();
