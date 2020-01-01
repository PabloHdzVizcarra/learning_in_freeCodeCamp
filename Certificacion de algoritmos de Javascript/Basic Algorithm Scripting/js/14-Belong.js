'use strict'
/*
Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns ([1,2,3,4], 1.5) debería devolver 1 porque es mayor que 1 (índice 0), pero menor que 2 (índice 1).

Del mismo modo, getIndexToIns ([20,3,5], 19) debería devolver 2 porque una vez que se haya ordenado la matriz, se verá como [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 ( índice 1).

Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/

function getIndexToIns(arr, num) {
    arr.push(num);
    console.log(arr.sort((a, b) => a - b));
    console.log(arr.indexOf(num));
    return arr.sort((a, b) => a - b).indexOf(num);
}

console.log(getIndexToIns([40, 60, 10, 5, 80, 90, 30], 50));