//Manipulasi array

//Menambah isi array
// var arr = ["a",1,true];
// console.log(arr[1]);


//menghapus isi array
// var arr = ["juwono", "unpam", "mahasiswa"];
// arr[1] = undefined;
// console.log(arr);


//menampilkan isi array
// var arr = ["juwono", "unpam", "mahasiswa", "nofa"];

// for(var i=0; i < arr.length; i++){
// 	console.log('Mahasiswa ke-'+ (i+1) +' : '+ arr[i]);
// }



//Method pada array


//1. Join = mengubah elemen menjadi string
// console.log(arr.join(' - '));


//2. Push & Pop
// arr.push('doddy');
// arr.pop();
// console.log(arr.join(' - '));

//3. unshift dan shift
// arr.unshift('doddy');
// arr.shift();
// console.log(arr.join(' - '));

// var arr = ['juwono', 'tono', 'bima'];
//4. splice
//rumus = splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ...)
// arr.splice(2, 0, 'doddy', 'fitri');
// arr.splice(1, 2, 'doddy', 'andy');
// console.log(arr.join(' - '));

//5. slice
//rumus = slice(awal, akhir);
//slice itu menghasilkan array baru
// var arr = ['juwono', 'tono', 'bima', 'andy', 'fitri'];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

//6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['juwono', 'dina', 'tono'];
// for (var i=0; i < angka.length; i++){
// 	console.log(angka[i]);
// }

// var cetak  = function(a){
// 	console.log(a);
// }
// angka.forEach(cetak);

// nama.forEach(function(e, i){
// 	console.log('Mahasiswa ke-'+ (i+1) +' adalah : '+ e);
// });


//7. map
//map mengembalikan nilai array
// var angka = [1,2,3,4,5,10,12];
// var angka2 = angka.map(function(e){
// 	return e*2;
// });
// console.log(angka2.join(' - '));

//8. sort
// var angka = [1,3,6,9,8,5,2,12,10];
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join(' - '));

//9. filter & find
//filter bisa mengembalikan banyak nilai
//find hanya bisa mengembalikan 1 nilai saja
var angka = [1,3,6,9,8,5,2,12,10];
var angka2 = angka.filter(function(x){
	return x > 5;
});
console.log(angka2.join(' - '));