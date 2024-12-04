// const mathModule = require("../math/math")
// const complicateModule = require("../math/complicate/fact")


// mathModule.toplama(-7,-23);

// let sonuc = complicateModule.faktoriyel(5);

// console.log(sonuc);


// const bolme = (a,b) => {
//     if (b===0){
//         throw new Error("Bölen sayı 0 olamaz")
//     }
//     else {

//     return a/b; 
//     }
// };

// try {
//     let sonuc=bolme(9,5);
//     console.log(sonuc);
// }
// catch(error)
// {
//     console.log(error.message);
// }


// try {
//     let bolum = mathModule.bol(7,5);
//     console.log(bolum);
//     let factoriyel = mathModule.fact(5);
//     console.log(factoriyel);
// } catch (error) {
//     console.log(error.message)
// }

// function setTime()
// {
// setTimeout(()=>{

//     console.log("time out")

// },2000)
// };

// let meyveler =["kivi","karpuz","çilek","erik","kiraz","mango","şeftali","armut"];

// for ( let i=0; i<meyveler.length; i++)
// {

//     setTimeout(()=>{

//         console.log(meyveler[i]);
    
//     },i*1000)
   

// };




const ciftRakam = [2,3,4,6,5,0];
{

 if (ciftRakam.length>5)
 {
    throw new error("Dizi uzunluğu 5 ten büyük olamaz");
    
 }
 else
  {

    for (let index = 0; index < ciftRakam.length; index++) {
        ciftRakam[index];
       
     }
    
  }

}

try {
    const sonuc =  console.log(ciftRakam);
 } catch (error) {
    console.log(error.message);
 }
