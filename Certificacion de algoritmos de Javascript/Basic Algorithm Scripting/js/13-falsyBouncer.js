'use strict'
/*
Eliminar todos los valores falsos de una matriz.
Los valores de false en JavaScript son false, null, 0, "", undefined y NaN.
Sugerencia: intente convertir cada valor a un valor booleano.
*/

function bouncer(arr) {
    let localArray = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            localArray.push(arr[i]);
        }
    }
    return localArray;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

//_____________________________________________________________________

function checkFalse(arr) {
    return arr.filter(Boolean);
}

console.log(checkFalse([0, 10, 20, "", "Hola", undefined, null, NaN]));

const distroLinux = ['Manjaro', "Ubuntu", ]