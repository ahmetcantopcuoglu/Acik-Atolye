let ad = "Ahmetcan"
let puan = 67.48;

// Harf notu hesaplama fonksiyonu
function harfNotuMesaji(puan, ad) {
   if (puan < 0 || puan > 100) {
    console.log("Lütfen 0 ile 100 arasında gerçek notunuzu giriniz!!");
  } else if (puan >= 90) {
    console.log(`Merhaba ${ad}, puanın ${puan}. Harf notun: AA Tebrikler, geçtiniz!`);
  } else if (puan >= 80) {
    console.log(`Merhaba ${ad}, puanın ${puan}. Harf notun: BA Tebrikler, geçtiniz!`);
  } else if (puan >= 70) {
    console.log(`Merhaba ${ad}, puanın ${puan}. Harf notun: BB Tebrikler, geçtiniz!`);
  } else if (puan >= 60) {
    console.log(`Merhaba ${ad}, puanın ${puan}. Harf notun: CB Tebrikler, geçtiniz!`);
  } else if (puan >= 50) {
    console.log(`Merhaba ${ad}, puanın ${puan}. Harf notun: CC Tebrikler, geçtiniz!`);
  } else if (puan >= 45) {
    console.log(
      `Merhaba ${ad}, puanın ${puan} Harf notun: DC  şartlı olarak geçtiniz!`
    );
  } else if (puan >= 40) {
    console.log(
      `Merhaba ${ad}, puanın ${puan} Harf notun: DD şartlı olarak geçtiniz!`
    );
  } else {
    console.log(
      `Merhaba ${ad}, puanın ${puan} Harf notun: FF kaldınız!`
    );
  }
}

// Harf notu mesajını çalıştır
harfNotuMesaji(puan, ad);

