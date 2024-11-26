let ogrenci_adi = "Ahmetcan"
let vize_notu = 63;
let final_notu =87;





function OrtalamaHesapla()
{

if (isNaN(vize_notu) || isNaN(final_notu))
{
  console.log("Lütfen geçerli notlar giriniz.");
} 
else if (typeof ogrenci_adi !== "string")
{
  console.log("Öğrenci adı geçerli bir metin olmalıdır.");
}
else if ( vize_notu < 0 || vize_notu > 100 || final_notu < 0 || final_notu > 100 )
{
console.log("Lütfen 0 ile 100 arasında gerçek notunuzu giriniz");
}
else if ( vize_notu < 50 ) 
{
console.log("Vize notunuz 50 den düşük olduğu için maalesef finale girmeye hak kazanamadınız");
}

else if ( final_notu < 35 ) 
{
console.log("Final puanınız 35 ten düşük olduğu için Ders notunuz FF");
}
else 
{
  let ortalama =(vize_notu*0.4)+(final_notu*0.6);
  
   if (ortalama>90)
  {
    console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: AA Tebrikler, geçtiniz!");
  }
   else if (ortalama >= 80) 
  {
    console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: BA Tebrikler, geçtiniz!");
  } else if (ortalama >= 70) 
  {
    console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: BB Tebrikler, geçtiniz!");
  } else if (ortalama >= 60) 
  {
    console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: CB Tebrikler, geçtiniz!");
  } else if (ortalama >= 50) 
  {
    console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: CC Tebrikler, geçtiniz!");
  } else if (ortalama >= 45) 
  {
  console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: DC şartlı olarak geçtiniz!");
  } else if (ortalama >= 40) 
  {
   console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: DD şartlı olarak geçtiniz!");
  } else 
  {
  console.log("Merhaba " + ogrenci_adi + " ortalaman " + ortalama + " Harf notun: FF kaldınız");
  }
}
}