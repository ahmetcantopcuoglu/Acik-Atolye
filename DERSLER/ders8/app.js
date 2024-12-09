 const fiyatModule = require("./fiyat")




const urunler = [
    { urunAdi: "Elma", adet: 3, birimFiyat: 5 },
    { urunAdi: "Muz", adet: 2, birimFiyat: 8 },
    { urunAdi: "Portakal", adet: 1, birimFiyat: 12 },
    { urunAdi: "Üzüm", adet: 4, birimFiyat: 10 },
    { urunAdi: "Karpuz", adet: 1, birimFiyat: 20 },
    { urunAdi: "Çilek", adet: 5, birimFiyat: 15 },
    { urunAdi: "Kayısı", adet: 2, birimFiyat: 7 },
    { urunAdi: "Nar", adet: 3, birimFiyat: 9 },
    { urunAdi: "Armut", adet: 6, birimFiyat: 4 },
    { urunAdi: "Kiraz", adet: 7, birimFiyat: 6 },
  ];

    fiyatModule.sepetTutar(urunler)


    for (i=0; i<urunler.length; i++)
    {
        let Urunadi = urunler[i].urunAdi;

        let Adet = urunler[i].adet;

        let Birim_Fiyat = urunler[i].birimFiyat

        console.log("Urun Adi: ",Urunadi, "Adet : ",Adet, "Birim Fiyat : ",Birim_Fiyat)

    }

   




  // sepette ki toplam fiyatı belirle 

  // ucuz - orta - pahalı  3 kategori oluştur  //kategori dosyasında kategori belilremek için bir fonksiyon yazın
  //toplam fiyat 50den az ise ucuz 100den az ise orta 100den fazla ise pahalı kategorisinde olacak

  //indirim hesapla 

  //kupon dosyasında indirim kodu alınacak parametre olarak indirim hesapla fonksiyonuna mesela INDIRIM10, INDIRIM20, INDIRIM30
  // üç adet kupon var INDIRIM10 olursa %10 fiyatta azalma olacak

  //indirimsiz ve indirimli fiyat ikisi de ekrana yazılacak