'use strict'

/*
Secuencia de comandos de algoritmo básico: factorizar un número
Devuelve el factorial del entero proporcionado.
Si el entero se representa con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales que n.
Los factoriales a menudo se representan con la notación abreviada n!
Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120
Solo se proporcionarán a la función enteros mayores o iguales a cero.
Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/

function factoriza(num) {
    
    let result = 1;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        result *= i;
    }
    return result;

};

console.log(factoriza(5));

// function sumNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumNumbers(10, 5));

let cuentaFinal = (num) => {
    
    if (num === 0) return;
    console.log(num)
    cuentaFinal(num - 1);
    
}

// console.log(cuentaFinal(10));



