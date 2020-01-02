'use script'

const prepareCoffe = () => 'coffeMilk';
const getCoffe = (numCoffes) => {
    const coffeCups = [];
    for (let cups = 1; cups <= numCoffes; cups += 1) {
        const coffeCup = prepareCoffe();
        coffeCups.push(coffeCup);
    }
    return coffeCups;
};

// console.log(getCoffe(40));

let saludo = () => 'Hola';
let decirSaludo = (numeroSaludos) => {
    let saludos = [];
    for (let i = 1; i <= numeroSaludos; i++) {
        let saludoDicho = saludo();
        saludos.push(saludoDicho);
    }
    return saludos;
};

// console.log(decirSaludo(10));


//_________________________Excersice II____________________________________

let newUser = () => 'A ingresado un nuevo usuario';
let getNewUsers = (numUsers) => {
    let users = [];
    for (let i = 1; i <= numUsers; i++) {
        let newUsers = newUser();
        users.push(newUser());
    }
    return users;
}
// console.log(getNewUsers(10));

//_____Practice Functions IIFE____________________________________________

// (function() {
//     console.log('Es hora de pelear');
// })();


// let numSum1 = 5;
// let numSum2 = 10;
// (function() {
//     console.log(`la suma de ${numSum1} y ${numSum2} es ${numSum1 + numSum2}`);
// })();

//______Excersise 2________________________________________

const coffeBlack = () => 'American Coffe';
const coffeWithMilk = () => 'Coffe with milk';

let prepCoffe = (typeCoffe, numCupsCoffe) => {
    let cupsCoffe = [];
    for (let i = 1; i <= numCupsCoffe; i++) {
        let cupPrepareCoffe = typeCoffe();
        cupsCoffe.push(cupPrepareCoffe);
    }
    return cupsCoffe;
};

// console.log(prepCoffe(coffeBlack, 10));
// console.log(prepCoffe(coffeWithMilk, 15));

//_____excersise 2-1_______________
let loser = () => 'You Lost';
let winner = () => 'You Winner';

let youStatus = (whatYou, numRepeat) => {
    let status = [];
    for (let i = 0; i < numRepeat; i++) {
        let youScore = whatYou();
        status.push(youScore);
    }

    return status
}

// console.log(youStatus(loser, 3));

//______Excersise 3___________

let Pestaña = function (tabs) {
    this.tabs = tabs;
};

Pestaña.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

Pestaña.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab');
    return this;
};

Pestaña.prototype.tabClose = function (index) {
    let tabsBeforeIndex = this.tabs.slice(0, index);
    let tabsAfterIndex = this.tabs.splice(index + 1);

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

    return this;
};

let emailWindow = new Pestaña(['Gmail', 'Yahoo', 'Skype', 'Outlook']);
let socialWindow = new Pestaña(['Facebook', 'Twitter', 'WhatsApp', 'Instagram']);
let videoWindow = new Pestaña(['Amazon Prime Video', 'Netflix', 'Disney Plus', 'ClaroVideo']);

// console.log(emailWindow.tabs);
// console.log(emailWindow.tabs.splice(0, 1));
// console.log(socialWindow.tabs);
// console.log(socialWindow.tabs.splice(0, 1));
// console.log(videoWindow.tabs);
// console.log(videoWindow.tabs.splice(0, 1));

let finalTabs = emailWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(socialWindow.tabClose(1).tabOpen());

// console.log(finalTabs.tabs);

let ubuntuDistro = ['Ubuntu', 'Kubuntu', 'Xubuntu', 'Lubuntu'];


function ubuntuCut(array, index) {
    let beforeCut = array.slice(0, index);

    let afterCut = array.splice(index + 1);

    array = beforeCut.concat(afterCut);

    return array;
}

// console.log(ubuntuCut(ubuntuDistro, 1));

//Excersise 4_______________________________________________
//Complete el código para el incrementador de funciones para que devuelva el valor de la variable global fixedValue aumentado en uno.

let fixedValue = 4;

function incrementador() {
    // Add your code below this line
    return fixedValue + 1;
    // Add your code above this line

};
let newValue = incrementador();
// console.log(newValue);

//___Excersise 5___________________________________________
//Escriba la función de incremento para que tome un argumento y luego aumente el valor en uno.

let dato = 4;

function incrementar(num) {
    return num + 1;
}

// console.log(incrementar(dato));
// console.log(dato);

