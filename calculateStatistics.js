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


var averageGameTime = function averageGameTime() { //output average time of a game
    return gameTime/totalGames;
};

console.log("Average Game Time"); //for debugging
console.debug(averageGameTime()); //for debugging


var averageTimeWhenWinning = function averageTimeWhenWinning() { //output average time of game when winning
    return timeWhenWinning/totalWins;
};

console.log("Average Time When Winning"); //for debugging
console.debug(averageTimeWhenWinning()); //for debugging

var averageTimeWhenLosing = function averageTimeWhenLosing() { //output average time of game when losing
    return timeWhenLosing/totalLosses;
};

console.log("Average time When Losing"); //for debugging
console.debug(averageTimeWhenLosing()); //for debugging
