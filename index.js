let hasilPenjumlahan1;
let hasilPenjumlahan2;

document.getElementById("myPlusButton").onclick = function() {
  hasilPenjumlahan1 = parseInt(document.getElementById("myPlusNum1").value);
  hasilPenjumlahan2 = parseInt(document.getElementById("myPlusNum2").value);
  console.log(hasilPenjumlahan1);
  console.log(hasilPenjumlahan2);
  document.getElementById("myPlusHasilLabel").innerHTML = hasilPenjumlahan1 + hasilPenjumlahan2;
}

let hasilPengurangan1;
let hasilPengurangan2;

document.getElementById("myMinusButton").onclick = function() {
  hasilPengurangan1 = parseInt(document.getElementById("myMinusNum1").value);
  hasilPengurangan2 = parseInt(document.getElementById("myMinusNum2").value);
  console.log(hasilPengurangan1);
  console.log(hasilPengurangan2);
  document.getElementById("myMinusHasilLabel").innerHTML = hasilPengurangan1 - hasilPengurangan2;
}

let hasilPerkalian1;
let hasilPerkalian2;

document.getElementById("myKaliButton").onclick = function() {
  hasilPerkalian1 = parseInt(document.getElementById("myKaliNum1").value);
  hasilPerkalian2 = parseInt(document.getElementById("myKaliNum2").value);
  console.log(hasilPerkalian1);
  console.log(hasilPerkalian2);
  document.getElementById("myKaliHasilLabel").innerHTML = hasilPerkalian1 * hasilPerkalian2;
}

let hasilPembagian1;
let hasilPembagian2;

document.getElementById("mySubstractButton").onclick = function() {
  hasilPembagian1 = parseInt(document.getElementById("mySubstractNum1").value);
  hasilPembagian2 = parseInt(document.getElementById("mySubstractNum2").value);
  console.log(hasilPembagian1);
  console.log(hasilPembagian2);
  document.getElementById("mySubstractHasilLabel").innerHTML = hasilPembagian1 / hasilPembagian2;
}