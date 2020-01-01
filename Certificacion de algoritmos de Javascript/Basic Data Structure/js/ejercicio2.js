'use strict'

/*
Hemos creado un objeto, users, con algunos usuarios y una función esEveryoneHere, a la que pasamos el objeto de los users como argumento. Termine de escribir esta función para que devuelva verdadero solo si el objeto de users contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan, como claves, y falso en caso contrario.
*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj, obj2, obj3, obj4) {
    // change code below this line
    let check;
    if (obj in users && obj2 in users && obj3 in users && obj4 in users) {
        check = true;
    } else {
        check = false;
    }
    return check;
    // change code above this line
}

console.log(isEveryoneHere('Jeff', 'Alan', 'Sarah', 'Ryan'));

function checkNamesUsers(obj) {
    let check;
    if ('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj) {
        check = true;
    } else {
        check = false;
    }
    return check;
}

console.log(checkNamesUsers(users));

// EXCERSISE 2___________________________________________________________
/*
Hemos definido una función countOnline que acepta un argumento (un objeto de usuario). Use una instrucción for ... in dentro de esta función para recorrer el objeto de usuario pasado a la función y devolver el número de usuarios cuya propiedad en línea se establece en verdadero. A continuación se muestra un ejemplo de un objeto de usuario que podría pasarse a countOnline. Cada usuario tendrá una propiedad en línea con un valor verdadero o falso.
*/

var names = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    },
    Lucero: {
        online: true
    }
}


function countOnline(obj) {
    // change code below this line
    let count = 0;

    for (let user in obj) {

        console.log(user);
        if (obj[user].online == true) {
            count++;
        }
    }

    return count;
    // change code above this line
}

console.log(countOnline(names));


var players = {
    mario: {
        life: 500,
        color: 'red'
    },
    luigi: {
        life: 400,
        color: 'green'
    },
    zelda: {
        life: 450,
        color: 'green'
    },
    ike: {
        life: 350,
        color: 'red'
    }
}

var playersInside = Object.keys(players);

console.log(playersInside);

function getPlayers(obj) {
    return Object.keys(obj);
}

const getPlayers2 = (obj) => Object.keys(obj);

console.log(getPlayers(players));
console.log(getPlayers2(players));