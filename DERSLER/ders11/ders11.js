
 // belirli aralıktaki elementleri kırpar
let harfler = ["b", "a", "c", "d", "e", "f"];
let parcaDizi = harfler.slice(2, 5);
console.log(parcaDizi);
// splicedan uzak durun! :) önemli değil
let sayilar = [1, 2, 3, 4, 5];
let spliced = sayilar.splice(1, 2, 9, 0, -3, 16, 23, harfler);
console.log("Splice edilmiş dizi", sayilar);
console.log(sayilar[6][1]);
 
let fruits = ["elma", "çilek", "kivi", "kivi"];
let vegetables = ["brokoli", "havuç", "patates"];
// iki veya daha fazla diziyi birbirine ekler
let yeniDizi = fruits.concat(vegetables);
console.log(yeniDizi);
//indexof belirtilen elementin index numarasını döndürür
//indexof belirtilen elementi bulamazsa -1 döndürür
console.log(fruits.indexOf("kivi"));
 
//includes belritilen element dizide varsa true yoksa false döner
let varmi = fruits.includes("kivi2");
console.log(varmi);
// join dizileri stringe dönüştürür (parametre olarak girilen değer ayraç olur)
let strVegetables = vegetables.join(" ");
console.log(strVegetables);
 
// reverse diziyi ters çevirir return yok (dizi değişir direkt)
let isimler = ["john", "christian", "david", "tom", "michelle"];
isimler.reverse();
console.log(isimler);
 
// sort diziyi küçükten büyüğe doğru sıralar
// büyükten küçüğe sıralamak istenirse sort + reverse
isimler.sort();
console.log(isimler);
console.log("Sort öncesi:", sayilar);
sayilar.sort();
sayilar[8].sort();
console.log(sayilar);


/*
bir fonksiyon tanımlayacaksınız, arrow func olacak*************
return olarak promise return edecek
bu fonksiyona iki tane dizi alınacak parametre olarak***********
ilk dizi küçükten büyüğe sıralanacak*********
ikinci dizi büyükten küçüğe doğru sıralanacak***********
dizilerin içinde eleman olarak -1 var ise promise reject edecek,
bunun dışındaki tüm durumlarda promise resolve edecek dizinin sıralanmış halini
ekranda bu iki dizinin önceki ve sonraki hallerini de yazdırın
settimeout içerisindeki ms cinsinden değeri bu fonksiyondan parametre olarak alın
yani üç tane parametre olacak iki adet dizi bir adet de ms cinsinden sayı
ms cinsinden sayı parametresi eğer number dışında bir veri olarak gelirse reject yapın
*/


// Örnek - 1 

let dizi1 = [42, "apple", 87, "banana", 19, "cherry", 56, "date", 31, "fig"];
let dizi2 = ["grape", 99, "honeydew", 64, "kiwi", 28, "lemon", 73, "mango", 14];
 
const DizilerKumesi = (xDizisi, yDizisi, ms) => {
  return new Promise((resolve, reject) => {

    if (typeof ms==="number") {

        setTimeout(() => {
            if (xDizisi.includes(-1) || yDizisi.includes(-1)) {
              reject("Dizide -1 değeri mevcut");
            } else {
              xDizisi.sort();
              yDizisi.sort();
              yDizisi.reverse();
              resolve({ dizi1: xDizisi, dizi2: yDizisi });
            }
          }, ms);
        
    }
    else    
    {
        resolve("Girilen değer sayı olmalı")

    }


  });
};
 
DizilerKumesi(dizi1, dizi2, 2500)
  .then((res) => {
    console.log("Dizi1:", res.dizi1);
    console.log("Dizi2:", res.dizi2);
  })
  .catch((err) => {
    console.log("Hata oluştu:", err);
  });

