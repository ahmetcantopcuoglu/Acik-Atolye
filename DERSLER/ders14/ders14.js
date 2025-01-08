built in modules
write, read, append, delete file
const fs = require("fs");

try {
  console.log("Dosya yazma işlemi başladı");
  setTimeout(() => {
    fs.writeFile("ders14.txt", "Bu örnek veri", (error) => {
      if (error) {
        throw new Error(error.message);
      }
      console.log("Hata oluşmadı");
    });
    console.log("Dosya yazma işlemi bitti");
  }, 1000);
} catch (error) {
  console.log("Hata oluştu:", error.message);
}

try {
  console.log("Dosya yazma işlemi başladı");
  fs.writeFile("ders15.txt", "örnek veri", (error) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log("if dışarısı");
  });
  console.log("İşlem tamamlandı");
} catch (error) {
  console.log("Hata oluştu:", error.message);
}

try {
  console.log("Dosya okuma başladı");
  fs.readFile("ders15.txt", "utf8", (error, data) => {
    if (data) {
      console.log("Veri okuma başarılı", data);
    } else {
      throw new Error(error.message);
    }
    console.log("Dosya okuma tamamlandı");
  });
} catch (error) {
  console.log("Hata oluştu:", error.message);
}

//diziler ileri metodlar
// push, pop, reverse, sort

let meyveler = ["elma", "çilek", "kivi", "karpuz", "kiraz", "armut"];
let sebzeler = ["pırasa", "brokoli", "soğan", "fasulye"];
console.log("--------Dizinin ilk hali--------");
for (let index = 0; index < meyveler.length; index++) {
  console.log(meyveler[index]);
}
meyveler.push("kavun", "mango");
console.log("--------Diziye eleman eklendi--------");
for (let index = 0; index < meyveler.length; index++) {
  console.log(meyveler[index]);
}
console.log("Dizinin yeni uzunluğu:", meyveler.length);
meyveler.pop();
console.log("--------Diziden eleman eksildi--------");
for (let index = 0; index < meyveler.length; index++) {
  console.log(meyveler[index]);
}
console.log("Dizinin yeni uzunluğu:", meyveler.length);
console.log("--------Diziden ters çevrildi--------");
meyveler.reverse();
for (let index = 0; index < meyveler.length; index++) {
  console.log(meyveler[index]);
}
console.log("--------Diziden küçükten büyüğe sıralandı--------");
meyveler.sort();
for (let index = 0; index < meyveler.length; index++) {
  console.log(meyveler[index]);
}
console.log("*****************************");
//find filter map
sebzeler.map((sebze) => {
  console.log(sebze);
});
meyveler.map((meyve) => {
  sebzeler.push(meyve);
});
console.log("*****************************");
sebzeler.map((sebze) => {
  console.log(sebze);
});
let notlar = [
  { isim: "Batu", vize: 50, final: 85 },
  { isim: "John", vize: 30, final: 25 },
  { isim: "Alex", vize: 20, final: 65 },
  { isim: "Mike", vize: 80, final: 55 },
];
// vize notu en az 35 olmalı
// geçme notu 50
// vizenin %40ı finalin %60ı nihai not
notlar.map((student) => {
  if (student.vize < 35) {
    student.harf = "FF";
    student.bilgi = "Vize notunuzdan dolayı FF aldınız";
    student.ortalamaNot = 0;
  } else {
    let ortalama = (student.vize * 0.4 + student.final * 0.6) / 2;
    if (ortalama >= 50) {
      student.harf = "AA";
      student.bilgi = "Tebrikler geçtiniz";
      student.ortalamaNot = ortalama;
    } else {
      student.harf = "FF";
      student.bilgi = "Ortalama notunuzdan dolayı FF aldınız";
      student.ortalamaNot = ortalama;
    }
  }
});

let gecenler = [];
notlar.map((student) => {
  if (student.ortalamaNot != 0) {
    gecenler.push(student);
  }
});

let sinifOrt = 0;
let toplam = 0;
gecenler.map((student) => {
  toplam += student.ortalamaNot;
});
sinifOrt = toplam / gecenler.length;
console.log("Sınıf ortalaması:", sinifOrt);

// Tarihler

let now = new Date();
console.log(now);
console.log("Yıl:", now.getFullYear());
console.log("Ay:", now.getMonth()); //javascriptte aylar 0dan başlar
console.log("Gün:", now.getDay());
console.log("Saat:", now.getHours());
console.log("Saniye:", now.getSeconds());
console.log("Milisaniye:", now.getMilliseconds());
now.setFullYear(2025);
console.log("Yıl:", now.getFullYear());
console.log("toDateString:", now.toDateString());
console.log("toLocaleDateString:", now.toLocaleDateString());
console.log("toLocaleString:", now.toLocaleString());
console.log("toTimeString:", now.toTimeString());
console.log("toISOString:", now.toISOString());
