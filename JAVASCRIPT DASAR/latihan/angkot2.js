var noAngkot = 1;
var angkotBeroperasi = 4;
var jumlAngkot = 10;

while(noAngkot <= angkotBeroperasi) {
	console.log('Angkot No '+ noAngkot +' beroperasi dengan baik.');
noAngkot++;
} 

for(noAngkot > angkotBeroperasi; noAngkot <= jumlAngkot; noAngkot++) {
	console.log('Angkot No. '+ noAngkot +' sedang tidak beroperasi');
}