'use strict'
/*
Para simplificar, la matriz provista contendrá exactamente 4 sub-matrices.
Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro con la sintaxis de matriz arr [i].
Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/


//_______INTENTO 1_________________________________________________________
function largestOfFour(arr) {

    let resultArray = [];
    let array1 = [];
    let array2 = [];
    let array3 = [];
    let array4 = [];

    for (let i = 0; i < arr[0].length; i++){

        if(arr[0][i] >= array1) {
            array1 = arr[0][i];
        }
    };

    for (let i = 0; i < arr[1].length; i++){

        if(arr[1][i] >= array2) {
            array2 = arr[1][i];
        }
    }

    for (let i = 0; i < arr[2].length; i++){

        if(arr[2][i] >= array3) {
            array3 = arr[2][i];
        }
    }

    for (let i = 0; i < arr[3].length; i++){
        if (arr[3][i] < 0) {
            if(arr[3][i] < array4) {
                array4 = arr[3][i];
            }
        }
        if(arr[3][i] >= array4) {
            array4 = arr[3][i];
        }
    }

    resultArray = resultArray.concat(array1, array2, array3, array4);

    return resultArray;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-10, -100, -15, -26]]));

//______RESPUESTA 1______________________________________________________

function palabraLarga(arr) {
    
    let result = [];
    for (let n = 0; n < arr.length; n++) {
        var numeroLargo = arr[n][0];
        // console.log(numeroLargo);
        for (let sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > numeroLargo) {
                numeroLargo = arr[n][sb];
            }
        }
        result[n] = numeroLargo;
    }

    return result;
}

console.log(palabraLarga([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-10, -100, -15, -26]]));

//______RESPUESTA 2_______________________________________________________

function numeroGrande(array) {
    return array.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

console.log(numeroGrande([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-10, -100, -15, -26]]));

var dinero = 13;

function checkMoney(money) {
    return (money > 100 ? 'rico' : 'pobre');
}

console.log(checkMoney(13));