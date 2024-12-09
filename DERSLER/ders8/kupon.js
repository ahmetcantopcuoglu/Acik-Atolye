

function kupon(Kod, fiyat) {

    switch (Kod) {

        case "INDIRIM10":
            return fiyat * 0.9
            break;

        case "INDIRIM20":
            return fiyat * 0.8
            break;

        case "INDIRIM30":
            return fiyat * 0.7
            break;
    }

}

module.exports={

    kupon,
};