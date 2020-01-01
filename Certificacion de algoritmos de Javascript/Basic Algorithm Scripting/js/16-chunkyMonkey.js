'use strict'
/*
Escriba una función que divida una matriz (primer argumento) en grupos de la longitud del tamaño (segundo argumento) y los devuelva como una matriz bidimensional.
*/

function chunkArrayInGroups(arr, size) {
    
    let temp = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (i % size !== size -1) {
            temp.push(arr[i]);
        }
        else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) result.push(temp);
    return result
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

var test = 3 % 2;
var exp = 2-1;
var complet = test !== exp;
console.log(exp);
console.log(test);
console.log(complet)

function checkNums (arr, size) {
    if (arr.length <= size) {
        return arr;
    } else {
        return [arr.slice(0, size)].concat(
            checkNums(arr.slice(size), size)
        );
    }
}

console.log(checkNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