//___Excersise 6_________________________________________
//Vuelva a escribir el código para que la lista de libros de la matriz global no cambie dentro de ninguna de las funciones. La función de agregar debería agregar el nombre de libro dado al final de una matriz. La función remove debería eliminar el bookName dado de una matriz. Ambas funciones deben devolver una matriz, y cualquier parámetro nuevo debe agregarse antes del parámetro bookName.

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(list, bookName) {
    let newList = [...list];
    newList.push(bookName);
    return newList;

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(list, bookName) {
    let newList = [...list];
    let bookName_index = newList.indexOf(bookName);
    if (bookName_index >= 0) {
        newList.splice(bookName_index, 1);
        return newList;

        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(newBookList);


//_________________Excersise 6-2_______________________________
let distroArray = ['Ubuntu', 'Kubuntu', 'Lubuntu', 'Xubuntu', 'Ubuntu Mate', 'Ubuntu Budgie'];

function addElementArray(arr) {
    let newDistro = prompt('Ingresa el nombre de la distro');
    arr.push(newDistro);

    return arr;
}

function addAndRemoveArray(arr, removeElemen, newElemen) {
    let newArray = arr;
    newArray.splice(removeElemen, 1, newElemen)

    return newArray;
}

function addAndJoinArray(arr, elemen) {
    arr.push(elemen);
    return arr;
}

function removeDistro(elemen) {
    let distro_index = distroArray.indexOf(elemen)

    let arrayLocal = distroArray;
    if (distro_index >= 0) {
        arrayLocal.splice(distro_index, 1);
    }

    return arrayLocal;
};

// console.log(removeDistro(addAndJoinArray(distroArray, 'Manjaro')), );
// console.log(removeDistro('Kubuntu'));
// console.log(addAndRemoveArray(distroArray, 0, 'Arch Linux' ));
// console.log(addAndJoinArray(distroArray, 'ArchLinux'));



//________________Excersise 6-3_______________________________

let listArticle = ['Leche', 'Pan', 'Huevo'];

function addArticulo(lista, item) { //Funcion que agrega articulos
    let newList = lista;
    newList.push(item);
    return newList;

}

function removeArticulo(lista, item) {
    let newList = lista;
    let articulo_index = newList.indexOf(item);
    if (articulo_index >= 0) {
        newList.splice(articulo_index, 1);
        return newList;
    }

    return newList;
}

// console.log([...listArticle]);

//________________Excersise 7_________________________________

var distroUbuntu = [
    {
        name: 'Ubuntu',
        derivada: 'Debian',
        ultimaVersion: '19.10',
        escritorio: 'Gnome',
        kernel: 'Linux',
    },
    {
        name: 'Kubuntu',
        derivada: 'Ubuntu',
        ultimaVersion: '19.10',
        escritorio: 'KDE Plasma',
        kernel: 'Linux',
    },
    {
        name: 'Xubuntu',
        derivada: 'Ubuntu',
        ultimaVersion: '19.10',
        escritorio: 'XFCE',
        kernel: 'Linux',
    },
    {
        name: 'Lubuntu',
        derivada: 'Ubuntu',
        ultimaVersion: '19.10',
        escritorio: 'LXDE',
        kernel: 'Linux',
    }
];

let deskpot = distroUbuntu.map((item) => `{name:${item.name},escritorio:${item.escritorio}}`);
let nombre = distroUbuntu.map(distroUbuntu => distroUbuntu.name);
// console.log(JSON.stringify(deskpot));
// console.log(distroUbuntu.map(num => num.derivada));

let nombreHijos = [
    'Pablo',
    'Lucero',
    'Thiago',
    'Andrea',
    'Yara'
];


// console.log(nombreHijos.map(name => `El nombre del miembro de la familia es ${name}`));

let nameDeskpot = distroUbuntu.map(item => ({title: item.name,
rating: item.escritorio
}));

// console.log(nameDeskpot);
// console.log(JSON.stringify(nameDeskpot));

// Excersise 8__________________________________________________

/*
Escriba su propio Array.prototype.myMap (), que debería comportarse exactamente como Array.prototype.map (). Puede usar un bucle for o el método forEach.
*/
//____________CREANDO METODOS PROPIOS____________________________

let nums182 = [10, 20, 30, 40, 50];
const ageSons = [1, 2, 4, 23, 27];
const nameFamily = ['Pablo', 'Lucero', 'Thiago', 'Yara' , 'Andrea'];

Array.prototype.myMap = function(callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
        
    }

    return newArray;
}

Array.prototype.myMapFunction = function(callback) {
    let localArray = [];

    for (let i = 0; i < this.length; i++) {
        localArray.push(callback(this[i]));
    }
    return localArray;
}
// console.log(ageSons.myMapFunction(item => item));

Array.prototype.myFilter = function(callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i])
        }
    }

    return newArray
}


const cutArray = (arr, begin, end) => {
    return arr.slice(begin, end);
}

console.log(cutArray(nameFamily, 0, 5));

//CONCATENACION DE MATRIZES______.concat()_______________________
const concatArray = (arr1, arr2) => {
    return arr1.concat(arr2);
}

console.log(concatArray(ageSons, nameFamily));
// console.log(ageSons.myFilter(item => item  % 2 === 1));
// console.log(nums182.myMap(function(item) {
//     return item * 2;
// }));

// console.log(nums182.forEach(function(num) {
//     console.log(num);
// }))


const DistroDebian = [
    {
        name: 'Debian',
        derivada: 'Debian',
        deskpot: 'None',
        version: 10
    },
    {
        name: 'MX Linux',
        derivada: 'Debian',
        deskpot: 'XFCE',
        version: 19 
    },
    {
        name: 'Kali Linux',
        derivada: 'Debian',
        deskpot: 'XFCE',
        version: 2019.4
    },
    {
        name: 'Deepin',
        derivada: 'Debian',
        deskpot: 'Deepin',
        version: 20
    },
    {
        name: 'Manjaro',
        derivada: 'Arch Linux',
        deskpot: 'XFCE',
        version: 28.4
    }
];

// console.log(DistroDebian.map(item => `${item.name} escritorio:${item.deskpot}`));
// console.log(JSON.stringify(DistroDebian.map(item => `{${item.name} escritorio:${item.deskpot}}`)));

// console.log(DistroDebian.filter(item => item.version >= 15).map(item => item.name));

// console.log(DistroDebian
//             .filter(item => parseFloat(item.version) >= 20)
//             .map(item => item.name)
//             );

// console.log(DistroDebian
//             .filter(item => item.deskpot === 'XFCE')
//             .map(item => item.name));