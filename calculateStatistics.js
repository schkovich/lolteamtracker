/**
 * Created by Bluehoke on 19/10/2016.
 */
//start static data
var gameTime = 45122;
var totalGames = 10;
var timeWhenWinning = 21320;
var timeWhenLosing = 23802;
var totalWins = 6;
var totalLosses = 4;
//end static data


function averageGameTime() { //output average time of a game
    return gameTime/totalGames;
}

console.log("Average Game Time"); //for debugging
console.debug(averageGameTime()); //for debugging


function averageTimeWhenWinning() { //output average time of game when winning
    return timeWhenWinning/totalWins;
}

console.log("Average Time When Winning"); //for debugging
console.debug(averageTimeWhenWinning()); //for debugging

function averageTimeWhenLosing() { //output average time of game when losing
    return timeWhenLosing/totalLosses;
}

console.log("Average time When Losing"); //for debugging
console.debug(averageTimeWhenLosing()); //for debugging

function normalize(time) { //normalize data to minute:second format
    var timeMinutes = time / 60;
    var minutes = parseInt(timeMinutes, 10);
    var seconds = parseInt((timeMinutes - minutes)*10,10);
    return { //returns object with minutes and seconds as properties
        "minutes": minutes,
        "seconds": seconds
    }
}

var normalizedAverageGameTime = normalize(averageGameTime()); //set to normalized avg game time
var normalizedAverageTimeWhenWinning = normalize(averageTimeWhenWinning()); //set to normalized avg game time when win
var normalizedAverageTimeWhenLosing = normalize(averageTimeWhenLosing()); //set to normalized avg game time when loss

console.debug(normalizedAverageGameTime);
console.debug(normalizedAverageTimeWhenWinning);
console.debug(normalizedAverageTimeWhenLosing);
