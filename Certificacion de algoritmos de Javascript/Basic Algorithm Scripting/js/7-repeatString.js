'use strict'
/*
Repita una cadena dada str (primer argumento) para num veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo.
*/

function repeatStringNumTimes(str, num) {
    let text = [];
    if (num >= 1) {
        for (let i = 0; i < num; i++) {
            text.push(str);
        }

    } else {
        return "";
    }

    return text.join('');
    
}

console.log(repeatStringNumTimes('abc', 3));

//_______USANDO RECURSIVIDAD__________________________________________
function repeat(str, num) {

    if (num == 0) {
        return str;
    } else {
        return str + repeat(str, num -1);
    }
}

console.log(repeat("La vez de las playas", 10));