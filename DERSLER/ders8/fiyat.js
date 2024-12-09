const kategoriModule = require("./kategori")
const kuponModule = require("./kupon")


function sepetTutar(urunler) {

    let sepetToplam = 0;

    for (let index = 0; index < urunler.length; index++) {
        const element = urunler[index];

        sepetToplam += element.birimFiyat * element.adet

    }

   let Kategori = kategoriModule.kategori(sepetToplam);
   let Indirim = kuponModule.kupon("INDIRIM20",sepetToplam);

    console.log("Sepet Toplam = ",sepetToplam ,"Kategori = ",Kategori, "Indırım = ", Indirim)

}




module.exports = {

    sepetTutar,

};
