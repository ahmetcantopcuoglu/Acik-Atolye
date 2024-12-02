// dairenin alanını hesaplama πr^2
// dairenin çevresini hesaplama 2πr
// faktoriyel hesaplama
// mod alma
// ekrana girilen sayı kadar merhaba yazdırmak
 
const PI = 3.14;
 
const alan = (r) => {
  console.log("Dairenin alanı:", PI * r * r+"\n","Dairenin Yarıçapı:", r);
};
 
const cevre = (r) => {
  console.log("Yarı Çap = ",r)
  return 2 * PI * r;
};
 
const faktoriyel = (sayi) => {
  let carpim = 1;
  for (let index = 1; index <= sayi; index++) {
    carpim *= index;
  }
  return carpim;
};
 
const mod = (a, b) => {
  console.log("a mod b:", a % b);
};
 
const merhaba = (sayi) => {
  let index = 0;
  while (index < sayi) {
    console.log("Merhaba", index);
    index++;
  }
};

module.exports={ alan,cevre,faktoriyel,mod,merhaba}