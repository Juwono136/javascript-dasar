//Membuat object di Javascript

//Secara literal
//this di literasi =  mengembalikan object yang bersangkutan
var mhs = {
	nama : "Juwono",
	umur : 24,
	ips : [3.2, 3.4, 4.00, 3.9],
	alamat : {
		jalan : "Jl. Cendrawasih 5",
		kota : "Tangerang",
		provinsi : "Banten"
	}
};


//Menggunakan function declaration
function buatMhs(nama, nrp, email, jurusan){
	var mhs = {};
		mhs.nama = nama;
		mhs.nrp = nrp;
		mhs.email = email;
		mhs.jurusan = jurusan;
		return mhs;
};
//this di function declaration = mengembalikan object secara global
var mhs3 = buatMhs('Doddy', 1812389123, 'Doddy@gmail.com', 'Teknik Informatika');



//contructor (function khusus untuk membuat object)
function Mahasiswa(nama, nrp, email, jurusan){ //nama function-nya ditulis huruf besar diawal
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan; //tanpa ada return
};
//this di contructor = mengembalikan object yang dibuat

var mhs4 = new Mahasiswa('Erik', 80802840, 'Erik@gmail.com', 'Teknik Mesin');