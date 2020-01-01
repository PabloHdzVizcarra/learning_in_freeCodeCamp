'use strict'
/*
Devuelva la cadena provista con la primera letra de cada palabra en mayúscula. Asegúrese de que el resto de la palabra esté en minúsculas.

A los efectos de este ejercicio, también debe capitalizar palabras de conexión como "el" y "de".
*/

function titleCase(str) {
    let arr = str.split(" ");
    let arrUpper = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > 1 ) {
            arr[i] = arr[i].toLowerCase();
            let first = arr[i].charAt(0).toUpperCase();
            let second = arr[i].slice(1);
            let finalText = first + second; 
            arrUpper.push(finalText);
        }
    }
    return arrUpper.join(" ");
}

console.log(titleCase("What would you say"));




function primeraMayuscula (text) {
    return text.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());    
}
console.log(primeraMayuscula("what would you say"));