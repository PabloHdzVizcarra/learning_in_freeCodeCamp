/*
Excersise with 
*/

// const GETNAME = () => {
//     return prompt("Ingrese un nombre")
// };




// var array1 = [];
// var array2 = [];
// var array3 = [];


// function getUsers (name, repeat) {

//     name = GETNAME();


//     if (repeat === 0) {
//         return "Finalizado"
//     } else if ( repeat !== 0) {

//         array1.push(name);
//         getUsers(name, repeat -1);

//     }
//     return array1;
// };

// console.log(getUsers("", 3));


// const NAME_NUM = () =>{
//     for(let i = 0; i < array1.length; i++){
//         array1[i] = i + 1+ " " + array1[i];
//     };
//     return array1;
// };


// console.log(NAME_NUM());
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var animals = ["Firu", "Tom", "Pelusa", "Daisy", "Travis"];



var [a, b, , , c] = animals;




var [first, second, ...rest] = numbers;



function removeFirstTwo(array) {
    let [a, b, ...rest] = array;

    return rest
};

function returnFirstTwo(numeros) {
    [a, b] = numeros;
    return "El primer elemento es: " + a + " Y el segundo es: " + b;
}



// for (var i = 0; i < removeFirstTwo(numbers).length; i++){
//     console.log("El numero " + i + " es " + removeFirstTwo(numbers)[i]);
// };


var datosPablo = {
    name: "Pablo",
    edad: 27,
    correo: "seguimos@gmail.mx",
    sexo: "Masculino"
};

const dataThiago = {
    nombre: "Thiago",
    numero: "Primero",
    mes: "Octubre"
};





const actualizaDatos = ({
    name,
    edad
}) => {
    name = prompt("Ingresa el nuevo nombre")
    return {
        datosPablo
    };

};




const ingresaDato = () => {
    let dato = prompt("Ingresa el dato")

    return dato;
};

var m = 100;
var n = 120;

// console.log(`La suma de 100 + 120 es ${m + n} y \n su multiplicacion por 2 es ${2*(m + n)}.`);


var u = 5;
// console.log(`la contraseña es ${(ingresaDato() === 'correcto' ? 'Contraseña correcta' : 'Contraseña incorrecta')}.`);


var detalles = {
    name: "Prueba",
    errores: ["Dañado", "Defectuoso", "No aplica"]
};


const muestraDetalles = (element) => {

    var muestraDatosErrores = [];
    for (var i = 0; i < element.errores.length; i++) {
        muestraDatosErrores.push(`<li> ${element.errores[i]} </li>`);
        console.log(`<li> ${element.errores[i]} </li>`)
    }

    return muestraDatosErrores;
};


//______________________________________________________________________

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // change code below this line

    const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line

    return resultDisplayArray;
};

const resultDisplayArray = makeList(result.failure);


//______________________________________________________________________
var number2 = [10, 20, 30];

function creatList(value) {

    const numeros = value.map(object => `The value is ${object}.`);
    return numeros;
};



//_______________________________________________________________________
//PRACTICE  FUNCTION RECURSIVE
function bucleFunc(value, num) {
    if (num <= 5) {
        console.log(value);
        bucleFunc(value, num + 1);
    }

    return 'Termino de ejercicio'
};

function numPlus() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }

    return 'Termino de ejercicio 1'
};

// console.log(bucleFunc(numPlus(), 1));

//___________________________________________________________________
// FUNCTION CREATE OBJECTS

const createObjects = (name, gender, age) => {
    return {
        name,
        gender,
        age
    };
};





var datosPersonalesLucero = createObjects("Lucero", "mujer", 24);

//___________________________________________________________________

// THIS

const personPablo = {
    name: "Pablo",
    diHola() {
        return `Hola! mi nombre es ${this.name}.`;
    }

};





/*
const bicycle = {
  gear: 2,
  setGear (newGear) {
    'use strict'
    this.gear = newGear;
  }  
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
*/

const xbox = {
    games: 3,
    suscripcion: 2,
    setGames(newGames) {
        this.suscripcion = newGames;
    }
}

xbox.games = 10;
// console.log(xbox.games);

xbox["suscripcion"] = "Cancelado";
// console.log(xbox.suscripcion);

//________________________________________________________________

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeus = new SpaceShuttle('Jupiter');


class PerroSucio {
    constructor(fueraDeCasa) {
        this.fueraDeCasa = fueraDeCasa;
    }
}

const firu = new PerroSucio('Afuera');

// ---console.log(firu);


//_________________________________________________________________
// GETTERS AND SETTERS



class Book {



