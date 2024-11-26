
let saat = 19.24;


if (saat >= 24.00  || saat < 0.00) 
{
    console.log("Geçersiz saat formatı");
}
else if (saat >= 5.00 && saat < 12.00 )
{
	console.log("Günaydın");
}
else if (saat >= 12.01 && saat < 17.00 )
{
	console.log("İyi Günler");
}

else if (saat >= 17.01 && saat < 21.00 )
{
	console.log("İyi Akşamlar");
}

else if ((saat >= 21.01 && saat < 24.00) || (saat >= 0.00 && saat < 5.00))
{
	console.log("İyi Geceler");
}
else
{
   console.log("Geçersiz saat formatı");
}