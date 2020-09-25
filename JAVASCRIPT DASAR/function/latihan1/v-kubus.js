//tanpa menggunakan function
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);



//menggunakan function
// function jumlahVolumeDuaKubus(a, b) {
// 	var total;
// 	var volumeA;
// 	var volumeB;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;

// 	total = volumeA + volumeB;

// 	return total;
// }

// var a = parseInt(prompt('masukkan nilai 1 (cm) : ')); //mengubah nilai menjadi number
// var b = parseInt(prompt('masukkan nilai 2 (cm) : '));
// var hasil = jumlahVolumeDuaKubus(a,b);
// alert('Volume kubus = '+hasil+' cm^3');



//refactoring (membuat kode lebih efisien/hemat) :
function jumlahVolumeDuaKubus(a, b) {
	return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8,3));
