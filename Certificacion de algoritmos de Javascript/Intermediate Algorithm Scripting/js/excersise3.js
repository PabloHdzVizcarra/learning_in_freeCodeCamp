'use stric'

/*
Se le proporcionará una matriz inicial (el primer argumento en la función destructor), seguida de uno o más argumentos. Elimine todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.
*/

function destroyer(arr, value1, value2) {
    let count1 = 0,
        count2 = 0;
    let newArray = [];
    newArray.push(value1);
    newArray.push(value2);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value1) {
            count1++;
        }
    }
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === value2) {
            count2++;
        }
    }
    
    for (let a = 0; a < count1; a++) {
        let erase1 = arr.indexOf(value1);
        if (erase1 !== -1) {
            arr.splice(erase1, 1);
        }
    }

    for (let t = 0; t < count2; t++) {
        let erase2 = arr.indexOf(value2);
        if (erase2 !== -1) {
            arr.splice(erase2, 1);
        }
    }
    
    return arr;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));