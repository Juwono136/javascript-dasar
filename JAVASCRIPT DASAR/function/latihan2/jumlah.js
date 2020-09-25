// function tambah (a,b) {
// 	return a + b;
// }

// function kali (a,b) {
// 	return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);



//function arguments (array) = untuk menampung banyak nilai
function tambah(){
	var hasil = 0;
	for( var i=0; i < arguments.length; i++){
		hasil += arguments[i]; //ditambah secara looping
	}
	return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);