'use stric'

/*
JavaScript básico: recopilación de registros
Te dan un objeto JSON que representa una parte de tu colección de álbumes musicales. Cada álbum tiene varias propiedades y un número de identificación único como clave. No todos los álbumes tienen información completa.

Escriba una función que tome la identificación de un álbum (como 2548), un accesorio de propiedad (como "artista" o "pistas") y un valor (como "Adicto al amor") para modificar los datos de esta colección.

Si el prop no es "tracks" y el value no está vacío (""), actualice o establezca el value para la propiedad del álbum de grabación.

Su función siempre debe devolver el objeto de colección completo.

Existen varias reglas para manejar datos incompletos:

Si prop es "tracks" pero el álbum no tiene una propiedad "tracks", cree una matriz vacía antes de agregar el nuevo valor a la propiedad correspondiente del álbum.

Si el accesorio es "tracks" y el value no está vacío (""), inserte el valor al final de la matriz de pistas existente del álbum.

Si el value está vacío (""), elimine la propiedad de utilería dada del álbum.

Consejos
Utilice la notación de corchetes al acceder a las propiedades de los objetos con variables.

Push es un método de matriz sobre el que puede leer en Mozilla Developer Network.

Puede consultar la Manipulación de objetos complejos que presenta la notación de objetos JavaScript (JSON) para obtener una actualización.
*/

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};




  
  // Only change code below this line
function updateRecords(id, prop, value) {
  if (value === ""){
    delete collection[id][prop];
  } else if( prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
    return collection;
};



console.log(updateRecords(2468, "tracks", "La vez de las playas")); 


