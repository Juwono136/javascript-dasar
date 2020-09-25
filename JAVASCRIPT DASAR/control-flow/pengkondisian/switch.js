// var angka = prompt('masukkan angka :'); //prompt inputnya berupa string

// switch( angka ) {
// 	case '1' : 
// 		alert('anda memasukkan angka 1');
// 		break;
// 	case '2' :
// 		alert('anda memasukkan angka 2');
// 	break;
// 	case '3' :
// 		alert('anda memasukkan angka 3');
// 	break;
// 	default :
// 		alert('angka salah');
// 	break;
// }

var item = prompt('masukkan nama makanan / minuman : \n (cth : nasi, daging, susu, softdrink)');

switch( item ) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('makanan / minuman sehat');
	break;
	
	case 'softdrink' :
		alert('makanan / minuman tidak sehat');
	break;

	default :
		alert('anda salah memasukkan nama makanan/minuman');
	break;

}