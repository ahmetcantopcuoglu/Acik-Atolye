
// //---SINAV----//

// //SORU-1//*******************************************************************

// const sayi1 = 15;
// const sayi2 = 8;

// console.log("Toplam=", sayi1+sayi2 ,  "Fark=", sayi1-sayi2)


// // SORU-2//*****************************************************************

// const sayilar = [1,2,3,4,5,6,7,8,9,10];

// for (let index = 0; index < sayilar.length; index++) {
//     const element = sayilar[index];

//     if (element%2 != 0 ) {
    
//         const Yenielement = element*2
//         console.log("Tek sayıların 2 katı=", Yenielement)
//     }
    
// }


// //SORU-3//*****************************************************************

// const sayilar = [45,3,78,21,56,89];

// sayilar.sort((a, b) => a - b)[0];

// sayilar.reverse();

// console.log("Sıralanmış dizi=",sayilar)

// console.log("En büyük elaman=",sayilar[0]);


// //SORU-4//**************************************************************

// const sayilar = [1,2,3,4,5];

   
//     let toplam = 0;

//     for (let index = 0; index < sayilar.length; index++) {
        
//         const element = sayilar[index];
        
//          if(element === null || typeof element !== "number")
//         {
//         console.log("ERROR", "Lütfen dizi içerisinde ki tüm elamanları sayı olarak giriniz!")
//         return;
//         }
//         else{

//             toplam += element;
        
//         }
       
//     }

//     console.log("Dizideki sayıların toplamı:", toplam);




// //SORU-5//***************************************************

// function veriAl()
// {

//     console.log("Veriler alınıyor ...");

//     return new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         resolve("Veriler alındı!");
//     }, 2000);


//     });

// }

// veriAl().then((sonuc)=>{
//     console.log(sonuc);
// });

 
// // Async/Await ile çözüm

// async function veriAl() {
//     console.log("Veriler alınıyor...");

//     await new Promise((resolve) => 
        
//         setTimeout(resolve, 2000));

//     console.log("Veriler alındı!");
// }

// veriAl();


// //SORU-6//***************************************************

//   function SinavBitisSuresi()
//   {

//     setTimeout ( () => { 

//     console.log("Sınav Tamamlandı !")

//     },2000);

// }

// SinavBitisSuresi();


// //SORU-7//***************************************************



//     const tumOgrenciler = ["Ahmet", "Ayşe", "Fatma", "Mehmet","Ali"];

//     const siniftaOlanlar = ["Ahmet", "Fatma", "Ali"];

//     const siniftaOlmayanlar = tumOgrenciler.filter((ogrenci)=>!siniftaOlanlar.includes(ogrenci));

//     siniftaOlmayanlar.map((ogrenci) => {

//     console.log(ogrenci,"sınıfta değil!");
    
//     });

//     //SORU-8//***************************************************

//     const ogrenciPuanlari = [
//         { isim: "Ahmet", puan: 80 },
//         { isim: "Ayşe", puan: 45 },
//         { isim: "Fatma", puan: 60 },
//         { isim: "Mehmet", puan: 72 },
//         { isim: "Ali", puan: 30 }
//        ];

//        const Grup1 = [];
//        const Grup2 = [];
//        const Grup3 = [];

//     //1. Grup: 70 puan ve üzeri.
//     //2. Grup: 50-69 puan arası.
//     //3. Grup: 50 puanın altı

//     for (let i=0; i<ogrenciPuanlari.length; i++)
//     {
//             const Puan = ogrenciPuanlari[i].puan
            
//             if (Puan>=70)
//             {
//                 const GrupA = [ogrenciPuanlari[i].isim, ogrenciPuanlari[i].puan]

//                 Grup1.push(GrupA)

//             }
//             else if(Puan>50 && Puan<70 ){
//                 const GrupB = [ogrenciPuanlari[i].isim, ogrenciPuanlari[i].puan]

//                 Grup2.push(GrupB)

            
//             }
//             else if (Puan<=50 )
//             {
//                 const GrupC = [ogrenciPuanlari[i].isim, ogrenciPuanlari[i].puan]

//                 Grup3.push(GrupC)

//             }
//     }

//     console.log("Grup1 üyeleri=",Grup1)
//     console.log("Grup2 üyeleri=",Grup2)
//     console.log("Grup3 üyeleri=",Grup3)




//  //SORU-9//***************************************************

// const ogrenciPuanlari = [
//         { isim: "Ahmet", puan: 80 },
//         { isim: "Ayşe", puan: 45 },
//         { isim: "Fatma", puan: 60 },
//         { isim: "Mehmet", puan: 72 },
//         { isim: "Ali", puan: 30 }
//        ];

//        ogrenciPuanlari.sort((a,b)=> a.puan-b.puan)[0];

//         ogrenciPuanlari.reverse()


//        console.log("En yüksek puan alan öğrenci",ogrenciPuanlari[0])

//        console.log("En düşük puan alan öğrenci",ogrenciPuanlari[ogrenciPuanlari.length-1])

//        let toplam = 0;
//        for(let i=0; i<ogrenciPuanlari.length; i++)
//        {
//            const puan = ogrenciPuanlari[i].puan
//             toplam += puan;

//        }
       
//        console.log("Ortalama sonuc=", toplam/ogrenciPuanlari.length)


//  //SORU-10//***************************************************

//  const fs = require('fs');

//  fs.readFile('kitaplar.json', 'utf-8', (err, data) => {
//    if (err) {
//      console.log("Dosya okuma hatası:", err);
//      return;
//    }
 
