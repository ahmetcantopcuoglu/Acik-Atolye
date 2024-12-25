const usersModule = require("./users");

const kullanicilar = usersModule.kullanicilar;


const checkUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = kullanicilar.find(
        (user) => user.username === username && user.password === password
      );
      if (result) {
        resolve(result);
      } else {
        reject("Giriş başarısız");
      }
    }, 1500);
  });
};

const loginUser = async () => {
  try {
    const user = await checkUser("crazyboy_cea", "aykut123");
    console.log(user);
  } catch (error) {
    console.log("Hata oluştu:", error);
  }
};

loginUser()

let meyveler = [
  { ad: "elma", fiyat: 20 },
  { ad: "çilek", fiyat: 10 },
  { ad: "kivi", fiyat: 25 },
  { ad: "karpuz", fiyat: 5 },
  { ad: "kiraz", fiyat: 30 },
];

console.log(meyveler);

let meyve = meyveler.find((meyve) => meyve.fiyat > 35);
console.log(meyve);
let yeniDizi = meyveler.filter((meyve) => meyve.fiyat >= 10);
console.log(yeniDizi);
meyveler.map((meyve) => (meyve.fiyat += meyve.fiyat * 0.2));
console.log(meyveler);

// A, A1, A2, B
// B: 25000 A: 24000 A1: 12000 A2: 18000
// A sınıfı için yaş 24 olmalı en az
// A1 sınıfı için yaş 16 olmalı en az

let yas = users.filter((user) => {
  return user.age >= 18;
});
console.log("Bütçeden bağımsız A1 ve B sınıfı için uygun kullanıcılar");
console.log(yas);
yas.map((user) => (user.sinif = "A"));
console.log(yas);
//16yaşından büyük ama 18den küçük kullanıcılar
//18 yaşından büyük ama 24den küçük kullanıcılar
//24den büyük kullanıcılar

let users = [
  { name: "batuhan", budget: 15000, age: 16 },
  { name: "caner", budget: 25000, age: 23 },
  { name: "ahmetcan", budget: 35000, age: 22 },
  { name: "ahmetcan", budget: 15750, age: 24 },
  { name: "fırat", budget: 22000, age: 20 },
  { name: "mert", budget: 20000, age: 19 },
  { name: "yusuf", budget: 23500, age: 18 },
];

users.map((user) => {
  if (user.age < 16) {
    user.sinif = "Herhangi bir sınıf için yaş yeterli değil";
  } else {
    if (user.age >= 16 && user.age < 18) {
      if (user.budget >= 12000) {
        user.sinif = "Yaş ve bütçe A1 için uygun";
      } else {
        user.sinif = "Yaş A1 için uygun ama bütçe yetersiz";
      }
    } else {
      if (user.age >= 18 && user.age < 24) {
        if (user.budget > 18000) {
          user.sinif = "Yaş ve bütçe A1, A2, B için uygun";
        } else {
          user.sinif = "Yaş A1, A2, B için uygun ama bütçe yetersiz";
        }
      } else {
        if (user.budget >= 24000) {
          user.sinif = "Yaş ve bütçe A1, A2, B ve A için uygun";
        } else {
          user.sinif = "Yaş A1, A2, B ve A için uygun ama bütçe yetersiz";
        }
      }
    }
  }
});

// bu map işlemi bir promise içerisinde olacak
// promise then catch ve async await olmak üzere iki yöntemle de çalıştırılacak
// settimeout için ms parametre olarak alınacak ör: 1500

console.log(users);

let products = [
  { name: "laptop", price: 35000, category: 1 }, //%20
  { name: "phone", price: 25000, category: 2 }, //%10
  { name: "bike", price: 15000, category: 1 }, //%20
];
products.map((product) => console.log("KDV hariç:", product));

let sub1 = products.filter((product) => product.category === 1);
let sub2 = products.filter((product) => product.category === 2);

sub1.map((product) => (product.price *= 1.2));
sub2.map((product) => (product.price *= 1.1));

console.log("Kategori 1 ürünleri");
sub1.map((product) => console.log(product));
console.log("Kategori 2 ürünleri");
sub2.map((product) => console.log(product));