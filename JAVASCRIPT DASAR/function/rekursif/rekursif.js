//menggunakan looping
// for( i=10; i >= 1; i--) {
// 	console.log(i);
// }


//menggunakan fungsi rekursif
// function tampilAngka(n){ 
// 	//kondisi base case untuk memberhentikan rekursif menggunakan pengkondisian
// 	if(n === 0) {
// 		return;
// 	}

// 	console.log(n);
// 	tampilAngka(n-1);
// }

// tampilAngka(10);


//aplikasi rekursif untuk bilangan faktorial
function faktorial(n){
	if(n === 0) return 1;
	return n*faktorial(n-1);
}

console.log(faktorial(5));