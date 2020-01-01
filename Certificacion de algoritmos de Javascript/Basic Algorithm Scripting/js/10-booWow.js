'use strict'
/*
Compruebe si un valor está clasificado como una primitiva booleana. Devuelve verdadero o falso.
Las primitivas booleanas son verdaderas y falsas.
*/

function booWho(bool) {
    let data = typeof(bool);
    console.log(data);
    if (typeof(bool) == "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(booWho([1, 2, 3, 4]));




let xio = new Boolean(false);
if(xio) {
    // console.log('error');
}

let daz = false;
if(daz) {
    // console.log('error')
} else {
    // console.log('pass')
}