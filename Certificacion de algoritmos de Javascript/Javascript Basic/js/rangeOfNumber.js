'use stric'

//Use Recursion to Create a Range of Numbers

/*
Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver una matriz de enteros que comienza con un número representado por el parámetro startNum y termina con un número representado por el parámetro endNum. El número inicial siempre será menor o igual que el número final. Su función debe usar la recursión llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar para los casos en que startNum y endNum son iguales.
*/

var arrayEnter = [];

function rangeOfNumbers(startNum, endNum) {
  
  if(startNum <= endNum) {

    arrayEnter.push(startNum);
    rangeOfNumbers(startNum +1, endNum);
    

  }
  return arrayEnter;
};

console.log(rangeOfNumbers(1, 5));


