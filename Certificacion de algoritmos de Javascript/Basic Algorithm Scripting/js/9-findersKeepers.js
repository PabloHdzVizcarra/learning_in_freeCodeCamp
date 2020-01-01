'use strict'
/*
Cree una función que mire a través de una matriz (primer argumento) y devuelva el primer elemento de la matriz que pasa una prueba de verdad (segundo argumento). Si ningún elemento pasa la prueba, regrese indefinido.
*/

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            
            return num;
        } 
    }

    return undefined;
    
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


var moneyDays = [10, 20, 80, 60, 10];
function dineroSemana(array, func) {
    let mony = 0;
    for (let i = 0; i < array.length; i++) {
        mony = array[i]
        if(func(mony)) {
            return 'Este dia si llevaste suficiente dinero'
        }
    }

    return 'Necesitas mas dinero';
}

console.log(dineroSemana(moneyDays, dia => dia >= 20));




var dias = [1, 2, 3, 4];
var busqueda = dias.find(dato => dato > 3);
console.log(busqueda);