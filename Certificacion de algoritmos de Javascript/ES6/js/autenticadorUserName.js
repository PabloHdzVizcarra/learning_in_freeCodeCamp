'use strict'



let username = "JackOfAllTrades";
let userCheck = /change/;
let result = userCheck.test(username);

var userNamePablo = "PabloHernandez182";
var userChecador = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
var resultado = userChecador.test(userNamePablo);

console.log(resultado);

