'use strict'

// Practicando con el operador -Mayor que-


if(3 > 2){
    ("El numero de la izquierda es mayor que el de la derecha");
    
}else{
    ("El numero de la derecha es mayor que el de la izquierda")
}




function hi(nom){
    if(nom > 10){
        return "es mayor que 10"
    }
    if(nom >= 10){
        return "Son iguales"
    }
    return "no es mayor"
}

// console.log(hi(22));


// var dinero = [prompt("Ingresa tu dinero del dia lunes"), 30, 50, 100, 10];

function cuantoDinero(dinero){
    if(dinero <= 20){
        return "Tienes algo de dinero"
    }
    else if(dinero <= 50){
        return "Tienes una buena cantidad de dinero"
    }
    else if(dinero >= 100){
        return "tienes bastante dinero"
    }else{

    return "No tienes dinero"
    }
}

function probandOperadorMenor(one){
    if(one < 10){
        return "Es menor que 10";
    }
    else if(one < 50){
        return "Es menor que 50";
    }
    else{
        return "Es menor que 100";    
    }
}

// ________________________ Operador &&  __________________________


function operatorAnd(value){
    if(value <= 50 && value >= 25){
        return "El numero esta dentro del rango"

    }
    return "El numero no esta dentro del rango"

}



// ___________________________Operato OR____________________________

function operatorOR(num){
    if(num < 20 || num > 50){
        return "Pasaste la prueba";
    }
    return "No pasaste la prueba";
}


// ___________________________switch__________________________________

function caseInSwitch(val){
    var answer = "";

    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}


/*
Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/

function switchOfStuff(val){
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer
}

/*
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"
*/

function pruebaSwitch2(value){
    var answer = "";

    switch(value){

        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;  
    }
    return answer;

}

function isLess(a, b) {
    // Fix this code
    return a === b || a < b;
  }
  
  // Change these values to test
  console.log(isLess(10, 15));