'use strict'

// Structured Object

var tv = {
    "marca": "RCA",
    "color": "black",
    "channels": 9,
    "precio": 3200,
    "boton": ["on", "off", "volum"]
};


var colorTv = tv.color;


var childs = {
    "first": "Thiago",
    "second": "Yara",
    "Three": "Andrea",
    "totalBoys": 3
};

var numberChild = childs["Three"];

//_______________________________________________

var pets = {
    "dog": "firu",
    "cat": "tom",
    "fish": "glup"
};


var myFish = "fish";
var allFish = pets [myFish];





var perros = {
    Fido: "Mutt", 
    Hunter: "Doberman", 
    Snoopie: "Beagle"
};

var myDog = "Hunter";
var myBreed = perros [myDog];



//_______________________________________________

var someObj = {
      propName: "John"
    };

function propPrefix (str) {
      var s = "prop";
      return s + str;
}

var someProp = propPrefix ("Name");


var phone = {
    "nameLucero": "Motorola",
    "namePablo": "Huawei",
    "nameChilds": "Lg"
};

function addNamePhone (name){
    var p = "name";
    return p + name;
}



var result = addNamePhone("Pablo");


// console.log(phone[result]);

// MODIFICANDO PROPIEDADES EN UN OBJETO

var childs = {
    "first": "Thiago",
    "second": "Yara",
    "Three": "Andrea",
    "totalBoys": 3
};

childs.first = "Lucero";




//AGREGANDO NUEVAS PROPIEDAS A UN OBJETO


var soudsPet = {
    "dog": "guau",
    "cat": "meow"
};

soudsPet["fish"] = "glup";

soudsPet.bird = "arrow";

delete soudsPet.cat;



//___________________________________

function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha" : "Adams", 
      "bravo" : "Boston",
      "charlie" : "Chicago",
      "delta" : "Denver",
      "echo" : "Easy",
      "foxtrot" : "Frank"
    };
    result = lookup[val];
       
    return result;
}
  
// console.log(phoneticLookup("alpha"));

var night = {
    "stars": "light",
    "moon": "dark"
};

var proof = night.hasOwnProperty("sun")
  

/*
Modifique la función checkObj para probar myObj para checkProp. Si se encuentra la propiedad, devuelva el valor de esa propiedad. Si no, devuelve "No encontrado".
*/


var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};


function checkObj(checkProp) {

    var test = myObj.hasOwnProperty(checkProp);

    if(test){
        
        return myObj[checkProp];
    }else{
        console.log(test);
        return "Change Me!";
    }

};



//EXCERISE __________________________________
/*
Agregue un nuevo álbum a la matriz myMusic. Agregue cadenas de artista y título, número de release_year y una variedad de formatos de cadenas.
*/

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
    
];

myMusic.push({
    "artist": "Pablo Hernandez",
    "titile": "Men of moon",
    "release_year": 2019,
    "formats": [
        "Mp3",
        "Vga",
        "WMA"
    ]
});



var TV = {
    "sony": {
        "pantalla": {
            "lcd": "buena energia",
            "4k": "la mejor resolucion"
        },
    },
    "color": "black"
};

TV.sony["pantalla"].lcd



var pc = {
    "pcDeskpot": {
        "Screen": {
            "pantalla": "black",
            "height": "tall"
        },
        "teclado": {
            "alambrico": "on",
            "inalambrico": "off"
        },
    },
    "lapTop":{
        "lapTopOne": {
            "caracteristicas": {
                "windows": 10,
                "sound": "good",
                "teclado": "good",
                "battery": "height"
            },
            "hardware": {
                "ram":{
                    "ddr3": "yes",
                    "ddr4": "no"
                },
                "disk":{
                    "width":{
                        "250G":"yes",
                        "500G":"yes",
                        "1Tb": "none"
                    }
                }
            }
        }
    }
};

var dayli = [
    {
        "dayTime": "night",
        status: [
            "estrellado",
            "nublado",
            "fresco"
        ]
    },
    {
        "dayTime": "dia",
        "estado": {
            "soleado": [
                {"caloroso": "hot"},
                "nublado",
                "muchoCalor"
            ]
        
        }
    }
];



var numList = [];
var i = 0;

while (i < 50){
    numList.push(i);
    i++;
};

console.log(numList);