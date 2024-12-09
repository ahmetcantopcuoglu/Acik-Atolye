

function kategori(fiyat) {

    if (fiyat<50) {
        
        return "Ucuz"

    }else if ( fiyat<100)
    {
        return "Orta"
    }
    else
    {
        return "Pahalı"
    }
}

module.exports={

    kategori,
};