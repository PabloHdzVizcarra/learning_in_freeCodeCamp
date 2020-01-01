'use strict'

/*
Hemos definido una variable llamada yourArray. Complete la declaración asignando una matriz de al menos 5 elementos de longitud a la variable yourArray. Su matriz debe contener al menos una cadena, un número y un booleano
*/

var yourArray = ["Primero", 182, true, "Cuarto", 2019];

// console.log(`tu matriz yourArray tiene ${yourArray.length} elementos.`);
// console.log(yourArray);


/*__________________________________________________________________________
Hemos definido una función, MixedNumbers, a la que le estamos pasando una matriz como argumento. Modifique la función usando push () y unshift () para agregar 'I', 2, 'three' al comienzo de la matriz y 7, 'VIII', 9 al final para que la matriz devuelta contenga representaciones de los números 1-9 en orden.
*/

function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three");
  arr.push(7, 'VIII, 9');
  // change code above this line
  return arr;
}

// do not change code below this line
// console.log(mixedNumbers(['IV', 5, 'six']));

/*
Eliminando elementos de un array metodos pop() y shift()
*/

function KDE(array) {
  let deskpot = array.shift();
  let base = array.pop();

  return `KDe neon tiene de escritorio ${deskpot} y su base es ${base}.`
}

var kdeNeon = ["KDE", "Ubuntu LTS", "Linux"];

// console.log(KDE(kdeNeon));

/*
Eliminando elemento sd eun array con splice() y asignando elementos al array en las posiciones donde se eliminan los anteriores
*/

var bestKde = ["Kubuntu", "KDE Neon", "Chakra", "Fedora", "OpenSuse"];
var indexStart = 2;
var elementErase = 2;
var bestKde2 = bestKde.splice(indexStart, elementErase, "Ubuntu", "Manjaro");
// console.log(bestKde);

//Excersise 2

var bestUbuntuDistro = ["Linux Mint", "Elementary Os", "Zorin Os", "Ubuntu Budgie", "KDE Neon", "Deepin", "Xubuntu"];
var bestUbuntuDistro2 = bestUbuntuDistro.splice(5, 2, "Mac Os", "Lubuntu");

// console.log(bestUbuntuDistro);

/*
Copiando elemento de un array con el metodo slice(), pero sin modificar el array del que tomamos los valores
*/

var deskpotGnome = ["Gnome", "KDE", "LXDE", "XFCE", "Cinnamon", "Budgie"];
var getBestUbuntuDistro = deskpotGnome.slice(2, 4);
// console.log(getBestUbuntuDistro);


/*
EJERCICIO
Hemos definido una función, copyMachine, que toma arr (una matriz) y num (un número) como argumentos. Se supone que la función devuelve una nueva matriz compuesta de copias numéricas de arr. Hemos hecho la mayor parte del trabajo por usted, pero aún no funciona del todo bien. Modifique la función usando la sintaxis de propagación para que funcione correctamente (pista: ¡otro método que ya hemos cubierto podría ser útil aquí!). 
*/

function maquinaCopiado(arr, num) {

  let newArray = [];

  while (num >= 1) {
    let newArray2 = [...arr];
    newArray.push(newArray2);
    num--;
  }

  return newArray;
}

// console.log(maquinaCopiado([true, false, true], 2));

//Combine Arrays with the Spread Operator
//_______________________________________________________________________

var arhcLinux = ["Arch Linux", "Arco Linux", "Manjaro"];

var moreArchLinux = ["Blues", "Archbamg", ...arhcLinux, "Chakra"];

// console.log(moreArchLinux);

/*
function combineArrays(array) {

  let arrayArch = [];
  let countArray = parseInt(prompt("Ingresa el numero de distros que te gustaria agregar"));

  for (let i = 0; i < countArray; i++) {
    let getDistro = prompt("Ingresa tu distro");
    arrayArch.push(getDistro);

  }

  
  return `Tu lista de distros es ${arrayArch} y con los valores ingresados anteriormente seria ${combined}`

}

console.log(combineArrays(["Manjaro", "Arch Linux"]));
*/

function quickCheck(arr, elem) {
  // change code below this line  
  let prueba = arr.indexOf(elem);
  let result;
  if (prueba != -1) {
    console.log("El elemento existe en la matriz");
  } else {
    console.log("El elemento no existe en la matriz");
  }

  return "";
  // change code above this line
}

