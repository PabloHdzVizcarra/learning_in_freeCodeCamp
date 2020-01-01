'use stric'
/*
JavaScript básico: búsqueda de perfil
Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una función lookUpProfile que toma el nombre y una propiedad (prop) como argumentos.

La función debe verificar si el nombre es el nombre real de un contacto real y la propiedad (prop) dada es una propiedad de ese contacto.

Si ambas son verdaderas, devuelva el "valor" de esa propiedad.

Si el nombre no corresponde a ningún contacto, devuelva "No existe ese contacto".

Si el accesorio no corresponde a ninguna propiedad válida de un contacto que coincida con el nombre, devuelva "No existe esa propiedad".
*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];



function lookUpProfile(name, prop){

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "no such property"
        }
    }
    return "no such contact";
};    



var childs = [
    {
        "nombre" : "Thiago",
        "edad": "4 años",
        "fecha": "26-10-15",
        "pastiempos": ["wii", "celular", "marioBross"]
    },
    {
        "nombre" : "Yara",
        "edad": "2 años",
        "fecha": "28-05-17",
        "pastiempos": ["celular", "pintar", "cantar"]
    },
    {
        "nombre" : "Andrea",
        "edad": "1 año",
        "fecha": "02-09-18",
        "pastiempos": ["dormir", "comer", "bailar"]
    }
];

// console.log(childs[1]["fecha"]);

function testChilds (nombre, propiedad){
    for (var i = 0; i < childs.length; i++){
       
        if (childs[i].nombre === nombre){
            return childs[i][propiedad] || "propiedad no encontrada";
        }
        
    };

    return "Nombre no encontrado"
};



console.log(testChilds("Andrea", "edad"));