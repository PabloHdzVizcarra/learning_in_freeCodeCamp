'use strict'
/*
Te dan dos matrices y un índice.
Use los métodos de matriz slice y splice para copiar cada elemento de la primera matriz en la segunda matriz, en orden.
Comience insertando elementos en el índice n de la segunda matriz.
Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.
*/

function frankenSplice(arr1, arr2, n) {
    let result = [];
    let count = arr2.slice(0, n);
    console.log(count);
    result = count.concat(arr1);
    var cut = arr2.splice(n);
    result = result.concat(cut);
    

    return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//result 4, 1, 2, 3, 5, 6