// change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'sidra'));

//________________EXCERSISE____________________________________________
/*
Hemos definido una función, filterArray, que toma arr, una matriz anidada y elem como argumentos, y devuelve una nueva matriz. elem representa un elemento que puede o no estar presente en una o más de las matrices anidadas dentro de arr. Modifique la función, utilizando un bucle for, para devolver una versión filtrada de la matriz aprobada de modo que se haya eliminado cualquier matriz anidada dentro de un arr que contenga elem.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
    
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 1));

function pruebaNombres(array, name) {
  let lista = [];
  let lista2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(name) == -1) {
      lista.push(array[i]);
    } else {
      lista2.push(array[i]);
    }
    
  }
  // console.log(lista2);
  return lista;
}

// console.log(pruebaNombres([["pablo, thiago, lucero"],["fernando", "yara", "andrea"],['pablo', 'yara', 'thiago']], 'andrea'));


var libre = [1,3,45,100,182];
// console.log(libre)
// console.log(libre[2]);

//_____________________MATRICES ANIDADAS__________________________________

const distroLinux = [
  ['Fedora'],
  [
    ['Ubuntu'],['Xubuntu']
  ],
  [
    [
      ['Debian'],['Mx Linux']
    ]
  ],
  [
    [
      [
        ['Arch Linux']
      ]
    ]
  ],
  [
    [
      [
        [
          
          ['Manjaro'] 
          
        ]
      ],
      ['Bluez']
    ]
  ]
];

// console.log(distroLinux[4][0][1]);

const bestDistro = [
  [
    ['Debian'], ['Segundo Nivel']
  ],
  [
    [
      [
        ['Fedora'], ['Tercer Nivel']
      ],
      [
        [
          ['OpenSuse'], ['Cuarto Nivel']
        ],
        [
          [
            ['Arch Linux'], ['Quinto Nivel']
          ]
        ]
      ]
    ]
  ]
];

// console.log(bestDistro[1][0][1][1][0][0]);

const sistemOS = [
  ['primero'],
  [
    ['segundo'],
    [
      ['Tercero']
    ],
    [
      [
        ['Cuarto']
      ],
      [
        [
          ['Quinto']
        ]
      ]
    ]
  ]
];

// console.log(sistemOS[1][2][1][0][0]);

const ubuntu = [
  ['Primero'],
  [
    ['Segundo']
  ],
  [
    [
      ['Tercero']
    ],
    [
      [
        ['Cuarto']
      ],
      [
        [
          ['Quinto']
        ]
      ]
    ]
  ]
];

// console.log(ubuntu[2][1][1][0][0]);

//___________________________________________________________________

var userStatus = {
  username: 'Pablo Hernandez',
  followers: 120,
  points: 550,
  projects: 15
};

var userNameUser = userStatus.username;
var userNameUser = 'Lucero Facio'

// console.log(userNameUser);

// MODIFICANDO PROPIEDAES DE OBJETOS ANIDADOS DENTRO DE OBJETOS______

const player1 = {
  name: 'thiago',
  age: 4,
  month: 'october',
  year: 2015,
  school: {
    name: 'Marcos',
    addres: 'La Joyita',
    yearStudy: 1
  }
};


player1['school']['yearStudy'] = 2;

// console.log(player1.school.yearStudy);

//___________________________________________________________________

const distroUbuntu = {
  ubuntu: 'Gnome',
  xubuntu: 'XFCE',
  lubuntu: 'LXDE',
  kubuntu: 'KDE',
  ubuntuMate: 'Mate',
  ubuntuBudgie: 'Budgie',
  archLinux: {
    manjaro: 'XFCE',
    arcoLinux: 'XFCE',
    bluez: 'KDE'
  }
};

function checkDeskpotUbuntu (distro) {
  let result = distroUbuntu[distro];
  let check;
  if (result.length >= 4) {
    check = 'verdadero';
  } else {
    check = 'falso';
  }
  console.log(check);
  return result
}

delete distroUbuntu.lubuntu;
var checkDistro = 'manjaro' in distroUbuntu.archLinux;
var checkDistro2 = distroUbuntu.archLinux.hasOwnProperty('budgie');

console.log(distroUbuntu);
console.log(checkDeskpotUbuntu('kubuntu'));
console.log(checkDistro);
console.log(checkDistro2);