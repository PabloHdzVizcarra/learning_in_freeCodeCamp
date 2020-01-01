'use strict'

var array = [2,2,2,2,2,2];
var total = 0;

for (var i = 0; i < array.length; i++){
    total += array[i];
};




var doArray = [3,3,3];
var sumDoArray = 0;


for (var i = 0; i < doArray.length; i++){
    sumDoArray += doArray[i];
};


/*
Modifique la función multiplyAll para que multiplique la variable del producto por cada número en los subconjuntos de arr
*/

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){

            console.log(arr[i]);
            product  *= arr[i][j];
        };
    };
    
    return product;
};
  
  
// console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


var listMovies = [];

function getMovies (movie){
    listMovies[i] = prompt("Ingresa el nombre de tu pelicula");

}

// for (var i = 0; i < 5; i++){
//     getMovies();    
// }


/*
JavaScript básico: Reemplazar bucles usando recursividad
La recursión es el concepto de que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comience por pensar en la siguiente tarea: multiplique los elementos de 0 a n inclusive en una matriz para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:
*/

/*
Sin embargo, observe que multiplica (arr, n) == multiplica (arr, n - 1) * arr [n]. Eso significa que puede reescribir multiplicarse en términos de sí mismo y nunca necesitará usar un bucle.
*/
function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
}



function sumNumbers(arr, n) {
    if (n <= 0) {
        return arr[0];
    } else {
        return sumNumbers(arr, n -1) + arr[n];
    }
}


console.log(sumNumbers([2,2,2,2,2], 4));

function foo(i) {
    if (i < 0)
        return;

    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}

console.log(foo(4));