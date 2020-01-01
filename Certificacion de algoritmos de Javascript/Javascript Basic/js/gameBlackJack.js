'use strict'

/*

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Escribirás una función de conteo de cartas. Recibirá un parámetro de tarjeta, que puede ser un número o una cadena, e incrementará o disminuirá la variable de conteo global de acuerdo con el valor de la tarjeta (ver tabla). La función devolverá una cadena con el conteo actual y la cadena Apuesta si el conteo es positivo, o Hold si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Apuesta o Hold) deben estar separados por un solo espacio.

Example Output
-3 Hold
5 Bet

Hint
NO reinicie el conteo a 0 cuando el valor es 7, 8 o 9.
NO devuelva una matriz.
NO incluya comillas (simples o dobles) en la salida.


*/
var count = 0;

function cc(card) {
  // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    
    if(count > 0){
        return count + " Bet"
    }else{
        return count + " Hold"
    }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(5); cc('K'); console.log(cc('A'));