//    const kitaplar = JSON.parse(data);
 
//    const eksikKitaplar = kitaplar.filter(kitap => !kitap.isim || !kitap.yazar);
 
//    fs.writeFile('eksik_kitaplar.json', JSON.stringify(eksikKitaplar, null, 2), (err) => {
//      if (err) {
//        console.log("Yazma hatası:", err);
//        return;
//      }
//      console.log("Eksik kitaplar yazıldı.");
//    });
//  });


//  //SORU-11//***************************************************
 
//  const fs = require('fs');

//  fs.readFile('harcamalar.json', 'utf-8', (err, data) => {
//    if (err) {
//      console.log("Dosya okuma hatası:", err);
//      return;
//    }

//    const harcamalar = JSON.parse(data);
 
//    const gecerliHarcamalar = [];
//    const hataliHarcamalar = [];
//    let toplamHarcama = 0;
 
//    harcamalar.forEach(harcanan => {
//      if (harcanan.kategori && harcanan.tutar && typeof harcanan.tutar === 'number') {
       
//        gecerliHarcamalar.push(harcanan);
//        toplamHarcama += harcanan.tutar;
//      } else {
       
//        hataliHarcamalar.push(harcanan);
//      }
//    });
 
//    fs.writeFile('hatali_harcamalar.json', JSON.stringify(hataliHarcamalar, null, 2), (err) => {
//      if (err) {
//        console.log("yazma hatası:", err);
//        return;
//      }
//      console.log("Hatalı harcamalar yazıldı.");
//    });
 
//    console.log("Toplam geçerli harcama:", toplamHarcama);
//  });
 



//  //SORU-12//***************************************************

//  const envanter = [
//     { isim: "Laptop", fiyat: 15000, stok: 4 },
//     { isim: "Telefon", fiyat: 8000, stok: 0 },
//     { isim: "Tablet", fiyat: 6000, stok: 2 },
//     { isim: "Klavye", fiyat: 500, stok: 10 },
//     { isim: "Fare", fiyat: 300, stok: 0 }
//   ];
  

//   const stoktaOlmayanlar = envanter.filter(urun => urun.stok === 0).map(urun => urun.isim);
  
//   let toplamDeger = 0;
//   for (let i = 0; i < envanter.length; i++) {
//     const urun = envanter[i];
//     if (urun.stok > 0) {
//       toplamDeger += urun.fiyat * urun.stok;
//     }
//   }
  
//   console.log("Stokta olmayan ürünler:", stoktaOlmayanlar);
//   console.log("Stokta olan ürünlerin toplam değeri:",toplamDeger,"TL");


//  //SORU-13//***************************************************


//  const ogrenciler = [
//     { isim: "Ahmet", not: 85 },
//     { isim: "Ayşe", not: 40 },
//     { isim: "Fatma", not: 60 },
//     { isim: "Mehmet", not: 72 },
//     { isim: "Ali", not: 30 }
//    ];
   
//    const basariliOgrenciler = ogrenciler.filter(ogrenci => ogrenci.not>50).map(ogrenci => ogrenci.isim);
//    const basarisizOgrenciler = ogrenciler.filter(ogrenci => ogrenci.not<50).map(ogrenci => ogrenci.isim);

//    console.log("Başarılı Öğrenciler=",basariliOgrenciler);
//    console.log("Başarısız Öğrenciler=",basariliOgrenciler);

   

//    setTimeout(() => {

//     let toplam=0;
//     for (let i = 0; i < ogrenciler.length; i++) {
//         const OgrenciDurum = ogrenciler[i].not;

//         if (OgrenciDurum > 50) {
//             console.log(ogrenciler[i].isim, "Başarılarının devamını dilerim");
//         } else {
//             console.log(ogrenciler[i].isim, "Biraz daha çalışarak başarılı olacağına inanıyorum");
//         }

//        toplam += ogrenciler[i].not 
//     }
//     console.log("Sınıfınızın Ortalaması:",toplam/ogrenciler.length);
// }, 2000);





//  //SORU-14//***************************************************

// const otobuseBin = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Otobüse binildi.");
//       resolve();
//     }, 2000);
//   });
  
//   const muzeZiyareti = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Müze ziyareti tamamlandı.");
//       resolve();
//     }, 5000);
//   });
  
//   const yemekYemek = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Yemek yendi.");
//       resolve();
//     }, 6000);
//   });
  
//   otobuseBin
//     .then(() => muzeZiyareti)
//     .then(() => yemekYemek)
//     .then(() => {
//       console.log("Seyahat planı başarıyla tamamlandı!");
//     })
//     .catch((error) => {
//       console.log("Bir hata oluştu:", error);
//     });
  

// //SORU-15//***************************************************

// const notlar = [
//     { isim: "Ahmet", not: 85 },
//     { isim: "Ayşe", not: 60 },
//     { isim: "Fatma", not: 40 }
//   ];
  
//   function notKontrolEt(ogrenci) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         if (ogrenci.not > 50) {
//           console.log(`${ogrenci.isim} geçti.`);
//         } else {
//           console.log(`${ogrenci.isim} kaldı.`);
//         }
//         resolve(); 
//       }, 1000);
//     });
//   }
  
//   async function notlariKontrolEt() {
//     for (const ogrenci of notlar) {
//       await notKontrolEt(ogrenci);
//     }
//     console.log("Tüm sınav notları kontrol edildi.");
//   }
  
//   notlariKontrolEt();
  
