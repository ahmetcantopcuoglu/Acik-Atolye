
//----------KONU------------------------ \\

const myPromise = new Promise ((resolve,reject) => {

setTimeout(() => {

    resolve("Promise başarılı dönüş yaptı");

},2000);


} );

console.log("Ders9 kodları çalışıyor");

console.log("My promise i yazdır",myPromise);

//------------------- Örnek 1 ----------------------- \\

const Fonksiyon = new Promise ((resolve,reject) => {


setTimeout(() => {

   let array=5 
   let sonuc=1;


   if(array<0)

    {
        reject(" sayi 0'dan küçük olamaz")

    }

    else
    {

for (index = 1; index <= array; index++) {
    const element = array[index];

    sonuc*=index;



} 
resolve(sonuc);

    }


},2000)
});

Fonksiyon.then((res) => {

console.log("Faktoriyel = ", res)


}).catch((e) => {

console.log (e)


})


 //----------------Örnek 2 -------------------------------\\

const toplama = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    });
  };

  const cikartma = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a - b);
      }, 1500);
    });
  };

  const carpma = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a * b);
      }, 2000);
    });
  };

  const bolme = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (b === 0) {
          reject("Bölen sayı sıfır olamaz");
        } else {
          resolve(a / b);
        }
      }, 2500);
    });
  };

  const kare = (a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a * a);
      }, 3000);
    });
  };

  toplama(9, 0)
    .then((res) => {
      console.log("Toplam:", res);
    })
    .catch((e) => {
      console.log("Hata:", e);
    });

  cikartma(9, 0)
    .then((res) => {
      console.log("Fark:", res);
    })
    .catch((e) => {
      console.log("Hata:", e);
    });

  carpma(9, 0)
    .then((res) => {
      console.log("Çarpım:", res);
    })
    .catch((e) => {
      console.log("Hata:", e);
    });

  bolme(9, 0)
    .then((res) => {
      console.log("Bölüm:", res);
    })
    .catch((e) => {
      console.log("Hata:", e);
    });

  kare(9, 0)
    .then((res) => {
      console.log("Karesi:", res);
    })
    .catch((e) => {
      console.log("Hata:", e);
    });

    //----------------Örnek 3 -------------------------------\\


// faktoriyel, daire alanı, daire çevresi, hipotenüs hesaplama(a^2 + b^2 = c^2)
// kdv (f, oran) %20, %10, %2
// faktoriyel(negatif sayı girilirse reject)
// kdv oran negatif olursa reject veya fiyat negatif olursa reject



const fakt = (a) => {

    return new Promise((resolve, reject) => {

        let carpim = 1

        setTimeout(() => {

            if (a < 0) {

                reject("Faktöriyel için girilen sayı 0 olamaz")

            } else {

                for (let i = 1; i <= a; i++) {

                    carpim *= i;
                }
                resolve(carpim);
            }

        }, 1000);


    });


};

fakt(5).then((res) => {

    console.log("Faktoriyel : ", res)
}).catch((e) => {

    console.log("Faktoriyel Hata: ", e)
})


const daireCevre = (r) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (r < 0) {
          reject("Yarıçap bilgisi negatif olamaz");
        } else {
          resolve(3.14 * 2 * r);
        }
      }, 1500);
    });
  };
   
  const fiyatHesapla = (f, o) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (f < 0 || o < 0) {
          reject("Fiyat ve oranı negatif girmeyin");
        } else {
          resolve((f * o) / 100);
        }
      }, 2000);
    });
  };
   
  const hipotenus = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a < 0 || b < 0) {
          reject("Üçgenin kenar ölçüleri negatif olamaz");
        } else {
          resolve((a * a + b * b) ** (1 / 2));
        }
      }, 2500);
    });
  };


    //----------------Örnek 4 -------------------------------\\

const calculate = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a != "number" || typeof b != "number") {
          reject("Tamsayı tipinde veri giriniz");
        } else {
          let carpima = 1;
          let carpimb = 1;
          for (let index = 1; index <= a; index++) {
            carpima *= index;
          }
          for (let index = 1; index <= b; index++) {
            carpimb *= index;
          }
          resolve({
            toplam: a + b,
            fark: a - b,
            carpim: a * b,
            kare: { a: a * a, b: b * b },
            us: { a: a ** b, b: b ** a },
            faktoriyel: { a: carpima, b: carpimb },
            kareKok: { a: a ** (1 / 2), b: b ** (1 / 2) },
            daire: {
              a: { alan: 3 * a * a, cevre: 2 * 3 * a },
              b: { alan: 3 * b * b, cevre: 3 * 2 * b },
            },
          });
        }
      }, 3500);
    });
  };
  
  calculate(5, 4)
    .then((res) => {
      console.log("Sonuçlar");
      console.log(res);
      console.log(res.daire.a.alan);
    })
    .catch((e) => {
      console.log("Hata oluştu:", e);
    });
  