'use strict'
/*
La variable watchList contiene una variedad de objetos con información sobre varias películas. Use reducir para encontrar la calificación promedio de IMDB de las películas dirigidas por Christopher Nolan. Recuerde de desafíos anteriores cómo filtrar datos y mapearlos para obtener lo que necesita. Es posible que deba crear otras variables y devolver la calificación promedio de la función getRating. Tenga en cuenta que los valores de clasificación se guardan como cadenas en el objeto y deben convertirse en números antes de usarse en cualquier operación matemática.
*/

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];
  

function getRating(watchList){
    // Add your code below this line
    var averageRating;
    
    let newArray = watchList
                .filter(actor => actor.Director === 'Christopher Nolan')
                .reduce((sum, rating) => sum + parseFloat(rating.imdbRating),0);
    let lengthArray = watchList
                .filter(actor => actor.Director === 'Christopher Nolan')
                .map(item => item.imdbRating)
                .length;

    averageRating = newArray / lengthArray;

    // Add your code above this line
    return averageRating;
}

// console.log(getRating(watchList));

//____________LEARNING REDUCE()______________________________________

let weekMoney = [20, 50, 30, 10, 89, 46, 13];
let sumMoney = weekMoney.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 100)

// console.log(weekMoney.filter((valor) => valor >= 50)
//                     .reduce((acc, valor) => acc + valor));
// console.log(sumMoney);

let sumMoneyES6 = weekMoney.reduce((accu, value) => accu + value, 200);
// console.log(sumMoneyES6);

let chinaPoblation = [
  {
    country: 'China',
    pop: 1409517397
  },
  {
    country: 'India',
    pop: 1339180127
  },
  {
    country: 'USA',
    pop: 324459463
  },
  {
    country: 'Indonesia',
    pop: 263991379
  }
];

// console.log(chinaPoblation.map(item => item.pop));

// console.log(chinaPoblation.reduce((acc, val) => {
//   return val.country == 'China' ? acc : acc + val.pop;
// }, 0))

// console.log(chinaPoblation.reduce((acumulador, valor) => {
//   return acumulador + valor.pop;
// }, 0));

// console.log(chinaPoblation.reduce((accu, value) => accu + value.pop, 0));

//_______EXCERSISE ______________________________________________________
/*
Hemos definido una función llamada squareList. Debe completar el código para la función squareList usando cualquier combinación de map (), filter () y reduce () para que devuelva una nueva matriz que contenga solo el cuadrado de solo los enteros positivos (los números decimales no son enteros) cuando se le pasa una serie de números reales. Un ejemplo de una matriz que contiene solo números reales es [-3, 4.8, 5, 3, -3.2].

Nota: Su función no debe usar ningún tipo de bucles for o while o la función forEach ().
*/

const squareList = (arr) => {
  // only change code below this line
  
  return arr
          .filter((item) => Number.isInteger(item) && item > 0)
          .map((item) => item * item);
  // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//________EXCERSISE 17___________________________________________

let arrayNumbers = [10, 50, 30, 80, 100, 99, 89];
let arrayLetters = ['t', 'y', 'a', 'l', 'z', 'p'];
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
};

console.log(ascendingOrder(arrayNumbers));

function reverseLetters(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0:a < b ? 1:-1;
  });
};
debugger
function orderLetters(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0:a < b ? -1:1;
  })
}

console.log(orderLetters(arrayLetters));
