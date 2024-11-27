// let renkler = ["Kırmızı","Mavi" ,"Yeşil", "Sarı", "Beyaz"];


// dizi yazdırma 
// for (let i=0;  i<renkler.length; i++)
// {
// console.log(renkler[i]);
// }


// dizi yazdırma 
// for (let renk of renkler)
// {
// console.log(renk);
// }


// let sayi=5;

// let carpim=1;
// let i=1;

// while ( i<=sayi)
// {
// carpim*=i;
// i++;
// console.log(carpim);
// }



//fonksiyonlar 

// function sayHello() {
//     console.log("Hello World!");
// }

// sayHello()


// function faktoriyel(sayi) {
//     let carpim = 1 

//     for (let i = 1 ; i<= sayi ; i++)
//     {
//         carpim*=i

//     }
//     console.log(carpim);
// }

// faktoriyel(7)
// faktoriyel(3)
// faktoriyel(5)


// // anonim fonksiyon 

// const topla = function (a,b) {
//     return a + b ;
// };

// console.log(topla(3,4))


// a = topla(5,6);

// console.log(a);


// // arrow fonksiyon 

// const carp = (a,b) => {

//     return a * b ;

// }

// console.log(carp(4,3))


let bol = (a,b) => {

    if (b===0){
        console.log("Bolen sayi 0 olamaz")
    }
    else
    {
    return a / b 
    }
}

console.log(bol(5,0));


// Recursive Fonksiyon 

function Faktoriyel(i) 
{

    if(i===0 || i===1 )
    {
        return 1;
    }
    else{
        return i*Faktoriyel(i-1)
    }
    
}
console.log(Faktoriyel(7));