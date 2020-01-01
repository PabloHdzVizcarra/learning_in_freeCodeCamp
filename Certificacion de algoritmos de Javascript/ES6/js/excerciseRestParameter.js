'use strict'

const SIMPLE_SUM = (...nums) => {
    return nums.reduce((a, b) => a + b);
};


var array = [10, 20, 30, 40];

console.log(SIMPLE_SUM(10, 20, 30, 40));
//__________________________________________________________________
const SIMPLE_MULTIPLI = (...numsMultipli) => {
    return numsMultipli.reduce((a, b) => a * b);
}

console.log(SIMPLE_MULTIPLI(2, 2, 2));
//__________________________________________________________________

const array182 = [10, 20, 182, 1820];

const maximusNum = Math.max(...array182);

console.log(maximusNum);

var cadena1 = [1, 2, 3, 4, 5];

var cadena2 = [...cadena1];

console.log(cadena2);

//_________________DESTRUCTURING______________________________________

var temperaturas = {
    domingo : "caliente",
    lunes : "caluroso",
    martes: {
        mañana: "fria",
        "tarde" : [
            {
                clima: "fresco"
            }, 8, 9, 10, 11, 12

        ],
        noche : "fresca"
    },
    miercoles : "lluvia",
    jueves : "viento",
    viernes : "granizo",
    sabado : "nieve"
};

var dia = temperaturas["martes"];

var {domingo: dayDomingo, lunes, martes : noche} = temperaturas;
dayDomingo = "domingoo"



console.log(dayDomingo);

const dataUser = {
    name: "Pablo",
    edad: 27,
    sexo: "Hombre",
    altura: 1.76,
    direccion: "Ciencias politicas NTE"
};

const USER = {
    Pablo: {
        edad: 27,
        correo: "seguimos@gmail.mx"
    }
};

var {Pablo: {edad: userEdad, correo: userMail}} = USER;

userMail = "Perdiendo@hotmail.com"

console.log(userMail);

var {name: userName, direccion: actual } = dataUser;

userName = "Thiago";
actual = "Villas Universidad OTE"
console.log(dataUser["direccion"]);

var sumNumTwo = (a, b) => a + b;

function restNumAll(a, b, c, x) {
    
    if (x < 0){
        return "Termino de programa"
    }else {
        a - b;
        return restNumAll(a, b, c, x -1);
    }
}

console.log(restNumAll(10, 5, 2, 3));



console.log(sumNumTwo(10, 15));