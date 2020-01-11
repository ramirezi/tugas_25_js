function panggilsort(){
var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya :",angka.toString());
angka = angka.sort();
console.log("Ascending :",angka.toString());
revangka = angka.reverse();
console.log("Descending :",revangka.toString());

var cari = angka.filter(no => {
  return no > 10;
})
console.log("Filter > 10 :",cari.toString());
}
panggilsort();
