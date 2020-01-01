'use strict'
/*
Devuelve verdadero si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

Por ejemplo, ["hola", "Hola"], debería devolver verdadero porque todas las letras en la segunda cadena están presentes en la primera, ignorando mayúsculas y minúsculas.

Los argumentos ["hola", "hola"] deberían devolver falso porque la cadena "hola" no contiene una "y".

Por último, ["Alien", "line"], debería devolver verdadero porque todas las letras en "line" están presentes en "Alien".
*/

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) {
            return false;
        }
    }

    return true;
}

console.log(mutation(["Hello", "hey"]));

//_______________________________________________________________________
var checkVocal = (string) => {
    let vocalA = "playas";
    let test = string.indexOf(vocalA);
    if (test < 0) {
        return 'Tu palabra no coincide';
    }
    return 'Hello'
}

console.log(checkVocal('la vez de las'));
//_______________________________________________________________________

function checkStatus (arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function(letter) {
            return arr[0].toLowerCase().indexOf(letter) != -1;
        });
}

console.log(checkStatus(["Alien", "line"]))

var distros = ['Fedora', 'Ubuntu', 'ArchLinux'];
var favorita = distros[0].split("");
console.log(favorita);



var ram = [4, 4, 2];
const checkRam = (arr) => {
    
    return arr.every(function(dato) {
        return dato >= 2
    });
}

console.log(checkRam(ram));