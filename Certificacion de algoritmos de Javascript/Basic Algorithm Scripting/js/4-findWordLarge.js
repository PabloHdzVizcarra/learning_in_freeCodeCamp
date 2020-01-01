'use strict'

/*
Encontrar la palabra más larga en una cadena

Devuelve la longitud de la palabra más larga en la oración provista.
Su respuesta debe ser un número.
Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/

function laPalabraMasLarga(str) {
    let strArray = str.split(" ");
    let final = 1;
    // console.log(strArray);

    for (let i = 0; i < strArray.length; i++) {
        // console.log(strArray[i]);
        if (final < strArray[i].length) {
            final = strArray[i].length;
        }
    }
    return final;
}

// console.log(laPalabraMasLarga("fueron muchas las ganadas pero esa vez de las playas no pudimos nisiquiera defendernos"));

//__________________________________________________________________________
let text = 'Aunque sea a escondidas';

function palabraMasLarga(str) {
    return str.split(" ")
        .reduce(function(x, y) {
            return Math.max(x, y.length);
        }, 0);
}

// console.log(palabraMasLarga(text));

//PRACTICANDO CALLBACKS_________________________________________________
function primero() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function segundo() {
    return console.log(2);
}

// console.log(primero());
// console.log(segundo());

//_________________________________________________________________________
function doHomework (subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    alert('Finished my homework');
}

// console.log(doHomework('math', alertFinished));
//___________________________________________________________
let texto = (texto, callback) => {
    console.log('Hola mundo' + ' ' +texto);
    callback();
}
let texto2 = () => console.log('Desde JavaScript');

// console.log(texto('Que tal', texto2));

//________________________________________________________________________

let sumaNumeros = (numero1, numero2) => {
    let sum = numero1 + numero2
    
    return sum;
}
let sumaNumerosValor = () => {
    let valor = parseInt(prompt("Ingresa el numero a sumar"));
    return valor;
}

// console.log(sumaNumeros(10, sumaNumerosValor()));

//_________________________________________________________________________

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

// console.log(findLongestWordLength("Hola como estas espero no del todo mal"));

//_________________________________________________________________________

let numeroDistro = [2, 5, 8, 10, 3];
var doubles = numeroDistro.map(function(x) {
    return x += x;
});

console.log(doubles);