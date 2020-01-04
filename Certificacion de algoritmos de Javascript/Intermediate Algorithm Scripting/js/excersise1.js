'use strict'

/*
Le pasaremos una serie de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre vendrá primero.

Por ejemplo, sumAll ([4,1]) debería devolver 10 porque la suma de todos los números entre 1 y 4 (ambos inclusive) es 10.

Recuerde usar Leer-Buscar-Preguntar si se atasca. Intenta emparejar el programa. Escribe tu propio código.
*/

function sumAll(array) {
    
    let localArray = array;
    localArray = localArray.sort((a, b) => a - b);
    let sumAll = 0;
    for (let i = localArray[0]; i <= localArray[1]; i++) {
        console.log(i);
        sumAll += i;
    }
    return sumAll;
}

console.log(sumAll([4, 1]));
