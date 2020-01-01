'use strict'
/*
Truncar una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con un ... final.
*/

function truncateString(str, num) {

    if (num >= str.length) {
        return str;
    } else {
        let text = ["..."];
        let text1 = str.slice(0, num);
        text.unshift(text1);
        return text.join("");
    }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function revisaString(str, num) {
    return num >= str.length ? str : str.slice(0, num) + "...";
}

console.log(revisaString("La vez de las playas", 6));