    constructor(author) {
        this._author = author;
    }

    // getter
    get writer() {
        return this._author;
    }

    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}


const lol = new Book('anonymous');
// ---console.log(lol.writer);  // anonymous

lol.writer = 'wut';
// ---console.log(lol.writer);  // wut

const terror = new Book('will smith');
// ---console.log(terror.writer);


//___________________________________________________________________

class TypeBook {
    constructor(type) {
        this._type = type;
    }

    get fear() {
        return this._type;
    }

    set fear(value) {
        this._type = value;

    }

}

const fear = new TypeBook('The house of dead');
TypeBook.fear = "La noche del demonio"
// ---console.log(TypeBook.fear);



//__________________________________________________________________

class tv {
    constructor(marca, canales, hdmi) {
        this._marca = marca;
        this._canales = canales;
        this._hdmi = hdmi;
        this._modelo = "buena marca";
        this._marcaModelo = function () {
            return this._marca + " " + this._modelo;
        }
    }

    print() {
        console.log(`La marca es ${this._marca} y los canales son ${this._canales}.`);
    }

}

var rca = new tv("RCA", 80, "no");
var samsumg = new tv("Samsumg", 100, "si");
var lg = new tv("LG", 50, "si")

// console.log(rca);
// console.log(rca._marcaModelo());

// console.log(samsumg);
// console.log(samsumg._marcaModelo());

// console.log(lg);
// console.log(lg._marcaModelo());
//__________________PRACTICE CONSTRCUTOR_____________________________

const arch = {};

arch.distro = "ArchLinux";
arch.deskpot = "KDE";
arch.swap = "On"
arch.miConfiguracion = config;

function config() {
    return arch.distro + " " + arch.deskpot;
}

// ---console.log(`Mi distribucion preferida es ${arch.distro} con el escritorio ${arch.deskpot} y tiene la swap ${arch.swap}.`);

// ---console.log("Yo uso " + arch.miConfiguracion());

//______________________GETTERS and SETTERS________________________

var userPablo = {
    name: "Pablo",
    surname: "Hernandez",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }

};

userPablo.fullName = "Thiago Facio";

// ---console.log(userPablo.fullName);

//_______________________.SPLIT___________________________________

const dividirCadena = (cadenaDividir, separador) => {
    var arrayCadena = cadenaDividir.split(separador);
    console.log(`La cadena original es: ${cadenaDividir}.`);
    console.log(`El separador es ${separador} .`);
    console.log(`El array tiene ${arrayCadena.length} palabras.`);

    for (var i = 0; i < arrayCadena.length; i++) {
        console.log(`${arrayCadena[i]} - `);
    }

    return "Finalizado";

}

var cadenaVerso = "Fueron muchas las batallas pero esa vez de las playas no pudimos ni siquiera defendernos";
var meses = "enero,febrero,marzo,abril,mayo,junio";
var separador = " ";
var coma = ",";

// console.log(dividirCadena(meses, coma));

//________________________EXCERCISE FARENHEIT________________________

class Thermostat {

    constructor(Fahrenheit) {

        this._Fahrenheit = Fahrenheit;
    }

    get temperature() {
        return `${(5/9) * (this._Fahrenheit -32)} Celcius`
    }

    set temperature(grado) {
        this._Fahrenheit = (grado * 9.0) / 5 + 32;

    }
}

var thermos = new Thermostat(76);
Thermostat.temperature = 40;
// ---console.log(Thermostat.temperature);

//_______________________EXCERCISE CONSTRUCTOR________________________

class manjaro {
    constructor(distroRam) {
        this._distroRam = distroRam;
    }

    get ram() {
        return `La ram que consume tu distro es: ${this._distroRam}`;
    }

    set ram(consumoRamAplicacion) {
        // this._distroRam = consumoRamAplicacion;

        return `La ram original con la aplicacion Blender es: ${this._distroRam + consumoRamAplicacion }`

    }
}


const ramStart = new manjaro(680);

manjaro.ram = 150;

// ---console.log(manjaro.ram);

//__________________Promises_____________________________________________

function sumAndMore(a, b) {
    return a + b;
}

console.log(sumAndMore(10, 5));



var dogMan = new Promise((resolve, reject) => {
    let dogWorld = true;

    if (dogWorld) {
        resolve("Promesa con exito")
    } else {
        reject("Promisa con Error")
    }
});


console.log(dogMan);

//____________________________________________________

const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer = true;

    if (responseFromServer) {
        makeServerRequest.then(result => {
            console.log(result)
        })
    } else {
        reject("Data not received");
    }
});

console.log(makeServerRequest);