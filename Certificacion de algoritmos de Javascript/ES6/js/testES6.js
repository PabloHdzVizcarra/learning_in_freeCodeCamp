'use stric'

var hola = "hola";
var hola = "de nuevo"



function pass (){
    let day = "Code";
    let today = day + " All Days"

    return today;
}



var printTwo;

for (var i = 0; i < 3; i++){
    
    if (i === 2){
        printTwo = function(){
            return i;
        };
    }
}



let printTwoNum;

for (let i = 0; i < 3; i++){
    if (i === 2){
        printTwoNum = function(){
            return i;
        };
    }
}


function arroe (string){
    
    const TEXT = string + "Esto es genial";
    for (let i = 0; i < string.length; i += 2){
       return console.log(TEXT);
    }
}


//________________________________________________________________

const s = [5, 7, 2];
function editInPlace(num) {
    
  'use strict';
  // change code below this line
    if (num <= 0){
        s[num] = 5;
        editInPlace(num +1);
    } else if (num <= 1){
        s[num] = 7;
        editInPlace(num +1);
    } else if (num <= 2){
        s[num] = 2;
        editInPlace(num +1);
    }

    return s;

}
// console.log(editInPlace(0));

//___________________________________________________________________

var saludo = () => "Hola Mundo";


const magic = () => {
    "use strict";
    return new Date();
};

// console.log(magic);

//____________________________________________________________________


// const multipli = (number, multiplo) => number*multiplo;



// var movie = {
//     "pelicula": [
//         prompt("Ingresa el nombre de tu pelicula"),
//         prompt("Ingresa el nombre de tu pelicula")
//     ],
//     "año" : [
//         parseInt(prompt("Ingresa el año de la pelicula uno")),
//         parseInt(prompt("Ingresa el año de la pelicula uno"))
//     ] 
// };

// var movie1 = movie.pelicula[0];
// var movie2 = movie.pelicula[1];
// var year1 = movie.año[0];
// var year2 = movie.año[1];



// const readOne = (movie, year) => movie + " "+year;

// console.log(readOne(movie1, year1));

//________________________________________________________________________
/*
Modifique la suma de funciones usando el parámetro rest de tal manera que la suma de funciones pueda tomar cualquier número de argumentos y devolver su suma.
*/

const sum = (...dog) => {
    return dog.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));





//_______________________________________________________________________
const multipli = (...numbers) => {
    return numbers[0] + numbers[1];
}

function textoNumber (a, b, c, d, e, f, g ){
    return arguments[3];
};


var sumPlus = () => "Es hora de jugar";
var sumPlus2 = (x, y, z = 1) => x + y + z; 


//____________________________________________________________________

const restArray = (...num) => {
    
    return num.reduce((a, b)=> a + b, 15);
}

// console.log(restArray(1, 2, 3, 4));

//____________________________________________________________________

const direccion = (...datos) => {
    return datos.reduce((a, b) => a + b);
}

// console.log(direccion("Pablo Hernandez", " Ciencias politicas", " 9449"));

//___________________________________________________________________



//____________________________________________________________________