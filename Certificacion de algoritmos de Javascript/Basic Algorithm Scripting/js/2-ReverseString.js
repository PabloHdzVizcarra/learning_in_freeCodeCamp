'use strict'

/*
Secuencia de comandos de algoritmo básico: invertir una cadena
Invierta la cadena provista.
Es posible que deba convertir la cadena en una matriz antes de poder revertirla.
Su resultado debe ser una cadena.
Recuerde usar Leer-Buscar-Preguntar si se atasca. Escribe tu propio código.
*/

function textoAlRevez(texto) {
    
    let textoReves = [];
    let prueba = texto.split("");
    let textoFinal = "";
    console.log(prueba);
    
    for (let i = prueba.length; i > 0; i--) {
        textoReves.push(prueba[i-1]);
        
    }

    textoFinal = textoReves.join('');
    return textoFinal;
}

var pc = "HP";
var laptop = "Sony Vaio";
var linux = "Arch Linux KDE";
console.log(textoAlRevez(linux));


var distro = ['Ubuntu', 'Fedora', 'ArchLinux'];
var distro2 = distro.join('');
console.log(distro2);

var deskpotKde = ["Kubuntu", "KDE Neon", 'Chakra'];
var reverseDeskpotKde = deskpotKde.reverse();
var bestKde = "";
bestKde = reverseDeskpotKde.join(' ');
console.log(reverseDeskpotKde);
console.log(bestKde);