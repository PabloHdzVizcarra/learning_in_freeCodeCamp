'use strict'

var distro = {
    name: "KDE Neon",
    base: 'Ubuntu',
    tuDistro: function () {
        return `La distribucion que tu usas es ${this.name}.`
    }
}

console.log(distro.tuDistro());

class Linux {
    constructor() {
        this.name = 'KDE Neon',
        this.base = 'Ubuntu',
        this.version = 18.04;
    }
}

let kde = new Linux();


//____________________________________________________________________

function Distro(nombre, escritorio, derivada) {
    this.name = nombre,
    this.deskpot = escritorio,
    this.derivada = derivada,
    this.so = 'Linux'
}

Distro.prototype.versionLTS = 18.04;
Distro.prototype.versionNoLTS = 19.10;
Distro.prototype = {
    constructor: Distro,
    año: 2002,
    blog: 'cuenta con blog',
    help: 'Foro'
};

//___________________________________________________________________
let Kubuntu = new Distro('Kubuntu', 'KDE Plasma', 'Ubuntu');
let xubuntu = new Distro('xubuntu', 'XFCE', 'Ubuntu');
xubuntu.versionDeskpot = 15.26;
let ubuntuBudgie = new Distro('Ubuntu', 'Budgie', 'Ubuntu');
let manjaro = {
    name: 'Manjaro',
    deskpot: 'XFCE',
    derivada: 'Arch Linux',
    so: 'Linux'
}

console.log(Kubuntu instanceof Distro);
let allPropertysXubuntu = [];
let allPropertysManjaroOwn = [];
let allPropertysManjaroPrototype = [];

for (const property in xubuntu) {
    if (xubuntu.hasOwnProperty(property)) {
        allPropertysXubuntu.push(property);
        
    }
}
console.log(allPropertysXubuntu);

for (const property in ubuntuBudgie) {
    if (ubuntuBudgie.hasOwnProperty(property)) {
        allPropertysManjaroOwn.push(property);
    } else {
        allPropertysManjaroPrototype.push(property);
    }
}
console.log(allPropertysManjaroOwn);
console.log(allPropertysManjaroPrototype);



for (const property in ubuntuBudgie) {
    if (ubuntuBudgie.hasOwnProperty(property)) {
        const hi = ubuntuBudgie[property];
        // console.log(hi);
    }
}
//_________________________________________________
function distroDerivadaUbuntu(distro) {
    if(distro.constructor === Distro) {
        return `Tu distro ${distro.name} si es derivada de ubuntu`;
    } else {
        return `Tu distro ${distro.name} no es derivada de ubuntu`;
    }
}
console.log(manjaro instanceof Distro);
console.log(distroDerivadaUbuntu(manjaro));
console.log(manjaro.constructor === Distro);
console.log(ubuntuBudgie.derivada);
console.log(xubuntu.constructor);
console.log(xubuntu.versionDeskpot);
console.log(Distro.prototype.isPrototypeOf(xubuntu));


//_______CREACION DE OBJETOS___________________________________________

function DistroLinux() {};
DistroLinux.prototype = {
    constructor: DistroLinux,
    derivada: "Ubuntu",
    version: 18.04,
    saludo: function () {
        return 'Hola desde Ubuntu';
    }
}

let ubuntuMate = Object.create(DistroLinux.prototype);
let ubuntuCinnamon = Object.create(DistroLinux.prototype);

function Deepin() {};
Deepin.prototype = Object.create(DistroLinux.prototype);
let deepin = new Deepin;

function PopOs() {};
PopOs.prototype = Object.create(DistroLinux.prototype);
let popOS = Object.create(PopOs.prototype);

//____________MODIFICACION DE LOS OBJETOS_______________________________
PopOs.prototype.constructor = PopOs;
Deepin.prototype.constructor = Deepin; //SE MODIFICA CONSTRUCTOR DE DEEPIN
Deepin.prototype.escritorio = function () {
    return 'Usa el escritorio Deepin';
}
PopOs.prototype.deskpot = 'Gnome';
popOS.versionIso = 20.02;

//___________MENSAJE EN CONSOLA__________________________________________

console.log(ubuntuMate instanceof DistroLinux);
console.log(ubuntuCinnamon instanceof DistroLinux);
console.log(ubuntuMate.saludo());
console.log(ubuntuMate.version);
console.log(deepin.derivada);
console.log(deepin.constructor);
console.log(popOS.derivada);
console.log(popOS.constructor);











//_____________________________________________________________________

function sumaDos(a, b) {
    
    if (b == 1) {return a}
    else{
        return a + sumaDos(a, b -1);
    }
}

// console.log(sumaDos(2, 5));

let perro = 'guau';
perro = 'miua';
// console.log(perro);