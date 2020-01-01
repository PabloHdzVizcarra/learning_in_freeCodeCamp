'use strict'
/*
Compruebe si una cadena (primer argumento, cadena) termina con la cadena de destino dada (segundo argumento, objetivo).

Este desafío se puede resolver con el método .endsWith (), que se introdujo en ES2015. Pero para el propósito de este desafío, nos gustaría que utilice uno de los métodos de subcadena de JavaScript.

Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/

function confirmFinal(str, target) {

    console.log(str.slice(str.length -target.length));
    return str.slice(str.length - target.length) === target;
    
    
    
}

console.log(confirmFinal("Bastian", "n"));

