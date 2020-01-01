'use strict'

//_______________METHOD TEST_____________________________________________

// var testLetras = "En esta noche todo puede suceder";
// var testRegex = /puede/;
// console.log(testRegex.test(testLetras));



//_____________Aplicacion validacion de nombre____________________________-
var name = "pablo Pablo PAblo";
var findLetter = /pablo/gi;
var resultFindName = name.match(findLetter);

//console.log(resultFindName);

// if (resultFindName) {
//     alert("Tu nombre tiene una vocal")
// } else {
//     alert("Tu nombre no tiene vocales")
// };

//____________________________extraer elemento de un cadena________________

var dogWoman = "This dog is very small";
var findSizeDog = /dog/i;
var resultDog = dogWoman.match(findSizeDog);

//console.log(resultDog);

var arch = "Arch Arch arch ARCH";
var findArch = /arch/gi;
var readyArch = arch.match(findArch);

//onsole.log(readyArch);


//_______________________________________________________________________



let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
// console.log(huRegex.test(humStr));
// console.log(huRegex.test(hugStr));

var cantando = "La vez de las playas";
var buscarCancion = /playa./;

// console.log(buscarCancion.test(cantando));

//_______________________________________________________________________
//EXAMPLE

var exampleStr = "Let's have fun with regular expressions!";
var unRegex = /.un/; // Change this line
var result = unRegex.test(exampleStr);
// console.log(result);

//EXCERSISE

var fraseFelicidad = "La vida es felicidad y alegria debes disfrutarla vive y sientete vivo";
var searchWord = /viv./;
var ready = searchWord.test(fraseFelicidad);
// console.log(ready);

// var nameUser = prompt("Ingrese su nombre de usuario");
// var findWordName = /pablo/;
// var readyName = findWordName.test(nameUser);

// console.log(readyName);

//_______DESCARTAR LAS PALABRAS QUE TENGAN LA LETRA MENCIONADA________

var lunes = "holl";
var lunes2 = "hill";
var lunes3 = "hell";
var lunes4 = "hull";

var hllRegex = /h[oie]ll/g;
//console.log(lunes.match(hllRegex));
//console.log(lunes2.match(hllRegex));
//console.log(lunes3.match(hllRegex));
//console.log(lunes4.match(hllRegex));

var dog = "ant";
var dog1 = "ont";
var dog2 = "int";
var dog3 = "ent";
var dog4 = "unt";

var ntRegex = /[aeo]nt/g;
//console.log(dog.match(ntRegex));
//console.log(dog1.match(ntRegex));
//console.log(dog2.match(ntRegex));
//console.log(dog3.match(ntRegex));
//console.log(dog4.match(ntRegex));


// var nombreUsuario = prompt("Ingresa tu nombre");
// function findLetter (name){
//     let userName = name;
//     var pblRegex= /p[aeiou]bl[aeiou]/g;
//     return console.log(userName.match(pblRegex));

// };

// console.log(findLetter(nombreUsuario));

// var nameArray = [];

// for (let i = 0; i < 3; i++) {
//     nameArray.push(prompt("ingresa el nombre"));
// }

// console.log(nameArray);


// for (let i = 0; i < nameArray.length; i++) {
//     let pblRegex = /p[aiu]bl[aiu]/g;
//     console.log(nameArray[i].match(pblRegex));
// }

//___________________________________________________________________
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result23 = quoteSample.match(vowelRegex); // Change this line

//console.log(result23);


var pet = "bat"
var pet1 = "bbt"
var pet2 = "bet"
var pet3 = "bgt"

var alphabeth = /b[a-z]t/g;
//console.log(pet3.match(alphabeth));
//console.log(pet.match(alphabeth));
//console.log(pet1.match(alphabeth));
//console.log(pet2.match(alphabeth));


//_______________________________________________________letters and numbers
var laVez = "Fueron muchas las ganadas 4 o 5 pero esa vez de las playas";
var findLaVez = /[a-j-0-5]/gi;

//console.log(laVez.match(findLaVez));

// ASI SE ELIMINAN CARACTERES Y SE OBTIENEN DATOS
var cancionHola = "Afuera";
var cancionRegex = /[^aeiou]/gi;
//console.log(cancionHola.match(cancionRegex));

var milk = "riiiquisimaa";
var milkRegex = /i+/gi;
//console.log(milk.match(milkRegex));

var unitWords = (letters) => {
    let word = letters;
    let wordRegex = /e+/gi;

    return console.log(`tu palabra tiene las siguientes palabras repetidas: ${word.match(wordRegex)}`);
};

// console.log(unitWords("greenDaaay"));

//_______________________________________________________________________
/*
Arregle la expresión regular /<.*>/ para devolver la etiqueta HTML <h1> y no el texto "<h1> Se acerca el invierno </h1>". Recuerda el comodín. en una expresión regular coincide con cualquier caracter.
*/
var textTest = "<h1>Winter is coming</h1>";
var textRegex = /<[h][^a-z]>/g;
//var textRegex = /<[h][^a-z]>/g;
console.log(textTest.match(textRegex));

var yaraText = "<h2>HOla mundo <h2>"
var yaraTexRegex = /<h2>?/;

var answer = yaraText.match(yaraText);
// console.log(answer);

//_______________________________________________________________

var verso = "Holaaaa lalalalala";
var versoRegex = /a+[^b-z]/gi;

// console.log(verso.match(versoRegex));

//____________________________________________________________________
var linuxMint = "Pablo instala linux mint";
var linuxMintRegex = /^Pablo/gi;
var resultBoolean = linuxMintRegex.test(linuxMint);
var resultString = linuxMint.match(linuxMintRegex)


