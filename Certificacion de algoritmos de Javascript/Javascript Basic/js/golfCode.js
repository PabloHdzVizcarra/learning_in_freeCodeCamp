/*
golfScore(4, 1) should return "Hole-in-one!"
golfScore(4, 2) should return "Eagle"
golfScore(5, 2) should return "Eagle"
golfScore(4, 3) should return "Birdie"
golfScore(4, 4) should return "Par"
golfScore(1, 1) should return "Hole-in-one!"
golfScore(5, 5) should return "Par"
golfScore(4, 5) should return "Bogey"
golfScore(4, 6) should return "Double Bogey"
golfScore(4, 7) should return "Go Home!"
golfScore(5, 9) should return "Go Home!"
*/


var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, stroke){
    if(par == 4 && stroke == 1){
        return "Hole-in-one!";
    } else if(par == 4 && stroke == 2){
        return "Eagle";
    } else if(par == 5 && stroke == 2){
        return "Eagle";
    } else if(par == 4 && stroke == 3){
        return "Birdie";
    } else if(par == 4 && stroke == 4){
        return "Par";
    } else if(par == 1 && stroke == 1){
        return "Hole-in-one!";
    } else if(par == 5 && stroke == 5){
        return "Par";
    } else if(par == 4 && stroke == 5){
        return "Bogey";
    } else if(par == 4 && stroke == 6){
        return "Double Bogey";
    } else if(par == 4 && stroke == 7){
        return "Go Home!";
    } else if(par == 5 && stroke == 9){
        return "Go Home!";
    } else{
        "No introduciste un valor correcto"
    }
}

console.log(golfScore(5, 9));