'use strict'
/*
Hemos definido una función llamada cuenta regresiva con dos parámetros. La función debe tomar una matriz en el parámetro myArray y agregar los números del n al 1 en función del parámetro n.
Por ejemplo, llamar a esta función con n = 5 rellenará la matriz con los números [5, 4, 3, 2, 1] dentro de ella. Su función debe usar la recursión llamándose a sí misma y no debe usar bucles de ningún tipo.
*/


//Only change code below this line

var myArray = [];

function countdown(myArray, n){
  
  if (n >= 1){
    myArray.push(n);
    countdown(myArray, n -1);

  }

    return myArray;
};

console.log(countdown(myArray, 10));