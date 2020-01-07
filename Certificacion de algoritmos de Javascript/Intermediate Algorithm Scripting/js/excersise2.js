'use strict'
/*
Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo se encuentre en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelve la diferencia simétrica de las dos matrices.

Recuerde usar Leer-Buscar-Preguntar si se atasca. Intenta emparejar el programa. Escribe tu propio código.

Nota
Puede devolver la matriz con sus elementos en cualquier orden.
*/

function checkArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter((item) => !arr1.includes(item) || !arr2.includes(item));
    
}
console.log(checkArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));



function checkParseItem(array1, array2) {
    return array1
        .concat(array2)
        .filter((item) =>  !array1.includes(item) || !array2.includes(item));
}
console.log(checkParseItem(['Thiago', 'Yara', 'Andrea'], ['Nicole', 'Thiago']));



function checkArray2(arr1, arr2) {
    let localArray = [];
    function onlyInFirts(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                localArray.push(first[i]);
            }
        }
    }

    onlyInFirts(arr1, arr2);
    onlyInFirts(arr2, arr1);

    return localArray;
}
console.log(checkArray2([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
