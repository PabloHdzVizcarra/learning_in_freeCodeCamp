'use strict'

var children = [];

function childs (num) {
    
    if (num >= 3){
        let thiago = "Yo soy thiago";
        children.push(thiago);
        childs(num -1);
    }else if (num >= 2){
        let yara = "Yo soy Yara";
        children.push(yara);
        childs(num -1);
    }else if (num >= 1){
        let andrea = "Yo soy andrea";
        children.push(andrea);
        childs(num -1);
    }
    return children;
}

console.log(childs(parseInt(prompt("Ingresa tu numero"))));