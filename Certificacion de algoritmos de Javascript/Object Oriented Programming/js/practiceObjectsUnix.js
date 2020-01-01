'use strict'

//______CREACION DE PROTOTYPOS_______________________________________________
function Unix() {};
Unix.prototype = {
    constructor: Unix,
    system: 'Unix',
    creator: 'Ken Thompson'
};

function Linux() {};
Linux.prototype = Object.create(Unix.prototype);
Linux.prototype.creator = 'Linus Torvalds';
Linux.prototype.kernel = 'Linux';

function Ubuntu() {};
Ubuntu.prototype = Object.create(Linux.prototype);
Ubuntu.prototype.creator = 'Canonical Ld';
Ubuntu.prototype.versionLts = 18.04;
Ubuntu.prototype.deskpot = 'Gnome';

function Fedora() {};
Fedora.prototype = Object.create(Linux.prototype);
Fedora.prototype.creator = 'Red Hat';
Fedora.prototype.deskpot = 'Gnome';

function ArchLinux() {};
ArchLinux.prototype = Object.create(Linux.prototype);
ArchLinux.prototype.creator = 'Judd Vinet';
ArchLinux.prototype.deskpot = 'none';
ArchLinux.prototype.version = 'Rolling Release';


//______________CREACION DE OBJETOS_______________________________________
let ubuntu = new Ubuntu();
let fedora = new Fedora();
let archLinux = new ArchLinux();

//________MENSAJES EN CONSOLA_____________________________________________ 
console.log(ubuntu.deskpot);
console.log(fedora.deskpot);
console.log(archLinux.version);

//_____________CREACION DE OBJETOS 2______________________________________

let perro = {
    name: 'Firu',
    age: 1
};

let gato = {
    name: 'Tom',
    age: 2
};


//_____________CREACION DE MIXINS_________________________________________
let mascotMixin = function(obj) {
    obj.mascot = function() {
        return "Esta es una mascota";
    }
}

mascotMixin(perro);

//_____________MENSAJES CONSOLA 2_________________________________________
console.log(perro.mascot());
console.log(perro.name);
perro.name = 'Lucky';
console.log(perro.name);


//_________________CREACION DE OBJETO 3-----------------------------------
function Boy() {
    let childrenPlay = 'playCars';
    this.getChildrenPlay = function() {
    return childrenPlay;
    };
}

let boy = new Boy();
console.log(boy.getChildrenPlay());


//------------FUNCION QUE SE INVOCA DE INMEDIATO (IIFE)--------------------
(function () {
    console.log('Lo que hemos vivido');
})();

(function saysName() {
    console.log('Pablo Hernandez');
})();

//___________CREANDO MODULOS Y MIXINS_____________________________________

let manjaro = {
    derivada: 'ArchLinux'
};

let macOs = {
    derivada: 'Unix'
};

let unixModule = (function() {
    return {
        kernelMixin: function(obj) {
            obj.kernel = function() {
                console.log('Este SO usa el kernel Linux');
            };
        },
        unixMixin: function(obj) {
            obj.unix = function() {
                console.log('Este SO usa el kernel Unix');
            };
        }
    }
})();

unixModule.kernelMixin(manjaro);
manjaro.kernel();
unixModule.unixMixin(macOs);
macOs.unix();

//________________________________________________________________________

let thiago = {
    name: 'Thiago Fernando'
};
let yara = {
    name: 'Yara Maria'
};
let andrea = {
    name: 'Andrea Nicole'
}

let lastNameModule = (function() {
    return {
        firstLastName: function(obj) {
            obj.lastName = function() {
                console.log('Hernandez')
            };
        },
        secondLastName: function(obj) {
            obj.secondName = function() {
                console.log('Facio')
            };
        }
    }

})();

lastNameModule.firstLastName(thiago);
thiago.lastName();

lastNameModule.secondLastName(yara);
yara.secondName();