// console.log(resultBoolean);
//_________________BUSCANDO STRINGS EN EL FINAL DE LA CADENA____________
var linuxZorin = "Zorin Os una distro excelente";
var linuxZorinEnds = /excelente$/gi;
var NotLinuxZorinEnds = "Zorin Os una distro excelente aunque tiene fallos"
var searchEndsLinuxZorin = linuxZorinEnds.test(NotLinuxZorinEnds);
// console.log(searchEndsLinuxZorin);

//CARACTERES ABREVIADOS___________________

var shortLong = /[A-Za-z0-9_]+/;  //Esto igualara a todas las letras
var shortHand = /\w/g; //Esto igualra a todas las letras
var LessLetters = /\W/g; //esto igualra a todo lo que no sea letras
var shortHandNumbers = /\d/g; //Esto igualara a todos los numeros
var notNumbers = /\D/g; //Esto no igualara numeros


var numeros = "182";
var nombreNumeros = "Lo que importa_es";
var perro = "La firu es un perro pequeño";
var strangerCaracters = "%&$|/()la vida que viene";
var peliculaAvengers = "Se estrena en el 2019";

var test = peliculaAvengers.match(notNumbers);

// console.log(test);



//_______________BUSQUEDA ESPACIOS EN BLANCO______________________________

var kde = "KDE neon la mejor distro Linux";
var spaceRegex = /\s/g;
var kdeSpace = kde.match(spaceRegex);

console.log(kdeSpace);

//______________BUSQUEDA DE NO ESPACIOS EN BLANCO______________________

var linuxMint = "Linux mint una gran distro para la mayoria";
var nonSpaceRegex = /\S/g;
var linuxMintNonSpaceRegex = linuxMint.match(nonSpaceRegex);

console.log(linuxMintNonSpaceRegex);

//_____ESPECIFIQUE EL NUMERO INFERIOR Y SUPERIOR______________________

var letter6 = "peeeo";
var letter5 = "peeeeeo";
var letter10 = "la vidaaaaa es bella";
var multipleDog = /pe{2,3}o/;//el indice de inicio es el primer numero, y el segundo numero es la cantidad de letras de ese tipo.
var multipleLive = /la\svida{2,5}\ses\sbella/;
var testDog = multipleDog.test(letter6);
var testLive = multipleLive.test(letter10);

// console.log(testLive);

//____SOLO ESPECIFICA EL NUMERO INFERIOR______________________________

var textH3 = "alohha";
var textH100 = "alo" + "h".repeat(100) + "a";
var testH = /aloh{3,}a/;
var resultH = testH.test(textH100);

// console.log(resultH);

//___ESPECIFIQUE EL NUMERO EXACTO DE REPETICIONES______________________

var textY4 = "hoyyyye";
var textY = /hoy{4}e/;
var resultY = textY.test(textY4);

// console.log(resultY);

//___PUEDE QUE EXISTA O NO EXISTA LA BUSQUEDA__________________________

var nameMx = "pablo";
var nameUsa = "paublo";
var nameRegex = /pau?blo/;
var resultName = nameRegex.test(nameMx);

// console.log(resultName);


//___EJERCICIO 2 VALIDOR DE PASSWORD_______________________________
/*
             || Example ||

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true


let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

Use lookaheads en pwRegex para hacer coincidir las contraseñas que tengan más de 5 caracteres, no comiencen con números y tengan dos dígitos consecutivos.
*/

var sampleWord = "astronaut45";
var pwRegex = /(?=^\D)(?=\w{6,}\d+)/;
var pwRegex2 = /^(?=\w{6})(?=\D+\d{2})/;
var result182 = pwRegex.test(sampleWord);

console.log(result182);

//_________USANDO "O" EN EXPRESIONES REGULARES________________________

var name1 = "Pablo Hernandez";
var name2 = "Lucero Hernandez";
var name3 = "Thiago Hernandez";
var NameRegex = /(Pablo|Lucero).*Hernandez/g;
var testName = NameRegex.test(name2);

console.log(testName);

//___DUPLICANDO LAS SALIDAS__________________________________________

var namePablo = "pablo pablo pablo";
var namePabloRegex = /^(\w+)\s\1\s\1$/g;
var matchNamePablo = namePablo.match(namePabloRegex);
var testNamePablo = namePabloRegex.test(namePablo);

console.log(testNamePablo);
console.log(matchNamePablo);

//___BUSCANDO Y REEMPLAZANDO PALABRAS________________________________

var kdeNeon = "KDE Neon es una muy buena distro";
var kdeRegex = /distro/;

var kdeRepair = kdeNeon.replace(kdeRegex, "derivada de ubuntu");
var kdeTest = kdeRegex.test(kdeNeon);
var kdeMatch = kdeNeon.match(kdeRegex);
var kdeOther = "KDE Neon".replace(/(\w+)\s(\w+)/, '$2 $1');


console.log(kdeOther);

//____________________________________________________________________

var manjaro = "Manjaro el mejor ArchLinux";
var manjaroRegex = /Manjaro\sel\smejor\s\ArchLinux/g;

var manjaroBest = manjaro.match(manjaroRegex);

console.log(manjaroBest);

//___________________________________________________________________
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s$/g;
let resultHello = hello.replace(wsRegex, "");

var fedora = "123 Fedora Linux 123";
var fedoraRegex = /^\d+|\d+$/g;
var resultFedora = fedora.replace(fedoraRegex, "Linux");

var openSuse = "Camaleon Linux una buena distro lenta";
var openSuseRegex = /^\w+|\w+$/g;
var resultOpenSuse = openSuse.replace(openSuseRegex, "");

console.log(resultOpenSuse);

