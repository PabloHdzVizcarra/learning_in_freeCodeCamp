'use strict'

var perro = "Firu";
console.log(perro);

var perro = "Pelusa";
console.clear();
console.log(perro);

var verdad = true;
var numero = 2.56;
var age = 25;
var gato = {
    color: "Blanco",
    tamaño: "Grande"
};

console.log(typeof(numero));

//_____Function Reduce____________________________________________



var listNumbers = [2,2,2,2,2];
var sumListNumber = listNumbers.reduce((previo, actual) => previo + actual);
console.log(sumListNumber);

//__________________________________________________________________

var noche = () => {
    return 'Hola Pablo'
};

var dia = noche;

console.log(noche());
console.log(typeof(dia()));

function zeroArray(m, n) {
    debugger
    // Creates a 2-D array with m rows and n columns of zeroes
let newArray = [];
let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
        for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
        }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
}
  
let matrix = zeroArray(3, 1);
console.log(matrix);
  