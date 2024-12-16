const os = require ("os");

const platform = os.platform();
console.log("Platform : ", platform);

const sistem = os.cpus();
console.log("CPU : ",sistem);

const hafıza = os.totalmem();
console.log("Toplam bellek : ", hafıza/ (1024**3));

const freeRam = os.freemem();
console.log("Boş ram miktarı : ", freeRam / (1024**3));

const kullaniciBilgisi = os.userInfo();
console.log("Kullanıcı bilgisi :",kullaniciBilgisi);

const networkInfo = os.networkInterfaces();
console.log("Network Bilgi : ",networkInfo);


const fs = require("fs");

const veri = "adsk dsad";

fs.writeFile("ders10.txt",veri,(err)=> {

    if(err){
        console.log("Hata Oluştu:",err)
    }else{
        console.log("Dosya oluşturuldu");
    }

});

fs.readFile("ders10.txt","utf-8",(err,data)=>{

    if(err){

        console.error("Hata oluştu:",err);
        return;
    }
    else{
        console.log("Dosya içeriği:",data);
    }
});

fs.appendFile("ders10.txt", "\nsonradan eklenen veri", (err) => {
    if (err) {
      console.log("Hata oluştu:", err);
    } else {
      console.log("Dosyaya veri eklendi");
    }
  });

fs.unlink("ders10.txt",(err)=>{

    if(err) {

        console.error("Dosya silinemedi :", err);
    }
    else
    {
        console.log("Dosya başarıyla silindi");
    }

})
   