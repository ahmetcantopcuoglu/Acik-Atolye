// // promise tekrar
 
// const bolme = (a, b) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         typeof a != "number" || typeof b != "number"
//           ? reject("Lütfen sayı tipinde veri girin")
//           : b === 0
//           ? reject("Bölen sayı sıfır olamaz")
//           : resolve({ message: "Bölme işlemi başarılı", result: a / b });
//       }, 2500);
//     });
//   };
   
//   const islem = async () => {
//     try {
//       const data = await bolme(9, 10);
//       console.log(data.result);
//     } catch (error) {
//       console.log("Hata oluştu", error);
//     }
//   };
   
//   islem();


const checkUser = (username) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof username != "string") {
          reject("Metin tipinde veri giriniz");
        } else {
          let result = "kullanıcı bulunamadı";
          for (let index = 0; index < kullanicilar.length; index++) {
            let user = kullanicilar[index];
            user.username === username ? (result = user) : null;
          }
          resolve(result);
        }
      }, 1500);
    });
  };
   
  checkUser(123)
    .then((res) => {
      console.log("İşlem sonucu:", res);
    })
    .catch((err) => {
      console.log("Hata oluştu:", err);
    });
   