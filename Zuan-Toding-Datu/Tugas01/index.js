//Concat utuk menggabungkan dua kata atau lebih
let word1 = "Halo ";
let word2 = "Nama Saya  ";
let word3 = "Zuan Todingdatu";

console.log(word1.concat(word2,word3));

//includes memeriksa array untuk melihat apaka kita menyertakan nilai spesifik jika ya akan mengembalikan true false jika tidak
let name = "Zuan Todingdatu";
console.log(name.includes("Zuan")); 

//length untuk menghitung jumla karakter yang ada
let kata = ['apakah','kalian','melihat','dora?'];
console.log(kata.length);

// split untuk memecah string
let nama = "Zuan Todingdatu";
console.log(nama.split(" "));

//  untuk mengubah elemen array termasuk menghapus, mengganti, atau menambah elemen baru
let nama1 = "Todingdatu";
console.log(nama1.slice(6));

//substring untuk memotong atau mengambil string dari sebua string
let str1 = "Alo Gess";
console.log(str1.substring(2,5));

//tlolowrecase Mengubah semua abjad dalam string menjadi huruf kecil
let str = "Todingdatu, Zuan";
console.log(str.toLowerCase());

// mengubah semua abjad dalam string menjadi huruf besar
let tu = "todingdatu, Zuan";
console.log(tu.toUpperCase());

// trim untuk menghapus spasi
let trim = "   Alo Gess  ";
console.log(trim.trim());

// valueof untuk mengonversi object ke nilai primitif
let vo = "Hallo Gess";
console.log(vo.valueOf());