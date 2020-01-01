'use strict'

// ROAD FINAL___________________________________________________________
/*
Eche un vistazo al objeto que proporcionamos en el editor de código. El objeto de usuario contiene tres claves. La clave de datos contiene cinco claves, una de las cuales contiene una serie de amigos. A partir de esto, puede ver cuán flexibles son los objetos como estructuras de datos. Comenzamos a escribir una función addFriend. Termine de escribirlo para que tome un objeto de usuario y agregue el nombre del argumento amigo a la matriz almacenada en user.data.friends y devuelva esa matriz.
*/

var user = {
    name: "Kenneth",
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend (userObj, friend) {
    
    userObj.data.friends.push(friend);
    return userObj.data.friends; 
}

console.log(addFriend(user, 'Pete'));










