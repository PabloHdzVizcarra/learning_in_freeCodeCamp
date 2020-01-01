'use strict'
/*
Se le da una variable Celsius que representa una temperatura en Celsius. Use la variable Fahrenheit ya definida y asígnele la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Use el algoritmo mencionado anteriormente para ayudar a convertir la temperatura Celsius a Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(convertToF(30));

function convertCelcius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius
}

console.log(convertCelcius(86));