var s = '';

//soal 1 :
// for(var i=0; i < 10; i++) {
// 	for(var j=0; j<=i; j++) {
// 		s += '*';
// 	}
// 	s +='\n';
// }


// soal 2 :
// for(var i= 10; i > 0; i--) {
// 	for( var j=0; j < i; j++ ) {
// 		s +='*';
// 	}
// 	s += '\n';
// }


//soal 3 :
// for(var i=1; i<=10; i++) {
// 	for(var j=9; j>=i; j--) {
// 		s +=' ';
// 	}
// 	for(var k=1; k<=i; k++) {
// 		s +='*';
// 	}
// 	s +='\n';
// }

// soal 4 :
// for(var i=1; i<=10; i++) {
// 	for(var j=1; j<i; j++) {
// 		s +=' ';
// 	}
// 	for(var k=10; k>=i; k--) {
// 		s +='*';
// 	}
// 	s +='\n';
// }

//soal 5 :
// for(var i=0; i < 10; i++) {
// 	for(var j=0; j<=i; j++) {
// 		s += '*';
// 	}
// 	s +='\n';
// }
// for(var i=9; i > 0; i--) {
// 	for( var j=0; j < i; j++ ) {
// 		s +='*';
// 	}
// 	s += '\n';
// }

//soal 6 :
// for(var i=5; i>0; i--) {
// 	for(j=1; j<=i; j++) {
// 		s +='-';
// 	}
// 	for(k=5; k>i; k--) {
// 		s +='*';
// 	}
// 	for(l=6; l>i; l--) {
// 		s +='*';
// 	}
// 	s +='\n';
// }

//soal 7 :
for(var i=5; i>0; i--) {
	for(j=1; j<=i; j++) {
		s +=' ';
	}
	for(k=5; k>i; k--) {
		s +='*';
	}
	for(l=6; l>i; l--) {
		s +='*';
	}
	s +='\n';
}
for(var i=0; i<=5; i++) {
	for(j=1; j<=i; j++) {
		s +=' ';
	}
	for(k=6; k>i; k--) {
		s +='*';
	}
	for(l=5; l>i; l--) {
		s +='*';
	}
	s +='\n';
}

console.log(s);