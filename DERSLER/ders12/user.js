let kullanicilar = [
    { username: "crazyboy_ceza", password: "aykut123" },
    { username: "nabukadnezar", password: "ramiz1234" },
    { username: "cellat", password: "azrail34" },
    { username: "admin", password: "admin123123" },
    { username: "ayca_22", password: "reynmen123" },
  ];


  for (let index = 0; index < kullanicilar.length; index++) {
    let user = kullanicilar[index];
    if (user.username === "admin") {
      console.log("Admin bulundu, index numarası:", index);
      break
    } else {
      console.log(index + ". indexli eleman admin değil...devam et");
    }
  }