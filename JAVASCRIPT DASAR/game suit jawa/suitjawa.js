var tanya = true;

while(tanya) {
	//menangkap pilihan player
	var p = prompt('Silahkan pilih : gajah, semut, atau orang');

	//menangkap pilihan dari komputer
	//membangkitkan bilangan random
	var comp = Math.random(); //memanggil fungsi random atau angka acak

	if(comp < 0.34) {
		comp = 'gajah';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}


	//menentukan rules/peraturan
	var hasil ='';

	if(p == comp) {
		hasil = 'Seri';
	} else if (p == 'gajah') {
		// if (comp == 'orang') {
		// 	hasil = 'Menang';
		// } else {
		// 	hasil = 'Kalah';
		// }
		hasil = (comp == 'orang') ? 'Menang' : 'Kalah'; //operator ternary
	} else if (p == 'orang') {
		hasil = ( comp == 'gajah') ? 'Kalah' : 'Menang';
	} else if (p == 'semut') {
		hasil = (comp == 'orang') ? 'Kalah' : 'Menang';
	} else {
		hasil = 'Ups, Kamu memasukkan pilihan yang salah';
	}

	//tampilkan hasil
	alert('Kamu memilih : '+ p + ' dan KOMPUTER memilih '+ comp +'\nMaka hasilnya kamu : '+ hasil);

	tanya = confirm('Main lagi?');
}

alert('Terima kasih sudah bermain ^_^ ');