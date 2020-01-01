'use strict'

// Definiendo mi primer funcion
function hello(){
    console.log("Hello World");
}

// hello();


//Funcion con parametros
function sleepChildren(fisrt, second){
   console.log(fisrt + " " +second);
}

// sleepChildren("Thiago", "Yara");

function sumAll (one, two, three){
    console.log(one+two+three)
}

// sumAll(10, 15, 10);


//Variables no definidas

function firstFunction(){
    var dog = "guau"
    console.log("Dogman");
}

// console.log(dog);


//Practice functions

function sumOne(number){
    return (number + 10) * 2;
}

var rest = sumOne(5);

// console.log(rest);



function sleep(clock){
    return clock +":00 PM" +  " Go to sleep my son";
}

var clockSleep = sleep(9);

function nigth (one){
    var sum = 1;
}

function sum2 (one){
    return one + 10
}

var resultSum2 = sum2(50);


function test (arr, item){
    arr.push(item);
    var removed = shift();
    return removed;

}

function trueFalse(text){
    if(text){
        return "Esto es verdad";
    }
    return "Animo no dejes de aprender";
}

function val (evalue){
    if (evalue == 10){
        return "Lo has descubierto"
    }
    return "Aun no lo logras"
}


function compare(num1, num2){
    if(num1 === num2){
        return "Son iguales"
    }
    return "Son diferentes"
}

// Operador de desigualdad cambia los tipos de datos
function city(num, num2){
    if(num != num2){
        return "Son diferentes"
    }
    return "son iguales"

}

// Operador de desigualdad estricto
function baby (nu, nu2){
    if(nu !== nu2){
        return "Son diferentes"
    }
    return "Son iguales"
}





function randomNumber(){
    return Math.random();
};




// console.log(Math.floor(Math.random()*10));



function randomRange(min, max){
     return Math.floor(Math.random()* (max - min + 1)) + min;
}



var myRange = randomRange(20, 3);



var test = Math.random()*26;
var test1 = Math.floor(Math.random()*26);
var test2 = Math.floor(Math.random()*(90 - 25 + 1)) + 25;
var test3 = Math.floor(Math.random()*(25 - 10 + 1) + 10);




function convertInt(number){
    return parseInt(100);
};

function convertBinnari(number){
    return parseInt(number, 2)
};




//__________________OPERADOR TERNARIO_______________________________

function equals(a, b){
    return a == b ? "Son iguales" : "No son iguales";
};





function checkNumber (num){
    return num == 0 ? "El numero es 0" :
     num < 0 ? "El numero es negativo" :
     "El numero es positivo";
};




function sumPlus (number){
    debugger
    if(number < 0){
        return "Termino"
    }
    console.log(number);
    return sumPlus(number -1);
};


console.log(sumPlus(5));